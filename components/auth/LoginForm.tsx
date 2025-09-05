"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { Eye, EyeOff, LogIn, Loader2 } from "lucide-react";
import Link from "next/link";

interface LoginFormProps {
  onSuccess?: () => void;
  redirectTo?: string;
}

export function LoginForm({ onSuccess, redirectTo = "/" }: LoginFormProps) {
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isLoading) return;

    setIsSubmitting(true);
    setError("");

    try {
      const response = await login(formData);

      if (response.success) {
        if (onSuccess) {
          onSuccess();
        } else {
          window.location.href = redirectTo;
        }
      } else {
        setError(response.message || "Login failed");
      }
    } catch (error) {
      setError("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  // const handleInsightIQLogin = () => {
  //   loginWithInsightIQ();
  // };

  const isFormValid = formData.email && formData.password;
  const isProcessing = isSubmitting || isLoading;

  return (
    <Card className="w-full max-w-md mx-auto p-6 bg-gray-900 border-gray-700">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400">Sign in to your Diamondz account</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-3 rounded-md bg-red-900/50 border border-red-600 text-red-200 text-sm">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
              disabled={isProcessing}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 pr-10"
                disabled={isProcessing}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                disabled={isProcessing}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-gray-200 flex items-center gap-2"
            disabled={!isFormValid || isProcessing}
          >
            {isProcessing ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <LogIn className="h-4 w-4" />
            )}
            {isProcessing ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-600" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-gray-900 px-2 text-gray-400">
              Or continue with
            </span>
          </div>
        </div>

        {/* InsightIQ Login */}
        {/* <Button
          onClick={handleInsightIQLogin}
          variant="outline"
          className="w-full border-gray-600 bg-transparent text-white hover:bg-gray-800"
          disabled={isProcessing}
        >
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          Continue with InsightIQ
        </Button> */}

        {/* Footer */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-white hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
          <p className="text-xs text-gray-500">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </Card>
  );
}
