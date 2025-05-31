const formidable = require("formidable");
const { responseReturn } = require("../../utilites/response.js");
const cloudinary = require("cloudinary").v2;
const productModel = require("../../models/productModel");

// Cloudinary config - best to move this out of the method
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
  secure: true,
});

class productCotroller {
  add_product = async (req, res) => {
    const { id } = req;
    const form = formidable({ multiples: true });

    form.parse(req, async (err, field, files) => {
      try {
        let {
          name,
          category,
          description,
          couponcode,
          stock,
          baseprice,
          discountpercentage,
          //shopName,
          brand,
        } = field;

        name = name.trim();
        const slug = name.split(" ").join("-");

        let { images } = files;
        if (!images) {
          return responseReturn(res, 400, { error: "Images are required." });
        }

        const imageArray = Array.isArray(images) ? images : [images];
        let allImageUrl = [];

        for (let i = 0; i < imageArray.length; i++) {
          const filePath = imageArray[i].filepath;
          console.log("📤 Uploading image to Cloudinary:", filePath);

          const result = await cloudinary.uploader.upload(filePath, {
            folder: "products",
          });

          allImageUrl.push(result.secure_url); // prefer secure_url
        }

        const product = await productModel.create({
          sellerId: id,
          name,
          slug,
          shopName,
          category: category.trim(),
          description: description.trim(),
          couponcode: parseInt(couponcode),
          images: allImageUrl,
          stock: parseInt(stock),
          baseprice: parseInt(baseprice),
          discountpercentage: parseInt(discountpercentage),
          brand: brand.trim(),
          rating: 0,
        });

        console.log("✅ Product created:", product);

        responseReturn(res, 201, {
          message: "Product Added Successfully",
          product,
        });
      } catch (error) {
        console.error("❌ Error uploading product:", error);
        responseReturn(res, 500, { error: error.message });
      }
    });
  };
  // end method

  products_get = async (req, res) => {
    const { page, searchValue, perPage } = req.query;
    const { id } = req;

    const skipPage = parseInt(perPage) * (parseInt(page) - 1);

    try {
      if (searchValue) {
        const products = await productModel
          .find({
            $text: { $search: searchValue },
            sellerId: id,
          })
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });
        const totalProduct = await productModel
          .find({
            $text: { $search: searchValue },
            sellerId: id,
          })
          .countDocuments();
        responseReturn(res, 200, { products, totalProduct });
      } else {
        const products = await productModel
          .find({ sellerId: id })
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });
        const totalProduct = await productModel
          .find({ sellerId: id })
          .countDocuments();
        responseReturn(res, 200, { products, totalProduct });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  // end method

  product_get = async (req, res) => {
    const { productId } = req.params;

    try {
      const product = await productModel.findById(productId);
      responseReturn(res, 200, { product });
      console.log(product);
    } catch (error) {
      console.log(error.message);
    }
  };

  product_update = async (req, res) => {
    let {
    name,
    category,
    description,
    couponcode,
    stock,
    baseprice,
    discountpercentage,
    productId,
    brand,
  } = req.body;

  name = name.trim();
  const slug = name.split(" ").join("-");

  try {
    await productModel.findByIdAndUpdate(productId, {
      name,
      slug,
      //shopName,
      category,
      description,
      couponcode,
      stock,
      baseprice,
      discountpercentage,
      brand,
      productId,
    });
    const product = await productModel.findById(productId);
    responseReturn(res, 200, {
      product,
      message: "Product Updated Successfully",
      product,
    });
  } catch (error) {
    responseReturn(res, 500, { error: error.message });
  }
};

  product_image_update = async (req, res) => {
    const form = formidable({ multiples: true });

    form.parse(req, async(err, field, files) => {
      const {oldImage, productId} = field;
      const {newImage} = files;
      if (err){
        responseReturn(res, 400, { error: err.message})
      } else{
        try {
          cloudinary.config({
            cloud_name: process.env.cloud_name,
            api_key: process.env.api_key,
            api_secret: process.env.api_secret,
            secure: true,
          })

          const result = await cloudinary.uploader.upload(newImage.filepath,
          {folder: 'products'})
          if (result) {
            let {images} = await productModel.findById(productId);
            const index = images.findIndex(img => img === oldImage)
            images[index] = result.url;
            await productModel.findByIdAndUpdate(productId,{images});
            const product = await productModel.findById(productId);

            responseReturn(res,200, {
              product, message: "Product Image Updated Successfully"
            })
          } else {
            responseReturn(res,404, {
               error: "Image Upload Failed"
            })
          }
        } catch (error) {
          responseReturn(res,404, {
            error: error.message
         })
        }
      }
    })
  }
}



module.exports = new productCotroller();

// const formidable = require("formidable");
// const {responseReturn} = require("../../utilites/response.js")
// const cloudinary = require('cloudinary').v2
// const productModel = require('../../models/productModel')

// cloudinary.config({
//     cloud_name: process.env.cloud_name,
//     api_key : process.env.api_key,
//     api_secret: process.env.api_secret,
//     secure: true,
// });
// class productCotroller {
//     add_product  = async (req,res)=>{
//         const {id} = req;
//         const form = formidable({ multiples: true})

//         form.parse(req, async(err, field, files)=>{
//             let{name, category,description,couponcode, stock,
//                 baseprice, discountpercentage,shopName , brand} = field
//                 const {images} = files;
//                 name = name.trim()
//                 const slug = name.split(' ').join('-')
//                 //console.log(files)

//                 try {
//                     let allImageUrl = [];
//                     for (let i = 0; i < images.length; i++) {
//                         const result = await cloudinary.uploader.upload(images[i].filepath,{folder:'products'});
//                         allImageUrl = [...allImageUrl, result.url]
//                     }

//                     const product =  await productModel.create({
//                         sellerId: id,
//                         name,
//                         slug,
//                         shopName,
//                         category : category.trim(),
//                         description : description.trim(),
//                         couponcode: parseInt(couponcode),
//                         images: allImageUrl,
//                         stock: parseInt(stock),
//                         baseprice: parseInt(baseprice),
//                         discountpercentage: parseInt(discountpercentage),
//                         brand: brand.trim(),
//                         rating: 0
//                     })
//                     responseReturn(res, 201, {
//                         message: 'Product Added Successfully',
//                         product });
//                 } catch (error) {
//                     console.error("❌ Error uploading product:", error);

//                     responseReturn(res, 500, { error: error.message });
//                 }

//         })
//     }

//     //end method
// }
// module.exports = new productCotroller()
