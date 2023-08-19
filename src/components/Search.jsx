import React from 'react'
import mridul from '../img/mridul.png';
function Search() {
  return (
    <>
      <div className="search">
        <div className="searchForm">
        <input type="text" placeholder='Serach User'/>
        </div>
        <div className="userChat">
          <img src={mridul} alt="" />
          <div className="userChatInfo">
            <span>Mridul Sharma</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
