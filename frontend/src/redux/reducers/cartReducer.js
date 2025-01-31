import * as actionTypes from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingInfo: {} },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // eslint-disable-next-line no-case-declarations
      const item = action.payload;
      // eslint-disable-next-line no-case-declarations
      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );

      if (isItemExist) {
        // if item exists add count to the same item or else in other item
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          // if item isnt there in cart adding that item to cart
          cartItems: [...state.cartItems, item],
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };

    case actionTypes.SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };

    default:
      return state;
  }
};
