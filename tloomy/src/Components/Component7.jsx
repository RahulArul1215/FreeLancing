import React from 'react'
import '../Styles/Component7.css'

import AddressComponent from './AddressComponent'
import email from '../Assets/email.png'
import location from '../Assets/location.png'
import phone from '../Assets/phone.png'
import workschedule from '../Assets/workschedule.png'

const Component7 = () => {
  return (
    <div>
      <div className='Component7-container'>
      <div className='Component7-header'>
            Connect with <span className='Component7-yellow'>Our Team</span>
        </div>

        <div className='Component7-subheader'>
            <div className='Component7-subheader-line'></div>
            <div className='Component7-subheader-text'>Let Us Know What You Think!</div>
            <div className='Component7-subheader-line'></div>
      </div>

      <div className='Component7-address-container'>
        <AddressComponent 
        icon={location}
        title="Physical Address"
        content="Address"
        />
        <AddressComponent 
        icon={workschedule}
        title="Work hours"
        content="Monday - Friday : 7am-7pm"
        />
        <AddressComponent 
        icon={email}
        title="Email address"
        content="email@gmail.com"
        />
        <AddressComponent 
        icon={phone}
        title="Phone number"
        content="+91 1234567890"
        />
        
      </div>

      <div className='Component7-contact-container'>
        <div className='Component7-map-container'></div>

        <div className='Component7-contact'>
          <div className='Component7-contact-header'>
          <span className='Component7-yellow'>Send Us</span> a Message
          </div>
          
          <div className='mt-10'>
          <div>
            <div className='Component7-contact-label'>Fullname :</div>
            <input className='Component7-contact-input'
            placeholder='Enter your fullname'
            type='text'
            />
          </div>

          <div>
            <div className='Component7-contact-label'>Email :</div>
            <input className='Component7-contact-input'
            placeholder='Enter your email'
            type='email'
            />
          </div>

          <div>
            <div className='Component7-contact-label'>Message :</div>
            <input className='Component7-contact-input'
            placeholder='Enter your Message'
            type='textarea'
            />
          </div>

          <div>
            <button className='Component7-contact-button'>Contact Us</button>
          </div>

        </div>  
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default Component7
