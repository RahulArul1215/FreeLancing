import React from 'react'
import '../Styles/Component3.css';

import CRM from '../Assets/CRM.png'

const Component3 = () => {
  return (
    <div>
      <div className='Component3-container'>
        <div className='Component3-header'>Trusted by <span className='Component3-text-orange'>Industry Leaders</span></div>

        <div className='Components3-icon-container1'>
          <div className='Components3-icon-containers'>
          <img src={CRM} alt="" className='Component3-icon'/>
          Guhantara
          </div>
          <div className='Components3-icon-containers'>
          <img src={CRM} alt="" className='Component3-icon'/>
          Honnaru
          </div>
          <div className='Components3-icon-containers'>
          <img src={CRM} alt="" className='Component3-icon'/>
          Jhari
          </div>
          <div className='Components3-icon-containers'>
          <img src={CRM} alt="" className='Component3-icon'/>
          Krushika
          </div>
          <div className='Components3-icon-containers'>
          <img src={CRM} alt="" className='Component3-icon'/>
          Sala
          </div>
        </div>

        <div className='Components3-icon-container1'>
          <div className='Components3-icon-containers'>
          <img src={CRM} alt="" className='Component3-icon'/>
          Guhantara
          </div>
          <div className='Components3-icon-containers'>
          <img src={CRM} alt="" className='Component3-icon'/>
          Honnaru
          </div>
          <div className='Components3-icon-containers'>
          <img src={CRM} alt="" className='Component3-icon'/>
          Jhari
          </div>
        </div>

        <div className='Components3-bottom-content'>We have successfully partnered with top companies to deliver outstanding results.</div>
      </div>
    </div>
  )
}

export default Component3
