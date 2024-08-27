import React from 'react'
import '../Styles/Component6.css'

import TeamComponent from './TeamComponent'

const Component6 = () => {
  return (
    <div>
      <div className='Component6-container'>
        <div className='Component6-header'>
            Our <span className='Component6-yellow'>Team</span>
        </div>

        <div className='Component6-subheader'>
            <div className='Component6-subheader-line'></div>
            <div className='Component6-subheader-text'>A dedicated team of professionals ready to deliver exceptional solutions</div>
            <div className='Component6-subheader-line'></div>
      </div>

      <div className='Component6-team-container1'>
        <TeamComponent/>
        <TeamComponent/>
        <TeamComponent/>
      </div>

      <div className='Component6-team-container2'>
        <TeamComponent/>
        <TeamComponent/>
      </div>

      </div>
    </div>
  )
}

export default Component6
