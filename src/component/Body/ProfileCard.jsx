

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Bot, Ear, BriefcaseBusiness } from 'lucide-react';

const iconsMap = {
    Bot,
    Ear,
    BriefcaseBusiness
}

export default function ProjectCard({ title, icon, description, tags, githubLink, liveLink }) {
    const Icon = iconsMap[icon];
    return (
        <Card
            className="
        bg-[#38383878]
        backdrop-blur-xl 
        border border-cyan-500/20 
        rounded-2xl 
        transition-all duration-300 
        hover:-translate-y-1
        w-full max-w-2xl
        p-4 sm:p-6
        flex flex-col
      "
        >

            {/* HEADER */}
            <CardHeader className="">
                <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex-shrink-0">
                        <span className="text-cyan-400 text-lg">{
                            Icon && <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        }</span>
                    </div>
                    <div className="min-w-0 flex-1">
                        <CardTitle className="text-xl sm:text-2xl text-white font-mono">
                            {title}
                        </CardTitle>
                        <div className="h-0.5 w-8 sm:w-12 bg-[#52B3C7] mt-2 rounded-full" />
                    </div>
                </div>
            </CardHeader>

            {/* CONTENT */}
            <CardContent className="flex justify-between flex-col gap-3">
                {/* DESCRIPTION */}
                <p className="text-gray-300 justify-between font-mono text-sm sm:text-base leading-relaxed">
                    {description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {tags.map(
                        (tag) => (
                            <span
                                key={tag}
                                className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full bg-black font-mono
                           text-white border border-cyan-500/20"
                            >
                                {tag}
                            </span>
                        )
                    )}
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col  sm:flex-row gap-2 sm:gap-4 pt-2">
                    <a
                        href={liveLink}
                        className="
              flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 
              rounded-xl border border-cyan-500/30 font-mono
              text-white bg-[#1b1b1b] hover:text-[#52B3C7] hover:scale-110 hover:shadow-[0_0_12px_rgba(10,102,194,0.5)] transition-all duration-300 transition-all text-sm sm:text-base
            "
                    >
                        <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                        Live Here
                    </a>

                    <a
                        href={githubLink}
                        className="
              flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2
              rounded-xl border border-cyan-500/30 
              text-white bg-[#1b1b1b] hover:text-[#52B3C7] hover:scale-110 hover:shadow-[0_0_12px_rgba(10,102,194,0.5)] transition-all duration-300 transition-all font-mono text-sm sm:text-base">
                        <Github size={14} className="sm:w-4 sm:h-4" />
                        Source
                    </a>
                </div>
            </CardContent>
        </Card>
    );
}
