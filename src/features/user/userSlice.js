import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    controller: false, //who controlles the music (remote)
    player: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setController: (state) => {
      state.controller = !state.controller;
    },
    setPlayer: (state) => {
      state.player = !state.player;
    },
  },
});

export const { addUser, logout, setController, setPlayer } = userSlice.actions;

export const selectuser = (state) => state.user.user;
export const selectController = (state) => state.user.controller;
export const selectPlayer = (state) => state.user.player;

export default userSlice.reducer;
