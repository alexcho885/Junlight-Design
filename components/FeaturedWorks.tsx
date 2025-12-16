import React from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '../constants';

const FeaturedWorks: React.FC = () => {
  // Take only the first 3 items
  const featuredItems = PORTFOLIO_ITEMS.slice(0, 3);

  return (
    <section className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800 mb-4">
            精選作品
          </h2>
          <p className="text-gray-500 text-lg">
            讓設計說話，看見品牌的無限可能
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                 <p className="text-xs text-brand-teal font-medium mb-2 tracking-wider uppercase">
                  {PORTFOLIO_CATEGORIES.find(c => c.id === item.category)?.name}
                 </p>
                 <h3 className="text-lg font-bold text-gray-800 font-serif group-hover:text-brand-orange transition-colors">
                   {item.title}
                 </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-brand-teal/20 text-brand-teal font-medium hover:bg-brand-teal hover:text-white transition-all duration-300"
          >
            <span>查看更多作品</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;