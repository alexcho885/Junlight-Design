export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-bg">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-brand-bg border-t-brand-teal animate-spin"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-transparent border-b-brand-orange animate-spin [animation-duration:1.5s]"></div>
      </div>
    </div>
  );
}