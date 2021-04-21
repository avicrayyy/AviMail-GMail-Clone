import React from "react";
import { Avatar, IconButton } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Apps, ArrowDropDown, Notifications } from "@material-ui/icons";

import "./styles.css";

const Header = () => {
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
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
