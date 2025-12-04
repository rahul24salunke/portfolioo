import React from 'react'

const Starts = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {Array.from({ length: 150 }).map((_, i) => {
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                const size = Math.random() * 5 + 1;
                const duration = Math.random() * 20 + 10;
                const delay = Math.random() * 5;
                const opacity = Math.random() * 0.5 + 0.3;

                return (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: `${left}%`,
                            top: `${top}%`,
                            width: `${size}px`,
                            height: `${size}px`,
                            opacity: opacity,
                            animation: `float ${duration}s ease-in-out ${delay}s infinite`,
                            boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, 0.5)`
                        }}
                    />
                );
            })}
        </div>
    )
}

export default Starts
