import {
  GET_PRODUCT,
  GET_PRODUCTS,
  ADD_PRODUCT_IN_CART,
  GET_PRODUCT_IN_CART, DELETE_PRODUCT_IN_CART, UPDATE_PRODUCT_IN_CART,
} from "../actions/productAction";

const initialState = {
  products: [],
  product: {},
  productsToCart: [],
  pagination: {},
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PRODUCT_IN_CART:
      const updatedData = state.productsToCart.map(item => {
        if (item.id === action.payload.id) {
          return action.payload
        }
        return item
      });
      return {
        ...state,
        productsToCart: updatedData
      };
    case DELETE_PRODUCT_IN_CART:
      const newData = state.productsToCart.filter(item => item.id !== action.payload);
      return {
        ...state,
        productsToCart: newData
      };
    case GET_PRODUCT_IN_CART:
      return {
        ...state,
        productsToCart: action.payload
      };
    case ADD_PRODUCT_IN_CART:
      const data = [action.payload, ...state.productsToCart];
      return {
        ...state,
        productsToCart: data
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        pagination: action.payload.pagination,
      };
    default:
      return state
  }
}

export default productReducer