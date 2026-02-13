// ./src/services/api.js
const API_URL = 'http://localhost:5000/api';

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Login failed');
  }
  return response.json();
};

export const registerUser = async (name, email, password) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Registration failed');
  }
  return response.json();
};

// Mock Service

export const mockStats = {
  workoutsLogged: "10K+",
  activeUsers: "5K+",
  consistencyRate: "99%",
};

export const dashboardStats = {
  totalWorkouts: 42,
  totalVolume: "12,500 kg",
  currentWeight: "78 kg",
  streak: 5,
};

export const workoutHistory = [
  {
    id: 1,
    exercise: "Bench Press",
    volume: "1000 kg",
    date: "2023-10-25",
    sets: 4,
    reps: 10,
    weight: 100
  },
  {
    id: 2,
    exercise: "Squat",
    volume: "1200 kg",
    date: "2023-10-24",
    sets: 4,
    reps: 10,
    weight: 120
  },
  {
    id: 3,
    exercise: "Deadlift",
    volume: "1500 kg",
    date: "2023-10-22",
    sets: 5,
    reps: 5,
    weight: 150
  },
];

export const userProfile = {
  name: "Champion",
  age: 28,
  height: 180, // cm
  weight: 78, // kg
  goal: "Build Muscle", // Lose / Gain / Maintain
  bmi: 24.1,
};
