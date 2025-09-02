"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TabsContextType {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
  children: ReactNode;
}

interface TabsListProps {
  className?: string;
  children: ReactNode;
}

interface TabsTriggerProps {
  value: string;
  className?: string;
  children: ReactNode;
}

interface TabsContentProps {
  value: string;
  className?: string;
  children: ReactNode;
}

export function Tabs({ value, onValueChange, className = '', children }: TabsProps) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className = '', children }: TabsListProps) {
  return (
    <div className={`flex bg-gray-900 border border-gray-800 rounded-lg p-1 ${className}`}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, className = '', children }: TabsTriggerProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabsTrigger must be used within a Tabs component');
  }

  const { value: currentValue, onValueChange } = context;
  const isActive = currentValue === value;

  return (
    <button
      onClick={() => onValueChange(value)}
      className={`
        flex-1 px-3 py-2 text-sm font-medium rounded-md transition-all
        ${isActive 
          ? 'bg-gray-700 text-white' 
          : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800'
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className = '', children }: TabsContentProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabsContent must be used within a Tabs component');
  }

  const { value: currentValue } = context;
  
  if (currentValue !== value) {
    return null;
  }

  return (
    <div className={`mt-4 ${className}`}>
      {children}
    </div>
  );
}