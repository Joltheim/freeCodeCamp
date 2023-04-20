import { useState } from 'react'
import './App.css'

const quoteTable = [
  {id: 1, quote: "In three words I can sum up everything I've learned about life: It Goes On.", author: "Robert Frost"},
  {id: 2, quote: "The truth is everyone is going to hurt you, you just gotta find the one's worth suffering for." , author: "Bob Marley"},
  {id: 3, quote: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us." , author: "Helen Keller"},
  {id: 4, quote: "I know of no more encouraging fact than the unquestioned ability of a man to elevate his life by conscious endeavor." , author: "Henry David Thoreau"},
  {id: 5, quote: "No one looks back on their lives and remembers the nights they got plenty of sleep." , author: "unknown"},
]

const randomSelect = () => {
  let ourMin = 0
  let ourMax = quoteTable.length - 1
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin
}

const App = () => {
  const [state, setState] = useState(() => {
    return quoteTable[randomSelect()]
  })

  const newQuote = () => {
    setState(quoteTable[randomSelect()]);
  }

  return (
    <div className="App">
      <div id="quote-box">
      <h3 id="text">"{state.quote}"</h3>
      <h3 id="author">Author: {state.author}</h3>
      {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
      <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${state.quote}`} target="_blank" rel="noopener noreferrer">Tweet this!</a>
      <button id="new-quote" onClick={newQuote}>click for new quote</button>
      </div>
    </div>  
  )
}

export default App
