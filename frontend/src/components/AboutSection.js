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

    // const intro = 'I am a motivated software engineer passionate about leveraging AI to solve real-world problems and drive innovation. At Johns Hopkins, I’ve demonstrated leadership and technical expertise across multiple impactful roles';

    // const educations = [
    //     {
    //       period: "2023 - 2025",
    //       program: "MS in Computer Science",
    //       university: "Johns Hopkins University",
    //       description: "Description of responsibilities and achievements in this role.",
    //       link: "https://project1.example.com"
    //     },
    //     {
    //         period: "2022 - 2023",
    //         program: "Self-Driving Car Engineer Nanodegree",
    //         university: "Udacity",
    //         description: "Description of responsibilities and achievements in this role.",
    //         link: "https://project1.example.com"
    //       },
    //     {
    //         period: "2016- 2020",
    //         program: "BS in Mechanical Engineering",
    //         university: "UCLA",
    //         description: "Description of responsibilities and achievements in this role.",
    //         link: "https://project1.example.com"
    //       },
    // ];

    // const expertise = [
    //     {
    //         title: "Full-Stack Software Dev",
    //         logo: "Johns Hopkins University",
    //         description: "Description of responsibilities and achievements in this role.",
    //     },
    //     {
    //         title: "Machine Learning",
    //         logo: "Johns Hopkins University",
    //         description: "Description of responsibilities and achievements in this role.",
    //     },
    //     {
    //         title: "AI Integration",
    //         logo: "Johns Hopkins University",
    //         description: "Description of responsibilities and achievements in this role.",
    //     },
    // ]

    // // Skill groups
    // const skillGroups = {
    // "Languages": ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML", "CSS", "SQL"],
    // "Web Stack": ["React", "Vue.js", "Next.js", "Node.js", "Express", "Tailwind CSS", "Redux", "GraphQL", "Socket.io", "D3.js", "Stripe"],
    // "ML/AI Stack": ["Hugging Face", "LangChain", "MATLAB", "Pinecone"],
    // "Data": ["MongoDB", "NoSQL", "Firebase"],
    // "DevOps": ["Docker", "Kubernetes", "Jenkins", "Git", "AWS", "GCP", "Azure", "Confluence", "Slack", "Zoom"]
    // };

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
