import React, { useState } from 'react'

const UseStateHook2 = () => {

    const initial = 0
    const[marks, setMarks] = useState(initial)
    const incrementFive = () =>{
      for(let i = 0; i < 5; i++){
        setMarks(pm => pm + 1);
      }
    }
  return (
    <div>
        <h1>Marks - {marks}</h1>
        <button onClick={() => setMarks(pm => pm + 1)}>Increment</button><br></br>
        <button onClick={() => setMarks(pm => pm - 1)}>Decrement</button><br></br>
        <button onClick={() => setMarks(initial)}>Reset</button><br></br>

        <button onClick={incrementFive}>Increment by five</button>
    </div>
  )
}

export default UseStateHook2