import { products } from "./constants/data.js";
import Product from "./Models/ProductSchema.js";

const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log("default data inserted");
  } catch (error) {
    console.log("error while inserting default data", error.message);
  }
};

export default DefaultData;
