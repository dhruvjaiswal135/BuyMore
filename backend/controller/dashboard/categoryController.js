const formidable = require("formidable");
const {responseReturn} = require("../../utilites/response.js")
const cloudinary = require('cloudinary').v2
const categoryModel = require('../../models/categoryModel')
class categoryControllers{
    add_category = async (req, res) =>{
        const form = formidable()
        form.parse(req, async(err, fields, files)=>{
            if (err) {
                responseReturn(res,404,{error: 'something went wrong'})
            } else {
                let {name} = fields
                let {image} = files
                name = name.trim()
                const slug = name.split(' ').join('-')

                cloudinary.config({
                    cloud_name: process.env.cloud_name,
                    api_key : process.env.api_key,
                    api_secret: process.env.api_secret,
                    secure: true,
                })

                try {
                const result = await cloudinary.uploader.upload(image.filepath,
                    {folder:'categories'})
                    if (result) {
                        const category = await categoryModel.create({
                            name,
                            slug,
                            image: result.url
                        })
                        responseReturn(res,201,{category, message: 'Category Added Succesfully'})
                    } else {
                        responseReturn(res,404,{error: 'Image Upload Failed'})
                    }
                } catch (error) {
                    responseReturn(res,404,{error: 'Internal server error'})
                }
                const result = await cloudinary.uploader.upload(image.filepath,
                    {folder:'categories'})
            }
        })
        
    }
    get_category = async (req, res) =>{
        const {page, searchValue, perPage} = req.query
        const skipPage = parseInt(perPage)* (parseInt(page)-1)
        try {
            if (searchValue && page && perPage) {
                const categories = await categoryModel.find({
                    $text : {$search:searchValue}
                }).skip(skipPage).limit(perPage).sort({createdAt : -1})
                const totalCategory = await categoryModel.find({
                    $text : {$search:searchValue}
                }).countDocuments()
                responseReturn(res,200,{categories,totalCategory})
            } 
            else if (searchValue==='' && page && perPage) {
                const categories = await categoryModel.find({
                }).skip(skipPage).limit(perPage).sort({createdAt : -1})
                const totalCategory = await categoryModel.find({
                }).countDocuments()
                responseReturn(res,200,{categories,totalCategory})
            }
            else {
                const categories = await categoryModel.find({
                }).sort({createdAt : -1})
                const totalCategory = await categoryModel.find({
                }).countDocuments()
                responseReturn(res,200,{categories,totalCategory})
            }
            
        } catch (error) {
            console.log(error.message)
        }
        
    }
}
module.exports = new categoryControllers()