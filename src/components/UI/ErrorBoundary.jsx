"use client";

export default function ErrorBoundary({ error, reset }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#040404]">
      <div className="flex flex-col items-center gap-4 text-center max-w-md px-6">
        <h2 className="font-serif text-2xl font-light text-white">Something went wrong</h2>
        <p className="font-sans text-sm text-white/50 leading-relaxed">
          An unexpected error occurred. Please try refreshing the page.
        </p>
        {error && (
          <p className="font-sans text-xs text-white/30 mt-2">{error.message}</p>
        )}
        <button
          onClick={reset}
          className="mt-2 border border-white/25 bg-white/[0.04] backdrop-blur-md text-white px-7 py-3 text-sm rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer font-sans tracking-wider"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
