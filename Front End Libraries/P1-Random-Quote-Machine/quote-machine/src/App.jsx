import { useState, useEffect } from 'react'
import './App.css'
import { quoteTable } from './data'
import { backgroundColors } from './data'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
library.add(faTwitter);


const randomSelect = () => {
  let ourMin = 0
  let ourMax = quoteTable.length - 1
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin
}

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [state, setState] = useState(() => {
    return quoteTable[randomSelect()]
  })

  useEffect(() => {
    setBackgroundColor(backgroundColors[Math.floor(Math.random() * backgroundColors.length)]);
  });

  const newQuote = () => {
    setState(quoteTable[randomSelect()]);
  }

  return (
    <div className="App" style={{backgroundColor}}>
      <div id="quote-box">
      <h3 id="text">"{state.quote}"</h3>
      <h3 id="author">Author: {state.author}</h3>
      <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${state.quote}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /> Tweet This!</a>
      <button id="new-quote" onClick={newQuote}>click for new quote</button>
      </div>
    </div>  
  )
}

export default App
