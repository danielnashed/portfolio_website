import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsSection() {

  const projects = [
    {
      title: "Project 1",
      description: "This is a detailed description of Project 1. It showcases my skills in building responsive web applications with modern technologies.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      link: "https://project1.example.com"
    },
    {
      title: "Project 2",
      description: "Project 2 focuses on data visualization and interactive user experiences. It includes complex state management and API integration.",
      technologies: ["React", "D3.js", "Firebase"],
      link: "https://project2.example.com"
    },
    {
      title: "Project 3",
      description: "A mobile-first application with offline capabilities and seamless synchronization when connection is restored.",
      technologies: ["React Native", "Redux", "GraphQL"],
      link: "https://project3.example.com"
    },
    {
      title: "Project 4",
      description: "An e-commerce platform with integrated payment processing and inventory management system.",
      technologies: ["Next.js", "Stripe", "MongoDB"],
      link: "https://project4.example.com"
    },
    {
      title: "Project 5",
      description: "A real-time collaboration tool for teams with document sharing and communication features.",
      technologies: ["Vue.js", "Socket.io", "Express"],
      link: "https://project5.example.com"
    }
  ];

    // return (
    //   <section id="projects" className="h-screen flex justify-center items-center pt-16">
    //     <h2 className="text-4xl">Projects</h2>
    //   </section>
    // );

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