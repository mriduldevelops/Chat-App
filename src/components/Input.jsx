import React from 'react'

function Input() {
  return (
    <>
      <div className="input">
        <input type="text" placeholder='Type Something...'/>
        <div className="send">
        <i class="fa-regular fa-image"></i>
          <input type="file" style={{display:"none"}} id='file'/>
          <label htmlFor="file">
          <i class="fa-solid fa-paperclip"></i>
          </label>
          <button><i class="fa-regular fa-paper-plane"></i></button>
        </div>
      </div>
    </>
  )
}

export default Input
