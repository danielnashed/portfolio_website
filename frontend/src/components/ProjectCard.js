import React, { useState } from 'react';

export default function ProjectCard({title, description, technologies, link, frontpic}) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div 
          className={`bg-white border-1 border-white hover:border-green-500 hover:border-2 transition-all duration-100 cursor-pointer ${
            expanded ? 'col-span-3 row-span-2' : ''
          }`}
          onClick={() => setExpanded(!expanded)}
        >
          <div className="p-4 text-black font-light text-2xl text-center border-b-2 border-black">
            {title}
          </div>
          
          <div className="bg-black text-white p-4 h-64 overflow-hidden">
            {expanded ? (
              <div className="flex flex-col space-y-4">
                <p>{description}</p>
                
                <div>
                  <h4 className="font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-800 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {link && (
                  <a 
                    href={`/assets/portfolios/${link}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-500 hover:underline mt-4 inline-block"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project →
                  </a>
                )}
              </div>
            ) : (
              // <div className="flex items-center justify-center h-full">
              //   <span className="text-gray-400">Click to expand</span>
              // </div>
              // Show the frontpic image when not expanded
              <div className="h-full w-full flex items-center justify-center">
              <img
                src={`/assets/portfolios/${frontpic}`} 
                alt={title}
                className="object-cover w-full h-full"
              />
            </div>
            )}
          </div>
        </div>
      );
    };