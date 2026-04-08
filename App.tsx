/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './src/navigation/AppNavigator';
import { useAuthStore } from './src/store/authStore';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  console.log('isAuthenticated', isAuthenticated);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigator isAuthenticated={isAuthenticated} />
    </SafeAreaProvider>
  );
}

export default App;
