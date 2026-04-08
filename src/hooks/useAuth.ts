import { useAuthStore } from '../store/authStore';

export const useAuth = () => {
  const { user, isAuthenticated, signIn, signOut } = useAuthStore();
  return { user, isAuthenticated, signIn, signOut };
};
