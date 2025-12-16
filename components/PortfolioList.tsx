'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';

// 定義專案型別
export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  mainImage: any;
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
  // 使用 Set 來追蹤哪些項目已經進入視窗需要顯示
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  
  const observerRef = useRef<IntersectionObserver | null>(null);

  // 篩選邏輯
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // 取得分類顯示名稱的 Helper
  const getCategoryName = (catId: string) => {
    const found = CATEGORIES.find(c => c.id === catId);
    return found ? found.name : catId;
  };

  // 當分類改變時，重置可見狀態，讓動畫重新播放
  useEffect(() => {
    setVisibleItems(new Set());
  }, [activeCategory]);

  // 滾動觸發動畫 (Scroll Reveal)
  useEffect(() => {
    // 確保在瀏覽器環境執行
    if (typeof window === 'undefined') return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-id');
          if (id) {
            setVisibleItems((prev) => {
              // 如果已經有了就不更新，避免重複渲染
              if (prev.has(id)) return prev;
              const newSet = new Set(prev);
              newSet.add(id);
              return newSet;
            });
            // 動畫觸發後停止觀察該元素
            observerRef.current?.unobserve(entry.target);
          }
        }
      });
    }, {
      threshold: 0.1, 
      rootMargin: '50px' 
    });

    const items = document.querySelectorAll('.portfolio-item');
    items.forEach((item) => observerRef.current?.observe(item));

    return () => observerRef.current?.disconnect();
  }, [filteredProjects, activeCategory]); // 依賴 filteredProjects 確保 DOM 更新後重新綁定

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
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
          filteredProjects.map((item, index) => (
            <Link 
              href={`/portfolio/${item.slug.current}`}
              key={item._id}
              data-id={item._id}
              // 使用 React State 控制 class，避免 React Re-render 覆蓋手動修改的 class
              // 初始為 opacity-0，進入視窗後變為 animate-fadeInUp
              className={`portfolio-item group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer ${
                visibleItems.has(item._id) ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index % 3) * 150}ms` }}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                {item.mainImage ? (
                  <img 
                    src={urlFor(item.mainImage).width(800).height(600).url()} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
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
          ))
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