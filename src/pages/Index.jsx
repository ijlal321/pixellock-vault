
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import WhyBetter from '../components/WhyBetter';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll functionality for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Fade-in animation on scroll
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
          el.classList.add('opacity-100');
          el.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };
    
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <WhyBetter />
      <Footer />
    </div>
  );
};

export default Index;
