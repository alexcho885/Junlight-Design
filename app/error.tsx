'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Runtime Error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-bg p-4 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        糟糕，頁面發生了一點問題
      </h2>
      <p className="text-gray-500 mb-8 max-w-md">
        {error.message || "系統遇到未預期的錯誤，請稍後再試。"}
      </p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="px-6 py-2 bg-brand-teal text-white rounded-full hover:bg-brand-teal/80 transition-colors"
      >
        重試
      </button>
    </div>
  );
}