import React from 'react'
import mridul from '../img/mridul.png';
function Navbar() {
  return (
    <>
    <div className="navbar">
      <div className="logo">Chat App</div>
      <div className="userInfo">
        <img src={mridul} alt="" />
        <span>Mridul Sharma</span>
        <button>Logout</button>
      </div>
    </div>
      
    </>
  )
}

export default Navbar
