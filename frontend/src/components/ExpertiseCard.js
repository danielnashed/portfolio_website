import React, { useState } from 'react';

export default function ExpertiseCard({title, logo, description}) {
    return (
        <div 
          className="group bg-white border-1 border-white transition-all duration-50">
          <div className="p-4 text-black font-light text-2xl text-center border-b-2 border-black">
            {title}
          </div>
          
          <div className="bg-black text-white p-4 h-64 overflow-hidden">
              <div className="flex items-center justify-center h-full">
              <p className="text-medium mb-2 p-10 text-justify">{description}</p>
              </div>
          </div>
          <div className="group-hover:border-2 group-hover:border-green-500 transition-all duration-100"></div>
        </div>
      );
    };