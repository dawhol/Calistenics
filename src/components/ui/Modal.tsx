// src/components/ui/Modal.tsx
'use client';

type ModalProps = {
  exercise: any;
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ exercise, isOpen, onClose }: ModalProps) {
  if (!isOpen || !exercise) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    onClick={onClose} //close the modal when clicking outside the content area
    >
      <div className="bg-zinc-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-auto"
      onClick={(e) => e.stopPropagation()} //prevents closing when clicking insinde the modal
      >
        
        {/* Header Image */}
        <div className="relative h-64">
          <img 
            src={exercise.imageSrc} 
            alt={exercise.name}
            className="w-full h-full object-cover rounded-t-3xl"
          />
          
          {/* Close Button - Simple text version */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white px-4 py-2 rounded-full text-xl font-bold transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-8">
          <h2 className="text-4xl font-bold mb-2">{exercise.name}</h2>
          <span className="inline-block px-4 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm mb-6">
            {exercise.difficulty} • {exercise.muscleGroup}
          </span>

          <div className="space-y-8">
            {/* Technique */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Proper Technique</h3>
              <p className="text-zinc-300 leading-relaxed">{exercise.properTechniqueDescription}</p>
            </div>

            {/* Progressions */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Progressions</h3>
              <ul className="space-y-2">
                {exercise.progressions?.map((prog: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">→</span>
                    <span>{prog}</span>
                  </li> 
                  )) || <p className="text-zinc-400">No progression available.</p>} {/*in case there is no progression data inserted for particular exercise*/}
              </ul>
            </div>

            {/* Variations */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Variations</h3>
              <ul className="space-y-2">
                {exercise.variations?.map((varia: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">★</span>
                    <span>{varia}</span>
                  </li>
                )) || <p className="text-zinc-400">No variations available.</p>} {/*the same as in case of progeressions, if no variations data included, display the message*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}