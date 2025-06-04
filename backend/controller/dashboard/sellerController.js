const formidable = require("formidable");
const {responseReturn} = require("../../utilites/response.js")
const cloudinary = require('cloudinary').v2
const categoryModel = require('../../models/categoryModel');
const sellerModel = require("../../models/sellerModel.js");

class sellerControllers{

    request_seller_get = async(req,res) => {
        const {page,searchValue,perPage} = req.query;
        const skipPage  = parseInt(page) * (parseInt(page)-1)

        try {
            if (searchValue) {
                
            } else {
                const sellers = await sellerModel.find({status: "pending"}).
                skip(skipPage).limit(perPage).sort({createdAt: -1});
                const totalSeller = await sellerModel.find({status: "pending"}).countDocuments();
                responseReturn(res, 200, {sellers,totalSeller})
            }
        } catch (error) {
            console.log("Search Error:", error.message);
            responseReturn(res, 500, { error: "Something went wrong" });
        }
    }
}
    
module.exports = new sellerControllers()