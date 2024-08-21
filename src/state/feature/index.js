import { combineReducers } from "@reduxjs/toolkit";
import blogSlice from "./blog";
import solutionSlice from "./solutions";
import productSlice from "./products";
import pageSlice from "./pages";
import sectionSlice from "./sections";

const reducers = combineReducers({
  blog: blogSlice,
  solution: solutionSlice,
  product: productSlice,
  page: pageSlice,
  section: sectionSlice,
});

export default reducers;
