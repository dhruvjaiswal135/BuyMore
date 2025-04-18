const { Schema, model } = require("mongoose");
const productSchema = new Schema({
  sellerId: {           //to identify the seller
    type: Schema.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
 },
 brand: {
    type: String,
    required: true,
 },
  baseprice: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  discountpercentage: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  shopName: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  rating: {
    type: Number,
    required: 0,
  },
  
}, {timestamps: true});

productSchema.index({
    name:'text',
    category:'text',
    brand:'text',
    description:'text',
},{
    weights: {
        name: 5,
        category: 4,
        brand: 3,
        description: 2,
    }
})
module.exports = model("products", productSchema);
