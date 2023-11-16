import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  let [count, setCount] = useState(0);

  let addValue = ()=>{
    if(count >=0 && count<20)
    setCount(count +1);
  }

  let decValue = ()=>{
    if(count >0)
    setCount(count -1);
  }



return(
  <div>
    <h1>React Counter App</h1>
    <h2>The Count is : {count}</h2>
    <button onClick={addValue}>+1</button>
    <button onClick={decValue}>-1</button>
  </div>
)
}

export default App

