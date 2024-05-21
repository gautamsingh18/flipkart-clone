import Product from "../Models/ProductSchema.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ id: id });
    if (!product) {
      return res.status(404).json({ msg: "No product found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
