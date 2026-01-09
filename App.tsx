
import React, { useState, useRef } from 'react';
import GroviaSection from './components/GroviaSection';
import CodeConsultSection from './components/CodeConsultSection';
import CollectiveCreativitySection from './components/CollectiveCreativitySection';
import BrandLyftSection from './components/BrandLyftSection';
import QuoteSection from './components/QuoteSection';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'grovia', name: 'Grovia', bgColor: '#fcfdff' },
    { id: 'code-consult', name: 'Code Consult', bgColor: '#0b0a09' },
    { id: 'collective', name: 'Creative', bgColor: '#050505' },
    { id: 'brandlyft', name: 'BrandLyft', bgColor: '#fdfaf5' },
    { id: 'quote', name: 'Cotizar', bgColor: '#ffffff' }
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPos = scrollContainerRef.current.scrollTop;
      const height = window.innerHeight;
      const index = Math.min(
        Math.max(0, Math.round(scrollPos / height)), 
        sections.length - 1
      );
      if (index !== activeSection) {
        setActiveSection(index);
      }
    }
  };

  const currentSection = sections[activeSection] || sections[0];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: currentSection.bgColor }}
    >
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="snap-container no-scrollbar h-full"
      >
        <div className="snap-section"><GroviaSection /></div>
        <div className="snap-section"><CodeConsultSection /></div>
        <div className="snap-section"><CollectiveCreativitySection /></div>
        <div className="snap-section"><BrandLyftSection /></div>
        <div className="snap-section"><QuoteSection /></div>
      </div>
    </div>
  );
};

export default App;
