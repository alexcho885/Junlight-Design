import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-brand relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
          準備好為品牌<br className="sm:hidden" />注入光芒了嗎？
        </h2>
        <p className="text-white/90 text-lg mb-10 font-light">
          無論是從零開始的品牌建構，或是既有形象的質感升級，<br className="hidden md:block" />
          我們都準備好成為您的最佳夥伴。
        </p>
        <Link 
          to="/contact"
          className="inline-flex items-center justify-center px-10 py-4 bg-white text-brand-teal font-bold text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          立即開始專案
          <i className="fa-solid fa-paper-plane ml-2"></i>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;