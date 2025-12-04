import { Button } from '@/components/ui/button'
import { FileText, Github, Instagram, Linkedin, Twitter, X } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="w-full lg:flex-1 max-w-5xl mt-6 lg:mt-10 items-center justify-center rounded-xl flex flex-col border-1 border-gray-700 items-center bg-[#38383878] backdrop-blur-xl p-4 sm:p-6 lg:p-8 text-white mx-4 lg:mx-0"
        >
            {/* Profile Image */}
                <motion.div 
                    variants={itemVariants}
                    className="relative mb-4 sm:mb-6"
                >
                <motion.img
                    src="/icon.jpg"
                    alt="profile"
                    className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full object-cover border-4 border-white/20 shadow-xl"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />
            </motion.div>

            {/* Heading */}
            <motion.h1 
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-center font-mono px-2"
            >
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Rahul Salunke</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
                variants={itemVariants}
                className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-200 max-w-3xl text-center leading-relaxed font-mono px-2"
            >
                Full-Stack Developer who enjoys crafting beautiful UIs,
                building scalable backend systems,
                and creating meaningful digital experiences.
                Whether it's designing a smooth frontend, architecting an API, or solving a complex problem,
                I'm already diving into the solution with curiosity—and a cup of coffee.
            </motion.p>
            {/* Social Buttons */}
            <motion.div 
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 px-2"
            >
                {/* LinkedIn */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button className="rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1b1b1b] transition-all duration-300">
                        <a
                            href="https://www.linkedin.com/in/rahulsalunke24/"
                            target='_blank'
                            className="flex items-center gap-1.5 sm:gap-2 text-white hover:text-[#52B3C7] hover:shadow-[0_0_12px_rgba(10,102,194,0.5)] transition-all duration-300"
                        >
                            <Linkedin size={16} className="sm:w-[18px] sm:h-[18px] transition-all duration-300" />
                            <span className="text-xs sm:text-sm lg:text-[15px] font-medium">LinkedIn</span>
                        </a>
                    </Button>
                </motion.div>

                {/* GitHub */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button className="rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1b1b1b] transition-all duration-300">
                        <a
                            href="https://github.com/rahul24salunke"
                            target='_blank'
                            className="flex items-center gap-1.5 sm:gap-2 hover:text-[#52B3C7] hover:shadow-[0_0_12px_rgba(10,102,194,0.5)] transition-all duration-300"
                        >
                            <Github size={16} className="sm:w-[18px] sm:h-[18px] transition-all duration-300" />
                            <span className="text-xs sm:text-sm lg:text-[15px] font-medium">GitHub</span>
                        </a>
                    </Button>
                </motion.div>

                {/* Twitter / X */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button className="rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1b1b1b] transition-all duration-300">
                        <a
                            href="https://x.com/rahul2salunke"
                            target='_blank'
                            className="flex items-center gap-1.5 sm:gap-2 hover:text-[#52B3C7] hover:shadow-[0_0_12px_rgba(10,102,194,0.5)] transition-all duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-all duration-300"
                                fill="currentColor"
                            >
                                <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
                            </svg>
                            <span className="text-xs sm:text-sm lg:text-[15px] font-medium">Twitter</span>
                        </a>
                    </Button>
                </motion.div>

                {/* Resume */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button className="rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1b1b1b] transition-all duration-300">
                        <a href="/RahulSalunke.pdf"
                            target='_blank'
                            className="flex items-center gap-1.5 sm:gap-2 hover:text-[#52B3C7] hover:shadow-[0_0_12px_rgba(10,102,194,0.5)] transition-all duration-300"
                        >
                            <FileText size={16} className="sm:w-[18px] sm:h-[18px] transition-all duration-300" />
                            <span className="text-xs sm:text-sm lg:text-[15px] font-medium">Resume</span>
                        </a>
                    </Button>
                </motion.div>
            </motion.div>
            </motion.div>

    )
}

export default About;