import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './compnentes/navbar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
    <Outlet />
    </>
  )
}

export default App
