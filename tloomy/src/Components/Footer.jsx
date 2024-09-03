import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div>
      <div className='Footer-container'>

        <div className='Footer-content1'>
            <span className='Footer-header-yellow'>Contact Info</span>
            <div className='Footer-content'>
                123, Street 1,<br/> Area 1, City 1, State 1,<br/> Country 1 - 123 456
            </div>
        </div>
        <div className='Footer-content1'>
            <span className='Footer-header-yellow'>About Us</span>
            <div className='Footer-content'>
                <p>About Organisation</p>
                <p>Our Clients</p>
                <p>Our Partners</p>
            </div>
        </div>
        <div className='Footer-content1'>
            <span className='Footer-header-yellow'>Quick Links</span>
            <div className='Footer-content'>
                <p>Home</p>
                <p>Services</p>
                <p>About</p>
                <p>Contact</p>
            </div>
        </div>
        <div className='Footer-content1'>
            <span className='Footer-header-yellow'>Important Links</span>
            <div className='Footer-content'>
                <p>Privacy Policy</p>
                <p>Cookies Policy</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
      </div>

      <div className='Footer-container-2'>
      © 2024 Tloomy.All rights reserved.
      </div>
    </div>
  )
}

export default Footer
