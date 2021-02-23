import React, { useState } from 'react'
import './Pad.css';

const Pad = ({ sound, handlePadClick }) => {

  // Styling based on state
  const pad_state = sound.isActive ? "pad_on" : "pad_off"

  return (
    <div className="col col-3 m-2">
      <button className={`btn btn-outline-info w-100 h-100 ${pad_state}`}
        onClick={() => handlePadClick(sound)}>
        {sound.name}
      </button>
    </div>
  )
}

export default Pad
