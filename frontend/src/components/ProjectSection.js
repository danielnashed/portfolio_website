import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import jsonData from '../data.json';

export default function ProjectsSection() {

  const { projects } = jsonData;

    return (
      <section id="projects" className="min-h-screen bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="border-1 border-neutral-500">
            <h2 className="text-4xl text-white font-light text-center py-6 border-b-1 border-neutral-500">// Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }