import React, { useEffect, useRef, useState } from 'react';
import EducationCard from '../components/EducationCard';
import ExpertiseCard from '../components/ExpertiseCard';
import TechStackGraph from './TechStackGraph';

export default function AboutSection() {
    const containerRef = useRef();
    const [isBrowser, setIsBrowser] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

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

    const intro = 'I am a motivated software engineer passionate about leveraging AI to solve real-world problems and drive innovation. At Johns Hopkins, I’ve demonstrated leadership and technical expertise across multiple impactful roles';

    const educations = [
        {
          period: "2023 - 2025",
          program: "MS in Computer Science",
          university: "Johns Hopkins University",
          description: "Description of responsibilities and achievements in this role.",
          link: "https://project1.example.com"
        },
        {
            period: "2022 - 2023",
            program: "Self-Driving Car Engineer Nanodegree",
            university: "Udacity",
            description: "Description of responsibilities and achievements in this role.",
            link: "https://project1.example.com"
          },
        {
            period: "2016- 2020",
            program: "BS in Mechanical Engineering",
            university: "UCLA",
            description: "Description of responsibilities and achievements in this role.",
            link: "https://project1.example.com"
          },
    ];

    const expertise = [
        {
            title: "Full-Stack Software Dev",
            logo: "Johns Hopkins University",
            description: "Description of responsibilities and achievements in this role.",
        },
        {
            title: "Machine Learning",
            logo: "Johns Hopkins University",
            description: "Description of responsibilities and achievements in this role.",
        },
        {
            title: "AI Integration",
            logo: "Johns Hopkins University",
            description: "Description of responsibilities and achievements in this role.",
        },
    ]

    // Skill groups
    const skillGroups = {
    "Languages": ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML", "CSS", "SQL"],
    "Web Stack": ["React", "Vue.js", "Next.js", "Node.js", "Express", "Tailwind CSS", "Redux", "GraphQL", "Socket.io", "D3.js", "Stripe"],
    "ML/AI Stack": ["Hugging Face", "LangChain", "MATLAB", "Pinecone"],
    "Data": ["MongoDB", "NoSQL", "Firebase"],
    "DevOps": ["Docker", "Kubernetes", "Jenkins", "Git", "AWS", "GCP", "Azure", "Confluence", "Slack", "Zoom"]
    };

    // // Create nodes and links for the graph
    // const createGraphData = () => {
    //     const nodes = [];
    //     const links = [];

    //     // Add head nodes for each group
    //     Object.keys(skillGroups).forEach((groupName, groupIndex) => {
    //         nodes.push({
    //         id: groupName,
    //         group: groupIndex,
    //         isHeadNode: true,
    //         val: 20, // Larger size for head nodes
    //         });
    //     });

    //     // Connect head nodes to each other
    //     for (let i = 0; i < Object.keys(skillGroups).length; i++) {
    //         for (let j = i + 1; j < Object.keys(skillGroups).length; j++) {
    //         links.push({
    //             source: Object.keys(skillGroups)[i],
    //             target: Object.keys(skillGroups)[j],
    //             color: 'rgba(255, 255, 255, 0.4)',
    //             value: 4
    //         });
    //         }
    //     }

    //     // Add skill nodes and connect them to their head nodes
    //     Object.entries(skillGroups).forEach(([groupName, skills], groupIndex) => {
    //         skills.forEach((skill) => {
    //         nodes.push({
    //             id: skill,
    //             group: groupIndex,
    //             val: 10,
    //             isHeadNode: false
    //         });
            
    //         links.push({
    //             source: groupName,
    //             target: skill,
    //             color: 'rgba(255, 255, 255, 0.4)',
    //             value: 2
    //         });
    //         });
    //     });

    //     return { nodes, links };
    // };

    // const graphData = createGraphData();

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
                {/* <div ref={containerRef} className="bg-black p-6 flex justify-center items-center">
                    {isBrowser && (
                    <ForceGraph2D
                        graphData={graphData}
                        nodeId="id"
                        nodeAutoColorBy="group"
                        nodeRelSize={6}
                        nodeVal={node => node.val}
                        nodeCanvasObject={(node, ctx, globalScale) => {
                        const label = node.id;
                        let fontSize = node.isHeadNode ? 10 / (globalScale / 2) : 9 / (globalScale / 2);
                        ctx.font = `${node.isHeadNode ? 'bold ' : ''}${fontSize}px Sans-Serif`;
                        ctx.fillStyle = node.color;
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        
                        // Draw background circle for head nodes
                        if (node.isHeadNode) {
                            ctx.beginPath();
                            ctx.arc(node.x, node.y, 30 / (globalScale / 2), 0, 2 * Math.PI);
                            ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
                            ctx.fill();
                            ctx.strokeStyle = node.color;
                            ctx.lineWidth = 1 / (globalScale / 2);
                            ctx.stroke();
                        }
                        
                        // Draw text
                        ctx.fillStyle = node.isHeadNode ? '#ffffff' : node.color;
                        ctx.fillText(label, node.x, node.y);
                        }}
                        linkWidth={link => link.value}
                        linkColor={link => link.color}
                        linkDirectionalParticles={2}
                        linkDirectionalParticleSpeed={d => 0.005}
                        width={dimensions.width}
                        height={dimensions.height}
                        cooldownTicks={200} //100
                        cooldownTime={3000} //2000
                        d3AlphaDecay={0.02}
                        d3VelocityDecay={0.1}
                        d3Force={(engine) => {
                        // Customize forces to better separate groups
                        engine.force('charge').strength(-1000);
                        engine.force('link').distance(link => link.source.isHeadNode && link.target.isHeadNode ? 500 : 100);
                        engine.force('center', d3.forceCenter(dimensions.width / 2, dimensions.height / 2));
                        }}
                        onEngineStop={() => console.log('Engine stopped')}
                    />
                    )}
                </div> */}
                {/* <div className="bg-black p-10">
                    <div ref={graphRef} style={{ width: '100%', height: '600px' }}></div>
                </div> */}
            </div>
        </div>
    </section>
  );
}
