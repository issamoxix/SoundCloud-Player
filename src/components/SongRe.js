import React from "react";
import { useDispatch } from "react-redux";
import { addSong } from "../features/player/playerSlice";

const SongRe = ({ title, imagesrc, id }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="songreq"
      style={
        imagesrc && {
          backgroundImage: `URL(
          "${imagesrc.split("-large.jpg")[0]}-t500x500.jpg"
        )`,
        }
      }
    >
      <h4 style={{ textAlign: "center" }}>{title.substring(0, 20)}</h4>
      <button
        onClick={() => {
          dispatch(
            addSong({
              songId: id,
            })
          );
        }}
      >
        Play
      </button>
    </div>
  );
};

export default SongRe;
