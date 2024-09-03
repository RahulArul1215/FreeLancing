import React from 'react';
import '../Styles/Components2.css';

import experience from '../Assets/experience.png'
import problem from '../Assets/problem.png'
import pencil from '../Assets/pencil.png'
import conversation from '../Assets/conversation.png'

import NumberComponent from './NumberComponent';

const Components2 = () => {
  return (
    <div className='Components2-container'>
      <div>
        <div className='Components2-header'>
            Supercharge Your Sales with Our Expert 
            <span className='Components2-header-center'>Lead Generation</span>
            Service
        </div>
        <div className='Components2-subheader'>
            <div className='Components2-subheader-line'></div>
            <div className='Components2-subheader-text'>Driving Targeted Leads to Fuel Your Business Growth</div>
            <div className='Components2-subheader-line'></div>
        </div>

        <div className='Components2-content-container'>
        <div className='Components-number-container'>
          <NumberComponent
          icon={conversation}
          />
          <NumberComponent
          icon={pencil}
          />
          <NumberComponent
          icon={problem}
          />
          <NumberComponent
          icon={experience}
          />
        </div>

        <div className='Components2-text'>
          At <strong className='Components2-text-orange'>Tloomy</strong>, our lead generation service is designed to
          connect you with high-quality prospects who are genuinely
          interested in our offerings. Our dedicated team employs
          proven stratergies to identify, engage and convert leads,
          ensuring a steady stream of potential customers for your
          business.
          <br/>
          <br/>
          
          <strong>Key Benefits:</strong>

          <div>
            <ul className='Components2-list'>
              <li> - Targeted Outreach</li>
              <li> - Data-Driven Stratergies</li>
              <li> - Scalable Solutions</li>
            </ul>
          </div>

          <button>Get Started</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Components2
