import React from "react";
import "./Header.css";
import { uylar } from "../../../../assets";

const Header = () => {
  return (
    <div className="header container">
      <img src={uylar} alt="" />
    </div>
  );
};

export default Header;
