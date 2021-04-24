import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_REQUEST_SUCCESS,
  PRODUCT_LIST_REQUEST_FAIL,
} from "../constants/ProductConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_REQUEST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
