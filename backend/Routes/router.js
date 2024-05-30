import express from "express";
import { userSignup, userLogin } from "../controller/user-controller.js";
import {
  getProducts,
  getProductById,
} from "../controller/product-controller.js";
import {
  addPaymentGateway,
  paymentResponse,
} from "../controller/payment-controller.js";

const Router = express.Router();

Router.post("/signup", userSignup);
Router.post("/login", userLogin);
Router.get("/products", getProducts);
Router.get("/products/:id", getProductById);
Router.post("/payment", addPaymentGateway);
Router.post("/callback", paymentResponse);

export default Router;
