import dotenv from "dotenv";

const { default: mongoose } = require("mongoose");
dotenv.config();

const connectionUri = `mongodb+srv://<${process.env.USERNAME}>:<${process.env.PASSWORD}>@ecom.7vwnmdf.mongodb.net/?retryWrites=true&w=majority&appName=ecom`;

const connectToMongo = async((connectionUri) => {
  try {
    mongoose.connect(connectionUri, {
      useUnifiedTopologu: true,
      useNewUrlParser: true,
    });
    console.log("connected to mongo");
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = connectToMongo;
