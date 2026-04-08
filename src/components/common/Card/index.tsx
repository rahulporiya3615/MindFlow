import React from 'react';
import { View, StyleSheet, ViewStyle, Pressable } from 'react-native';
import styles from './style';

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  variant?: 'elevated' | 'outlined' | 'filled';
}

export const Card: React.FC<CardProps> = ({
  children,
  onPress,
  style,
  variant = 'elevated',
}) => {
  const Container = onPress ? Pressable : View;

  return (
    <Container
      onPress={onPress}
      style={[
        styles.card,
        styles[variant],
        // variant === 'elevated' && shadows.md,
        style,
      ]}
    >
      {children}
    </Container>
  );
};
