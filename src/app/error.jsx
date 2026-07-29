"use client";

export default function ErrorBoundary({ error, reset }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#040404] px-6 py-12">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl font-light text-white tracking-tight mb-4">
          Something went wrong
        </h1>
        <p className="font-sans text-sm text-white/50 leading-relaxed mb-8">
          An unexpected error occurred while rendering this page. Please try
          refreshing or go back to the homepage.
        </p>
        {error && (
          <p className="font-sans text-xs text-white/25 mb-8">
            {error.message}
          </p>
        )}
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/[0.04] backdrop-blur-md px-7 py-3 text-sm font-sans tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}