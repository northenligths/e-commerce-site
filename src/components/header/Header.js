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
      <div className="header__search"></div>
    </div>
  );
}
