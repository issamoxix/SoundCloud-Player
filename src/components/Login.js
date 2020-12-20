import React from "react";
import { auth, provider } from "../utils/firebase";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="LoginContainer">
      <img
        alt="SoundCloud"
        src="https://musically.com/wp-content/uploads/2018/09/soundcloud-logo-1500x500.png"
      />
      <button className="LoginButton" onClick={() => signIn()}>
        Login
      </button>
    </div>
  );
};

export default Login;
