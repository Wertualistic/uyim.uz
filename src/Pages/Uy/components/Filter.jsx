import React from 'react'
import "../Uy.css"

function Filter() {
  return (
    <div className='filter_all'>
      <div>
        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder='Narxdan' />
        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder='Narxgacha' />
        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder='Maydondan' />
        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder='Maydongacha' />



      </div>
    </div>
  );
}


export default Filter