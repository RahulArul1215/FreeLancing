import React from 'react'
import '../Styles/Components1.css';
import CRM from '../Assets/CRM.png';

const Components1 = () => {
  return (
    <div className='Components1-container'>
     <div>
      <div className='Components1-header'>
        Empowering Your Business with <br/>
        Innovative Solutions
      </div>

      <div className='Components1-content'>
        -Leading the Way in CRM,ERP,Resource Management 
        and <br/>Custom Chatbots.
      </div>

      <div className='Components1-buttons-container'>
        <button className='Components1-button1'>
            Contact Us Now
        </button>

        <button className='Components1-button2'>
            Learn More
        </button>
      </div>
      </div>   

      <div className='Components1-picture'>
        <img src={CRM} alt="crm"/>
      </div>
    </div>
  )
}

export default Components1
