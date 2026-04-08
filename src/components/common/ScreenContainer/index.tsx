import React, { ReactNode } from 'react';
import {
  ScrollView,
  View,
  StyleProp,
  ViewStyle,
  ScrollViewProps,
} from 'react-native';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import styles from './style';

interface ScreenContainerProps {
  children: ReactNode;
  scrollable?: boolean;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  safeAreaStyle?: StyleProp<ViewStyle>;
  edges?: SafeAreaViewProps['edges'];
  refreshControl?: React.ReactNode;
  keyboardShouldPersistTaps?: ScrollViewProps['keyboardShouldPersistTaps'];
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  scrollable = false,
  style,
  contentContainerStyle,
  safeAreaStyle,
  edges = ['top', 'bottom', 'left', 'right'],
  refreshControl,
  keyboardShouldPersistTaps = 'handled',
}) => {
  return (
    <SafeAreaView style={[styles.safeArea, safeAreaStyle]} edges={edges}>
      {scrollable ? (
        <ScrollView
          style={[styles.container, style]}
          contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
          refreshControl={refreshControl}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.container, style]}>{children}</View>
      )}
    </SafeAreaView>
  );
};
