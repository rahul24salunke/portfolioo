import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Body/Home'
import Education from './component/Body/Education'


function App() {
  return (
    <>
     <div className=' flex flex-col bg-[#121212] items-center min-h-screen '>
      <Navbar />
      <Home />
      <Education />
     </div>
    </>
  )
}

export default App
