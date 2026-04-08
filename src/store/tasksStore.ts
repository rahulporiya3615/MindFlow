import { create } from 'zustand';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TasksState {
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
}

export const useTasksStore = create<TasksState>(set => ({
  tasks: [],
  addTask: task => set(state => ({ tasks: [...state.tasks, task] })),
  toggleTask: id =>
    set(state => ({
      tasks: state.tasks.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    })),
  removeTask: id =>
    set(state => ({ tasks: state.tasks.filter(t => t.id !== id) })),
}));
