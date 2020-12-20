import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    songId: null,
    songName: null,
    playing: false,
  },
  reducers: {
    addSong: (state, action) => {
      state.songId = action.payload.songId;
      state.songName = action.payload.songName;
      state.playing = action.payload.playing;
    },
  },
});

export const { addSong } = playerSlice.actions;

export const selectSongId = (state) => state.player.songId;
export const selectSongPlay = (state) => state.player.playing;

export default playerSlice.reducer;
