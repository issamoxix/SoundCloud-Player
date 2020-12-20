import React from "react";
import { useSelector } from "react-redux";
import { selectuser } from "../features/user/userSlice";
import { auth } from "../utils/firebase";

const Navbar = () => {
  const User = useSelector(selectuser);
  return (
    <div className="Navbar">
      <button className="Disco" onClick={() => auth.signOut()}>
        Disconnect
      </button>
      <h4>{User.displayName}</h4>
    </div>
  );
};

export default Navbar;
