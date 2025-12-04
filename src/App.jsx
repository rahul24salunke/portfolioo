import { useState } from 'react'
import './App.css'
import './index.css'
import LandingPage from './component/LandingPage'
import Navbar from './component/Navbar/Navbar'
import Education from './component/Body/Education'
import Starts from './component/Starts'
import Projects from './component/Body/Projects'
import SkillsSection from './component/Body/Skills'
import Footer from './component/Footer'
import About from './component/Body/About'


function App() {
  const [showLanding, setShowLanding] = useState(true);

  const handleEnter = () => {
    setShowLanding(false);
    // Scroll to top after entering
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showLanding) {
    return <LandingPage onEnter={handleEnter} />;
  }

  return (
    <>
      <div className="flex flex-col bg-[#121212] bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px] items-center min-h-screen w-full overflow-x-hidden">
         {/* background stars */}
          <Starts />
          {/*  */}
          <Navbar />
          
          <div id="about">
            <About />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="skills">
            <SkillsSection/>
          </div>
          <Footer />
      </div>
    </>
  )
}

export default App
