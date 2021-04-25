import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Apps, ArrowDropDown, Notifications } from "@material-ui/icons";

import { logout, selectUser } from "../../features/user/userSlice";

import "./styles.css";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <header>
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          className="logo"
          src="https://1000logos.net/wp-content/uploads/2018/05/Gmail-logo.png"
          alt="logo"
        />
        <span className="logo-name">
          Avi<span className="bold">Mail</span>
        </span>
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search Mail" type="text" />
        <ArrowDropDown className="MuiSvgIcon-root" />
      </div>
      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar onClick={signOut} src={user.photoUrl} />
        {console.log(user.photoUrl)}
      </div>
    </header>
  );
};

export default Header;
