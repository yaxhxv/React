import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
let [counter, setCounter] = useState(0);
// add the values only uptil 20
let addValue = () =>{
  if(counter >=0 && counter < 20){
    setCounter(counter +1);
  }
  
}

// decrease the values only up to 0

let decValue = () =>{
  if(counter >0)
  setCounter(counter -1)
}


  return (
    <> 
    <h1>React counter app</h1>
    <h2>Counter value = {counter}</h2>
    <button onClick={addValue}><h3>+1</h3></button>
    <button onClick={decValue}><h3>-1</h3></button>

    </>
  )
}

export default App

