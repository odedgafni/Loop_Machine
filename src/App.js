import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Pad from './components/Pad';
import sounds from './sounds';
import TransportButtons from './components/TransportButtons';

function App() {

  const [activeLoops, setActiveLoops] = useState([]);

  useEffect(() => {

  }, [activeLoops])

  const isActive = (sound) => {
    return activeLoops.find(loop => loop.id === sound.id)
  }

  const handlePadClick = (sound) => {
    let newActiveLoops = []

    // If the sound is already active remove the loop from active list
    if (isActive(sound)) {
      newActiveLoops = activeLoops.filter(loop => loop.id !== sound.id)
      setActiveLoops(newActiveLoops)

      // if not active add new sound to active loops
    } else {
      newActiveLoops = [...activeLoops, sound]
      setActiveLoops(newActiveLoops)
    }
  }

  const playAll = () => {
    activeLoops.forEach(loop => {
      
    })
  }
  const stopAll = () => {

  }

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row justify-content-center text-center">
          {sounds.map(sound =>
            <Pad key={sound.id} sound={sound} handlePadClick={handlePadClick} />
          )}
        </div>
        <TransportButtons playAll={playAll} stopAll={stopAll} />
      </div>
    </div>
  );
}

export default App;
