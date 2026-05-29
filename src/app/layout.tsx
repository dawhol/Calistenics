import type { Metadata } from 'next';
import './globals.css';
//import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calisthenics - Train Naturally',
  description: 'Discover the art of calisthenics and build real strength with your own bodyweight',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white antialiased">
        
        {/* Navbar */}
        <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            
            {/*adding clicable logo*/}
            <a href="/" className="hover:text-emerald-400 transition-colors"> {/*should be Link component insteat, but it causes an error-to discuss */}
              <h1 className="text-3xl font-bold text-emerald-500 tracking-tight">
                CALISTHENICS
              </h1>
            </a>

            <div className="flex gap-8 text-lg">
              <a href="#" className="hover:text-emerald-400 transition-colors">Exercises</a> 
              <a href="#" className="hover:text-emerald-400 transition-colors">Programs</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">About</a>
            </div>

          </div>
        </nav>

        <main>{children}</main>

        <footer className="bg-black border-t border-zinc-800 py-10 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center text-zinc-500">
            <p>© 2026 Calisthenics. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}