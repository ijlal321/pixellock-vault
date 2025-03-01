
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create a Family Space",
      description: "Set up your private, encrypted storage vault in just a few clicks.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      number: "02",
      title: "Upload Your Photos",
      description: "Drag and drop or select photos from your device to securely store them.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.95 3.53 10.24 5.56 10.03L6.63 9.92L7.13 8.97C8.08 7.14 9.94 6 12 6C14.62 6 16.88 7.86 17.39 10.43L17.69 11.93L19.22 12.04C20.78 12.14 22 13.45 22 15C22 16.65 20.65 18 19 18ZM8 13H10.55V16H13.45V13H16L12 9L8 13Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      number: "03",
      title: "Access Anytime",
      description: "View your memories anytime, anywhere, from any device—securely.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19.01H3V4.99H21V19.01ZM18 15H15V18H13V15H10V13H13V10H15V13H18V15Z" fill="currentColor"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">How It Works</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Getting started with PixelLock is simple and straightforward.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group cursor-default"
            >
              {/* Step number */}
              <div className="absolute -top-8 left-0 text-6xl font-bold text-slate-900/5">
                {step.number}
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 rounded-xl bg-white shadow-sm transition-all group-hover:shadow-md">
                <div className="text-slate-700 mb-5">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
              
              {/* Arrow connecting to next step (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-20">
                  <svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.5303 6.53033C37.8232 6.23744 37.8232 5.76256 37.5303 5.46967L32.7574 0.696699C32.4645 0.403806 31.9896 0.403806 31.6967 0.696699C31.4038 0.989593 31.4038 1.46447 31.6967 1.75736L35.9393 6L31.6967 10.2426C31.4038 10.5355 31.4038 11.0104 31.6967 11.3033C31.9896 11.5962 32.4645 11.5962 32.7574 11.3033L37.5303 6.53033ZM0 6.75H37V5.25H0V6.75Z" fill="#CBD5E1"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
