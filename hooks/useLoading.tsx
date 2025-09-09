"use client";

import React, { createContext, useContext, useState } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  loadingMessage?: string;
  loadingTitle?: string;
  setLoading: (loading: boolean, message?: string, title?: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState<string | undefined>();
  const [loadingTitle, setLoadingTitle] = useState<string | undefined>();

  const setLoading = (loading: boolean, message?: string, title?: string) => {
    setIsLoading(loading);
    setLoadingMessage(message);
    setLoadingTitle(title);
  };

  return (
    <LoadingContext.Provider value={{
      isLoading,
      loadingMessage,
      loadingTitle,
      setLoading
    }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
