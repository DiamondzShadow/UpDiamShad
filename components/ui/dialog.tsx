"use client";

import React from 'react';
import { X } from 'lucide-react';

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

interface DialogContentProps {
  className?: string;
  children: React.ReactNode;
  showClose?: boolean;
  onClose?: () => void;
}

interface DialogHeaderProps {
  children: React.ReactNode;
}

interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  if (!open) return null;

  // Prevent body scroll when dialog is open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking the backdrop, not the content
    if (e.target === e.currentTarget) {
      onOpenChange(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      {/* Fullscreen backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200"
        onClick={handleBackdropClick}
      />
      {/* Content container with proper centering */}
      <div 
        className="flex min-h-full items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}

export function DialogContent({ className = '', children, showClose = false, onClose }: DialogContentProps) {
  const handleContentClick = (e: React.MouseEvent) => {
    // Prevent click events from propagating to backdrop
    e.stopPropagation();
  };

  return (
    <div 
      className={`relative bg-black border border-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4 p-6 transform transition-all duration-200 ${className}`}
      onClick={handleContentClick}
    >
      {showClose && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      )}
      {children}
    </div>
  );
}

export function DialogHeader({ children }: DialogHeaderProps) {
  return (
    <div className="mb-6">
      {children}
    </div>
  );
}

export function DialogTitle({ children, className = '' }: DialogTitleProps) {
  return (
    <h2 className={`text-xl font-semibold text-white ${className}`}>
      {children}
    </h2>
  );
}