import React from 'react'

export default function () {
  return (
    <div className="navbar_container">
        <img className='logo' src='https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80'/>
            <button className='nav-btn one'>Categories</button>
            <input className='nav-search' placeholder='Search'></input>
            <button className='nav-btn two'>My Account</button>
        </div>
  )
}
