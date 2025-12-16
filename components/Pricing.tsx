'use client';

import React, { useState } from 'react';
import { PRICING_PLANS } from '../constants';
import { PricingTag } from '../types';
import Process from './Process';

const Pricing: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "請問急件可以處理嗎？", 
      a: "可以。若需在 3 天內交件，視專案複雜度，將加收 30% - 50% 急件處理費。" 
    },
    { 
      q: "修改次數有限制嗎？", 
      a: "合約報價均包含 3 次免費「細節微調」（如：配色、文字大小、排版微調）。若涉及「風格大改」或超過修改次數，將依工時另行報價。" 
    },
    { 
      q: "會提供原始檔案嗎？", 
      a: "「品牌設計套組」包含完整原始向量檔 (AI) 與 PDF 規範手冊。單張社群圖卡或海報方案，預設交付高解析 JPG/PNG 檔案，若需原始編輯檔需另行加購。" 
    },
    { 
      q: "付款方式與流程？", 
      a: "確認合作後需先支付 50% 訂金啟動專案，設計完成並確認無誤後支付尾款。確認尾款入帳後，我們將透過 Email 交付最終雲端檔案連結。" 
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-brand-bg min-h-screen">
      
      {/* 1. 2025 Pricing Table Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2 block">
              2025 Plans
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800 mb-4">
              年度服務與報價
            </h2>
            <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
              透明實惠的方案，為您的品牌注入嶄新活力。<br className="hidden sm:block"/>
              新客專屬優惠實施中，把握機會升級視覺形象。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.id}
                className="relative group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* Top Decoration Line */}
                <div className="h-1.5 w-full bg-gradient-brand"></div>
                
                {/* Tags */}
                {(plan.tag === PricingTag.SALE || plan.tag === PricingTag.HOT) && (
                  <div className={`absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md ${
                    plan.tag === PricingTag.HOT 
                      ? 'bg-gradient-to-r from-red-500 to-pink-500' 
                      : 'bg-gradient-to-r from-brand-orange to-yellow-500'
                  }`}>
                    {plan.tag}
                  </div>
                )}

                <div className="p-8 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 font-serif">{plan.title}</h3>
                  
                  <div className="my-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-gray-400 line-through decoration-gray-400">
                        ${plan.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-4xl font-bold text-brand-teal tracking-tight">
                        ${plan.salePrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-brand-orange font-medium mt-2 bg-brand-orange/10 inline-block px-2 py-1 rounded">
                      新客優惠價
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 text-gray-500 text-sm flex-grow">
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-brand-teal/60"></i> 高解析度檔案
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-brand-teal/60"></i> 包含 2-3 次微調
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-brand-teal/60"></i> 商業授權使用
                    </li>
                  </ul>

                  <div className="mt-auto">
                     <button className="w-full py-3 rounded-xl border-2 border-brand-teal/10 text-brand-teal font-bold group-hover:bg-brand-teal group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                       選擇此方案
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Note */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white/60 backdrop-blur px-8 py-4 rounded-2xl shadow-sm border border-white">
              <span className="text-gray-600 font-medium">
                <i className="fa-solid fa-crown text-brand-purple mr-2"></i>
                另有長期包月方案與舊客 9 折回饋，歡迎直接洽詢
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Process Section (Reused) */}
      <Process />

      {/* 3. FAQ Accordion Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800 mb-4">
              常見問題 FAQ
            </h3>
            <div className="h-1 w-20 bg-gradient-brand mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${
                  openFaqIndex === idx ? 'bg-brand-bg shadow-md border-brand-teal/20' : 'bg-white hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                >
                  <span className={`text-lg font-bold transition-colors ${
                    openFaqIndex === idx ? 'text-brand-teal' : 'text-gray-700'
                  }`}>
                    Q: {faq.q}
                  </span>
                  <span className={`transform transition-transform duration-300 text-brand-teal ${
                    openFaqIndex === idx ? 'rotate-180' : ''
                  }`}>
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed pl-4 border-l-2 border-brand-orange/30">
                    A: {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;