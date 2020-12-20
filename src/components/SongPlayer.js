import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSongId } from "../features/player/playerSlice";

const SongPlayer = () => {
  const [track_id, setTrack] = useState(0); //626460957
  const [autop, setAuto] = useState(false); //false it mean it's paused

  const src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track_id}&color=%23ff5500&auto_play=${autop}&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
  const SongId = useSelector(selectSongId);
  useEffect(() => {
    SongId && setTrack(SongId);
  }, [SongId]);
  return (
    <>
      {track_id === 0 ? (
        "Select A song"
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
          <button className="PlayButton" onClick={() => setAuto(!autop)}>
            {autop ? "Pause" : "Play"}{" "}
          </button>
          <div className="PlayerInfo">
            <h3>
              Track Id <span> {track_id}</span>{" "}
            </h3>
          </div>
        </>
      )}
    </>
  );
};

export default SongPlayer;
