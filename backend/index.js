//imports
import express from "express";
import connectToMongo from "./db.js";

//initializations
connectToMongo();
dotenv.config();

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
