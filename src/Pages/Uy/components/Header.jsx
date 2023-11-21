import React from 'react'
import uy from "../../../assets/uy.png"
import "../Uy.css"

function Header() {
  return (
    <div className='header'>
    <div>
        <img className='yellow_img' src={uy} alt="" />
    </div>
    <div className='yellow_block'>
        <h1>TK Mirzo Ulug’bek, 1-uy</h1>
        <p>Narxlar 338 000 000 so’mdan boshlanadi</p>

    </div>
    </div>
  )
}

export default Header