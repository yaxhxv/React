import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
let [counter, setCounter] = useState(0);

let addValue = () =>{
  if(counter >=0 && counter < 20){
    setCounter(counter +1);
  }
  
}

let decValue = () =>{
  if(counter >0)
  setCounter(counter -1)
}


  return (
    <> 
    <h1>React counter app</h1>
    <h2>Counter value = {counter}</h2>
    <button onClick={addValue}>+1</button>
    <button onClick={decValue}>-1</button>

    </>
  )
}

export default App
