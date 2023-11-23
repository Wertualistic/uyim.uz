import React from "react";
import { uyimlogo } from "../../assets";
import "./UyAdd.css";

const UyAdd = () => {
  return (
    <div className="container">
      <div className="uyAdd d-flex w-100 align-items-center justify-content-center">
        <img src={uyimlogo} alt="" />
      </div>
      <form className="d-flex flex-column gap-4 mt-5">
        <input type="file" name="image" className="form-control" placeholder="Uy rasmini tanlang" />
        <input type="text" name="name" className="form-control" placeholder="Uy nomi" />
        <input type="text" name="complex" className="form-control" placeholder="Turar joy kompleksi" />
        <input type="text" name="floor" className="form-control" placeholder="Qavatlar soni" />
        <input type="text" name="date" className="form-control" placeholder="Topshirish vaqti"  />
        <button className="btn btn-success" type="submit">Uy qo'shish</button>
      </form>
    </div>
  );
};

export default UyAdd;
