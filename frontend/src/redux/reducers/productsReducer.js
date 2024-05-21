import * as actionTypes from "../constants/productConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return { products: action.payload };
    case actionTypes.GET_PRODUCTS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_DETAILS_REQUEST:
      return { loading: true };
    case actionTypes.GET_PRODUCTS_DETAILS_SUCCESS:
      return { product: action.payload, loading: false };
    case actionTypes.GET_PRODUCTS_DETAILS_FAIL:
      return { error: action.payload, loading: false };
    case actionTypes.GET_PRODUCTS_RESET:
      return { product: {}, loading: false };
    default:
      return state;
  }
};
