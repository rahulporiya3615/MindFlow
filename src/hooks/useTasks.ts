import { useTasksStore } from '../store/tasksStore';

export const useTasks = () => {
  const { tasks, addTask, toggleTask, removeTask } = useTasksStore();
  return { tasks, addTask, toggleTask, removeTask };
};
