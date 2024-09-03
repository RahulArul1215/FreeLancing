import React from 'react'
import '../Styles/TeamComponent.css';

const TeamComponent = ({name,position}) => {
  return (
    <div className='TeamComponent-container'>
      <div className='TeamComponent-pic-container'></div>

        <div className='TeamComponent-name'>
            {name || "John Doe"}
        </div>
        <div className='TeamComponent-position'>
            {position || "Devloper"}
        </div>

    </div>
  )
}

export default TeamComponent
