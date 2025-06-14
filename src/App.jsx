import { useState } from 'react'
import Intro1 from './components/Intro1'
import Intro2 from './components/Intro2'
import Hello from './JSX/Hello'
import Student1 from './Props/Student1'
import './App.css'
import Student2 from './Props/Student2'
import Enroll from './state/Enroll'
import Counter from './state/Counter'
import UseStateHook1 from './useState/UseStateHook1'
import UseStateHook2 from './useState/UseStateHook2'
import UseStateHook3 from './useState/UseStateHook3'
import UseStateHook4 from './useState/UseStateHook4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Welcome everyone</h1>
      {/* Component */}
      {/* <Intro1></Intro1>
      <Intro2></Intro2> */}
      
      {/* JSX */}
      {/* <Hello></Hello> */}
      
      {/* Props */}
      {/* <Student1 name="Rimaru" rno="05">
        <h3>Student 1</h3>
      </Student1> */}
      {/* <Student2 name="Gabimaru" rno="05">
        <h3>Student2</h3>
      </Student2> */}

      {/* State */}
      {/* <Enroll></Enroll> */}
      {/* <Counter></Counter> */}

      {/* UseState */}
      {/* <UseStateHook1></UseStateHook1> */}
      {/* <UseStateHook2></UseStateHook2> */}
      {/* <UseStateHook3></UseStateHook3> */}
      <UseStateHook4></UseStateHook4>

    </div>
  )
}

export default App
