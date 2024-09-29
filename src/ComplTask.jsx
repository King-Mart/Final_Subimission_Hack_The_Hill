import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ComplTask() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <div className="App">
          <div style={{backgroundColor : "#FF474C"}} >
          <h1 >Today's </h1>
          <h2>Here goes the task</h2>
          </div>
          <div style={{backgroundColor : "blue"}} className="logo-container">
            This is a description of themission
          </div>
  
  
        <footer style={{backgroundColor : "black"}}><h3>Nav bar</h3>
        <li>Current Task</li>
        <li>Completed Tasks</li>
        <li>Settings</li>
        </footer>
        </div>
      </>
  
    )
  }
  
  export default ComplTask