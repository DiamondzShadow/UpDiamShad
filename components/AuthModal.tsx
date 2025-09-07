"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { User, UserPlus } from "lucide-react";
import { SignupFlow } from "@/components/SignupFlow";
import { LoginFlow } from "@/components/LoginFlow";
import { useAuth } from "@/hooks/useAuth";

// interface AuthModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

export function AuthModal() {
  const router = useRouter();
  const { isAuthModalOpen, setIsAuthModalOpen } = useAuth();
  const [authFlow, setAuthFlow] = useState<"entry" | "signup" | "login">(
    "entry"
  );

  const handleClose = () => {
    setAuthFlow("entry");
    setIsAuthModalOpen(false);
  };

  const handleAuthSuccess = () => {
    handleClose();
    // Navigate to onboarding after successful signup/login
    router.push("/onboarding");
  };

  if (authFlow === "entry") {
    return (
      <Dialog open={isAuthModalOpen} onOpenChange={handleClose}>
        <DialogContent className="bg-black border-gray-800 text-white max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-center">
              Welcome to Diamondz
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <p className="text-gray-400 text-center text-sm">
              Join the Diamondz community or sign in to your account
            </p>

            <div className="space-y-3">
              <Button
                onClick={() => setAuthFlow("signup")}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                size="lg"
              >
                <UserPlus className="h-5 w-5 mr-2" />
                Sign Up
              </Button>

              <Button
                onClick={() => setAuthFlow("login")}
                variant="outline"
                className="w-full border-gray-600 text-white hover:bg-gray-800"
                size="lg"
              >
                <User className="h-5 w-5 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (authFlow === "signup") {
    return (
      <Dialog open={isAuthModalOpen} onOpenChange={() => {}} modal>
        <DialogContent className="bg-black border-gray-800 text-white max-w-md">
          <SignupFlow
            onBack={() => setAuthFlow("entry")}
            onSuccess={handleAuthSuccess}
            onSwitchToLogin={() => setAuthFlow("login")}
            onClose={handleClose}
          />
        </DialogContent>
      </Dialog>
    );
  }

  if (authFlow === "login") {
    return (
      <Dialog open={isAuthModalOpen} onOpenChange={() => {}} modal>
        <DialogContent className="bg-black border-gray-800 text-white max-w-md">
          <LoginFlow
            onBack={() => setAuthFlow("entry")}
            onSuccess={handleAuthSuccess}
            onSwitchToSignup={() => setAuthFlow("signup")}
            onClose={handleClose}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return null;
}

export default AuthModal;
