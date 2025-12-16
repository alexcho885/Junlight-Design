import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '../constants';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="pt-32 pb-24 min-h-screen bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800 mb-4">
            精選設計案例
          </h2>
          <p className="text-gray-500 text-lg font-light tracking-wide">
            從政治文宣到品牌識別，我們都能駕馭
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeCategory === 'all'
                ? 'bg-gradient-brand text-white border-transparent shadow-md transform scale-105'
                : 'bg-white text-gray-600 border-gray-200 hover:border-brand-teal/50 hover:text-brand-teal'
            }`}
          >
            全部作品
          </button>
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-gradient-brand text-white border-transparent shadow-md transform scale-105'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-brand-teal/50 hover:text-brand-teal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay Content (Visible on Hover) */}
              <div className="absolute inset-0 bg-brand-teal/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6 backdrop-blur-sm">
                <span className="text-brand-orange font-medium text-sm tracking-widest mb-2 uppercase">
                  {PORTFOLIO_CATEGORIES.find(c => c.id === item.category)?.name}
                </span>
                <h3 className="text-white text-xl font-bold font-serif mb-6">
                  {item.title}
                </h3>
                <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-brand-teal transition-colors duration-300 text-sm">
                  查看詳情
                </button>
              </div>

              {/* Mobile/Default Label (Visible below image) */}
              <div className="p-5 lg:hidden">
                <p className="text-xs text-brand-teal font-medium mb-1">
                  {PORTFOLIO_CATEGORIES.find(c => c.id === item.category)?.name}
                </p>
                <h3 className="text-gray-800 font-bold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <i className="fa-regular fa-folder-open text-4xl mb-4"></i>
            <p>目前尚無此分類作品</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;