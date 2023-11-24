import React from 'react'
import "../Register/Register.css"
import {uyimlogo, uyimbg } from "../../assets"

function Register() {
  return (
<div className='container'>
    <div className='register--container'>
        <div className='register--header'>
            <div className='uyim--logo'>
                <img src={uyimlogo}/>
            </div>
            <div className='uyim--bg'>
                <img src={uyimbg}/>
            </div>
        </div>

    
        <div className='register--main'>
            <div className='register--left--section'>
              <ul className='register--ul'>
              <li><input className='register--email' placeholder='Email'/></li>
              <li><input className='register--name' placeholder='Korxona nomi'/></li>
              </ul>
            </div>

            <div className='register--right--section'>
              <ul className='register--ul'>
                <li><input className='register--password' placeholder='Parol'/></li>
                <li><button className='register--btn'>Tizimga kirish</button></li>
              </ul>
            </div>
        </div>
        

    </div>
</div>
  )
}

export default Register