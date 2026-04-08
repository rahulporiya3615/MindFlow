import { create } from 'zustand';

interface Habit {
  id: string;
  name: string;
  streak: number;
}

interface HabitsState {
  habits: Habit[];
  addHabit: (habit: Habit) => void;
  updateStreak: (id: string) => void;
  removeHabit: (id: string) => void;
}

export const useHabitsStore = create<HabitsState>(set => ({
  habits: [],
  addHabit: habit => set(state => ({ habits: [...state.habits, habit] })),
  updateStreak: id =>
    set(state => ({
      habits: state.habits.map(h =>
        h.id === id ? { ...h, streak: h.streak + 1 } : h,
      ),
    })),
  removeHabit: id =>
    set(state => ({ habits: state.habits.filter(h => h.id !== id) })),
}));
