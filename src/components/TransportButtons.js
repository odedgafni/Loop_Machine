import React from 'react';
import Constants from '../Constants';
import './components.css';

const TransportButtons = ({ setIsPlaying, setIsRecording, isRecording, isPlaying }) => {

  // Dynamic Styling
  const record_style = isRecording ? Constants.btn_active : Constants.btn_off
  const play_style = isPlaying ? "" : Constants.btn_active
  const stop_style = isPlaying ? Constants.btn_active : ""

  return (
    <div className="mt-5">
      <div className="row justify-content-around p-3">
        <div className="col col-4">
          <button className={`t_btn w-100 ${record_style}`}
            onClick={() => setIsRecording(!isRecording)}>
            <i className='record far fa-dot-circle fa-3x'></i>
          </button>
        </div>
        <div className="col col-4">
          <button className={`t_btn btn w-100 ${play_style}`}
            onClick={() => setIsPlaying(false)}>
            <i className='far fa-stop-circle fa-3x'></i>
          </button>
        </div>
        <div className="col col-4">
          <button className={`t_btn btn w-100 ${stop_style}`}
            onClick={() => setIsPlaying(true)}>
            <i className='far fa-play-circle fa-3x'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TransportButtons
