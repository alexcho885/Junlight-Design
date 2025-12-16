import { PricingPlan, PricingTag, ProcessStep, PortfolioCategory, PortfolioItem } from './types';

export const CONTACT_INFO = {
  name: '劉純純',
  phone: '0966-288-151',
  email: 'junlight.design@gmail.com',
  lineId: '@055ctipl',
  lineLink: 'https://line.me/ti/p/@055ctipl' // Simulated link
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'social',
    title: '社群圖卡',
    originalPrice: 600,
    salePrice: 480,
    tag: PricingTag.SALE,
  },
  {
    id: 'poster',
    title: '活動海報',
    originalPrice: 1200,
    salePrice: 950,
    tag: PricingTag.SALE,
  },
  {
    id: 'video',
    title: '短影音剪輯',
    originalPrice: 1000,
    salePrice: 850,
    tag: PricingTag.SALE,
  },
  {
    id: 'branding',
    title: '品牌設計套組',
    originalPrice: 3500,
    salePrice: 2800,
    tag: PricingTag.HOT,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, title: '需求確認', description: '表單 / LINE 諮詢', icon: 'fa-comments' },
  { step: 2, title: '報價合約', description: '確認內容與範疇', icon: 'fa-file-signature' },
  { step: 3, title: '訂金收款', description: '啟動設計專案', icon: 'fa-hand-holding-dollar' },
  { step: 4, title: '設計提案', description: '提供設計初稿', icon: 'fa-pen-ruler' },
  { step: 5, title: '修改階段', description: '細節微調優化', icon: 'fa-sliders' },
  { step: 6, title: '交付結案', description: '支付尾款與交付檔案', icon: 'fa-box-open' },
];

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  { id: 'identity', name: '品牌識別', description: 'Brand Identity' },
  { id: 'public', name: '公共事務', description: 'Public Affairs' },
  { id: 'commercial', name: '商業醫療', description: 'Commercial & Medical' },
  { id: 'events', name: '活動賽事', description: 'Events & Sports' },
  { id: 'illustration', name: '插畫貼圖', description: 'Illustration' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, title: '森之息 - 天然精油品牌識別', category: 'identity', image: 'https://picsum.photos/800/600?random=101' },
  { id: 2, title: '2024 台北馬拉松主視覺', category: 'events', image: 'https://picsum.photos/800/800?random=102' },
  { id: 3, title: '陳議員競選主軸海報', category: 'public', image: 'https://picsum.photos/800/1000?random=103' },
  { id: 4, title: '安心牙醫診所整體視覺', category: 'commercial', image: 'https://picsum.photos/800/600?random=104' },
  { id: 5, title: '熊大吉 - LINE 原創貼圖', category: 'illustration', image: 'https://picsum.photos/800/800?random=105' },
  { id: 6, title: 'FutureTech 科技論壇手冊', category: 'events', image: 'https://picsum.photos/800/600?random=106' },
  { id: 7, title: '市府防疫宣導懶人包', category: 'public', image: 'https://picsum.photos/800/600?random=107' },
  { id: 8, title: 'PureSkin 保養品包裝設計', category: 'commercial', image: 'https://picsum.photos/800/1000?random=108' },
  { id: 9, title: '日嚐甜點 Logo & CI 設計', category: 'identity', image: 'https://picsum.photos/800/800?random=109' },
  { id: 10, title: '品牌吉祥物 - 光光', category: 'illustration', image: 'https://picsum.photos/800/600?random=110' },
];