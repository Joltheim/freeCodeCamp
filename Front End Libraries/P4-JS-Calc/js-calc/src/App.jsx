import { useState } from 'react'

function App() {
  const [count, setCount] = useState([])
  const [result, setResult] = useState()

  //Create String of userInput Values
  const concatValue = (e) => {
    const lastChar = count[count.length - 1]
      if (lastChar != '+' && lastChar != '-' && lastChar != '*' && lastChar != '/') {
        setCount(count + e.target.value)
      } else if (e.target.value != '+' && e.target.value != '-' && e.target.value != '*' && e.target.value != '/' ) {
        setCount(count + e.target.value)
      }
  }

  const clearScreen = () => {
    setCount([])
    setResult()
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
        <div className='c-formula'>{count} {result}</div>
        <div className='operators'>
          <button value='+' className='c-btn' onClick={concatValue}>+</button>
          <button value='-' className='c-btn' onClick={concatValue}>-</button>
          <button value='*' className='c-btn' onClick={concatValue}>x</button>
          <button value='/' className='c-btn' onClick={concatValue}>/</button>
        </div>
        <div className='c-numbers'>
          <div className='flex-row'>
            <button value='7' className='c-btn' onClick={concatValue}>7</button>
            <button value='8' className='c-btn' onClick={concatValue}>8</button>
            <button value='9' className='c-btn' onClick={concatValue}>9</button>
          </div>
          <div className='flex-row'>
            <button value='4' className='c-btn' onClick={concatValue}>4</button>
            <button value='5' className='c-btn' onClick={concatValue}>5</button>
            <button value='6' className='c-btn' onClick={concatValue}>6</button>
          </div>
          <div className='flex-row'>
            <button value='1' className='c-btn' onClick={concatValue}>1</button>
            <button value='2' className='c-btn' onClick={concatValue}>2</button>
            <button value='3' className='c-btn' onClick={concatValue}>3</button>
          </div>
        </div>

        <button onClick={backSpace}>undo</button>
        <button className='c-btn' onClick={clearScreen}>clear</button>
        <button className='c-btn' onClick={doMath}>enter</button>
        <button value='(' className='c-btn' onClick={concatValue}>(</button>
        <button value=')' className='c-btn' onClick={concatValue}>)</button>        
        <button value='0' className='c-btn' onClick={concatValue}>0</button>
        <button value='.' className='c-btn' onClick={concatValue}>.</button>

      </div>
    </>
  )
}

export default App

//todo
//1. Add EventListener for key presses (numpad)
//2. Update CSS - work in progress
