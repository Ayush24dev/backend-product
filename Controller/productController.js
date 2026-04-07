const Products = require("../models/products.model");

const ProductData = async (req, res) => {
    const {product_name, product_description, product_price, product_category} = req.body 

    
    try {

        if (!req.file) {
            return res.status(400).json({ 
                message: "No file uploaded. Please ensure you are sending a file with the key used in your middleware." 
            });
        }

        const productdetails = new Products({
            product_name,
            product_description,
            product_price,
            product_category ,
            product_image: req.file.path,
             publicId: req.file.filename,
             resourceType: "image",
            mimetype: req.file.mimetype,
        })

        const savedProduct = await productdetails.save()
        console.log(savedProduct)
        res.status(201).json({message:"products saved successfully", savedProduct})
    }

    catch(err) {
       console.log(err) 
       res.status(500).json({message:"Internal server error"})
    }

}

module.exports = ProductData;