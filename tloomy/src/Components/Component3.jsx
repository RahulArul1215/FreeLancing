import React from 'react'
import '../Styles/Component3.css';

import CRM from '../Assets/CRM.png'
import thusha from '../Assets/thusha.png'
import sirinature from '../Assets/sirinature.png'
import Sala from '../Assets/Sala.png'
import shilhaandara from '../Assets/shilhaandara.png'
import krushika from '../Assets/krushika.png'
import guhantara from '../Assets/guhantara.png'
import honnaru from '../Assets/honnaru.png'
import jhari from '../Assets/jhari.png'

const Component3 = () => {
  return (
    <div>
      <div className='Component3-container'>
        <div className='Component3-header'>Trusted by <span className='Component3-text-orange'>Industry Leaders</span></div>

        <div className='Components3-icon-container1'>
          <div className='Components3-icon-containers'>
          <img src={thusha} alt="" className='Component3-icon'/>
          Thusha
          </div>
          <div className='Components3-icon-containers'>
          <img src={sirinature} alt="" className='Component3-icon'/>
          Sirinature
          </div>
          <div className='Components3-icon-containers'>
          <img src={Sala} alt="" className='Component3-icon'/>
          Sala
          </div>
          <div className='Components3-icon-containers'>
          <img src={shilhaandara} alt="" className='Component3-icon'/>
          Shilhaandara
          </div>
          <div className='Components3-icon-containers'>
          <img src={krushika} alt="" className='Component3-icon'/>
          Krushika
          </div>
          <div className='Components3-icon-containers'>
          <img src={guhantara} alt="" className='Component3-icon'/>
          Guhantara
          </div>
          <div className='Components3-icon-containers'>
          <img src={honnaru} alt="" className='Component3-icon'/>
          Honnaru
          </div>
          <div className='Components3-icon-containers'>
          <img src={jhari} alt="" className='Component3-icon'/>
          Jhari
          </div>
        </div>

        <div className='Components3-bottom-content'>We have successfully partnered with top companies to deliver outstanding results.</div>
      </div>
    </div>
  )
}

export default Component3