import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./actions";
import moment from "moment";

const solutionSlice = createSlice({
  name: "solution",
  initialState: {
    list: [],
    isLoaded: false,
    lastFetch: null,
  },
  reducers: {
    solutionsLoadStarted: (solutions, action) => {
      solutions.isLoaded = true;
    },
    solutionsReceived: (solutions, action) => {
      solutions.list = action.payload.data;
      solutions.isLoaded = false;
      solutions.lastFetch = Date.now();
    },
    solutionsLoadFailed: (solutions, action) => {
      solutions.isLoaded = false;
    },
  },
});

export const { solutionsLoadStarted, solutionsReceived, solutionsLoadFailed } =
  solutionSlice.actions;
export default solutionSlice.reducer;

export const loadSolutions = () => (dispatch, getState) => {
  const { lastFetch } = getState().solution;

  const diffInTime = moment().diff(moment(lastFetch), "minutes");

  if (diffInTime < 10) return;
  dispatch(
    apiCallBegan({
      url: "/solutions",
      onStart: solutionsLoadStarted.type,
      onSuccess: solutionsReceived.type,
      onError: solutionsLoadFailed.type,
    })
  );
};
