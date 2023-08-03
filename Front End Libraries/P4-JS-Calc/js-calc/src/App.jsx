import { useState } from 'react'

function App() {
  const [count, setCount] = useState('')
  const [result, setResult] = useState(0)

  //Create String of userInput Values
  const concatValue = (e) => {
    const lastChar = count[count.length - 1]
    if(count[0] == 0 && e.target.value == 0) {
      return
    } else {
      if (lastChar != '+' && lastChar != '-' && lastChar != '*' && lastChar != '/'  && lastChar != '.') {
        setCount(count + e.target.value)
      } else if (e.target.value != '+' && e.target.value != '-' && e.target.value != '*' && e.target.value != '/') {
        setCount(count + e.target.value)
      }
    }
  }

  const clearScreen = () => {
    setCount('')
    setResult(0)
  }

  const backSpace = () => {
    const removeLastIndex = count.slice(0, count.length - 1)
    setCount(removeLastIndex)
  }

  const doMath = () => {
    if (count.length !== 0) {
      setResult(eval(count))
    }
  }
  
  return (
    <>
      <h2>JS-Calc-Project</h2>
      <div className='calculator'>
        <div id='display' className='c-formula'>{count !== '' ? count : result} {result || null}</div>
        {/* {count !== '' ? (result !== 0 ? result : count) : result} */}
        {/* {count !== '' ? count : result} {result || null} */}
        <div className='operators'>
          <button id='add' value='+' className='c-btn' onClick={concatValue}>+</button>
          <button id='subtract' value='-' className='c-btn' onClick={concatValue}>-</button>
          <button id='multiply' value='*' className='c-btn' onClick={concatValue}>x</button>
          <button id='divide' value='/' className='c-btn' onClick={concatValue}>/</button>
        </div>
        <div className='c-numbers'>
          <div className='flex-row'>
            <button id='seven' value='7' className='c-btn' onClick={concatValue}>7</button>
            <button id='eight' value='8' className='c-btn' onClick={concatValue}>8</button>
            <button id='nine' value='9' className='c-btn' onClick={concatValue}>9</button>
          </div>
          <div className='flex-row'>
            <button id='four' value='4' className='c-btn' onClick={concatValue}>4</button>
            <button id='five' value='5' className='c-btn' onClick={concatValue}>5</button>
            <button id='six' value='6' className='c-btn' onClick={concatValue}>6</button>
          </div>
          <div className='flex-row'>
            <button id='one' value='1' className='c-btn' onClick={concatValue}>1</button>
            <button id='two' value='2' className='c-btn' onClick={concatValue}>2</button>
            <button id='three' value='3' className='c-btn' onClick={concatValue}>3</button>
          </div>
          <div className='flex-row'>
            <button id='zero' value='0' className='c-btn' onClick={concatValue}>0</button>
            <button id='decimal' value='.' className='c-btn' onClick={concatValue}>.</button>
            <button className='c-btn' onClick={backSpace}>←</button>
          </div>
          <div className='flex-row'>
            <button id='clear' className='c-btn' onClick={clearScreen}>clear</button>
            <button id='equals' className='c-btn' onClick={doMath}>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

//todo
//1. Add EventListener for key presses (numpad) - Difficulty outside scope of project - cancelled
//2. Update CSS - Done
//3. Test project for validation in FreeCodeCamp

//Optional. 
//4. Change display so that it shows default values and equals sign. 


