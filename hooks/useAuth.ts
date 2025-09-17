"use client";

import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import {
  authAPI,
  User,
  AuthResponse,
  LoginCredentials,
  SignupCredentials,
} from "@/lib/auth";
import { useNotifications } from "@/hooks/useNotifications";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isWalletManagerOpen: boolean;
  setIsWalletManagerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  login: (credentials: LoginCredentials) => Promise<AuthResponse>;
  signup: (credentials: SignupCredentials) => Promise<AuthResponse>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isWalletManagerOpen, setIsWalletManagerOpen] = useState(false);

  // We'll inject notifications via a separate hook inside the provider
  // This avoids circular dependency issues

  useEffect(() => {
    initializeAuth();
  }, []);

  // Manage body scroll when modals are open
  useEffect(() => {
    const body = document.body;
    
    if (isAuthModalOpen || isWalletManagerOpen) {
      // Store current overflow before changing it
      const currentOverflow = body.style.overflow;
      body.setAttribute('data-scroll-locked', currentOverflow || 'auto');
      body.style.overflow = 'hidden';
    } else {
      // Restore previous overflow from data attribute
      const storedOverflow = body.getAttribute('data-scroll-locked');
      body.style.overflow = storedOverflow || 'auto';
      body.removeAttribute('data-scroll-locked');
    }
    
    // Cleanup function - ensure scroll is always restored on unmount
    return () => {
      if (body.getAttribute('data-scroll-locked')) {
        const storedOverflow = body.getAttribute('data-scroll-locked');
        body.style.overflow = storedOverflow || 'auto';
        body.removeAttribute('data-scroll-locked');
      }
    };
  }, [isAuthModalOpen, isWalletManagerOpen]);

  const initializeAuth = async () => {
    setIsLoading(true);

    try {
      // Check if user is stored locally
      const storedUser = authAPI.getStoredUser();
      if (storedUser && authAPI.isAuthenticated()) {
        // Verify with backend and refresh user data
        const currentUser = await authAPI.getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
        } else {
          setUser(storedUser);
        }
      }
    } catch (error) {
      console.error("Auth initialization failed:", error);
      // Clear any invalid stored data
      authAPI.logout();
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (
    credentials: LoginCredentials
  ): Promise<AuthResponse> => {
    setIsLoading(true);

    try {
      const response = await authAPI.login(credentials);

      if (response.success && response.data) {
        setUser(response.data.user);
      }

      return response;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (
    credentials: SignupCredentials
  ): Promise<AuthResponse> => {
    setIsLoading(true);

    try {
      const response = await authAPI.signup(credentials);

      if (response.success && response.data) {
        setUser(response.data.user);
      }

      return response;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setIsLoading(true);

    try {
      await authAPI.logout();
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
      // Force logout locally even if API call fails
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshUser = async (): Promise<void> => {
    if (!authAPI.isAuthenticated()) return;

    try {
      const currentUser = await authAPI.getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
      }
    } catch (error) {
      console.error("Failed to refresh user data:", error);
      // If refresh fails due to invalid token, logout
      if (
        error &&
        typeof error === "object" &&
        "status" in error &&
        error.status === 401
      ) {
        await logout();
      }
    }
  };


  const value = {
    user,
    isAuthenticated: !!user && authAPI.isAuthenticated(),
    isLoading,
    isAuthModalOpen,
    setIsAuthModalOpen,
    isWalletManagerOpen,
    setIsWalletManagerOpen,
    login,
    signup,
    logout,
    refreshUser,
  };

  return React.createElement(AuthContext.Provider, { value }, children);
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Hook for handling OAuth callback
export function useAuthCallback() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const error = urlParams.get("error");

    if (token) {
      const success = authAPI.handleAuthCallback(token);
      if (success) {
        // Redirect to dashboard or home
        window.location.href = "/";
      }
    } else if (error) {
      console.error("Auth callback error:", error);
      // Handle error (show notification, redirect to login, etc.)
    }
  }, []);
}
