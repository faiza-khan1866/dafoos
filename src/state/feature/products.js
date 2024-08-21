import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./actions";
import moment from "moment";

const productSlice = createSlice({
  name: "product",
  initialState: {
    list: [],
    isLoaded: false,
    lastFetch: null,
  },
  reducers: {
    productsLoadStarted: (products, action) => {
      products.isLoaded = true;
    },
    productsReceived: (products, action) => {
      products.list = action.payload.data;
      products.isLoaded = false;
      products.lastFetch = Date.now();
    },

    ProductFound: (products, action) => {
      console.log(products);
    },
    productsLoadFailed: (products, action) => {
      products.isLoaded = false;
    },
  },
});

export const { productsLoadStarted, productsReceived, productsLoadFailed } =
  productSlice.actions;
export default productSlice.reducer;

export const loadproducts = () => (dispatch, getState) => {
  const { lastFetch } = getState().product;

  const diffInTime = moment().diff(moment(lastFetch), "minutes");

  if (diffInTime < 10) return;
  dispatch(
    apiCallBegan({
      url: "/products",
      onStart: productsLoadStarted.type,
      onSuccess: productsReceived.type,
      onError: productsLoadFailed.type,
    })
  );
};

export const findProduct = (data, id) => {
  console.log("reducer", data.product);
  //return data.list.map(product => product.slug === id);
};
