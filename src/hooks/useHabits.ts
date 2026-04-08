import { useHabitsStore } from '../store/habitsStore';

export const useHabits = () => {
  const { habits, addHabit, updateStreak, removeHabit } = useHabitsStore();
  return { habits, addHabit, updateStreak, removeHabit };
};
