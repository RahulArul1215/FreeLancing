import React from 'react'
import '../Styles/AddressComponent.css'

import CRM from '../Assets/CRM.png'

const AddressComponent = ({icon,title,content}) => {
  return (
    <div>
      <div className='AddressComponent-container'>

        <div className='AddressComponent-icon'>
            <img src={icon || CRM} alt="pic"/>
        </div>

        <div className='AddressComponent-header'>
            {title || "Your Address"}
        </div>

        <div className='AddressComponent-content'>
            {content || "Content"}
        </div>

      </div>
    </div>
  )
}

export default AddressComponent
