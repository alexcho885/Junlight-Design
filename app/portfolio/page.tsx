import React from 'react'
import { client, projectsQuery } from '@/lib/sanity'
import PortfolioList, { Project } from '@/components/PortfolioList'

// Data Fetching Function (Server Component)
async function getProjects() {
  try {
    return await client.fetch<Project[]>(projectsQuery, {}, {
      next: { revalidate: 60 } // ISR: 每 60 秒重新驗證快取
    })
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    // Return empty array to allow build to succeed even if fetch fails
    return [];
  }
}

const PortfolioPage = async () => {
  const projects = await getProjects()

  return (
    <section className="pt-32 pb-24 min-h-screen bg-[#F8FBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-center text-4xl font-serif font-bold text-gray-800 mb-4">
            我們的專業作品集
          </h2>
          <p className="text-gray-500 text-lg font-light tracking-wide">
            來自 Sanity CMS 的即時作品集
          </p>
        </div>

        {/* Client Component handling state and filtering */}
        <PortfolioList projects={projects} />

      </div>
    </section>
  )
}

export default PortfolioPage