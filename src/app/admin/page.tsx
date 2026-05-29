//src/app/admin/page.tsx
'use client';

import {useState, useEffect} from 'react';
import {Exercise} from '@/data/exercises';

export defaut function AdminPanel() {

    //state to hold the list of exercise (will be loaded from local storage later)

    const [exercises, setExercises] = useState<Exercise[]>([]);

    //form state for adding new exercise 
    const [newexercise, setNewExercise] = useState({
        name: '',
        difficulty: 'Beginner' as 'Beginner' | 'Intermediate' | 'Advanced',
        muscleGroup: '',
        description: '',
        imageSrc: '',
    });

    //load exercises from local storeage when component mounts
    useEffect(() => {
        const savedExercises = localStorage.getItem('exercises');
        if (savedExercises) {
            setExercises(JSON.parse(savedExercises));
        }
    }, []);

    



}