import React from "react";
import room from "../../../assets/room.png";

function Category() {
  return (
    <div className="category_all">
      <table>
        <tr>
          <th>Reja</th>
          <th>Xonalar</th>
          <th>Maydon</th>
          <th>Qavat</th>
          <th>Sana</th>
          <th>Narx</th>
        </tr>
        <tr>
          <td>
            <img src={room} alt="" />
            #119
          </td>
          <td>2 xona</td>
          <td>65.99 m/kv</td>
          <td>3/21</td>
          <td>12 / 2025</td>
          <td>789 000 000</td>
        </tr>
      </table>
      <div class="d-grid gap-2 ">
      <button type="button" class="btn btn-primary btn-lg">Yana yuklash</button>
</div>
    </div>
  );
}

export default Category;
