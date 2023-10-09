import { useState } from 'react'

function App() {
  const [studyTimer, setStudyTimer] = useState(25)
  const [breakTimer, setBreakTimer] = useState(5)

  return (
    <>
      <h2>FCC Study Clock Project</h2>
      <div className='clock-container'>
        <div className='flex-column'>
          <div id='study-timer'>
            <h3>Study Timer</h3>
            <div id='study-timer-display'>{studyTimer}</div>
          </div>
          <div id='break-timer'>
            <h3>Break Timer</h3>
            <div id='break-timer-display'>{breakTimer}</div>
          </div>
        </div>
        <div className='countdown-display'>
          <h3>*add countdown variable here</h3>
        </div>
        <div className='control-panel'>
          <div className='flex-row'>
            <button>play</button>
            <button>pause</button>
            <button>reset</button>
          </div>
        </div>
        <div className='trade-mark'>
          <h6>created by <a href='https://github.com/Joltheim'>James Wismer</a></h6>
        </div>
      </div>        
    </>
  )
}

export default App
