import React from 'react'
import mridul from '../img/mridul.png';
function Chats() {
  return (
    <>
    <div className="chats">
    <div className="userChat">
          <img src={mridul} alt="" />
          <div className="userChatInfo">
            <span>Mridul Sharma</span>
            <p>Hello</p>
          </div>
        </div>
    </div>
      
    </>
  )
}

export default Chats
