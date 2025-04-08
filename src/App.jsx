import { useState } from 'react'
import Intro1 from './components/Intro1'
import Intro2 from './components/Intro2'
import Hello from './JSX/Hello'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Welcome everyone</h1>
      <Intro1></Intro1>
      <Intro2></Intro2>
      <Hello></Hello>
    </div>
  )
}

export default App
