import { useState } from 'react'
import Markdown from 'marked-react'

function App() {
  let preview = (
    `#header
    ##header2
    `
  )

  const [text, setText] = useState(preview)

  return (
    <>
      <h2>MarkDown Preview Project</h2>
      <div id='input-wrapper'>
        <textarea 
          id='editor'
          onChange={(e) => {setText(e.target.value)}}
        >
        </textarea>
      </div>
      <div id='preview'>
        <Markdown>{text}</Markdown>
      </div>
    </>
  )
}

export default App
