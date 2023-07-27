import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const concatValue = (e) => {
    setCount(count + e.target.value)
    console.log(count)
  }

  const clearScreen = () => {
    setCount(0)
  }

  const doMath = () => {
    let result = Math(count)
    console.log(result)
  }

  return (
    <>
      <div className='calculator'>
        <div className='c-formula'>{count}</div>
        <div className='c-screen'>answer: </div>
        <button value='1' className='c-btn' onClick={concatValue}>1</button>
        <button value='2' className='c-btn' onClick={concatValue}>2</button>
        <button value='3' className='c-btn' onClick={concatValue}>3</button>
        <button value='4' className='c-btn' onClick={concatValue}>4</button>
        <button value='5' className='c-btn' onClick={concatValue}>5</button>
        <button value='6' className='c-btn' onClick={concatValue}>6</button>
        <button value='7' className='c-btn' onClick={concatValue}>7</button>
        <button value='8' className='c-btn' onClick={concatValue}>8</button>
        <button value='9' className='c-btn' onClick={concatValue}>9</button>
        <button value='0' className='c-btn' onClick={concatValue}>0</button>
        <button value='+' className='c-btn' onClick={concatValue}>+</button>
        <button value='-' className='c-btn' onClick={concatValue}>-</button>
        <button value='*' className='c-btn' onClick={concatValue}>*</button>
        <button value='/' className='c-btn' onClick={concatValue}>/</button>
        <button value='.' className='c-btn' onClick={concatValue}>.</button>
        <button className='c-btn' onClick={clearScreen}>clear</button>
        <button className='c-btn' onClick={doMath}>enter</button>
      </div>
    </>
  )
}

export default App
