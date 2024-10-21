const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/get-all-products", productController.getAllProduct);
router.post("/create-new-product", productController.createNewProduct);
router.get("/get-single-product/:id", productController.getSingleProduct);
router.put("/update-product/:id", productController.updateProduct);
router.delete("/delete-product/:id", productController.deleteProduct);

module.exports = router;
