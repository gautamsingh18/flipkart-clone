import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});
const Product = mongoose.model("Product", productSchema);
export default Product;
