import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../features/player/playerSlice";
import appSlice from "../features/appSlice";

export default configureStore({
  reducer: {
    player: playerReducer,
    app: appSlice,
  },
});
