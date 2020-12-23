import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "./components/Login";
import Search from "./components/Search";
import SongPlayer from "./components/SongPlayer";
import db, { auth } from "./utils/firebase";
import { addUser, logout, selectuser } from "./features/user/userSlice";
import Navbar from "./components/Navbar";
import { addSong } from "./features/player/playerSlice";

function App() {
  const [check, setCheck] = useState(false);
  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.email)
        .onSnapshot((snapshot) => {
          let data = snapshot.data();
          dispatch(
            addSong({
              songId: data.id,
              songName: data.name,
              playing: data.playing,
            })
          );
        });
    }
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //if the user loged in
        dispatch(
          addUser({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
        db.collection("users")
          .doc(authUser.email)
          .get("user")
          .then((doc) => setCheck(doc.exists));

        if (!check) {
          db.collection("users")
            .doc(authUser.email)
            .set({
              user: authUser.email,
              playing: false,
              name: null,
              type: null,
              id: null,
            })
            .catch(function (error) {
              console.error("Error writing document: ", error);
            });
        }
      } else {
        // the user loged out or there is no user
        dispatch(logout());
      }
    });
  }, [dispatch, check]);

  return (
    <div className="App">
      {user ? (
        <>
          <Navbar />
          <SongPlayer />
          <Search />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
