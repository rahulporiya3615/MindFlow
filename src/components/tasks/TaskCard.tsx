import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
//   runOnJS,
// } from 'react-native-reanimated';
// import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Task } from '../../types/task.types';
import {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
} from '../../theme';

interface TaskCardProps {
  task: Task;
  onPress: () => void;
  onComplete: () => void;
  onDelete: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onPress,
  onComplete,
  onDelete: _onDelete,
}) => {
  // const translateX = useSharedValue(0);
  // const SWIPE_THRESHOLD = -80;

  // const pan = Gesture.Pan()
  //   .onUpdate(event => {
  //     if (event.translationX < 0) {
  //       translateX.value = event.translationX;
  //     }
  //   })
  //   .onEnd(() => {
  //     if (translateX.value < SWIPE_THRESHOLD) {
  //       translateX.value = withSpring(-300);
  //       runOnJS(onDelete)();
  //     } else {
  //       translateX.value = withSpring(0);
  //     }
  //   });

  // const animatedStyle = useAnimatedStyle(() => ({
  //   transform: [{ translateX: translateX.value }],
  // }));

  const getPriorityColor = () => {
    switch (task.priority) {
      case 'urgent':
        return colors.error;
      case 'high':
        return colors.warning;
      case 'medium':
        return colors.info;
      default:
        return colors.textSecondary;
    }
  };

  const getCategoryColor = () => {
    switch (task.category) {
      case 'work':
        return colors.categoryWork;
      case 'personal':
        return colors.categoryPersonal;
      case 'health':
        return colors.categoryHealth;
      case 'learning':
        return colors.categoryLearning;
      default:
        return colors.primary;
    }
  };

  const formatDueDate = (date: Date) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
    }
  };

  const isOverdue =
    task.dueDate &&
    new Date(task.dueDate) < new Date() &&
    task.status !== 'completed';

  return (
    <View style={styles.container}>
      {/* Background delete action */}
      <View style={styles.deleteBackground}>
        <Text style={styles.deleteText}>Delete</Text>
      </View>

      {/* Card */}
      {/* <GestureDetector gesture={pan}>
        <Animated.View style={[styles.card, animatedStyle, shadows.md]}> */}
      <View style={[styles.card, shadows.md]}>
        <Pressable onPress={onPress} style={styles.content}>
          {/* Priority indicator */}
          <View
            style={[
              styles.priorityBar,
              { backgroundColor: getPriorityColor() },
            ]}
          />

          {/* Checkbox */}
          <Pressable onPress={onComplete} style={styles.checkboxContainer}>
            <View
              style={[
                styles.checkbox,
                task.status === 'completed' && styles.checked,
                { borderColor: getCategoryColor() },
                task.status === 'completed' && {
                  backgroundColor: getCategoryColor(),
                },
              ]}
            >
              {task.status === 'completed' && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </View>
          </Pressable>

          {/* Task info */}
          <View style={styles.info}>
            <Text
              style={[
                styles.title,
                task.status === 'completed' && styles.completedText,
              ]}
              numberOfLines={2}
            >
              {task.title}
            </Text>

            {task.description && (
              <Text style={styles.description} numberOfLines={1}>
                {task.description}
              </Text>
            )}

            <View style={styles.metadata}>
              {task.dueDate && (
                <View
                  style={[
                    styles.dueDateBadge,
                    isOverdue && styles.overdueBadge,
                  ]}
                >
                  <Text
                    style={[
                      styles.dueDateText,
                      isOverdue && styles.overdueText,
                    ]}
                  >
                    {formatDueDate(task.dueDate)}
                  </Text>
                </View>
              )}

              {task.category && (
                <View
                  style={[
                    styles.categoryBadge,
                    { backgroundColor: getCategoryColor() + '20' },
                  ]}
                >
                  <Text
                    style={[styles.categoryText, { color: getCategoryColor() }]}
                  >
                    {task.category}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </Pressable>
      </View>
      {/* </Animated.View>
      </GestureDetector> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  deleteBackground: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 100,
    backgroundColor: colors.error,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius.lg,
  },
  deleteText: {
    color: colors.white,
    fontWeight: typography.fontWeight.semiBold,
    fontSize: typography.fontSize.sm,
  },
  card: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.lg,
  },
  content: {
    flexDirection: 'row',
    padding: spacing.md,
    alignItems: 'flex-start',
  },
  priorityBar: {
    width: 4,
    alignSelf: 'stretch',
    borderRadius: 2,
    marginRight: spacing.sm,
  },
  checkboxContainer: {
    padding: spacing.xs,
    marginRight: spacing.sm,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    borderColor: colors.primary,
  },
  checkmark: {
    color: colors.white,
    fontWeight: typography.fontWeight.bold,
    fontSize: 14,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: colors.textSecondary,
  },
  description: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  metadata: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  dueDateBadge: {
    backgroundColor: colors.infoLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  dueDateText: {
    fontSize: typography.fontSize.xs,
    color: colors.info,
    fontWeight: typography.fontWeight.medium,
  },
  overdueBadge: {
    backgroundColor: colors.errorLight,
  },
  overdueText: {
    color: colors.error,
  },
  categoryBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  categoryText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    textTransform: 'capitalize',
  },
});
