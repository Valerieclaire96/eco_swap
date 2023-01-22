import React from 'react'

export default function () {
  return (
    <div className='footer'>
        <div>
            <img  className='footer-logo' src='https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80'/>
        </div>
        <ul className='footer-text'>
            <h4>About Us</h4>
            <li>About Eco Swap</li>
            <li>News</li>
            <li>Our Selection Process</li>
        </ul>
        <ul>
            <h4 className='footer-text'>Help</h4>
            <li>Contact us</li>
            <li>Feedback</li>
        </ul>
    </div>
  )
}
