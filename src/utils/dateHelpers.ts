import {
  format,
  isToday,
  isTomorrow,
  isPast,
  isThisWeek,
  startOfDay,
} from 'date-fns';

export const dateHelpers = {
  /**
   * Format date for display
   */
  formatDate: (
    date: Date | string,
    formatStr: string = 'MMM dd, yyyy',
  ): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return format(dateObj, formatStr);
  },

  /**
   * Format date/time for display
   */
  formatDateTime: (date: Date | string): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return format(dateObj, 'MMM dd, yyyy hh:mm a');
  },

  /**
   * Get relative date string (Today, Tomorrow, or formatted date)
   */
  getRelativeDate: (date: Date | string): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    if (isToday(dateObj)) return 'Today';
    if (isTomorrow(dateObj)) return 'Tomorrow';

    return format(dateObj, 'MMM dd');
  },

  /**
   * Check if date is overdue
   */
  isOverdue: (date: Date | string): boolean => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const today = startOfDay(new Date());
    return isPast(dateObj) && dateObj < today;
  },

  /**
   * Check if date is this week
   */
  isThisWeek: (date: Date | string): boolean => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return isThisWeek(dateObj);
  },

  /**
   * Get ISO date string (YYYY-MM-DD)
   */
  toISODate: (date: Date): string => {
    return format(date, 'yyyy-MM-dd');
  },

  /**
   * Get ISO datetime string
   */
  toISO: (date: Date): string => {
    return date.toISOString();
  },

  /**
   * Parse ISO date string to Date
   */
  fromISO: (dateString: string): Date => {
    return new Date(dateString);
  },

  /**
   * Get days difference between two dates
   */
  daysDifference: (date1: Date | string, date2: Date | string): number => {
    const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
    const d2 = typeof date2 === 'string' ? new Date(date2) : date2;
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  },

  /**
   * Get start of day
   */
  getStartOfDay: (date: Date = new Date()): Date => {
    return startOfDay(date);
  },
};
