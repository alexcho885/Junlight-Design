/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. 忽略 TypeScript 錯誤 (如型別不符)
  typescript: {
    ignoreBuildErrors: true,
  },
  // 2. 忽略 ESLint 錯誤 (如變數未定義、未使用的變數)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;