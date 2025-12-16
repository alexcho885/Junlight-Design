import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800 mb-4">
            服務流程
          </h2>
          <p className="text-gray-500 text-lg">
            簡單六步驟，打造理想品牌形象
          </p>
        </div>

        <div className="relative">
          {/* Desktop Connecting Line (Horizontal) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-10">
             <div className="h-full w-full bg-gradient-to-r from-brand-teal/20 to-brand-orange/20"></div>
          </div>
          
          {/* Mobile Connecting Line (Vertical) */}
          <div className="block lg:hidden absolute top-0 left-8 bottom-0 w-1 bg-gradient-to-b from-brand-teal/20 to-brand-orange/20 -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.step} className="flex lg:flex-col items-center group">
                
                {/* Icon Circle */}
                <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-gray-50 group-hover:border-brand-teal/30 shadow-lg flex items-center justify-center transition-all duration-300 z-10 group-hover:scale-110">
                   <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white bg-gradient-to-r from-brand-teal to-brand-orange`}>
                     {step.step}
                   </div>
                   <i className={`fa-solid ${step.icon} text-xl text-gray-600 group-hover:text-brand-teal transition-colors`}></i>
                </div>

                {/* Content */}
                <div className="ml-6 lg:ml-0 lg:mt-6 text-left lg:text-center flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;