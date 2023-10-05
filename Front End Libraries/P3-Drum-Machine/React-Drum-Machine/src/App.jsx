import { soundClips } from "./sound-clips";
import { useState, useEffect } from 'react'

function App() {
  const [display, setDisplay] = useState('')
  const [volume, setVolume] = useState(0.5)

  const playSound = (id) => {
    const audioElement = document.getElementById(id);
    console.log(id)
    console.log(audioElement)
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.volume = volume;
      audioElement.play();
      setDisplay(id);
    } else {
      console.log('not found')
    }
  };

  // const playSound = (id) => {
  //   const soundFound = soundClips.find(clip => clip.id === id)
  //   if(soundFound) {
  //     const audio = new Audio(soundFound.audio);
  //         audio.volume = volume
  //         audio.play();
  //         console.log(audio)
  //         setDisplay(soundFound.id)
  //   }
  // }

  //Handle Key Presses for Drumpad
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch(e.key.toLowerCase()) {
        case 'q':
          playSound('cev');
          break;
        case 'w':
          playSound('dsc');
          break;      
        case 'e':
          playSound('h1');
          break;
        case 'a':
          playSound('h2');
          break;      
        case 's':
          playSound('h3');
          break;
        case 'd':
          playSound('h4');
          break;      
        case 'z':
          playSound('h5');
          break;
        case 'x':
          playSound('knh');
          break;     
        case 'c':
          playSound('k1');
          break;   
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <h2>FCC Drum Machine Project</h2>
      <div className='flex-container' id='drum-machine'>
        <div className='flex-column'>
          <div className='flex-row'>
            <button id='cev' className='drum-pad' onClick={() => playSound('cev')}>Q
              <audio src={soundClips.find(clip => clip.id === 'cev').audio} className='clip' id='Q'></audio>
            </button>
            <button id='dsc' className='drum-pad' onClick={() => playSound('dsc')}>W
              <audio src={soundClips.find(clip => clip.id === 'dsc').audio} className='clip' id='W'></audio>
            </button>
            <button id='h1' className='drum-pad' onClick={() => playSound('h1')}>E
              <audio src={soundClips.find(clip => clip.id === 'h1').audio} className='clip' id='E'></audio>
            </button>
          </div>
          <div className='flex-row'>
            <button id='h2' className='drum-pad' onClick={() => playSound('h2')}>A
              <audio src={soundClips.find(clip => clip.id === 'h2').audio} className='clip' id='A'></audio>
            </button>
            <button id='h3' className='drum-pad' onClick={() => playSound('h3')}>S
              <audio src={soundClips.find(clip => clip.id === 'h3').audio} className='clip' id='S'></audio>
            </button>
            <button id='h4' className='drum-pad' onClick={() => playSound('h4')}>D
              <audio src={soundClips.find(clip => clip.id === 'h4').audio} className='clip' id='D'></audio>
            </button>
          </div>
          <div className='flex-row'>
            <button id='h5' className='drum-pad' onClick={() => playSound('h5')}>Z
              <audio src={soundClips.find(clip => clip.id === 'h5').audio} className='clip' id='Z'></audio>
            </button>
            <button id='knh' className='drum-pad' onClick={() => playSound('knh')}>X
              <audio src={soundClips.find(clip => clip.id === 'knh').audio} className='clip' id='X'></audio>
            </button>
            <button id='k1' className='drum-pad' onClick={() => playSound('k1')}>C
              <audio src={soundClips.find(clip => clip.id === 'k1').audio} className='clip' id='C'></audio>
            </button>
          </div>
        </div>
        <div className='flex-column'>
          <div className='power-switch'>
            <h3>power:</h3>
            <input max='1' min='0' type='checkbox'></input>
          </div>
          <h3 id='display'>key: {display}</h3>
          <div className='volume-slider'>
            <h3>volume:</h3>
            <input max='1' min='0' type='range' step='.01' value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))}></input>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App

//Todo
//1. Add unique IDs to sound array & change reference - done
//2. add an event listener to page that enables keypress - done
//3. Run FCC tests and update as needed to pass (tests 5 & 6 are a nightmare to troubleshoot)
//4. Flesh Out Right Side Column with appropriate content
