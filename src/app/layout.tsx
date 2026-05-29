

import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';


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
        
      
       
        <Navbar />
        
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