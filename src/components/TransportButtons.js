import React from 'react'
import '../App.css';

const TransportButtons = ({playAll, stopAll}) => {

  

  return (
    <div className="row justify-content-center mt-5">
      <button className="t-btn btn col col-2"
        onClick={() => stopAll()}>
        <i className="far fa-stop-circle fa-5x"></i>
      </button>
      <button className="t-btn btn col col-2"
        onClick={() => playAll()}>
        <i className="far fa-play-circle fa-5x"></i></button>
    </div>
  )
}

export default TransportButtons
