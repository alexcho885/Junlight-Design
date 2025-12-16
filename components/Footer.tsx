import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1A202C] text-white pt-24 pb-10 rounded-t-[3rem] relative overflow-hidden">
      {/* Decorative gradient glow at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-teal/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          
          {/* Brand Info */}
          <div>
            <div className="mb-8 w-fit">
                 {/* White version of logo */}
                 <img 
                    src="images/logo.png" 
                    alt="Jun Light Design" 
                    className="h-20 w-auto brightness-0 invert opacity-90 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://picsum.photos/150/50?random=logo-white";
                      target.style.filter = "grayscale(100%) brightness(200%)";
                    }}
                  />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-6 tracking-wide leading-relaxed">
              以光為名，<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-white to-brand-orange">
                設計每一份純粹的溫度
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md font-light">
              我們不只是設計圖形，更是品牌的視覺說書人。期待與您合作，共同挖掘屬於您的品牌靈魂。
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h4 className="text-xl font-serif font-bold mb-8 text-white border-b border-gray-700 pb-2 inline-block w-fit">聯絡資訊</h4>
            <ul className="space-y-6">
              <li>
                <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-brand-orange transition-all duration-300 shadow-lg ring-1 ring-gray-700 group-hover:ring-brand-orange">
                    <i className="fa-solid fa-phone text-lg"></i>
                  </div>
                  <span className="text-gray-300 text-lg group-hover:text-white transition-colors">
                    {CONTACT_INFO.phone} <span className="text-sm text-gray-500 ml-2">({CONTACT_INFO.name})</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-brand-teal transition-all duration-300 shadow-lg ring-1 ring-gray-700 group-hover:ring-brand-teal">
                    <i className="fa-solid fa-envelope text-lg"></i>
                  </div>
                  <span className="text-gray-300 text-lg group-hover:text-white transition-colors">
                    {CONTACT_INFO.email}
                  </span>
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.lineLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#00C300] transition-all duration-300 shadow-lg ring-1 ring-gray-700 group-hover:ring-[#00C300]">
                    <i className="fa-brands fa-line text-2xl"></i>
                  </div>
                  <span className="text-gray-300 text-lg group-hover:text-white transition-colors">
                    ID: {CONTACT_INFO.lineId}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-light">
            &copy; {new Date().getFullYear()} 純光設計 Jun Light Design. All rights reserved.
          </p>
          <div className="flex gap-6">
             <a href="#" className="text-gray-500 hover:text-brand-orange transition-colors"><i className="fa-brands fa-facebook text-xl"></i></a>
             <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;