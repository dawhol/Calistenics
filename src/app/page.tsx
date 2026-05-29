// src/app/page.tsx
'use client'; //server components are the default in Next.js 13, but we need client components for interactivity (search bar, filters, etc.)/useState for search input state management

//import {useState} from 'react';
import ExerciseCard from '@/components/exercises/ExerciseCard';
import {exercises} from '@/data/exercises';


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
            MASTER YOUR BODY
          </h1>
          <p className="text-2xl text-zinc-400 mb-10">
            Real strength. No equipment. No excuses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#exercises" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-10 py-4 rounded-2xl text-lg transition-all active:scale-95">
              Start Training Now
            </a>
            <a href="#programs" className="border border-zinc-600 hover:bg-zinc-900 font-semibold px-10 py-4 rounded-2xl text-lg transition-all">
              Browse Programs
            </a>
          </div>
        </div>
      </div>

      {/* Exercises Section with Search and Filter */}
      <section id="exercises" className="py-20 px-6 bg-zinc-900"> 
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">All Exercises</h2>
            <p className="text-zinc-400 text-lg">Browse our full collection</p>
          </div>

          {/*Search and Filter Bar*/}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <input
              type="text"
              placeholder="Search exercises..."
              className="flex-1 bg-zinc-800 border border-zinc-700 rounded-2x1 px-5 py-3 text-withe focus:outline-none focus:border-emerald-500"
              onChange={(e) => console.log("Searching for:", e.target.value)} //search function for placeholder/onChasnge={}linstenes for any change in the input/(e) is the event object/e.target is the actual input element triggered the event/e.target.value shows whatever user has typed in the search bar/console.log prints out search input
            />

            <select className="bg-zinc-800 border border-zinc-700 rounded-2x1 px-5 py-3 text-white focus:outline-none focus:border-emerald-500">
              <option value="">All levels</option>
              <option value="">Beginner</option>
              <option value="">Intermediate</option>
              <option value="">Advanced</option>
            </select>
          </div>
              
              
          {/* Exercise Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> {/*loop through exercises from data/exercises.ts/.map()= For each exercise, render an ExerciseCard*/}
            {exercises.map((exercise) => (
              <ExerciseCard 
                  key={exercise.id}
                  name={exercise.name} 
                  difficulty={exercise.difficulty} 
                  description={exercise.description}
                  imageSrc={exercise.imageSrc} 
                  alt={"exercise.name"}
                />
            ))}
            {/*<ExerciseCard //old exercise tiles, now rendered from the data 
              name="Push-Ups" 
              difficulty="Beginner" 
              description="Develop chest, shoulders and triceps. Perfect for beginners."
              imageSrc="/exercises/pushup.jpg" 
              alt="Push-Ups"
            />
            
            <ExerciseCard 
              name="Squats" 
              difficulty="Beginner" 
              description="The best lower body exercise. Builds powerful legs and core."
              imageSrc="/exercises/squat.jpeg" 
              alt="Squats"
            />
            
            <ExerciseCard 
              name="Dips" 
              difficulty="Intermediate" 
              description="Excellent for triceps and chest. Great pushing movement."
              imageSrc="/exercises/dip.jpeg" 
              alt="Dips"
            />
            
            <ExerciseCard 
              name="Plank" 
              difficulty="Beginner" 
              description="Builds insane core strength and stability."
              imageSrc="/exercises/plank.jpg" 
              alt="Plank"
            />*/}
          </div>
        </div>
      </section>

    </div>
  );
}