import React from 'react'
import '../Styles/Advantages.css';

import CRM from '../Assets/CRM.png';

const Advantages = ({icon,title,content}) => {
  return (
    <div>
      <div className='Advantages-container'>

        <img src={icon || CRM} alt="" className='Advantages-icon'/>

        <div className='Advantages-header'>
            {title || "Enhanced Data Security"}
        </div>

        <div className='Advantages-content'>
            {content || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eum error voluptatem adipisci porro odio, cupiditate officiis dignissimos id asperiores vitae vel debitis facilis in ullam provident iste velit quibusdam!"}
        </div>
        
      </div>
    </div>
  )
}

export default Advantages
