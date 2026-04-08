import React, { useEffect, useState } from 'react';
import { View, Text, RefreshControl, Pressable } from 'react-native';

import styles from './style';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ScreenContainer } from '../../components';

type HomeScreenNavigationProp = BottomTabNavigationProp<
  MainTabParamList,
  'Home'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  // const user = useAuthStore(state => state.user);
  // const profile = useAuthStore(state => state.profile);

  // const tasks = useTasksStore(state => state.tasks);
  // const loadTasks = useTasksStore(state => state.loadTasks);
  // const completeTask = useTasksStore(state => state.completeTask);
  // const deleteTask = useTasksStore(state => state.deleteTask);
  // const getTasksDueToday = useTasksStore(state => state.getTasksDueToday);
  // const getOverdueTasks = useTasksStore(state => state.getOverdueTasks);

  // const habits = useHabitsStore(state => state.habits);
  // const loadHabits = useHabitsStore(state => state.loadHabits);
  // const getTodaysHabits = useHabitsStore(state => state.getTodaysHabits);
  // const isHabitCompletedToday = useHabitsStore(
  //   state => state.isHabitCompletedToday,
  // );
  // const logHabitCompletion = useHabitsStore(state => state.logHabitCompletion);
  // const removeHabitLog = useHabitsStore(state => state.removeHabitLog);

  // const tasksDueToday = getTasksDueToday();
  // const overdueTasks = getOverdueTasks();
  // const todaysHabits = getTodaysHabits();
  // const completedTasks = tasks.filter(t => t.status === 'completed').length;
  // const totalTasks = tasks.length;

  // useEffect(() => {
  //   if (user) {
  //     loadTasks(user.id);
  //     loadHabits(user.id);
  //   }
  // }, [user]);

  const handleRefresh = async () => {
    // if (!user) return;
    // setRefreshing(true);
    // await Promise.all([loadTasks(user.id), loadHabits(user.id)]);
    // setRefreshing(false);
  };

  const handleToggleHabit = async (habitId: string) => {
    // if (!user) return;
    // const isCompleted = isHabitCompletedToday(habitId);
    // if (isCompleted) {
    //   await removeHabitLog(habitId, user.id, new Date());
    // } else {
    //   await logHabitCompletion(habitId, user.id);
    // }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <ScreenContainer
      scrollable
      style={styles.container}
      contentContainerStyle={styles.content}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>{getGreeting()}</Text>
          {/* <Text style={styles.name}>{profile?.full_name || 'User'}</Text> */}
          <Text style={styles.name}>User</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {/* {(profile?.full_name || 'U')[0].toUpperCase()} */}U
            </Text>
          </View>
        </Pressable>
      </View>

      {/* Stats Overview */}
      <View style={styles.statsContainer}>
        {/* <Card style={styles.statCard}>
          <Text style={styles.statValue}>
            {completedTasks}/{totalTasks}
          </Text>
          <Text style={styles.statLabel}>Tasks Done</Text>
        </Card>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>{overdueTasks.length}</Text>
          <Text style={styles.statLabel}>Overdue</Text>
        </Card>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>{todaysHabits.length}</Text>
          <Text style={styles.statLabel}>Habits Today</Text>
        </Card> */}
        <Text>Stats placeholder</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        {/* <Button
          title="New Task"
          onPress={() => navigation.navigate('CreateTask')}
          size="small"
          style={styles.quickButton}
        />
        <Button
          title="New Habit"
          onPress={() => navigation.navigate('CreateHabit')}
          variant="secondary"
          size="small"
          style={styles.quickButton}
        /> */}
        <Text>Quick actions placeholder</Text>
      </View>

      {/* Today's Tasks */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          {/* <Button
            title="View All"
            onPress={() => navigation.navigate('Tasks')}
            variant="ghost"
            size="small"
          /> */}
        </View>
        {/* {tasksDueToday.length === 0 ? (
          <Card>
            <Text style={styles.emptyText}>No tasks due today! 🎉</Text>
          </Card>
        ) : (
          tasksDueToday
            .slice(0, 3)
            .map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onPress={() =>
                  navigation.navigate('TaskDetail', { taskId: task.id })
                }
                onComplete={() => completeTask(task.id)}
                onDelete={() => deleteTask(task.id)}
              />
            ))
        )} */}
        <Text>No tasks due today! 🎉</Text>
      </View>

      {/* Today's Habits */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today's Habits</Text>
          {/* <Button
            title="View All"
            onPress={() => navigation.navigate('Habits')}
            variant="ghost"
            size="small"
          /> */}
        </View>
        {/* {todaysHabits.length === 0 ? (
          <Card>
            <Text style={styles.emptyText}>No habits scheduled for today</Text>
          </Card>
        ) : (
          todaysHabits
            .slice(0, 3)
            .map(habit => (
              <HabitCard
                key={habit.id}
                habit={habit}
                isCompletedToday={isHabitCompletedToday(habit.id)}
                onPress={() =>
                  navigation.navigate('HabitDetail', { habitId: habit.id })
                }
                onToggleComplete={() => handleToggleHabit(habit.id)}
              />
            ))
        )} */}
        <Text>No habits scheduled for today</Text>
      </View>
    </ScreenContainer>
  );
};
