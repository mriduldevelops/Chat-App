import React from 'react'
import mridul from '../img/mridul.png';
function Message() {
  return (
    <>
    <div className="message owner">
      <div className="messageInfo">
        <img src={mridul} alt="" />
        <span>just now</span>
      </div>
        <div className="messageContent">
          <p>hello i am mridul. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nobis, ad cumque modi velit error aspernatur illo voluptas non sed? Veniam voluptatibus vel inventore possimus saepe quam iure odit quod!</p>
          <img src={mridul} alt="" />
        </div>
      </div>      
    </>
  )
}

export default Message
