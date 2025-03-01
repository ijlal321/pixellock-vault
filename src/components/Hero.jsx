
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        heroRef.current.style.opacity = 1 - (scrollPosition * 0.003);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative min-h-hero flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 mt-16">
        <div className="text-center max-w-3xl mx-auto" ref={heroRef}>
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm mb-6">
            <p className="text-xs text-white/90 font-medium">Decentralized. Encrypted. Always Accessible.</p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Secure, Permanent, and{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              Private Photo Storage
            </span>
          </h1>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-1">
            Your memories deserve a safe place. Store them permanently with end-to-end encryption in a decentralized network that will never lose your precious photos.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-delay-2">
            <a 
              href="/upload" 
              className="btn-hover-effect bg-gradient-to-r from-white to-gray-100 text-gray-900 font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Upload Now
            </a>
            <button 
              onClick={scrollToFeatures}
              className="btn-hover-effect bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
          
          <div className="mt-12 opacity-0 animate-fade-in-delay-3">
            <button 
              onClick={scrollToFeatures} 
              className="text-white/60 hover:text-white transition-colors duration-300 flex flex-col items-center"
            >
              <span className="text-sm mb-2">Discover how it works</span>
              <div className="scroll-down-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/90 to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
