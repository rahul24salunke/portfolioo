import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [active, setActive] = useState('About')
    const menu = ['About', 'Education', 'Projects', 'Skills'];

    // Map menu items to section IDs (lowercase)
    const getSectionId = (menuItem) => {
        return menuItem.toLowerCase();
    };

    // Smooth scroll function
    const scrollToSection = (menuItem) => {
        const sectionId = getSectionId(menuItem);
        const element = document.getElementById(sectionId);
        
        if (element) {
            // Use scrollIntoView with offset for navbar
            const navbarOffset = 100; // Offset for navbar and spacing
            
            const elementTop = element.offsetTop;
            const offsetPosition = elementTop - navbarOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            setActive(menuItem);
        }
    };

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = menu.map(item => ({
                id: getSectionId(item),
                name: item
            }));

            // Find which section is currently in view
            const scrollPosition = window.scrollY + 150; // Offset for navbar

            // Check sections from bottom to top to find the active one
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionBottom = sectionTop + sectionHeight;
                    
                    // Check if scroll position is within this section
                    if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionBottom - 100) {
                        setActive(sections[i].name);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Call once on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, [menu]);

    return (
        <div className='mt-4 rounded-full w-auto max-w-[95vw] bg-[#38383898] gap-2 sm:gap-5 px-2 sm:px-3 py-2 mx-4 sm:mx-0 overflow-x-auto scrollbar-hide'>
            <div className='flex gap-2 sm:gap-5 text-sm sm:text-base lg:text-l font-mono whitespace-nowrap'>
                {
                    menu.map((item) => (
                        <div 
                            key={item} 
                            onClick={() => scrollToSection(item)}
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
