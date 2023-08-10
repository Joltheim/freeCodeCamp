import { soundClips } from "./sound-clips";
import { useState } from 'react'

function App() {
  const [display, setDisplay] = useState('')
  const [volume, setVolume] = useState(0.5)

  //NOTE - playSound() - Currently Broken
  const playSound = (id) => {
    const soundFound = soundClips.find(clip => clip.id === id)
    if(soundFound) {
      const audio = document.getElementById(id);
      // audio.volume = volume
      // audio.play();
      console.log(audio)
      setDisplay(soundFound.id)
    }
  }

  return (
    <>
      <h2>FCC Drum Machine Project</h2>
      <div className='flex-container' id='drum-machine'>
        <div className='flex-column'>
          <div className='flex-row'>
            <button id='Q' className='drum-pad' onClick={() => playSound('cev')}>Q
              <audio src={soundClips.find(clip => clip.id === 'cev').audio} className='clip' id='Q'></audio>
            </button>
            <button id='W' className='drum-pad' onClick={() => playSound('dsc')}>W
              <audio src={soundClips.find(clip => clip.id === 'dsc').audio} className='clip' id='W'></audio>
            </button>
            <button id='E' className='drum-pad' onClick={() => playSound('h1')}>E
              <audio src={soundClips.find(clip => clip.id === 'h1').audio} className='clip' id='E'></audio>
            </button>
          </div>
          <div className='flex-row'>
            <button id='A' className='drum-pad' onClick={() => playSound('h2')}>A
              <audio src={soundClips.find(clip => clip.id === 'h2').audio} className='clip' id='A'></audio>
            </button>
            <button id='S' className='drum-pad' onClick={() => playSound('h3')}>S
              <audio src={soundClips.find(clip => clip.id === 'h3').audio} className='clip' id='S'></audio>
            </button>
            <button id ='D' className='drum-pad' onClick={() => playSound('h4')}>D
              <audio src={soundClips.find(clip => clip.id === 'h4').audio} className='clip' id='D'></audio>
            </button>
          </div>
          <div className='flex-row'>
            <button id='Z' className='drum-pad' onClick={() => playSound('h5')}>Z
              <audio src={soundClips.find(clip => clip.id === 'h5').audio} className='clip' id='Z'></audio>
            </button>
            <button id='X' className='drum-pad' onClick={() => playSound('knh')}>X
              <audio src={soundClips.find(clip => clip.id === 'knh').audio} className='clip' id='X'></audio>
            </button>
            <button id='C' className='drum-pad' onClick={() => playSound('k1')}>C
              <audio src={soundClips.find(clip => clip.id === 'k1').audio} className='clip' id='C'></audio>
            </button>
          </div>
        </div>
        <div className='flex-column'>
          <div className='power-switch'>
            <h3>power:</h3>
            <input max='1' min='0' type='checkbox'></input>
          </div>
          <h3 id='display'>{display}</h3>
          <div className='volume-slider'>
            <h3>volume:</h3>
            <input max='1' min='0' type='range' step='.01' value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))}></input>
          </div>
          <h3>bank</h3>
          </div>
      </div>
      
    </>
  )
}

export default App

//Todo
//1. Add unique IDs to sound array & change reference - done
//2. add an event listener to page that enables keypress
//3. Run FCC tests and update as needed to pass
//4. Flesh Out Right Side Column with appropriate content

// Working Version of playSound Function (but doesn't reference audio element for fcc test 5 & 6)
// const playSound = (id) => {
//   const soundFound = soundClips.find(clip => clip.id === id)
//   if(soundFound) {
//     const audio = new Audio(soundFound.audio);
//     audio.volume = volume
//     audio.play();
//     setDisplay(soundFound.id)
//   }
// }