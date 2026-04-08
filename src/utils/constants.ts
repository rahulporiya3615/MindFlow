// App constants
export const APP_NAME = 'MindFlow';
export const APP_VERSION = '1.0.0';

// Task constants
export const TASK_CATEGORIES = [
  'work',
  'personal',
  'health',
  'learning',
] as const;
export const TASK_PRIORITIES = ['low', 'medium', 'high', 'urgent'] as const;
export const TASK_STATUSES = [
  'pending',
  'in_progress',
  'completed',
  'archived',
] as const;

// Habit constants
export const HABIT_FREQUENCIES = ['daily', 'weekly', 'custom'] as const;
export const MOOD_TYPES = ['great', 'good', 'okay', 'bad'] as const;
export const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Category colors
export const CATEGORY_COLORS = {
  work: '#3B82F6',
  personal: '#8B5CF6',
  health: '#10B981',
  learning: '#F59E0B',
} as const;

// Priority colors
export const PRIORITY_COLORS = {
  low: '#6B7280',
  medium: '#3B82F6',
  high: '#F59E0B',
  urgent: '#EF4444',
} as const;

// Validation constants
export const MIN_PASSWORD_LENGTH = 6;
export const MAX_TASK_TITLE_LENGTH = 200;
export const MAX_TASK_DESCRIPTION_LENGTH = 1000;
export const MAX_HABIT_NAME_LENGTH = 100;

// Storage keys
export const STORAGE_KEYS = {
  TASKS: '@mindflow_tasks',
  HABITS: '@mindflow_habits',
  USER_PREFERENCES: '@mindflow_preferences',
  THEME: '@mindflow_theme',
} as const;

// API constants
export const API_TIMEOUT = 30000; // 30 seconds

// Animation durations (ms)
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
} as const;
