import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-bg p-4 text-center">
      <h2 className="text-4xl font-serif font-bold text-brand-teal mb-4">404</h2>
      <p className="text-xl text-gray-600 mb-8">找不到此頁面</p>
      <Link 
        href="/" 
        className="px-6 py-2 bg-brand-teal text-white rounded-full hover:bg-brand-teal/80 transition-colors"
      >
        返回首頁
      </Link>
    </div>
  );
}