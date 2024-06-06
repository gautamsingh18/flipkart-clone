import axios from "axios";
import * as actionTypes from "../constants/productConstants";

const url = "https://flipkart-clone-api.onrender.com";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/products`);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAILURE,
      payload: error.response,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST });
    const { data } = await axios.get(`${url}/products/${id}`);
    dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_DETAILS_FAILURE,
      payload: error.message,
    });
  }
};
