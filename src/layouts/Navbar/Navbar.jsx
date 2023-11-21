import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { menu } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="navbar container d-flex align-items-center justify-content-between">
      <div className="burger" onClick={() => setActive(!active)}>
        <img src={menu} alt="" />
      </div>
      <ul className="menu d-flex align-items-center gap-5">
        <li>
          <Link to="/" className="active">
            Bosh sahifa
          </Link>
        </li>
        <li>
          <Link to="/">Biz haqimizda</Link>
        </li>
        <li>
          <Link to="/">Biz bilan boglaning</Link>
        </li>
      </ul>
      <div className={`mobile_menu ${active ? "active" : ""}`} onClick={() => setActive(false)}>
        <ul className={`gap-5 mobile_menu_ul ${active ? "active" : ""}`}>
          <li>
            <Link to="/" className="active">
              Bosh sahifa
            </Link>
          </li>
          <li>
            <Link to="/">Biz haqimizda</Link>
          </li>
          <li>
            <Link to="/">Biz bilan boglaning</Link>
          </li>
          <li>
            <Link to="/">Tizim haqida</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="phone">+998 90 000-00-00</p>
      </div>
    </div>
  );
};

export default Navbar;
