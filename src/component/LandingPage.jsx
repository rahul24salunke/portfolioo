import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code } from 'lucide-react'
import Starts from './Starts';

const LandingPage = ({ onEnter }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after mount
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212] bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px] overflow-hidden">
            {/* Background stars */}
            <Starts />

            {/* Decorative gradient orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#52B3C7]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
                {/* Profile Image */}
                <div 
                    className={`relative mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#52B3C7] to-purple-500 rounded-full blur-2xl opacity-60 animate-pulse" />
                    <img
                        src="/icon.jpg"
                        alt="Rahul Salunke"
                        className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-[#52B3C7]/40 shadow-2xl ring-4 ring-[#52B3C7]/20"
                    />
                </div>

                {/* Welcome Text */}
                <div 
                    className={`mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-mono mb-4">
                        <span className="bg-gradient-to-r from-[#52B3C7] via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Welcome
                        </span>
                    </h1>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Code className="w-6 h-6 sm:w-8 sm:h-8 text-[#52B3C7]" />
                        <p className="text-xl sm:text-2xl lg:text-3xl font-mono text-gray-300">
                            I'm Rahul Salunke
                        </p>
                        <Code className="w-6 h-6 sm:w-8 sm:h-8 text-[#52B3C7]" />
                    </div>
                    <p className="text-lg sm:text-xl lg:text-2xl font-mono text-gray-400">
                        Full-Stack Developer & Creative Problem Solver
                    </p>
                </div>

                {/* Description */}
                <p 
                    className={`max-w-2xl mb-10 text-base sm:text-lg lg:text-xl font-mono text-gray-400 leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    Crafting beautiful interfaces, building scalable systems,
                    <br className="hidden sm:block" />
                    and turning ideas into meaningful digital experiences.
                </p>

                {/* Enter Button */}
                <Button
                    onClick={onEnter}
                    className={`group rounded-2xl px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#52B3C7] to-blue-500 hover:from-[#52B3C7]/90 hover:to-blue-500/90 text-white font-mono text-lg sm:text-xl shadow-lg shadow-[#52B3C7]/40 hover:shadow-[#52B3C7]/60 hover:scale-105 transition-all duration-500 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <span className="flex items-center gap-2">
                        Enter Portfolio
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                </Button>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center gap-2 text-[#52B3C7]/60">
                        <span className="text-xs font-mono">Scroll</span>
                        <div className="w-0.5 h-8 bg-[#52B3C7]/40 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage

