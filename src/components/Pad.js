import React from 'react'

const Pad = ({ sound, handlePadClick }) => {

  // Dynamic Styling
  const pad_state = sound.isActive ? "pad_on" : "pad_off"

  return (
    <div className="col col-3 m-2 mt-3">
      <button className={`pad w-100 h-100 ${pad_state}`}
        onClick={() => handlePadClick(sound)}>
          {sound.name}
      </button >
    </div >
  )
}

export default Pad
