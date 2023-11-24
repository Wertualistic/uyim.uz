import React from 'react'
import "../Login/Login.css"
import {uyimlogo, uyimbg } from "../../assets"

function Login() {
  return (
    <div className='container'>
       <div className='login--container'>
           <div className='login--header'>
               <div className='uyim--logo'>
                  <img src={uyimlogo}/>
               </div>
               <div className='uyim--bg'>
                   <img src={uyimbg}/>
               </div>
           </div>

           <div className='login--main'>
              <ul className='login--li'>
                 <li><input className='email' type='email' placeholder='Email'/></li>
                 <li><input className="password" type='password' placeholder='Parol'/></li>
                 <li><button className='login--btn'>Tizimga kirish</button></li>
              </ul>
           </div>
       </div>  
    </div>
  )
}

export default Login
