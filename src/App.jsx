import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Homepage } from './Components/Homepage'
import Edited from './Components/Edited'
import { Link, NavLink } from 'react-router-dom'

function App() {

  return (
    <div className="App">
     <Homepage />
    </div>
  )
}

export default App
