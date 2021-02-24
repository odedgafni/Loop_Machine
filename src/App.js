import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

import Pad from './components/Pad';
import TransportButtons from './components/TransportButtons';

import { sounds as INITIAL_STATE } from './sounds';

function App() {

  // loops is an array of all the sounds (sounds.js) 
  const [loops, setLoops] = useState(INITIAL_STATE);
  const [recordings, setRecordings] = useState([])

  const [isRecording, setIsRecording] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false);

  // 'startCycle' will trigger the 'playLoops' function on each change
  const [startCycle, setStartCycle] = useState(false);

  // Whenever 'startCycle' is triggered play all active loops
  useEffect(() => {
    playLoops(loops)
  }, [startCycle])

  // Play or Stop loops if there is a change in 'isPlaying' State
  useEffect(() => {
    if (isPlaying) {
      playLoops(loops)
    }
    else {
      stopAllLoops()
      setIsRecording(false)
    }
  }, [isPlaying])

  const playLoops = (loops) => {
    // Filter only the active loops
    const activeLoops = loops.filter(loop => loop.isActive === true)
    // If recording add the active loops of the current cycle to 'recordings'
    isRecording && activeLoops && setRecordings([...recordings, activeLoops])

    // Loop through the active loops and play them
    activeLoops.forEach(loop => {
      loop.audio.play()
      // When the loop ends trigger 'startCycle'
      loop.audio.onended = () => setStartCycle(!startCycle)
    })
  }

  const stopAllLoops = () => {
    loops.forEach(loop => {
      loop.audio.pause()
      loop.audio.currentTime = 0
    })
  }

  // The function receives as a sound/loop parameter and makes him active/not active
  const handlePadClick = (sound) => {
    // Map through the entire state to change the 'isActive' property of the selected loop/sound
    setLoops(loops.map(loop => loop.id === sound.id ?
      { ...loop, isActive: !loop.isActive } : loop))
  }

  // The function receives as a parameter the current recording cycle.
  // Each cycle, it plays the relevant loops and calls itself until reaches the last loop
  const playOneRecordingCycle = (cycle) => {
    if (cycle - 1 < recordings.length)
      recordings[cycle - 1].forEach(loop => {
        loop.audio.play()
        loop.audio.onended = () => playOneRecordingCycle(cycle + 1)
      })
  }

  return (
    <div className="App container shadow mt-5">
      <div className="row justify-content-center text-center">
        {loops.map(sound =>
          <Pad
            key={sound.id}
            sound={sound}
            handlePadClick={handlePadClick} />
        )}
      </div>
      <div className="row justify-content-center text-center">
        <TransportButtons
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          isRecording={isRecording}
          setIsRecording={setIsRecording} />
      </div>
      {!isRecording && recordings.length > 0 &&
        <div className="row justify-content-center mt-4">
          <div className="col col-3 text-center">
            <button className="btn btn-outline-info btn-lg mb-4"
              onClick={() => playOneRecordingCycle(1)}>
              <i className="fas fa-play"></i> Play Recording
            </button>
          </div>
          <div className="col col-3 text-center">
            <button className="btn btn-outline-info btn-lg mb-4"
              onClick={() => setRecordings([])}>
              <i className="fas fa-trash"></i> Clear Recording
            </button>
          </div>
        </div>
      }
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}

export default App;
