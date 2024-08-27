import React from 'react'
import '../Styles/Component5.css';

import box from '../Assets/box.png'
import cybersecurity from '../Assets/cybersecurity.png'
import growth from '../Assets/growth.png'
import realtime from '../Assets/realtime.png'
import workschedule from '../Assets/workschedule.png'
import teamwork from '../Assets/teamwork.png'

import Advantages from './Advantages';

const Component5 = () => {
  return (
    <div>
      <div className='Component5-container'>
      <div className='Component5-header'>
      Revolutionize Your Business with Custom <span className='Component5-text-back'>CRM Solutions</span>
      </div>

      <div className='Component5-subheader'>
            <div className='Component5-subheader-line'></div>
            <div className='Component5-subheader-text'>Unlock the Full Potential of Your Customer Relationships</div>
            <div className='Component5-subheader-line'></div>
      </div>

      <div className='Component5-content1'>
        Our custom CRM solutions are designed to transform the way you manage your customer relationships.We tailor our 
        CRM to fit your unique business processes, ensuring you get the most out of every interaction.
      </div>

      <div className='Component5-advantage-container'>
      <div className='Component5-advantages-1'>
      <Advantages
      icon={cybersecurity}
      title="Enhanced Data Security"
      content=""
      />
      <div className='Component5-advantages-1-line-1'></div>
      <Advantages
      icon={teamwork}
      title="Lead Management"
      />
      <div className='Component5-advantages-1-line-1-1'></div>
      <Advantages
      icon={realtime}
      title="Real-time Data Updates"
      />
      </div>

      <div className='Component5-advantages-straight-line'></div>

      <div className='Component5-advantages-1'>
      <Advantages
      icon={box}
      title="product"
      />
      <div className='Component5-advantages-1-line-1'></div>
      <Advantages
      icon={workschedule}
      title="Quality"
      />
      <div className='Component5-advantages-1-line-1-1'></div>
      <Advantages
      icon={growth}
      title="Result"
      />
      </div>
      </div>

      </div>
    </div>
  )
}

export default Component5
