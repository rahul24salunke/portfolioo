import { Badge } from '@/components/ui/badge';
import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
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
const TimelineItem = ({ item, isLast }) => {
    return (
        <div className={`relative ${!isLast ? 'pb-8' : ''}`}>
            {/* Vertical Line Connector (Hidden on the last item) */}
            {!isLast && (
                <div
                    className="absolute top-0 left-2 w-0.5 bg-gray-600 h-full"
                    aria-hidden="true"
                />
            )}

            {/* Timeline Dot/Point */}
            <div className="absolute left-1 top-1.5 h-2 w-2 rounded-full bg-[#52B3C7] ring-3 ring-gray-900 z-10" />

            {/* Content Block */}
            <div className="ml-8 pl-1 pb-4">
                {/* Title and Institution */}
                <div className='flex justify-between'>
                    <div>
                        <h3 className="text-lg font-mono font-bold text-gray-100 mb-1 leading-tight">{item.title}</h3>
                    </div>
                    <Badge variant={"outline"} className='bg-[#52B3C7] text-black font-mono px-2 text-[15px]'>{item.Result}</Badge>
                </div>
                <p className="text-sm text-gray-400 mb-2 font-mono">
                    {item.institution}
                </p>

                {/* Period (Highlighted in blue) */}
                <p className="text-[#52B3C7] text-sm font-mono mb-2">
                    {item.period}
                </p>

                {/* Description */}
                <p className="text-gray-300  text-base font-mono">
                    {item.description}
                </p>
            </div>
        </div>
    );
};

const Education = () => {
    return (
        <div className="max-w-5xl mt-10 rounded-xl flex flex-col items-center bg-[#38383878] backdrop-blur-xl p-8 text-white mb-10">
            <div className="w-full max-w-4xl pt-8">

                {/* Section Header with Icon */}
                {/* The icon is aligned to the left using negative margin to sit on the same vertical axis as the timeline dots. */}
                <div className="mb-8 flex items-center pl-4">

                    {/* Icon (Stylized Cube - aligned to the timeline axis) */}
                    <div className="text-[#52B3C7] flex-shrink-0 -ml-2 mr-3">
                        <div className=' rounded-2xl p-2 shadow-[-8px_-8px_20px_rgba(128,128,128,0.25)]'>
                            <FaGraduationCap className="h-8 w-8"/>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-4xl font-mono  text-white tracking-tight">
                            Education
                        </h1>
                        <div className="h-0.5 w-12 bg-[#52B3C7] mt-2 rounded-full" />
                    </div>
                </div>

                {/* Timeline Container */}
                <div className="relative pl-4">
                    {timelineData.map((item, index) => (
                        <TimelineItem
                            key={item.id}
                            item={item}
                            isLast={index === timelineData.length - 1}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Education
