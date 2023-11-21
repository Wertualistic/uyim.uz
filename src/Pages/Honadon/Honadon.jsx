import React from "react";
import { homeimg, vector } from "../../assets";
import "../Honadon/Honadon.css";
import { Link } from "react-router-dom";

function Honadon() {
  return (
    <div className="honadon-- container">
      <div className="honadon--main">
        <div className="honadon--box1">
          <img src={homeimg} />
        </div>

        <div className="honadon--box2">
          <ul class="list-group list-group-flush">
            <li class="list-group-item li"></li>
            <li class="list-group-item li">
              <p>TK</p>
              <span>Mirzo Ulugbek</span>
            </li>
            <li class="list-group-item li">
              <p>Qavati</p>
              <span>3/11</span>
            </li>
            <li class="list-group-item li">
              <p>Maydoni</p>
              <span>
                192.72m<sup>2</sup>
              </span>
            </li>
            <li class="list-group-item li">
              <p>Tayyor bo'lishi</p>
              <span>12.29</span>
            </li>
            <li class="list-group-item li">
              <p>Narxi</p>
              <span>789 389 200 so’m</span>
            </li>

            <li class="list-group-item li">
              <p>Raqami</p>
              <span>#19</span>
            </li>
            <li class="list-group-item li"></li>
          </ul>
        </div>
      </div>

      <div className="honadon--button">
        <button type="button" class="btn btn-warning btn-sm honadon--btn">
          <Link to="/">
            <img src={vector} />
            Ortga qaytish
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Honadon;
