import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../features/player/playerSlice";
import appSlice from "../features/appSlice";
import userSlice from "../features/user/userSlice";

export default configureStore({
  reducer: {
    player: playerReducer,
    app: appSlice,
    user: userSlice,
  },
});
