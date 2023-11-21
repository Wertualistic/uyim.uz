import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter d-flex align-items-center justify-content-between">
      <form className="d-flex align-items-center gap-5">
        <input type="text" className="form-control" placeholder="Narxdan" />
        <input type="text" className="form-control" placeholder="Narxgacha" />
        <input type="text" className="form-control" placeholder="Maydondan" />
        <input type="text" className="form-control" placeholder="Maydongacha" />
      </form>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Barcha xonalar
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Filter;
