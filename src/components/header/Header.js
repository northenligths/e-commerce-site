import React from "react";
// import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9E3tKDk0sz2KCHW7m9r909IaMFHYFzYZsw&usqp=CAU"
        alt=""
      />
      <div className="header__search">
        <input className="header_searchInput" type="text" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo"> & Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}
