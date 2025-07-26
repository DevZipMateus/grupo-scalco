
import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-blue via-brand-dark-blue to-brand-light-blue/20" />
      
      {/* Geometric shapes */}
      <div className="absolute inset-0">
        {/* Large circle top right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-light-blue/10 rounded-full blur-3xl animate-pulse" />
        
        {/* Medium circle bottom left */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-2xl" />
        
        {/* Geometric lines/shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-1 bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent rotate-45" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-1 bg-gradient-to-r from-transparent via-brand-light-blue/20 to-transparent -rotate-12" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-16 right-16 w-4 h-4 bg-brand-yellow/40 transform rotate-45 animate-pulse" />
        <div className="absolute top-32 right-32 w-3 h-3 bg-brand-light-blue/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-16 w-6 h-6 border-2 border-brand-yellow/20 transform rotate-45" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--brand-light-blue) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--brand-light-blue) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </div>
  );
};

export default HeroBackground;
