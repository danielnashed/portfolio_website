"use client";
import { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Navbar from "../components/NavBar";
import ScrollProgressBar from "../components/ScrollProgressBar";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";


export default function Home() {
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    // Only render components after mounting to avoid hydration mismatch
    if (!mounted) {
      return (
        <div className="bg-black text-white font-mono h-screen relative">
          <div className="text-xl font-normal p-4">daniel_nashed.</div>
          <div className="h-screen flex justify-center items-center">
            <h1 className="text-3xl md:text-5xl font-mono">Loading...</h1>
          </div>
        </div>
      );
    }
  
    return (
      <div className="bg-black text-white font-mono min-h-screen relative">
        <Navbar />
        <ScrollProgressBar />
        
        {/* Main content container with ID for scroll targeting */}
        <div id="main-content" className="scroll-smooth">
          <HomeSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    );
  }

// export default function Home() {
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);

//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Only render scroll components after mounting to avoid hydration mismatch
//   if (!mounted) {
//     return (
//       <div className="bg-black text-white h-screen relative">
//         <div className="text-xl font-bold p-4">daniel_nashed.</div>
//         <div className="h-screen flex justify-center items-center">
//           <h1 className="text-3xl md:text-5xl font-mono">Loading...</h1>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-black text-white font-mono min-h-screen relative">
//       {/* Navbar */}
//       <Navbar />
//       <ScrollProgressBar />
//       {/* <nav className="fixed top-0 w-full flex justify-between items-center p-4 bg-black z-10">
//         <div 
//           className="text-xl font-bold cursor-pointer" 
//           onClick={() => scroll.scrollToTop()}
//         >
//           daniel_nashed.
//         </div>
//         <div className="flex space-x-4">
//           {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
//             <ScrollLink
//               key={section}
//               to={section}
//               smooth={true}
//               duration={500}
//               className="cursor-pointer hover:font-bold transition-all"
//               spy={true}
//               activeClass="text-green-500"
//               offset={0} // Increased offset to account for navbar height
//             >
//               {section}.
//             </ScrollLink>
//           ))}
//         </div>
//       </nav> */}

//       {/* Scroll Progress Bar */}
//       <div className="fixed top-12 left-0 w-full h-1 bg-neutral-700 z-10">
//         <div 
//           className="h-full bg-white transition-all duration-300" 
//           style={{ width: `${scrollProgress}%` }}
//         />
//       </div>

//       {/* Sections */}
//       <section id="home" className="h-screen flex justify-center items-center snap-start pt-16">
//         <h1 className="text-3xl md:text-5xl font-mono">I am a developer.</h1>
//       </section>
      
//       <section id="about" className="h-screen flex justify-center items-center snap-start pt-16">
//         <h2 className="text-4xl font-mono">About Me</h2>
//       </section>
      
//       <section id="experience" className="h-screen flex justify-center items-center snap-start pt-16">
//         <h2 className="text-4xl font-mono">Experience</h2>
//       </section>
      
//       <section id="projects" className="h-screen flex justify-center items-center snap-start pt-16">
//         <h2 className="text-4xl font-mono">Projects</h2>
//       </section>
      
//       <section id="contact" className="h-screen flex justify-center items-center snap-start pt-16">
//         <h2 className="text-4xl font-mono">Contact Me</h2>
//       </section>
//     </div>
//   );
// }