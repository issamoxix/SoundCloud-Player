import React from "react";
import { useSelector } from "react-redux";
import { selectuser } from "../features/user/userSlice";
import db from "../utils/firebase";

const SongRe = ({ title, imagesrc, id }) => {
  const user = useSelector(selectuser);
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
          // dispatch(
          //   addSong({
          //     songId: id,
          //   })
          // );
          db.collection("users").doc(user.email).set({
            id: id,
            name: title,
            playing: true,
          });
        }}
      >
        Play
      </button>
    </div>
  );
};

export default SongRe;
