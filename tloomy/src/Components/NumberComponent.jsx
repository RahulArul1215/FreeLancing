import React from 'react'
import '../Styles/NumberComponent.css';
import CRM from '../Assets/CRM.png';

const NumberComponent = ({icon,number,content}) => {
  return (
    <div className='NumberComponent-container'>
      <div className='NumberComponent-icon'>
        <img src={icon || CRM} alt="" className='h-14 w-14'/>
      </div>

      <div className='NumberComponent-number'>
        {number || "22,300+"}
      </div>

      <div className='NumberComponent-content'>
        {content || "Messages"}
      </div>
    </div>
  )
}

export default NumberComponent
