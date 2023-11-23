import React from "react";
import { uyimlogo } from "../../assets";
import "./HonadonAdd.css";

const HonadonAdd = () => {
  return (
    <div className="container">
      <div className="honadonAdd d-flex w-100 align-items-center justify-content-center">
        <img src={uyimlogo} alt="" />
      </div>
      <form className="d-flex flex-column gap-4 mt-5">
        <input type="file" name="image" className="form-control" />
        <select name="select" id="" className="form-select">
            <option>Uy 1</option>
        </select>
        <input
          type="text"
          name="complex"
          className="form-control"
          placeholder="Maydoni"
        />
        <input
          type="text"
          name="floor"
          className="form-control"
          placeholder="Qavati"
        />
        <input
          type="text"
          name="date"
          className="form-control"
          placeholder="Narxi"
        />
        <input
          type="text"
          name="date"
          className="form-control"
          placeholder="Raqami"
        />
        <button className="btn btn-success" type="submit">
          Uy qo'shish
        </button>
      </form>
    </div>
  );
};

export default HonadonAdd;
