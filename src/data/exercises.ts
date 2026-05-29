// src/data/exercises.ts

export type Exercise = {
  id: number;
  name: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  muscleGroup: string;
  description: string;
  imageSrc: string;
};

export const exercises: Exercise[] = [
  {
    id: 1,
    name: "Pull-Ups",
    difficulty: "Intermediate",
    muscleGroup: "Back",
    description: "Classic upper body pulling exercise. Builds back, arms and grip strength.",
    imageSrc: "/exercises/pullup.jpg"
  },
  {
    id: 2,
    name: "Push-Ups",
    difficulty: "Beginner",
    muscleGroup: "Chest",
    description: "Fundamental pushing movement. Great for chest, shoulders and triceps.",
    imageSrc: "/exercises/pushup.jpg"
  },
  {
    id: 3,
    name: "Squats",
    difficulty: "Beginner",
    muscleGroup: "Legs",
    description: "King of lower body exercises. Builds quads, glutes and core.",
    imageSrc: "/exercises/squat.jpeg"
  },
  {
    id: 4,
    name: "Dips",
    difficulty: "Intermediate",
    muscleGroup: "Chest",
    description: "Excellent for triceps and lower chest. Advanced pushing movement.",
    imageSrc: "/exercises/dip.jpeg"
  },
  {
    id: 5,
    name: "Plank",
    difficulty: "Beginner",
    muscleGroup: "Core",
    description: "Builds core stability and endurance.",
    imageSrc: "/exercises/plank.jpg"
  },
];