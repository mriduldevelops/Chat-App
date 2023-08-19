import React from 'react'
import Messages from './Messages';
import Input from './Input';
function Chat() {
  return (
    <>
    <div className="chat">
      <div className="chatInfo">
        <p>Arun</p>
        <div className="icon">
        <i class="fa-solid fa-video"></i>
        <i class="fa-solid fa-user-plus"></i>
        <i class="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
    </>
  )
}

export default Chat
