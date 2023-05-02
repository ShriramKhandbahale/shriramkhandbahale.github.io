import React, { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { typeJSON } from './helpers/typingAnimation'
import Contact from '@components/Contact'

import userData from '@assets/data.json'

// import multiple themes
import {
  atomDark,
  materialLight,
  materialDark,
  materialOceanic,
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import LineBreak from './components/LineBreak'

// themes array
const themes = [
  atomDark,
  materialLight,
  materialDark,
  materialOceanic,
]

// set random index for themes array
const randomTheme = [Math.floor(Math.random() * themes.length)]

// set random theme
const codeTheme = themes[randomTheme]

const App = () => {
  // initialize the typed data
  const [data, setData] = useState('')
  const [typingStatus, setTypingStatus] = useState(true)
  const [lineStatus, setTLineStatus] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (!typingStatus) {
        setTLineStatus(true)
        console.log('hello')
      }
    }, 1200);
  }, [typingStatus])

  // typing delay
  const delay = 10

  // starting typing
  typeJSON(userData, data, setData, delay, setTypingStatus)

  // code style
  const syntaxStyle = {
    ...codeTheme,
    'pre[class*="language-"]': {
      ...codeTheme['pre[class*="language-"]'],
      background: 'none'
    },
    'code[class*="language-"]': {
      ...codeTheme['code[class*="language-"]'],
      background: 'none'
    }
  }

  return (
    <div id='root'>
      <div className="root__note">
        <span><span id='note'>Note: </span>This is a placeholder. I am working on the website, but this looks cool too, doesn't it?!"</span>
      </div>
      <div className='root__code'>
        <SyntaxHighlighter language='json' style={syntaxStyle}>
          {data}
        </SyntaxHighlighter>
      </div>

      <LineBreak typingStatus={typingStatus} />

      <div className='root__contact'>{lineStatus ? <Contact /> : ''}</div>
    </div>
  )
}

export default App
