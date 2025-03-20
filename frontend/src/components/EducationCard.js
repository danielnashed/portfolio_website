import React, { useState } from 'react';

export default function EducationCard({period, program, university, description, link}) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="flex w-full">
          {/* Timeline and period */}
          <div className="w-2/5 border-b-1 border-l-1 border-white relative flex items-center justify-center ml-10">
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-white transform -translate-x-1.5 translate-y-1.5"></div>
            <div className="pr-4 pl-4 py-4 text-white text-xl font-mono">
              {period}
            </div>
          </div>
            {/* Job details */}
            <div className={`flex w-full border-1 border-white hover:border-green-500 hover:border-2 transition-all duration-100 cursor-pointer ${
                expanded ? "flex-col h-100" : "h-auto"
            }`}
            onClick={() => setExpanded(!expanded)}>
                {/* University */}
                <div className="bg-white p-4 text-black text-2xl font-light text-center">
                {university}
                </div>
                
                {/* program of Study */}
                <div className="bg-black text-white p-4 flex items-center justify-center text-2xl font-light">
                {program}
                </div>
                
                {/* Description - hidden by default, can be expanded if needed */}
                {expanded && description && (
                <div className="bg-black text-white p-4 text-medium border-t border-gray-800">
                    {description}
                        <div className="mt-4">
                            {link && (
                            <a 
                                href={`/assets/diplomas/${link}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-green-500 hover:underline mt-4 inline-block"
                                onClick={(e) => e.stopPropagation()}
                            >
                                View Diploma →
                            </a>
                            )}
                        </div>
                </div>
                )}
            </div>
        </div>
      );
    };