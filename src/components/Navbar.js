import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectuser } from "../features/user/userSlice";
import { auth } from "../utils/firebase";
import { setPage } from "../features/appSlice";
const Navbar = () => {
  const User = useSelector(selectuser);
  const dispatch = useDispatch();
  return (
    <div className="Navbar">
      <button className="Disco" onClick={() => auth.signOut()}>
        Disconnect
      </button>
      <button
        className="NavItem"
        onClick={() =>
          dispatch(
            setPage({
              page: true,
            })
          )
        }
      >
        Controller
      </button>
      <button
        className="NavItem"
        onClick={() =>
          dispatch(
            setPage({
              page: false,
            })
          )
        }
      >
        Player
      </button>
      <h4>{User.displayName}</h4>
    </div>
  );
};

export default Navbar;
