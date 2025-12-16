import React from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-brand-bg min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800 mb-4">
            聯絡我們
          </h2>
          <p className="text-gray-500 text-lg font-light">
            期待與您討論專案，共同挖掘品牌價值
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          
          {/* Left Column: Contact Info & QR Code */}
          <div className="space-y-8">
             
             {/* Info Cards */}
             <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 space-y-6">
                <h3 className="text-xl font-serif font-bold text-gray-800 border-b border-gray-100 pb-4 mb-4">
                  聯絡資訊
                </h3>
                
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center text-xl group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Phone</p>
                    <p className="text-lg font-medium text-gray-800">{CONTACT_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center text-xl group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
                    <p className="text-lg font-medium text-gray-800">{CONTACT_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-xl group-hover:bg-gray-600 group-hover:text-white transition-all duration-300">
                    <i className="fa-regular fa-clock"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Business Hours</p>
                    <p className="text-lg font-medium text-gray-800">週一至週五 09:30 - 18:30</p>
                  </div>
                </div>
             </div>

             {/* LINE QR Code Card */}
             <div className="bg-gradient-to-br from-[#00C300]/10 to-brand-teal/5 p-8 rounded-[2rem] border border-[#00C300]/20 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
                <div className="relative group">
                  <div className="w-40 h-40 bg-white p-2 rounded-xl shadow-md mx-auto">
                    {/* Placeholder for QR Code */}
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${CONTACT_INFO.lineLink}`} 
                      alt="LINE QR Code" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-[#00C300] rounded-full flex items-center justify-center text-white shadow-lg">
                    <i className="fa-brands fa-line text-xl"></i>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">加入 LINE 官方帳號</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    掃描 QR Code 或搜尋 ID：<br/>
                    <span className="font-bold text-[#00C300] text-lg">{CONTACT_INFO.lineId}</span>
                  </p>
                  <a 
                    href={CONTACT_INFO.lineLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-[#00C300] text-white rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:bg-[#00b300] transition-all"
                  >
                    立即加入好友
                  </a>
                </div>
             </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">專案詢價單</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">您的姓名 *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all" placeholder="請輸入姓名" required />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">電子信箱 *</label>
                   <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all" placeholder="example@email.com" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">需求類別 *</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-gray-600">
                    <option value="" disabled selected>請選擇項目...</option>
                    <option>品牌設計 (Logo/CI)</option>
                    <option>社群行銷素材</option>
                    <option>活動視覺設計</option>
                    <option>短影音剪輯</option>
                    <option>插畫/貼圖設計</option>
                    <option>其他</option>
                  </select>
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">預算範圍</label>
                   <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-gray-600">
                    <option value="" disabled selected>請選擇預算...</option>
                    <option>1 萬以下</option>
                    <option>1 萬 - 3 萬</option>
                    <option>3 萬 - 5 萬</option>
                    <option>5 萬 - 10 萬</option>
                    <option>10 萬以上</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">訊息內容 / 專案描述</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all resize-none" placeholder="請簡述您的需求、風格偏好或預計時程..."></textarea>
              </div>

              <button className="w-full py-4 rounded-xl bg-gradient-brand text-white font-bold text-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300">
                發送詢價訊息
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Placeholder */}
        <div className="w-full rounded-[2rem] overflow-hidden shadow-lg border border-gray-200 h-96 relative group">
           {/* Overlay to prevent scroll capture until clicked (optional UX improvement) */}
           <iframe 
             title="Jun Light Design Location"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7036493264513!2d121.56156431500653!3d25.04412938396752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6e9d93249%3A0xd508f7b3aa02d93d!2sTaipei%20City%20Hall!5e0!3m2!1sen!2stw!4v1625624892415!5m2!1sen!2stw" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen={false} 
             loading="lazy"
             className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
           ></iframe>
           
           <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-white max-w-xs">
              <p className="text-xs text-gray-400 font-bold uppercase mb-1">Office Location</p>
              <p className="text-gray-800 font-medium text-sm">台北市信義區 (工作室採預約制)</p>
           </div>
        </div>

      </section>
    </div>
  );
};

export default Contact;