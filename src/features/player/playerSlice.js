import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    songId: null,
  },
  reducers: {
    addSong: (state, action) => {
      state.songId = action.payload.songId;
    },
  },
});

export const { addSong } = playerSlice.actions;

export const selectSongId = (state) => state.player.songId;

export default playerSlice.reducer;
