import React, { useState, useEffect } from 'react';

export default function HomeSection() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [currentPhase, setCurrentPhase] = useState(0);
  
  const phrases = ["AI + Software + Impact", "AI + Software + Creativity", "AI + Software + Innovation"];
  const basePhrase = "AI + Software + ";
  // const specialPhrases = ["Impact", "Creativity", "Innovation"];
  
  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  useEffect(() => {
    let timer;
    
    if (isTyping) {
      const targetPhrase = phrases[currentPhase];
      
      if (text === targetPhrase) {
        // Wait before starting to delete
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      } else {
        // Type the next character
        timer = setTimeout(() => {
          setText(targetPhrase.substring(0, text.length + 1));
        }, 100);
      }
    } else {
      // We need to backspace only the special part (Impact, Creativity, etc.)
      if (text.length > basePhrase.length) {
        // Still deleting
        timer = setTimeout(() => {
          setText(text.substring(0, text.length - 1));
        }, 80);
      } else {
        // Done deleting, move to next phase
        const nextPhase = (currentPhase + 1) % phrases.length;
        setCurrentPhase(nextPhase);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timer);
  }, [text, isTyping, currentPhase]);
  
  return (
    <section id="home" className="h-screen flex justify-center items-center pt-16">
      <h1 className="text-3xl md:text-5xl font-mono font-thin">
        {text}
        <span className={showCursor ? "opacity-100" : "opacity-0"}>|</span>
      </h1>
    </section>
  );
}