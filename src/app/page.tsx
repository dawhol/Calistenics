// src/app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
            MASTER YOUR BODY
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-10">
            Pure strength. No equipment. Just you and your body. Start your calisthenics journey today and unlock your full potential.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#exercises"
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-10 py-4 rounded-2xl text-lg transition-all duration-200 active:scale-95 shadow-lg shadow-emerald-500/30"
            >
              Start Training Now
            </a>

            <a
              href="#programs"
              className="border border-zinc-600 hover:bg-zinc-900 hover:border-zinc-500 font-semibold px-10 py-4 rounded-2xl text-lg transition-all duration-200"
            >
              Browse Programs
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-500 text-sm animate-bounce">
          ↓ Scroll to explore
        </div>
      </div>
    </div>
  );
}