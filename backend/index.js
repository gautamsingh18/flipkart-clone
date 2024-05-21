//imports
import express from "express";
import connectToMongo from "./db.js";
import defaultData from "./default.js";
import "dotenv/config";
import Router from "./Routes/router.js";
import cors from "cors";
import bodyParser from "body-parser";

//initializations
const app = express();

//connecting to atlas
connectToMongo();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

defaultData();
