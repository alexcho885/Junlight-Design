import React from 'react'
import { client, projectsQuery, urlFor } from '@/lib/sanity'
import Link from 'next/link'

// TypeScript Interface for Project
interface Project {
  _id: string
  title: string
  slug: { current: string }
  category: string
  mainImage: any
  publishedAt: string
}

// Data Fetching Function (Server Component)
async function getProjects() {
  return await client.fetch<Project[]>(projectsQuery, {}, {
    next: { revalidate: 60 } // ISR: 每 60 秒重新驗證快取
  })
}

const PortfolioPage = async () => {
  const projects = await getProjects()

  // Helper to map category codes to display names
  const getCategoryName = (cat: string) => {
    const map: Record<string, string> = {
      'identity': '品牌識別',
      'public': '公共事務',
      'commercial': '商業醫療',
      'events': '活動賽事',
      'illustration': '插畫貼圖'
    }
    return map[cat] || cat
  }

  return (
    <section className="pt-32 pb-24 min-h-screen bg-[#F8FBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800 mb-4">
            精選設計案例
          </h2>
          <p className="text-gray-500 text-lg font-light tracking-wide">
            來自 Sanity CMS 的即時作品集
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item) => (
            <Link 
              href={`/portfolio/${item.slug.current}`}
              key={item._id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
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
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">No Image</div>
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
          ))}
        </div>

      </div>
    </section>
  )
}

export default PortfolioPage