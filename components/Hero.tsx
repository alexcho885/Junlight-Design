import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        
        {/* Main Banner Image Container */}
        <div className="w-full relative group">
          {/* Soft Glow behind banner matching brand colors */}
          <div className="absolute -inset-2 bg-gradient-to-r from-brand-teal/30 via-brand-purple/20 to-brand-orange/30 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-80 transition duration-1000"></div>
          
          <img 
            src="images/banner.png" 
            alt="Jun Light Design - By the name of light, we design the purity of warmth" 
            className="relative w-full h-auto aspect-[16/9] lg:aspect-[2.35/1] object-cover rounded-[2rem] shadow-2xl ring-1 ring-white/50"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://picsum.photos/1200/600?random=banner";
            }}
          />
        </div>

        {/* Action Buttons - Centered below */}
        <div className="mt-12 flex flex-col sm:flex-row gap-5 w-full sm:w-auto z-10">
          <Link 
            to="/portfolio"
            className="px-8 py-3.5 rounded-full text-white font-medium text-lg bg-gradient-brand shadow-lg hover:shadow-brand-teal/40 hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-3"
          >
            <i className="fa-solid fa-layer-group"></i>
            <span className="font-serif tracking-wider">查看精選作品</span>
          </Link>
          
          <Link 
            to="/pricing"
            className="px-8 py-3.5 rounded-full text-brand-text font-medium text-lg bg-white/80 backdrop-blur-sm border border-brand-teal/20 shadow-md hover:bg-white hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-3"
          >
            <i className="fa-solid fa-wand-magic-sparkles text-brand-orange"></i>
            <span className="font-serif tracking-wider">了解新客優惠</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;