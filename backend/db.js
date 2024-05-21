import mongoose from "mongoose";

const connectToMongo = async (username, password) => {
  const connectionUri = `mongodb+srv://gautam18:gautam18@ecom.7vwnmdf.mongodb.net/?retryWrites=true&w=majority&appName=ecom`;

  try {
    await mongoose.connect(connectionUri, {});
    console.log("connected to mongo");
  } catch (e) {
    console.log(e.message);
  }
};

export default connectToMongo;
