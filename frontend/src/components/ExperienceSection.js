import React from 'react';
import ExperienceCard from '../components/ExperienceCard';

export default function ExperienceSection() {

  const experiences = [
    {
      period: "Jan 2025 - Present",
      jobTitle: "Job Title 1",
      company: "Company 1",
      description: "Description of responsibilities and achievements in this role.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      link: "https://project1.example.com"
    },
    {
      period: "Sept 2024 - Present",
      jobTitle: "Job Title 2",
      company: "Company 2",
      description: "Description of responsibilities and achievements in this role.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      link: "https://project1.example.com"
    },
    {
      period: "May 2023 – June 2024",
      jobTitle: "Job Title 3",
      company: "Company 3",
      description: "Description of responsibilities and achievements in this role.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      link: "https://project1.example.com"
    }
  ];


  //   return (
  //     <section id="experience" className="h-screen flex justify-center items-center pt-16">
  //       <h2 className="text-4xl">Experience</h2>
  //     </section>
  //   );
  // }

  return (
    <section id="experience" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="border-1 border-neutral-500">
          {/* Section title */}
          <h2 className="text-4xl text-white font-light text-center py-6 border-b-1 border-neutral-500">
            // Experience
          </h2>
          
          {/* Timeline content */}
          <div className="flex flex-col p-8">
            {experiences.map((exp, index) => (
              <div key={index} className="p-4"> {/* Added padding around each card */}
                <ExperienceCard 
                  period={exp.period}
                  jobTitle={exp.jobTitle}
                  company={exp.company}
                  description={exp.description}
                  technologies={exp.technologies}
                  link={exp.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}