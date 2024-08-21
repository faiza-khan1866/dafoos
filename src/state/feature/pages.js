import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./actions";
import moment from "moment";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    list: [],
    isLoaded: false,
    lastFetch: null,
  },
  reducers: {
    pagesLoadStarted: (pages, action) => {
      pages.isLoaded = true;
      pages.lastFetch = Date.now();
    },
    pagesReceived: (pages, action) => {
      pages.list = action.payload.data;
      pages.isLoaded = false;
    },

    pageFound: (pages, action) => {
      console.log(pages);
    },
    pagesLoadFailed: (pages, action) => {
      pages.isLoaded = false;
    },
  },
});

export const { pagesLoadStarted, pagesReceived, pagesLoadFailed } =
  pageSlice.actions;
export default pageSlice.reducer;

export const loadpages = () => (dispatch, getState) => {
  const { lastFetch } = getState().page;

  const diffInTime = moment().diff(moment(lastFetch), "minutes");

  if (diffInTime < 10) return;
  dispatch(
    apiCallBegan({
      url: "/pages",
      onStart: pagesLoadStarted.type,
      onSuccess: pagesReceived.type,
      onError: pagesLoadFailed.type,
    })
  );
};

export const findpage = (data, slug) => {
  return data.find((section) => section.slug === slug);
};
