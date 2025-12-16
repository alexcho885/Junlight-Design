import React from 'react';

const TrustedBy: React.FC = () => {
  const partners = [
    { icon: 'fa-scale-balanced', name: '李 OO 議員辦公室' },
    { icon: 'fa-hospital', name: '衛福部 OO 醫院' },
    { icon: 'fa-users', name: '台灣國際 TIFA 協會' },
    { icon: 'fa-building', name: '宏大建設開發' },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg font-serif font-bold text-gray-400">他們都選擇純光</h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              <div className="text-4xl text-gray-300 group-hover:text-brand-teal transition-colors">
                <i className={`fa-solid ${partner.icon}`}></i>
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-gray-600">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;