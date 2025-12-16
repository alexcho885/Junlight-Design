'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import { PORTFOLIO_ITEMS } from '@/constants';

// 定義專案型別
export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  mainImage: any; // 支援 Sanity Image Object 或 字串 URL
  publishedAt: string;
}

// 分類定義
const CATEGORIES = [
  { id: 'all', name: '全部作品' },
  { id: 'identity', name: '品牌識別' },
  { id: 'public', name: '公共事務' },
  { id: 'commercial', name: '商業醫療' },
  { id: 'events', name: '活動賽事' },
  { id: 'illustration', name: '插畫貼圖' }
];

interface PortfolioListProps {
  projects: Project[];
}

const PortfolioList: React.FC<PortfolioListProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  // 資料整合邏輯：如果 Sanity 沒有回傳資料 (projects 為空)，則使用 constants 中的靜態資料作為備案
  // 這能避免在未設定 API Key 的環境中出現白畫面
  const displayProjects: Project[] = projects.length > 0 
    ? projects 
    : PORTFOLIO_ITEMS.map(item => ({
        _id: `static-${item.id}`,
        title: item.title,
        slug: { current: `static-${item.id}` }, // 簡單產生 slug
        category: item.category,
        mainImage: item.image, // 這裡會是字串 URL
        publishedAt: new Date().toISOString()
      }));

  // 篩選邏輯
  const filteredProjects = activeCategory === 'all'
    ? displayProjects
    : displayProjects.filter(project => project.category === activeCategory);

  // 取得分類顯示名稱的 Helper
  const getCategoryName = (catId: string) => {
    const found = CATEGORIES.find(c => c.id === catId);
    return found ? found.name : catId;
  };

  // 圖片網址處理 Helper
  const getImageUrl = (imageSource: any) => {
    if (!imageSource) return null;
    // 如果是字串 (靜態資料)，直接回傳
    if (typeof imageSource === 'string') return imageSource;
    // 如果是 Sanity 物件，使用 urlFor
    try {
      return urlFor(imageSource).width(800).height(600).url();
    } catch (e) {
      console.error('Image URL generation failed:', e);
      return null;
    }
  };

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fadeInUp">
        {CATEGORIES.map((cat) => (
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item, index) => {
            const imageUrl = getImageUrl(item.mainImage);

            return (
              <Link 
                href={`/portfolio/${item.slug.current}`}
                key={item._id}
                // 使用 Tailwind 的 animate-fadeInUp，確保元素預設是顯示的，不依賴 JS 狀態切換 opacity
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:scale-[1.02] cursor-pointer block animate-fadeInUp"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both' // 確保動畫結束後保持狀態
                }}
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-[#2E5C6E]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6 backdrop-blur-sm">
                  <span className="text-[#E08A66] font-medium text-sm tracking-widest mb-2 uppercase">
                    {getCategoryName(item.category)}
                  </span>
                  <h3 className="text-white text-xl font-bold font-serif mb-6">
                    {item.title}
                  </h3>
                  <span className="px-6 py-2 border border-white text-white rounded-full text-sm">
                    查看詳情
                  </span>
                </div>

                {/* Mobile/Default Label */}
                <div className="p-5 lg:hidden">
                  <p className="text-xs text-[#2E5C6E] font-medium mb-1">
                    {getCategoryName(item.category)}
                  </p>
                  <h3 className="text-gray-800 font-bold">
                    {item.title}
                  </h3>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="col-span-full text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center animate-fadeInUp">
            <div className="text-gray-300 text-6xl mb-4">
              <i className="fa-regular fa-folder-open"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">此分類尚無作品</h3>
            <p className="text-gray-500">
              請選擇其他分類，或稍後再回來查看。
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default PortfolioList;