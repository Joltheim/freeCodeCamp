import { soundClips } from "./sound-clips";

function App() {

  const playSound = (value) => {
    const audio = new Audio(soundClips[value].audio);
    audio.play();
  }

  return (
    <>
      <h2>FCC Drum Machine Project</h2>
      <div className='flex-container'>
        <div className='flex-column'>
          <div className='flex-row'>
            <button onClick={() => playSound(0)}>q</button>
            <button onClick={() => playSound(1)}>w</button>
            <button onClick={() => playSound(2)}>e</button>
          </div>
          <div className='flex-row'>
            <button onClick={() => playSound(3)}>a</button>
            <button onClick={() => playSound(4)}>s</button>
            <button onClick={() => playSound(5)}>d</button>
          </div>
          <div className='flex-row'>
            <button onClick={() => playSound(6)}>z</button>
            <button onClick={() => playSound(7)}>x</button>
            <button onClick={() => playSound(8)}>c</button>
          </div>
        </div>
        <div className='flex-column'>
          <h2>power switch</h2>
          <h2>display</h2>
          <h2>volume slider</h2>
          <h2>bank</h2>
          </div>
      </div>
      
    </>
  )
}

export default App

//Todo
//1. Add unique IDs to sound array & change reference
//2. add an event listener to page that enables keypress
//3. Run FCC tests and update as needed to pass
//4. Flesh Out Right Side Column with appropriate content