import React, { useState } from 'react';
import { View, Text, FlatList, RefreshControl, Pressable } from 'react-native';
import styles from './style';
import { Button, Card } from '../../components';
import { TaskCard } from '../../components/tasks/TaskCard';
import { MainTabParamList } from '../../navigation/types';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TaskStatus, Task } from '../../types/task.types';

type TasksScreenNavigationProp = BottomTabNavigationProp<
  MainTabParamList,
  'Tasks'
>;

interface Props {
  navigation: TasksScreenNavigationProp;
}

export const TasksScreen: React.FC<Props> = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [activeFilter, setActiveFilter] = useState<TaskStatus | 'all'>('all');

  // const user = useAuthStore(state => state.user);
  // const tasks = useTasksStore(state => state.tasks);
  // const loadTasks = useTasksStore(state => state.loadTasks);
  // const completeTask = useTasksStore(state => state.completeTask);
  // const uncompleteTask = useTasksStore(state => state.uncompleteTask);
  // const deleteTask = useTasksStore(state => state.deleteTask);

  // useEffect(() => {
  //   if (user) {
  //     loadTasks(user.id);
  //   }
  // }, [user]);

  const handleRefresh = async () => {
    // if (!user) return;
    // setRefreshing(true);
    // await loadTasks(user.id);
    // setRefreshing(false);
  };

  const handleToggleComplete = async (
    taskId: string,
    currentStatus: TaskStatus,
  ) => {
    // if (currentStatus === 'completed') {
    //   await uncompleteTask(taskId);
    // } else {
    //   await completeTask(taskId);
    // }
  };

  // const filteredTasks = tasks.filter(task => {
  //   if (activeFilter === 'all') return true;
  //   return task.status === activeFilter;
  // });

  const filters: Array<{ label: string; value: TaskStatus | 'all' }> = [
    { label: 'All', value: 'all' },
    { label: 'Pending', value: 'pending' },
    { label: 'In Progress', value: 'in_progress' },
    { label: 'Completed', value: 'completed' },
  ];

  return (
    <View style={styles.container}>
      {/* Header with filters */}
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
        <Button
          title="+ New Task"
          onPress={() => navigation.navigate('CreateTask')}
          size="small"
        />
      </View>

      {/* Filter buttons */}
      <View style={styles.filters}>
        {filters.map(filter => (
          <Pressable
            key={filter.value}
            onPress={() => setActiveFilter(filter.value)}
            style={[
              styles.filterButton,
              activeFilter === filter.value && styles.filterButtonActive,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                activeFilter === filter.value && styles.filterTextActive,
              ]}
            >
              {filter.label}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Tasks list */}
      <FlatList
        // data={filteredTasks || []}
        data={[]}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onPress={() =>
              navigation.navigate('TaskDetail', { taskId: item.id })
            }
            // onComplete={() => handleToggleComplete(item.id, item.status)}
            // onDelete={() => deleteTask(item.id)}
            onComplete={() => {}}
            onDelete={() => {}}
          />
        )}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        ListEmptyComponent={
          <Card>
            <Text style={styles.emptyText}>
              {activeFilter === 'all'
                ? 'No tasks yet. Create your first task!'
                : `No ${activeFilter} tasks`}
            </Text>
          </Card>
        }
      />
    </View>
  );
};
