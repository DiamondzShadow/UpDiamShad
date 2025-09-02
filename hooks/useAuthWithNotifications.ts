"use client";

import { useAuth } from '@/hooks/useAuth';
import { useNotifications } from '@/hooks/useNotifications';
import { LoginCredentials, SignupCredentials, AuthResponse } from '@/lib/auth';
import { useCallback } from 'react';

export function useAuthWithNotifications() {
  const auth = useAuth();
  const { showSuccess, showError, showWarning, showInfo } = useNotifications();

  const login = useCallback(async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      showInfo('Signing in...', 'Please wait while we authenticate you.');
      
      const response = await auth.login(credentials);
      
      if (response.success) {
        showSuccess(
          'Welcome back!',
          `Successfully signed in as ${response.data?.user.username || 'User'}.`
        );
      } else {
        showError(
          'Sign In Failed',
          response.message || response.error || 'Please check your credentials and try again.'
        );
      }
      
      return response;
    } catch (error) {
      console.error('Login error:', error);
      showError(
        'Connection Error',
        'Unable to connect to the server. Please check your internet connection and try again.',
        0 // Don't auto-dismiss connection errors
      );
      return {
        success: false,
        message: 'Network error occurred',
        error: 'Connection failed'
      };
    }
  }, [auth, showSuccess, showError, showInfo]);

  const signup = useCallback(async (credentials: SignupCredentials): Promise<AuthResponse> => {
    try {
      showInfo('Creating account...', 'Please wait while we set up your account.');
      
      const response = await auth.signup(credentials);
      
      if (response.success) {
        showSuccess(
          'Account Created!',
          `Welcome to Diamondz, ${response.data?.user.username || 'User'}! Your account has been created successfully.`
        );
      } else {
        showError(
          'Account Creation Failed',
          response.message || response.error || 'Please try again with different details.'
        );
      }
      
      return response;
    } catch (error) {
      console.error('Signup error:', error);
      showError(
        'Connection Error',
        'Unable to connect to the server. Please check your internet connection and try again.',
        0
      );
      return {
        success: false,
        message: 'Network error occurred',
        error: 'Connection failed'
      };
    }
  }, [auth, showSuccess, showError, showInfo]);

  const logout = useCallback(async (): Promise<void> => {
    try {
      await auth.logout();
      showSuccess('Signed Out', 'You have been successfully signed out.');
    } catch (error) {
      console.error('Logout error:', error);
      showWarning(
        'Sign Out Warning',
        'There was an issue signing out from the server, but you have been signed out locally.'
      );
    }
  }, [auth, showSuccess, showWarning]);

  const refreshUser = useCallback(async (): Promise<void> => {
    try {
      await auth.refreshUser();
    } catch (error) {
      console.error('Refresh user error:', error);
      showError(
        'Session Error',
        'Your session has expired. Please sign in again.',
        0
      );
    }
  }, [auth, showError]);


  return {
    ...auth,
    login,
    signup,
    logout,
    refreshUser,
  };
}

export default useAuthWithNotifications;