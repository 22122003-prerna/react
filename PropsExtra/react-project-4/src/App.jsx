import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button';

function App() {
const[count, setCount] = useState(0);

function handleClick () {
  setCount(count+1);
}
  return (
    <div>
  
     <Button handleClick = {handleClick} text = "Click Me" >
     <h1>{count}</h1>
     </Button>
      {/* <h1>Prerna Jain</h1>
        <p>My name is prerna</p> */}
      
    </div>
    
  )
}

export default App
