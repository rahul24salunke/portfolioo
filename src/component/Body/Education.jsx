import { Badge } from '@/components/ui/badge';
import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { motion } from 'framer-motion';
const timelineData = [
    {
        id: 1,
        title: 'B.Tech In Computer Science ',
        institution: 'Rajarambapu Institute of Technolgy,Sangli',
        period: 'November 2022 – June 2026',
        description: 'Gained hands-on experience in full-stack development with a strong focus on modern web technologies.Built solid fundamentals in programming, databases, and application development through academic projects.',
        Result: '8.1/10'
    },
    {
        id: 2,
        title: 'Higher Secondary Education (XII)',
        institution: 'G.A. Arwade College, Sangli',
        period: 'Augest 2020 – March 2022',
        description: 'Completed Higher Secondary Education with a focus on Physics, Chemistry, and Mathematics (PCM).',
        Result: '74.5%'
    },
    {
        id: 3,
        title: 'Secondary School Education (X)',
        institution: 'Sangli High School, Sangli',
        period: 'Augest 2020',
        description: 'Completed secondary education with a focus on science and mathematics.',
        Result: '89.2%'
    },
];
const TimelineItem = ({ item, isLast, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative ${!isLast ? 'pb-6 sm:pb-8' : ''}`}
        >
            {/* Vertical Line Connector (Hidden on the last item) */}
            {!isLast && (
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    className="absolute top-0 left-1 sm:left-2 w-0.5 bg-gray-600 h-full origin-top"
                    aria-hidden="true"
                />
            )}

            {/* Timeline Dot/Point */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: index * 0.2 + 0.2, stiffness: 200 }}
                className="absolute left-0.5 sm:left-1 top-1.5 h-2 w-2 rounded-full bg-[#52B3C7] ring-2 sm:ring-3 ring-gray-900 z-10"
            />

            {/* Content Block */}
            <div className="ml-6 sm:ml-8 pl-1 pb-4">
                {/* Title and Institution */}
                <div className='flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0'>
                    <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-mono font-bold text-gray-100 mb-1 leading-tight">{item.title}</h3>
                    </div>
                    <Badge variant={"outline"} className='bg-[#52B3C7] text-black font-mono px-2 text-xs sm:text-sm lg:text-[15px] w-fit'>{item.Result}</Badge>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mb-2 font-mono">
                    {item.institution}
                </p>

                {/* Period (Highlighted in blue) */}
                <p className="text-[#52B3C7] text-xs sm:text-sm font-mono mb-2">
                    {item.period}
                </p>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base font-mono">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
};

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl mt-6 lg:mt-10 rounded-xl flex flex-col items-center bg-[#38383878] border-1 border-gray-700 backdrop-blur-xl p-4 sm:p-6 lg:p-8 text-white mb-10 mx-4 lg:mx-0"
        >
            <div className="w-full max-w-5xl pt-4 sm:pt-6 lg:pt-8">

                {/* Section Header with Icon */}
                {/* The icon is aligned to the left using negative margin to sit on the same vertical axis as the timeline dots. */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 sm:mb-8 flex items-center pl-2 sm:pl-4"
                >

                    {/* Icon (Stylized Cube - aligned to the timeline axis) */}
                    <div className="text-[#52B3C7] flex-shrink-0 -ml-1 sm:-ml-2 mr-2 sm:mr-3">
                        <div className=' rounded-2xl p-1.5 sm:p-2 shadow-[-4px_-4px_10px_rgba(128,128,128,0.25)]'>
                            <FaGraduationCap className="h-6 w-6 sm:h-8 sm:w-8"/>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-mono text-white tracking-tight">
                            Education
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

                {/* Timeline Container */}
                <div className="relative pl-2 sm:pl-4">
                    {timelineData.map((item, index) => (
                        <TimelineItem
                            key={item.id}
                            item={item}
                            isLast={index === timelineData.length - 1}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </motion.div>
    )
}

export default Education
