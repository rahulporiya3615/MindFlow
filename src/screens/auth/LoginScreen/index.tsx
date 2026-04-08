import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styles from './style';
import { Input } from '../../../components/common/Input';
import { Button } from '../../../components';
import { AuthStackParamList } from '../../../navigation/types';
import { useAuthStore } from '../../../store/authStore';
import { supabase } from '../../../services/supabase/client';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('rahul123@gmail.com');
  const [password, setPassword] = useState('123456');
  const [isLoading, setIsLoading] = useState(false);

  const signIn = useAuthStore(state => state.signIn);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      console.log('data, error', data, error);
      if (error && error?.message) {
        Alert.alert(error?.message || 'something went wrong');
        return;
      }
      if (data && data?.user) {
        Alert.alert('Login Sucessfully');
        await signIn(data.user);
      }
      // Navigation is handled by App.tsx based on auth state
    } catch (error: any) {
      Alert.alert('Login Failed', error.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  // const handleForgotPassword = () => {
  //   navigation.navigate('ForgotPassword');
  // };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          {/* Logo/Header */}
          <View style={styles.header}>
            <Text style={styles.logo}>🧠</Text>
            <Text style={styles.title}>MindFlow</Text>
            <Text style={styles.subtitle}>Your productivity companion</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <Input
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />

            <Input
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              isPassword
              autoCapitalize="none"
            />

            <Button
              title="Log In"
              onPress={handleLogin}
              loading={isLoading}
              fullWidth
              style={styles.loginButton}
            />

            <Button
              title="Forgot Password?"
              // onPress={handleForgotPassword}
              onPress={() => {}}
              variant="ghost"
              fullWidth
            />
          </View>

          {/* Signup link */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <Button
              title="Sign Up"
              onPress={handleSignup}
              variant="ghost"
              style={styles.signupButton}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
