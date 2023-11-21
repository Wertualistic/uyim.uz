import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <Link to="/">Bosh sahifa</Link>
        </li>
        <li>
          <Link to="/">Biz haqimizda</Link>
        </li>
        <li>
          <Link to="/">Biz bilan bog’laning</Link>
        </li>
        <li>
          <Link to="/">Tizim haqida</Link>
        </li>
      </ul>
      <center>
        <p>© 2021 - uyim.uz</p>
      </center>
    </div>
  );
};

export default Footer;
