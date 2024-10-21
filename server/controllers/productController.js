const Product = require("../models/Product");

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNewProduct = async (req, res) => {
  const { name, description, price, category, stock, image } = req.body;
  try {
    const product = await Product.create({
      name,
      description,
      price,
      category,
      stock,
      image,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product)
      return res.status(404).json({ message: "Employee not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllProduct,
  createNewProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
