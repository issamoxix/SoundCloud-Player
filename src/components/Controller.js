import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { useSelector } from "react-redux";
import {
  selectSongName,
  selectSongPlay,
  selectVol,
} from "../features/player/playerSlice";
import db from "../utils/firebase";
import { selectuser } from "../features/user/userSlice";
const Controller = () => {
  const SongName = useSelector(selectSongName);
  const PlayingState = useSelector(selectSongPlay);
  const user = useSelector(selectuser);
  const Vol = useSelector(selectVol);

  return (
    <div className="ControllerContainer">
      <div className="SongTitle">
        <h3>{!SongName ? "Nothing is playing ..." : SongName} </h3>
      </div>
      <div className="Timeline">
        <div className="CurrentTime"></div>
      </div>
      <div
        onClick={() => {
          db.collection("users").doc(user.email).update({
            playing: !PlayingState,
          });
        }}
        className="ControllerButtons"
      >
        {!PlayingState ? (
          <PlayArrowIcon fontSize="large" />
        ) : (
          <PauseIcon fontSize="large" />
        )}
      </div>
      <div className="VolumeControlle">
        <div
          className="Volume"
          onClick={() =>
            Vol !== 100 &&
            db
              .collection("users")
              .doc(user.email)
              .update({
                vol: Vol + 2,
              })
          }
        >
          <VolumeUpIcon />
        </div>
        <div
          className="Volume"
          onClick={() =>
            Vol !== 0 &&
            db
              .collection("users")
              .doc(user.email)
              .update({
                vol: Vol - 2,
              })
          }
        >
          <VolumeDownIcon />
        </div>
        Volume : {Vol}
      </div>
    </div>
  );
};

export default Controller;
