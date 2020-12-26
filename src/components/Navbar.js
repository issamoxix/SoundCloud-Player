import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectuser } from "../features/user/userSlice";
import { auth } from "../utils/firebase";
import { setPage } from "../features/appSlice";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Avatar } from "@material-ui/core";
const Navbar = () => {
  const User = useSelector(selectuser);
  const dispatch = useDispatch();
  return (
    <div className="Navbar">
      <ExitToAppIcon
        className="Disco"
        fontSize="large"
        onClick={() => auth.signOut()}
      />

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
      <Avatar src={User.photo} />
    </div>
  );
};

export default Navbar;
