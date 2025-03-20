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
        {/* Footer */}
        <footer className="border-t-1 border-neutral-500 -mt-15">
          <div className="container mx-auto px-4 py-4 flex justify-end">
            <p className="text-sm text-neutral-400">
              made with 1's and 0's. daniel nashed (c) 2025.
            </p>
          </div>
        </footer>
      </div>
    );
  }

