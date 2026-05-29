// src/app/page.tsx
'use client';

import ExerciseCard from '@/components/exercises/ExerciseCard';
//import {exercises} from '@/data/exercises';
import Modal from '@/components/ui/Modal';
import { useState, useRef, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
//import { error } from 'console';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Home() {

  //ref for testimonials scroll container
  const scrollContainer = useRef<HTMLDivElement>(null);

  //state to hold the list of exercises (will be loaded from supabase later)
  const[dbExercises, setDbExercises] = useState<any[]>([]);
  const [loading,setLoading] = useState(true);


  //search and filter states
  const [searchTerm, setSearchTerm] = useState(''); //state that holds the current value of the search input/initially empty string
  const [difficultyFilter, setDifficultyFilter] = useState(''); //state that holds the current value of the difficulty filter/initially empty string

  //newsletter states
  const[email, setEmail] = useState(''); //state to hold the current value of the email input in the newsletter subscription form
  const[showSuccess, setShowSuccess] = useState(false); //state to control the display of the success message after newsletter subscription

  const handleNewsletterSubmit = (e:React.FormEvent) => {
    e.preventDefault(); //prevent the default form submission behavior (page reload)
    if (email.trim()) {
      //simulate sending to backend
      console.log("New subscriber:", email);

      setShowSuccess(true); //show success message
      setEmail(''); //clear the email input field

      //hide success message after 4 sec.
      setTimeout(() => setShowSuccess(false), 4000);
    }
  };

  //fetch exercises from supabase when component mounts
  useEffect(() => {
    async function fetchExercises() {
      try {
        const { data, error } = await supabase
          .from('exercises') //name of the table in supabase
          .select('*') //select all columns
          .order('id', { ascending: true }); //order by id in ascending order (optional, but helps to have a consistent order)

          if(error) {
            console.error("Error fetching exercises:", error);
          } else if (data) {
            setDbExercises(data); //update the dbExercises state with the fetched data
          }
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
         setLoading(false); //set loading to false after fetch is complete (whether successful or not)
        }
      }
      
      fetchExercises(); //call the async function to fetch exercises
    }, []);

    

  //Modal states
  const [selectedExercise, setSelectedExercise] = useState<any>(null); //state to hold the currently selected exercise for the modal
  const [isModalOpen, setIsModalOpen] = useState(false); //state to control the visibility of the modal

  const openModal = (exercise: any) => {
    setSelectedExercise(exercise); //set the selected exercise to be displayed in the modal
    setIsModalOpen(true); //open the modal
  };

  const closeModal = () => {
      setIsModalOpen(false); //close the modal
      setSelectedExercise(null); //clear the selected exercise
    }

    //filter exercises based on search term and difficulty filter/filteredExercises is a new array that contains only the exercises that match the search term and the selected difficulty filter
    const filteredExercises = dbExercises.filter((exercise) => {
      const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()); //check if exercise name includes the search term (case-insensitive)
      const matchesFilter = difficultyFilter === '' || exercise.difficulty === difficultyFilter; //check if exercise matches the selected difficulty filter (or if no filter is selected)
      
      return matchesSearch && matchesFilter; 
    });
  
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
            <input    //controlled component element: <input>. its value is controlled by react state (searchTerm). onChange handler updates the state whenever user types in the input field, ensuring that the displayed value always reflects the current state of searchTerm
              type="text"
              placeholder="Search exercises..."
              className="flex-1 bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-emerald-500"
              onChange={(e) => setSearchTerm(e.target.value)} //search function for placeholder/onChasnge={}linstenes for any change in the input/(e) is the event object/e.target is the actual input element triggered the event/e.target.value shows whatever user has typed in the search bar/console.log changed to setSearchTerm to update the searchTerm state with the current value of the input field
            />

            <select 
              className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-emerald-500"
              onChange={(e) => setDifficultyFilter(e.target.value)} //filter function for difficulty dropdown/onChange listens for any change in the select element/updates the difficultyFilter state with the selected value
            >
              <option value="">All levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
              
              
          {/* Exercise Grid */}
          {loading ? ( //conditional rendering: if loading is true, show loading message. otherwise, show the exercise grid
            <div className='text-center text-zinc-400 py-10 text-xl'>
              Loading exercises...
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> {/*loop that navigates through exercises from data/exercises.ts/.map()= For each exercise, render an ExerciseCard/changed from exercises to filteredExercises*/}
              {filteredExercises.map((exercise) => (
                <div
                  key={exercise.id}
                  onClick={() => openModal(exercise)}
                  className= "cursor-pointer"
                >
                <ExerciseCard 
                  key={exercise.id}
                  name={exercise.name} 
                  difficulty={exercise.difficulty} 
                  description={exercise.description}
                  imageSrc={exercise.imageSrc} 
                  alt={exercise.name}
                />
              </div>
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
          )} 
        </div>
      </section>
      
      {/*Programs Section*/}
      <section id="programs" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Training Programs</h2>
          <p className="text-zinc-400 text-lg mb-12">Choose your level and start progressing</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/*Program cards will go here, similar to exercise cards but with different content (program name, difficulty, description, etc.)*/}
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Beginner Program</h3>
              <p className="text-zinc-400">3 days per week • Full Body</p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Intermediate Program</h3>
              <p className="text-zinc-400">4 days per week • Push/Pull/Legs</p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Advanced Program</h3>
              <p className="text-zinc-400">5 days per week • Skill Focused</p>
            </div>
          </div>
        </div>

      </section>

      {/*About Section*/}
      <section id="about" className='py-20 px-6 bg-zinc-900'>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">About Calistenics</h2>
          <p className='text-zinc-400 text-lg leading-relaxed'>
            Calistenics- the art of building real strenght using only your bodyweight. No expensive gym memberships, no facy equipment- just consistent effort and proper technique.
          </p>
        </div>
      </section>

      {/* Testimonials + Newsletter Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          
          {/* Testimonials */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Real Results, Real People</h2>
            <p className="text-zinc-400 text-lg">Don't just take our word for it</p>
          </div>

          <div className="relative">

            <button
              onClick={() => scrollContainer.current?.scrollBy({ left: -400, behavior: 'smooth' })}
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/80 hover:bg-black border border-zinc-700 rounded-full flex items-center justify-center text-2xl z-20 hidden md:flex transition-all"
            >
              ←
            </button>

            <div 
              ref={scrollContainer}
              className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide scroll-smooth"
            >
            
              <div className="bg-zinc-900 p-8 rounded-3xl min-w-[380px] snap-center flex-shrink-0">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="James Dean"
                  className="w-20 h-20 rounded-2xl object-cover mb-6"
                />
                <p className="text-zinc-300 italic mb-8">
                  "I went from 0 pull-ups to 12 in just 8 weeks. The progressions really work."
                </p>
                <div>
                  <p className="font-semibold">James Dean</p>
                  <p className="text-sm text-zinc-500">Carpenter • 4 months training</p>
                </div>
              </div>

              <div className="bg-zinc-900 p-8 rounded-3xl min-w-[380px] snap-center flex-shrink-0">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Elizabeth Taylor"
                  className="w-20 h-20 rounded-2xl object-cover mb-6"
                />  
                <p className="text-zinc-300 italic mb-8">
                  "Best decision I made this year. Lost 8kg and gained real strength without any gym equipment."
                </p>
                <div>
                  <p className="font-semibold">Elizabeth Taylor</p>
                  <p className="text-sm text-zinc-500">Teacher • 6 months training</p>
                </div>
              </div>

              <div className="bg-zinc-900 p-8 rounded-3xl min-w-[380px] snap-center flex-shrink-0">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Richard Burton"
                  className="w-20 h-20 rounded-2xl object-cover mb-6"
                />  
                <p className="text-zinc-300 italic mb-8">
                  "The technique explanations in the exercise section are gold. Finally understanding why my performance was bad."
                </p>
                <div>
                  <p className="font-semibold">Richard Burton</p>
                  <p className="text-sm text-zinc-500">Mechanic • 3 months training</p>
                </div>
              </div>

              <div className='bg-zinc-900 p-8 rounded-3xl min-w-[380px] snap-center'>
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt='Sophia Rodriguez'
                  className="w-20 h-20 rounded-2xl object-cover mb-6"
                />
                <p className="text-zinc-300 italic mb-8">
                  "Finally found a training method that fits my busy lifestyle. Highly recommend!"
                </p>
                <div>
                  <p className="font-semibold">Sophia Rodriguez</p>
                  <p className="text-sm text-zinc-500">Nurse • 5 months training</p>
                </div>
              </div>

              <div className="bg-zinc-900 p-8 rounded-3xl min-w-[380px] snap-center flex-shrink-0">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Richard Burton"
                  className="w-20 h-20 rounded-2xl object-cover mb-6"
                />  
                <p className="text-zinc-300 italic mb-8">
                  "The technique explanations in the exercise section are gold. Finally understanding why my performance was bad."
                </p>
                <div>
                  <p className="font-semibold">Richard Burton</p>
                  <p className="text-sm text-zinc-500">Mechanic • 3 months training</p>
                </div>
              </div>

              <div className="bg-zinc-900 p-8 rounded-3xl min-w-[380px] snap-center flex-shrink-0">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Richard Burton"
                  className="w-20 h-20 rounded-2xl object-cover mb-6"
                />  
                <p className="text-zinc-300 italic mb-8">
                  "The technique explanations in the exercise section are gold. Finally understanding why my performance was bad."
                </p>
                <div>
                  <p className="font-semibold">Richard Burton</p>
                  <p className="text-sm text-zinc-500">Mechanic • 3 months training</p>
                </div>
              </div>

            </div>
            
            <button
              onClick={() => scrollContainer.current?.scrollBy({ left: 400, behavior: 'smooth' })}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/90 hover:bg-black border border-zinc-700 rounded-full flex items-center justify-center text-3xl z-20 hidden md:flex transition-all"
            >
              →
            </button>

          </div>

          {/* Newsletter */}
          <div className="bg-zinc-900 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-3">Stay Updated</h3>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
              Get weekly tips, new workout programs, and progress advice directly to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3">

                <input 
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500"
                  required
                />
                <button 
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-10 py-4 rounded-2xl transition-all active:scale-95 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {showSuccess && (
              <p className="text-emerald-400 mt-6 font-medium">
                ✓ Thank you! You've been subscribed successfully.
              </p>
            )}

            <p className="text-xs text-zinc-500 mt-4">We respect your inbox. Unsubscribe anytime.</p>
          </div>

        </div>
      </section>
      
      {isModalOpen && selectedExercise && (
        <Modal 
          exercise={selectedExercise}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
      
    </div>
  );
}