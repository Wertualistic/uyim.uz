import React from 'react';
import "../Honadon/Honadon.css";
import homeimg from "../../assets";
import vector from "../../assets";

function Honadon() {
  return (
      <div className='honadon--container'>
      <div className='honadon'>
           <div className='honadon--main'>
                <div className='honadon--box1'>
                   <img src={homeimg}/>
                </div>
                <div className='honadon--box2'>
                    <div className='box--section1'>
                        <ul>
                            <li>TK</li>
                            <li>Qavati</li>
                            <li>Maydoni</li>
                            <li>Tayyor bo'lishi</li>
                            <li>Narxi</li>
                            <li>Raqami</li>
                        </ul>
                    </div>
                    <div className='box--section2'>
                        <ul>
                            <li>Mirzo ulug'bek</li>
                            <li>3/11</li>
                            <li>192.72m<sup>2</sup></li>
                            <li>12.29</li>
                            <li>789 389 200 so’m</li>
                            <li>#19</li>
                        </ul>
                    </div>
                </div>
           </div>

           <div className='honadon--bottom'>
              <img src={vector}/>
              <button>
             
              Ortga qaytish</button>
           </div>
       </div>
    </div>
  )
}

export default Honadon
