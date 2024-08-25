import React from 'react';
import '../Styles/Component4.css';

import CRM from '../Assets/CRM.png';

const Component4 = () => {
  return (
    <div className='Components4-container'>
      <div>
        <div className='Components4-header'>
            Enhance Customer Engagement with Our 
            Custom <span className='Components4-text-orange'>WhatsApp Chatbot</span>
        </div>
        <div className='Components4-subheader'>
            <div className='Components4-subheader-line'></div>
            <div className='Components4-subheader-text'>Automated, Personalized Interactions Tailored to Your Needs</div>
            <div className='Components4-subheader-line'></div>
        </div>

        <div className='Components4-content-container'>
        
        <div className='Components4-text'>
          Transform your customer service with our <strong className='Components4-text-orange'>custom WhatsApp <br/>
          chatbot solutions.</strong> Our chatbots are designed to automate <br/>
          interactions while providing personalized responses that cater <br/>
          to your customers' preferences and needs.<br/> 
          <br/>
          <strong>Key Benefits:</strong>

          <div>
            <ul className='Components4-list'>
              <li> - Custom Functionality</li>
              <li> - Improved Customer Experience</li>
              <li> - Efficient Operations</li>
            </ul>
          </div>

          <button>Get Started</button>
        </div>

        <div className='Components-number-container'>
          <img src={CRM} alt="Picture"/>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Component4;
