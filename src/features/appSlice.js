import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    search: null,
    query: null,
    page: false, //false=player, true=controller
  },
  reducers: {
    setSearchState: (state, action) => {
      state.search = action.payload.search;
      state.query = action.payload.query;
    },
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
  },
});

export const { setSearchState, setPage } = appSlice.actions;

export const selectSearch = (state) => state.app.search;
export const selectQuery = (state) => state.app.query;
export const selectPage = (state) => state.app.page;
export default appSlice.reducer;
