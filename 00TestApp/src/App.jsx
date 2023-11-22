import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className="butt">
   <button>1</button>
   <button>2</button>
   <button>3</button>
   <button>100</button>
   </div>

   <div className="list">
    <ul>
      <li>Email:</li>
      <li>Name:</li>
    </ul>
   </div>
   <div className="photoHolder">
  <img src="https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg" alt="photo" />
   </div>
    </>
  )
}

export default App
