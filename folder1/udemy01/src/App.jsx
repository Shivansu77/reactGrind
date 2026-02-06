import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const handleincrement=()=>{
      setCount(count+1);
  }
  const handledecrement=()=>{
      setCount(count-1);
  }
  const handlereset=()=>{
      setCount(0);
  }

  return (
    <>
     <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={()=>handleincrement()}>increment</button>
      <button onClick={()=>handledecrement()}>decrement </button>
      <button onClick={()=>handlereset()}>reset</button>
     </div>
    </>
  )
}

export default App
