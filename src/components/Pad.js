import React from 'react'
import Constants from '../Constants';

const Pad = ({ sound, handlePadClick }) => {

  // Dynamic Styling
  const pad_style = sound.isActive ? Constants.pad_on : Constants.pad_off

  return (
    <div className="col col-3 m-2 mt-3">
      <button className={`pad w-100 h-100 ${pad_style}`}
        onClick={() => handlePadClick(sound)} >
          {sound.name}
      </button >
    </div >
  )
}

export default Pad
