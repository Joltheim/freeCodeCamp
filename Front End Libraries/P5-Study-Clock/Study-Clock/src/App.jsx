import { useState, useEffect } from 'react'

function App() {
  const [studyTimer, setStudyTimer] = useState(25)
  const [breakTimer, setBreakTimer] = useState(5)
  const [countDownDisplay, setCountDownDisplay] = useState(studyTimer)

  useEffect(() => {
    const convertCountDownDisplay = () => {
      const seconds = studyTimer * 60;
  
      const formatTime = (value) => {
        return value < 10 ? `0${value}` : value.toString();
      };
  
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secondsDisplay = seconds % 60;
  
      let formattedTime = "";
      if (hours > 0) {
        formattedTime += formatTime(hours) + ":";
      }
      formattedTime += formatTime(minutes) + ":" + formatTime(secondsDisplay);
  
      setCountDownDisplay(formattedTime);
    };
  
    convertCountDownDisplay();
  }, [studyTimer]);
  

  return (
    <>
      <h2>FCC Study Clock Project</h2>
      <div className='clock-container'>
        <div className='flex-column'>
          <div id='set-timer'>
            <h3>Study Timer: {studyTimer}</h3>
            <div className='flex-row'>
              <button id='up-arrow' onClick={() => setStudyTimer(studyTimer + 1)}>+1</button>
              <button id='up-arrow' onClick={() => setStudyTimer(studyTimer - 1)}>-1</button>
            </div>
          </div>
          <div id='set-timer'>
            <h3>Break Timer: {breakTimer}</h3>
            <div className='flex-row'>
              <button id='up-arrow' onClick={() => setBreakTimer(breakTimer + 1)}>+1</button>
              <button id='up-arrow' onClick={() => setBreakTimer(breakTimer - 1)}>-1</button>
            </div>
          </div>
        </div>
        <div className='countdown-display'>
          <h3>{countDownDisplay}</h3>
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

//Todo:
//1. Add buttons & functionality to increase / decrease timers - done
  //1A. set limit so values cannot be negative
//2. Add variable to show countdown status (setTimeOut?)
//3. Create functions for control panel (play pause reset)
//4. Add Alarm when countDownDisplay reaches 0
//5. Make sure project passes FCC tests
