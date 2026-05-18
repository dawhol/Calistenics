//src/app/components/exercises/ExerciseCard.tsx

import Image from 'next/image';

type ExerciseCardProps = {
    name: string;
    difficulty: string;
    description: string;
    imageSrc: string;
    alt: string;
};

export default function ExerciseCard({ name, difficulty, description, imageSrc, alt}: ExerciseCardProps) {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-emerald-500 transition-all group">
            
            <div className="relative h-56 w-full">
                <Image 
                    src={imageSrc}
                    alt={alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/*Content*/}
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{name}</h3>

                <span className={`inline-block px-3 py-1 rounded-full text-sm mb-3
                    ${difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' : ''}
                    $difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                    $difficulty === 'Advanced' ? 'bg-red-500/20 text-red-400' : ''}`}>
                    {difficulty}
                </span>

                <p className="text-zinc-400 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}