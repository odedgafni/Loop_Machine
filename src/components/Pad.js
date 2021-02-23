import React, { useState } from 'react'

const Pad = ({ sound, handlePadClick }) => {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className="col col-3 m-2">
      <button className="btn btn-outline-info w-100 h-100"
        onClick={() => handlePadClick(sound)}>
        {sound.name}
      </button>
    </div>
  )
}

export default Pad
