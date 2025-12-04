import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { Button } from './components/ui/button'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Body/Home'
import Education from './component/Body/Education'
import ProfileCard from './component/Body/ProfileCard'
import Starts from './component/Starts'
import ProjectCard from './component/Body/ProfileCard'
import Projects from './component/Body/Projects'
import SkillsSection from './component/Body/Skills'
import Contact from './component/Body/Contact'


function App() {
  return (
    <>
      <div className="flex flex-col bg-[#121212] bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px] items-center min-h-screen w-full overflow-x-hidden">
         {/* background stars */}
          <Starts />
          {/*  */}
          <Navbar />
          <div className='flex flex-col lg:flex-row gap-4 lg:gap-2 w-full px-4 lg:px-0'>
            <Contact />
            <Home />
          </div>
          <Education />
          <Projects />
          <SkillsSection/>
      </div>
    </>
  )
}

export default App
