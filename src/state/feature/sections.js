import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./actions";
import moment from "moment";

const sectionSlice = createSlice({
  name: "section",
  initialState: {
    list: [],
    isLoaded: false,
    lastFetch: null,
  },
  reducers: {
    sectionsLoadStarted: (sections, action) => {
      sections.isLoaded = true;
      sections.lastFetch = Date.now();
    },
    sectionsReceived: (sections, action) => {
      sections.list = action.payload.data;
      sections.isLoaded = false;
    },

    sectionFound: (sections, action) => {
      // action.list =
    },
    sectionsLoadFailed: (sections, action) => {
      sections.isLoaded = false;
    },
  },
});

export const { sectionsLoadStarted, sectionsReceived, sectionsLoadFailed } =
  sectionSlice.actions;
export default sectionSlice.reducer;

export const loadsections = () => (dispatch, getState) => {
  const { lastFetch } = getState().section;

  const diffInTime = moment().diff(moment(lastFetch), "minutes");

  if (diffInTime < 10) return;
  dispatch(
    apiCallBegan({
      url: "/sections",
      onStart: sectionsLoadStarted.type,
      onSuccess: sectionsReceived.type,
      onError: sectionsLoadFailed.type,
    })
  );
};

export const findsection = (data, slug) => {
  return data.find((section) => section.slug === slug);
};
