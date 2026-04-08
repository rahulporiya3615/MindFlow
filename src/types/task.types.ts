// Task types
export type TaskStatus = 'pending' | 'in_progress' | 'completed';
export type TaskPriority = 'urgent' | 'high' | 'medium' | 'low';
export type TaskCategory = 'work' | 'personal' | 'health' | 'learning';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority?: TaskPriority;
  category?: TaskCategory;
  createdAt: Date;
  dueDate?: Date;
}

export interface CreateTaskInput {
  title: string;
  description?: string;
  priority?: TaskPriority;
  category?: TaskCategory;
  dueDate?: Date;
}
