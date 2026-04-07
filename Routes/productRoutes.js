const express = require("express")

const router = express.Router()

const uploadImage = require("../Middleware/upload")

const ProductData = require("../Controller/productController")

router.post("/", (req, res) => {
  uploadImage.single("product_image")(req, res, function (err) {
    
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "Upload error",
        error: err
      });
    }

    // Call your controller AFTER upload succeeds
    ProductData(req, res);
  });
});

module.exports = router