// src/components/layout/Navbar.tsx
'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/" className="hover:text-emerald-400 transition-colors">
          <h1 className="text-3xl font-bold text-emerald-500 tracking-tight">
            CALISTHENICS
          </h1>
        </a>

        {/* Hamburger Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl focus:outline-none hover:text-emerald-400 transition-colors"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-black border-t border-zinc-800 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6 text-lg">
            <a href="#exercises" className="hover:text-emerald-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Exercises</a>
            <a href="#programs" className="hover:text-emerald-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Programs</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="/contact" className="hover:text-emerald-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}