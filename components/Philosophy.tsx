import React from 'react';

const Philosophy: React.FC = () => {
  const skills = [
    { name: 'Adobe Photoshop (Ps)', level: 95, icon: 'fa-image' },
    { name: 'Adobe Illustrator (Ai)', level: 95, icon: 'fa-pen-nib' },
    { name: 'Adobe Premiere (Pr)', level: 80, icon: 'fa-film' },
    { name: 'Canva Design', level: 90, icon: 'fa-wand-magic-sparkles' },
    { name: 'Social Media Marketing', level: 85, icon: 'fa-thumbs-up' },
  ];

  return (
    <div className="bg-brand-bg min-h-screen">
      
      {/* 1. Philosophy Section (設計理念) */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:hidden">
             <h2 className="text-3xl font-serif font-bold text-gray-800">關於我們</h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            
            {/* Left: Logo/Image Display */}
            <div className="w-full lg:w-1/2 relative group">
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/20 via-brand-purple/10 to-brand-orange/20 rounded-full blur-[50px] transform scale-95 group-hover:scale-105 transition-transform duration-700"></div>
               
               <div className="relative glass-card rounded-[2.5rem] p-8 shadow-xl flex items-center justify-center aspect-square lg:aspect-[4/3] overflow-hidden">
                  <img 
                    src="/images/logo.png" 
                    alt="Jun Light Design Logo Detail" 
                    className="w-full h-full object-contain drop-shadow-lg transform transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://picsum.photos/600/600?random=philosophy";
                    }}
                  />
               </div>
            </div>

            {/* Right: Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="hidden lg:block text-3xl lg:text-5xl font-serif font-bold text-gray-800 mb-8 leading-tight">
                賦予品牌靈魂的<br />
                <span className="text-transparent bg-clip-text bg-gradient-brand">
                  視覺說書人
                </span>
              </h2>
              <h2 className="lg:hidden text-2xl font-serif font-bold text-gray-800 mb-6">
                賦予品牌靈魂的視覺說書人
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
                <p>
                  <strong className="text-brand-teal font-medium">「純光設計」</strong>的 Logo 以 "J" 為起點，結合象徵生長的「葉片」與流動的「光影」。
                </p>
                <p>
                  我們相信，設計不只是圖形的排列組合，而是挖掘品牌深層價值的過程。我們以光為名，為每一個品牌注入純粹的溫度，讓視覺成為最有力的語言。
                </p>
                
                <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-3">
                  <span className="px-5 py-2 bg-brand-teal/10 text-brand-teal rounded-full text-sm font-medium border border-brand-teal/20">#Warmth</span>
                  <span className="px-5 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-medium border border-brand-orange/20">#Pure</span>
                  <span className="px-5 py-2 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium border border-brand-purple/20">#Flow</span>
                  <span className="px-5 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium border border-gray-200">#Trust</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Designer Profile & Skillset Section (設計師介紹 & 技能) */}
      <section className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              
              {/* Designer Profile */}
              <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                 <div className="relative group mb-8">
                    {/* Decorative rotating ring */}
                    <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-brand-orange/30 animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-brand-teal/30 animate-[spin_15s_linear_infinite_reverse] scale-110 opacity-50"></div>
                    
                    <div className="w-56 h-56 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10 bg-gray-100">
                      <img 
                        src="https://picsum.photos/400/400?random=designer" 
                        alt="劉純純 Designer" 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                 </div>

                 <div>
                    <h3 className="text-3xl font-serif font-bold text-gray-800 mb-2">劉純純</h3>
                    <p className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-6">
                      創辦人 / 資深設計師
                    </p>
                    <p className="text-gray-500 leading-relaxed font-light max-w-sm mx-auto">
                      「我專注於將溫暖與邏輯結合。我相信好的設計不只是美感，更是解決問題的溝通橋樑。」
                    </p>
                 </div>
              </div>

              {/* Skillset */}
              <div className="w-full md:w-2/3 bg-brand-bg rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-serif font-bold text-gray-800 mb-8 flex items-center gap-3">
                    <i className="fa-solid fa-toolbox text-brand-teal"></i>
                    專業技能
                  </h3>

                  <div className="space-y-6">
                     {skills.map((skill, index) => (
                       <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                             <div className="flex items-center gap-2 text-gray-700 font-medium">
                               <i className={`fa-solid ${skill.icon} w-6 text-center text-brand-teal/60`}></i>
                               {skill.name}
                             </div>
                             <span className="text-brand-orange font-bold text-sm">{skill.level}%</span>
                          </div>
                          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                             <div 
                                className="h-full bg-gradient-brand rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${skill.level}%` }}
                             ></div>
                          </div>
                       </div>
                     ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200 flex flex-wrap gap-3">
                     <span className="px-4 py-2 bg-white rounded-lg text-sm text-gray-500 shadow-sm border border-gray-100">
                       <i className="fa-solid fa-camera mr-2 text-gray-400"></i>
                       攝影修圖
                     </span>
                     <span className="px-4 py-2 bg-white rounded-lg text-sm text-gray-500 shadow-sm border border-gray-100">
                       <i className="fa-solid fa-print mr-2 text-gray-400"></i>
                       印刷實務
                     </span>
                     <span className="px-4 py-2 bg-white rounded-lg text-sm text-gray-500 shadow-sm border border-gray-100">
                       <i className="fa-brands fa-wordpress mr-2 text-gray-400"></i>
                       網頁排版
                     </span>
                  </div>
              </div>

            </div>
         </div>
      </section>

    </div>
  );
};

export default Philosophy;