import { FileText, Github, Instagram, Linkedin, X } from 'lucide-react'
import React from 'react'

const Home = () => {
    return (

        <div className="max-w-5xl mt-10 rounded-xl flex flex-col items-center bg-[#38383878] backdrop-blur-xl p-8 text-white">
            {/* Profile Image */}
            <div className="relative mb-6">
                <img
                    src="/icon.jpg"
                    alt="profile"
                    className="w-36 h-36 rounded-full object-cover border-4 border-white/20 shadow-xl"
                />
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-center font-mono">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Rahul Salunke</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg text-gray-200 max-w-2xl text-center leading-relaxed font-mono">
                Full-Stack Developer who enjoys crafting beautiful UIs, 
                building scalable backend systems, 
                and creating meaningful digital experiences. 
                Whether it's designing a smooth frontend, architecting an API, or solving a complex problem,
                I’m already diving into the solution with curiosity—and a cup of coffee.
            </p>
            <Linkedin/>
            <Github/>
            <FileText/>
            <X/>
            <Instagram/>
        </div>

    )
}

export default Home
{/* <div className='max-w-5xl max-h-full mt-5 rounded-xl flex flex-col items-center bg-[#38383878] p-5 text-white '>
            <div className="flex justify-center items-center mb-5">
                <img
                    src="/icon.jpg"
                    alt=""
                    className="rounded-full h-32 w-32 object-cover"
                />
            </div>
            <div className="text-justify overflow-y-scroll scrollbar-hide h-[70vh] w-full px-3">
                <h2>About me</h2>
                <h3>I am rahul salunke</h3>
                I’m a passionate software developer focused on building clean, user-centered, and impactful digital experiences.
                I enjoy turning ideas into functional products—whether it’s a web app, mobile application, or automation tool.

                I love learning new technologies, refining UI/UX, and solving real-world problems through code.
                Right now, I’m exploring advanced React patterns, modern backend architecture, and AI integrations to build smarter applications.

            </div>
        </div> */}