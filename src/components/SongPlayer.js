import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSongId, selectSongPlay } from "../features/player/playerSlice";
import { selectuser } from "../features/user/userSlice";
import db from "../utils/firebase";
import Go from "./Go";

const SongPlayer = () => {
  const [track_id, setTrack] = useState(0); //626460957
  const [autop, setAuto] = useState(true); //false it mean it's paused
  const src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track_id}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
  const Playsong = useSelector(selectSongPlay);
  const SongId = useSelector(selectSongId);
  const user = useSelector(selectuser);
  const StartPlaying = (n) => {
    var p = Go();

    if (n === 1) {
      p.play();
    } else {
      p.pause();
    }
  };
  useEffect(() => {
    SongId && setTrack(SongId);
    setAuto(Playsong);
    if (track_id !== 0) {
      if (Playsong) {
        StartPlaying(1);
      } else {
        StartPlaying(0);
      }
    }
  }, [SongId, Playsong]);
  return (
    <div className="SongPlayer">
      {track_id === 0 ? (
        <h2 style={{ color: "gray", fontWeight: 500 }}>Select a song</h2>
      ) : (
        <>
          <iframe
            id="myFrame"
            title="player"
            width="100%"
            height="366"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src={src}
          ></iframe>

          <button
            className="PlayButton"
            onClick={() => {
              var p = Go();
              {
                autop ? p.play() : p.pause();
              }

              db.collection("users")
                .doc(user.email)
                .update({ playing: !autop });
            }}
          >
            {autop ? "Pause" : "Play"}{" "}
          </button>
          <div className="PlayerInfo">
            <h3>
              Track Id <span> {track_id}</span>{" "}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default SongPlayer;
