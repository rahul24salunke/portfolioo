import React, { useState } from 'react'
const Navbar = () => {
    const [active, setActive] = useState('About')
    const menu = ['About', 'Education', 'Projects','Skills'];

    return (
        <div className='mt-4 rounded-full w-auto max-w-[95vw] bg-[#38383898] gap-2 sm:gap-5 px-2 sm:px-3 py-2 mx-4 sm:mx-0 overflow-x-auto scrollbar-hide'>
            <div className='flex gap-2 sm:gap-5 text-sm sm:text-base lg:text-l font-mono whitespace-nowrap'>
                {
                    menu.map((item) => (
                        <div key={item} onClick={() => setActive(item)}
                            className={`relative px-2 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer transition-all duration-300 ${active === item
                                    ? "bg-white/10 text-white shadow-[0_0_5px_rgba(255,255,255,0.3)]"
                                    : "text-gray-300 hover:text-white"}`}>
                            {item}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar
