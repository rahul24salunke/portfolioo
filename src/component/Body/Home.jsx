import { Button } from '@/components/ui/button'
import { FileText, Github, Instagram, Linkedin, Twitter, X } from 'lucide-react'
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
            {/* Social Buttons */}
            <div className="flex gap-3 mt-4">
                {/* LinkedIn */}
                <Button className="rounded-2xl px-4 py-2 bg-[#1b1b1b] transition-all duration-300">
                    <a
                        href="https://www.linkedin.com/in/rahulsalunke24/"
                        target='_blank'
                        className="flex items-center gap-2 text-white hover:text-[#52B3C7] hover:scale-110 hover:shadow-[0_0_12px_rgba(10,102,194,0.5)] transition-all duration-300"
                    >
                        <Linkedin size={18} className="transition-all duration-300" />
                        <span className="text-[15px] font-medium">LinkedIn</span>
                    </a>
                </Button>

                {/* GitHub */}
                <Button className="rounded-2xl px-4 py-2 bg-[#1b1b1b] transition-all duration-300">
                    <a
                        href="https://github.com/rahul24salunke"
                        target='_blank'
                        className="flex items-center gap-2 hover:text-[#52B3C7] hover:scale-110 hover:shadow-[0_0_12px_rgba(10,102,194,0.5)] transition-all duration-300"
                    >
                        <Github size={18} className="transition-all duration-300" />
                        <span className="text-[15px] font-medium">GitHub</span>
                    </a>
                </Button>

                {/* Twitter / X */}
                <Button className="rounded-2xl px-4 py-2 bg-[#1b1b1b] transition-all duration-300">
                    <a
                        href="https://x.com/rahul2salunke"
                        target='_blank'
                        className="flex items-center gap-2 hover:text-[#52B3C7] hover:scale-110 hover:shadow-[0_0_12px_rgba(10,102,194,0.5)] transition-all duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            className="w-[18px] h-[18px] transition-all duration-300"
                            fill="currentColor"
                        >
                            <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
                        </svg>
                        <span className="text-[15px] font-medium">Twitter</span>
                    </a>
                </Button>

                {/* Resume */}
                <Button className="rounded-2xl px-4 py-2 bg-[#1b1b1b] transition-all duration-300">
                    <a href="/RahulSalunke.pdf"
                        target='_blank'
                        className="flex items-center gap-2 hover:text-[#52B3C7] hover:scale-110 hover:shadow-[0_0_12px_rgba(10,102,194,0.5)] transition-all duration-300"
                    >
                        <FileText size={18} className="transition-all duration-300" />
                        <span className="text-[15px] font-medium">Resume</span>
                    </a>
                </Button>
            </div>
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