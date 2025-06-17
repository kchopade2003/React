import React, { useState } from 'react'

const UseStateHook1 = () => {

  const [marks, setMarks] = useState(0);
  return (
    <div>
        <h1>Marks - {marks}</h1>
        <button onClick={() => setMarks(marks + 1)}>Increment Marks</button>
    </div>
  )
}

export default UseStateHook1