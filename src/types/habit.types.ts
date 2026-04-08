// Habit types
export interface Habit {
  id: string;
  name: string;
  description?: string;
  streak: number;
  createdAt: Date;
  lastCompleted?: Date;
}

export interface CreateHabitInput {
  name: string;
  description?: string;
}
