import React from 'react'
import ProfileCard from './ProfileCard'
import { FaProjectDiagram } from 'react-icons/fa'
import { icons } from 'lucide-react'
import { motion } from 'framer-motion'



const project=[
    {
        title:"Refacter X ",
        icon:"Bot",
        description:"Refactor X is an online AI-powered code editor and assistant. It allows users to write, run, generate, modify, review, and explain code in multiple languages (Python, Java, C++, C) directly in the browser. The app features Monaco Editor, live code execution, and AI modules for code generation, refactoring, review, and explanation.",
        tags:["React", "TailwindCss", "GenAi", "Code Genration","Express.js","Node.js"],
        githubLink:"https://github.com/rahul24salunke/Refactor-x",
        liveLink:"https://refactor-bice.vercel.app/"
    },
    {
        title:"Deafso",
        icon:"Ear",
        description:"Deafso is an accessibility-focused web application built with React, TailwindCSS, PostgreSQL, and Prisma ORM. It features RAG-powered subject-specific dialogues and a text-to-sign language translator using animated sign-gesture videos, enabling more inclusive and expressive communication.",
        tags:["React", "TailwindCss", "RAG","PostgreSql","Express.js", "Text to Sign Language","Node.js"],
        githubLink:"https://github.com/rahul24salunke/deafso-frontend",
        liveLink:""
    },
    {
        title:"Job Portal",
        icon:"BriefcaseBusiness",
        description:"A comprehensive job portal web application that connects job seekers with employers. The platform allows users to create profiles, upload resumes, and search for job listings based on various criteria such as location, industry, and job type. Employers can post job openings, review applications, and manage candidate communications. The application features a user-friendly interface, advanced search functionality, and secure authentication to ensure a seamless experience for both job seekers and employers.",
        tags:["React", "TailwindCss", "Node.js","MongoDB","Express.js"],
        githubLink:"https://github.com/rahul24salunke/JobPortal",
        liveLink:""
    }
]
const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="w-full max-w-5xl mt-6 lg:mt-10 rounded-xl flex-col-2 gap-3 bg-[#38383878] border-1 border-gray-700 backdrop-blur-xl p-4 sm:p-6 lg:p-8 text-white mb-10 mx-4 lg:mx-0"
        >
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='flex items-center'
            >
                <div className='text-[#52B3C7] mr-2 sm:mr-3 rounded-2xl p-1.5 sm:p-2 shadow-[-4px_-4px_10px_rgba(128,128,128,0.25)]'>
                    <FaProjectDiagram className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-mono text-white tracking-tight">
                        Projects
                    </h1>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "3rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="h-0.5 sm:w-12 bg-[#52B3C7] mt-2 rounded-full"
                    />
                </div>

            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8'>
                {
                    project.map((projectItem, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.6,
                                        ease: "easeOut"
                                    }
                                }
                            }}
                        >
                            <ProfileCard
                                title={projectItem.title}
                                icon={projectItem.icon}
                                description={projectItem.description}
                                tags={projectItem.tags}
                                githubLink={projectItem.githubLink}
                                liveLink={projectItem.liveLink}
                            />
                        </motion.div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Projects
