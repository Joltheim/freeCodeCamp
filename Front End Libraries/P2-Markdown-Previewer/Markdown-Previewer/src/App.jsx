import { useState } from 'react'
import Markdown from 'marked-react'
import { preview } from './preview-text'

function App() {
  const [text, setText] = useState(preview)

  return (
    <>
      <h2>MarkDown Preview Project</h2>
      <div id='input-wrapper'>
        <textarea 
          id='editor'
          value={text}
          onChange={(e) => setText(e.target.value)}
        >
        </textarea>
      </div>
      <div id='preview'>
        <Markdown breaks={true}>{text}</Markdown>
      </div>
    </>
  )
}

export default App

//Todo
//1. Fix preview values to pass test 5 - done
//2. Make sure default preview is rendered as html - test 6 -done
//3. Allow carriage returns (enter) to be interpreted as line breaks - test 7 - done
