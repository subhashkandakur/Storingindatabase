const Product = require('../models/product');


exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req.body.Name)
    product.save();
}


exports.getProduct = (req,res,next)=>{
    const product =Product.fetchALL();
}