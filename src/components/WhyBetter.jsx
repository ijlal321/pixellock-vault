
import React from 'react';

const WhyBetter = () => {
  const advantages = [
    {
      title: "No Spying on Your Images",
      description: "Unlike Google Photos, your pictures aren't used for AI training or advertising.",
      color: "from-red-500/10 to-orange-500/5",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#EF4444"/>
          <path d="M13.5 7.5C13.5 8.32843 12.8284 9 12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5Z" fill="#EF4444"/>
          <path d="M11 10H13V17H11V10Z" fill="#EF4444"/>
        </svg>
      ),
    },
    {
      title: "Truly Private",
      description: "End-to-end encryption means only you and your family can access your photos.",
      color: "from-blue-500/10 to-purple-500/5",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z" fill="#6366F1"/>
        </svg>
      ),
    },
    {
      title: "Decentralized & Permanent",
      description: "No risk of data deletion, account bans, or service shutdowns.",
      color: "from-green-500/10 to-emerald-500/5",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill="#10B981"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="why-better" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Why It's Better Than Google Photos</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            PixelLock was built with privacy at its core, unlike other photo storage services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {advantages.map((item, index) => (
            <div 
              key={index} 
              className={`mb-8 p-6 rounded-xl bg-gradient-to-r ${item.color} border border-gray-100 shadow-sm hover:shadow-md transition-all`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-700">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="/signup" 
            className="btn-hover-effect inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-slate-800 text-white font-medium rounded-lg shadow-md transition-all hover:shadow-lg"
          >
            Start for Free
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyBetter;
