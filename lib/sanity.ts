import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // 設為 false 可以讀取最新數據，生產環境建議設為 true 以利用快取
})

// 圖片網址產生器 helper
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ Queries
export const projectsQuery = `*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  category,
  mainImage,
  publishedAt
}`

export const pricingQuery = `*[_type == "pricing"] | order(order desc) {
  _id,
  title,
  price,
  originalPrice,
  features,
  tag
}`

export const siteSettingsQuery = `*[_type == "siteSettings"][0]`