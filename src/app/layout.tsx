//src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Calistenics - Train Naturally',
  description: 'Discover the art of calistenics and build strength with your own bodyweight',
  /*icons: {
    icon: '/favicon.ico',
  },*/
};

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className="bg-zinc-950 text-white">
        {/*Navbar to be kept across all pages*/}
        <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
          <div className="max-w-7x1 mx-auto px-6 py-5 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-emerald-500">CALISTENICS</h1>
              <div className="space-x-8">
                <a href="#" className="hover:text-emrald-500">Home</a>
                <a href="#" className="hover:text-emrald-500">Exercises</a>
                <a href="#" className="hover:text-emrald-500">Programs</a>
                <a href="#" className="hover:text-emrald-500">About</a>
              </div>
          </div>
        </nav>
      {/*Main content area where different pages will be rendered based on the route*/}
      <main>
        {children}
      </main>
      <footer className="bg-black border-t border-zinc-800 py-10 mt-20">
        <div className="max-w-7x1 mx-auto px-6 text-center text-zinc-500">
          <p>&copy; 2023 Calistenics. All rights reserved.</p>
        </div>
      </footer>
      </body>
    </html>
  );
}
