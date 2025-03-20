import React, { useEffect, useRef, useState } from 'react';
import EducationCard from '../components/EducationCard';
import ExpertiseCard from '../components/ExpertiseCard';
import TechStackGraph from './TechStackGraph';
import jsonData from '../data.json';

export default function AboutSection() {
    const containerRef = useRef();
    const [isBrowser, setIsBrowser] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
    const { intro, educations, expertise, skillGroups } = jsonData;

    useEffect(() => {
        // Set browser state on client-side
        setIsBrowser(true);

        // Update dimensions on mount and window resize
        const updateDimensions = () => {
            if (containerRef.current) {
            const { width } = containerRef.current.getBoundingClientRect();
            setDimensions({
                width: width,
                height: 600
            });
            }
        };
        
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };

      }, []);

  return (
    <section id="about" className="min-h-screen bg-black py-20">
        <div className="container mx-auto px-4">
            <div className="border-1 border-neutral-500">
                <h2 className="text-4xl text-white font-light text-center py-6 border-b-1 border-neutral-500">
                // About Me
                </h2>
                <p className="text-lg mb-2 p-10 text-justify">{intro}</p>
                <h3 className="text-3xl text-white font-light text-center py-6 border-b-1 border-neutral-500">
                Education
                </h3>
                <div className="flex flex-col p-8">
                    {educations.map((exp, index) => (
                        <div key={index} className="p-4">
                        <EducationCard 
                            period={exp.period}
                            program={exp.program}
                            university={exp.university}
                            description={exp.description}
                            link={exp.link}
                        />
                        </div>
                    ))}
                </div>
                <h3 className="text-3xl text-white font-light text-center py-6 border-b-1 border-neutral-500">
                Expertise
                </h3>
                <div className="grid grid-cols-3 gap-6 p-10">
                    {expertise.map((exp, index) => (
                    <ExpertiseCard key={index} {...exp} />
                    ))}
                </div>
                <h3 className="text-3xl text-white font-light text-center py-6 border-b-1 border-neutral-500">
                Tech Stack
                </h3>
                <div ref={containerRef}>
                    <TechStackGraph skillGroups={skillGroups} dimensions={dimensions} />
                </div>
            </div>
        </div>
    </section>
  );
}
