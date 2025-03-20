import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import jsonData from '../data.json';

export default function ExperienceSection() {
  const { experiences } = jsonData;

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