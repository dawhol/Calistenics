// src/data/exercises.ts

export type Exercise = {
  id: number;
  name: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  muscleGroup: string;
  description: string;
  imageSrc: string;
    //new detailed fields for detailed execise descriptions in popups
  properTechniqueDescription:string; 
  progressions:string[]; 
  variations: string[];
};

export const exercises: Exercise[] = [
  {
    id: 1,
    name: "Pull-Ups",
    difficulty: "Intermediate",
    muscleGroup: "Back",
    description: "Classic upper body pulling exercise. Builds back, arms and grip strength.",
    imageSrc: "/exercises/pullup.jpg",
    properTechniqueDescription: "hang from a bar with an overhand grip, pull your body up until chin passes the bar, then lower slowly.",
    progressions: ["Dead Hang", "scapular pulls", "negative Pull-ups", "Full Pull-Ups"],
    variations: ["chin-ups", "Wide Grip Pullups", "commando Pull-upd"], 
  },
  //to be filled
  {
    id: 2,
    name: "Push-Ups",
    difficulty: "Beginner",
    muscleGroup: "Chest",
    description: "Fundamental pushing movement for upper body.",
    imageSrc: "/exercises/pushup.jpg",
    properTechniqueDescription: "Start in plank position, lower your body until chest nearly touches the floor, then push back up.",
    progressions: ["Wall Push-Ups", "Knee Push-Ups", "Standard Push-Ups", "Diamond Push-Ups", "Archer Push-Ups"],
    variations: ["Wide Grip", "Diamond", "Decline", "Pike Push-Ups"]
  },
  {
    id: 3,
    name: "Squats",
    difficulty: "Beginner",
    muscleGroup: "Legs",
    description: "The best lower body exercise.",
    imageSrc: "/exercises/squat.jpeg",
    properTechniqueDescription: "Stand with feet shoulder-width, lower your hips as if sitting in a chair, then drive through heels to stand up.",
    progressions: ["Assisted Squats", "Bodyweight Squats", "Goblet Squats", "Pistol Squats"],
    variations: ["Sumo Squats", "Jump Squats", "Bulgarian Split Squats"]
  },
  {
    id: 4,
    name: "Dips",
    difficulty: "Intermediate",
    muscleGroup: "Chest",
    description: "Excellent pushing exercise for triceps and chest.",
    imageSrc: "/exercises/dip.jpeg",
    properTechniqueDescription: "Hold onto parallel bars, lower your body until shoulders are below elbows, then push back up.",
    progressions: ["Bench Dips", "Assisted Dips", "Full Dips", "Weighted Dips"],
    variations: ["Chest Focused Dips", "Triceps Focused Dips", "Korean Dips"]
  },
  {
    id: 5,
    name: "Plank",
    difficulty: "Beginner",
    muscleGroup: "Core",
    description: "Builds core strength and stability.",
    imageSrc: "/exercises/plank.jpg",
    properTechniqueDescription: "Hold a forearm plank position keeping your body in a straight line from head to heels.",
    progressions: ["Knee Plank", "Standard Plank", "Side Plank", "Plank with Shoulder Taps"],
    variations: ["Side Plank", "Plank to Push-Up", "Long Lever Plank"]
  }
];