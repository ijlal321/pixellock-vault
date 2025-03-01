
import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Permanent Storage",
      description: "Your photos are stored forever with decentralized technology.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect width="24" height="24" rx="12" fill="url(#paint0_linear)" fillOpacity="0.2"/>
          <path d="M7 18H17V15H7V18ZM7 13H17V10H7V13ZM7 5V8H17V5H7ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" fill="currentColor"/>
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4F46E5"/>
              <stop offset="1" stopColor="#7F64E2" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Fully Encrypted",
      description: "Only your family can access your data—protected with end-to-end encryption.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect width="24" height="24" rx="12" fill="url(#paint1_linear)" fillOpacity="0.2"/>
          <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z" fill="currentColor"/>
          <defs>
            <linearGradient id="paint1_linear" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B"/>
              <stop offset="1" stopColor="#F97316" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Family Sharing",
      description: "One shared space for your family's memories, yet fully private.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect width="24" height="24" rx="12" fill="url(#paint2_linear)" fillOpacity="0.2"/>
          <path d="M16 11C17.66 11 19 9.66 19 8C19 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor"/>
          <defs>
            <linearGradient id="paint2_linear" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#65a30d"/>
              <stop offset="1" stopColor="#84cc16" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Powerful Features</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We've built PixelLock with the most advanced technology to ensure your photos are protected and preserved for generations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-slate-700 mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
