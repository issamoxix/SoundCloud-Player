import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    songId: null,
    songName: null,
    playing: false,
    vol: 50,
  },
  reducers: {
    addSong: (state, action) => {
      state.songId = action.payload.songId;
      state.songName = action.payload.songName;
      state.playing = action.payload.playing;
      state.vol = action.payload.vol;
    },
    setVol: (state, action) => {
      action.setVolume(state.vol);
    },
  },
});

export const { addSong, setVol } = playerSlice.actions;

export const selectSongId = (state) => state.player.songId;
export const selectSongPlay = (state) => state.player.playing;
export const selectSongName = (state) => state.player.songName;
export const selectVol = (state) => state.player.vol;

export default playerSlice.reducer;
