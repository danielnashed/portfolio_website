"use client";
import { Link as ScrollLink } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";


export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full flex justify-between items-center p-4 bg-black z-10">
        <div 
            className="text-xl font-normal cursor-pointer" 
            onClick={() => scroll.scrollToTop()}
        >
            daniel_nashed.
        </div>
        <div className="flex space-x-4">
            {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
            <ScrollLink
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:font-bold transition-all"
                spy={true}
                activeClass="text-green-500"
                offset={0}
                isDynamic={true}
            >
                {section}.
            </ScrollLink>
            ))}
        </div>
        </nav>
  );
}