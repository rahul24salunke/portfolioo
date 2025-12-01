import React, { useState } from 'react'
const Navbar = () => {
    const [active, setActive] = useState('About')
    const menu = ['About', 'Education', 'Projects','Skills','Contact'];

    return (
        <div className=' mt-4 rounded-full  w-auto bg-[#38383898] gap-10 px-3 py-2'>
            <div className='flex gap-5 text-l font-mono'>
                {
                    menu.map((item) => (
                        <div key={item} onClick={() => setActive(item)}
                            className={`relative px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${active === item
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
