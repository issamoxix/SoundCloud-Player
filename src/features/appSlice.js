import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    search: null,
    query: null,
  },
  reducers: {
    setSearchState: (state, action) => {
      state.search = action.payload.search;
      state.query = action.payload.query;
    },
  },
});

export const { setSearchState } = appSlice.actions;

export const selectSearch = (state) => state.app.search;
export const selectQuery = (state) => state.app.query;

export default appSlice.reducer;
