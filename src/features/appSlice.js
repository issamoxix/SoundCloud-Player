import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    search: null,
  },
  reducers: {
    setSearchState: (state, action) => {
      state.search = action.payload.search;
    },
  },
});

export const { setSearchState } = appSlice.actions;

export const selectSearch = (state) => state.app.search;

export default appSlice.reducer;
