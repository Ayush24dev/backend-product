const multer = require("multer")

const {CloudinaryStorage} = require("multer-storage-cloudinary")

const cloudinary = require('../Config/cloudinary')

// image uploading code 

const imageStorage = new CloudinaryStorage({
    cloudinary,
      params:{
        folder: "products_images",
        resource_type: "image",
        allowed_formats:["jpeg","jpg", "png","webp","jfif"]
      }
})

const uploadImage = multer({
    storage: imageStorage,
    limits: {fileSize: 5 * 1024 * 1024 } // 5mb ke upar aap images upload nhi kr skte
})

module.exports = uploadImage