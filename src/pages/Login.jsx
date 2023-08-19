import React from 'react'

function Login() {
  return (
    <>
      <div className="form-container">
        <div className="form-wrapper">
            <span className="logo">Chat App</span>
            <span className="title">Login</span>
            <form>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <button className='primary-button'>Login</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
      </div>
    </>
  )
}

export default Login
