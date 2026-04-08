import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  AuthStackParamList,
  MainTabParamList,
  RootStackParamList,
} from './types';

// Auth Screens

// Main Tab Screens

// import { HabitsScreen } from '@/screens/habits/HabitsScreen';
// import { ProfileScreen } from '@/screens/profile/ProfileScreen';

import { colors } from '../theme';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { SignupScreen } from '../screens/auth/SignupScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { TasksScreen } from '../screens/TasksScreen';
import { NavigationContainer } from '@react-navigation/native';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const MainTab = createBottomTabNavigator<MainTabParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();

// Auth Navigator
export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

// Main Tab Navigator
export const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.secondary,
          paddingBottom: 5,
          height: 60,
        },
        // tabBarLabelStyle: {
        //   fontSize: typography.fontSize.xs,
        //   fontWeight: typography.fontWeight.medium,
        // },
      }}
    >
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24, color }}>🏠</Text>
          ),
        }}
      />
      <MainTab.Screen
        name="Tasks"
        component={TasksScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24, color }}>✓</Text>
          ),
        }}
      />
      <MainTab.Screen
        name="Habits"
        component={TasksScreen} // Placeholder - replace with HabitsScreen
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24, color }}>⭐</Text>
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={TasksScreen} // Placeholder - replace with ProfileScreen
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24, color }}>👤</Text>
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

// Root Navigator
export const RootNavigator = ({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        {isAuthenticated ? (
          <RootStack.Screen name="Main" component={MainTabNavigator} />
        ) : (
          <>
            <RootStack.Screen name="Auth" component={AuthNavigator} />
            {/* Add modal screens here when created */}
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
