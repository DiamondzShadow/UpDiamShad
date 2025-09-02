"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { Eye, EyeOff, UserPlus, Loader2, Check, X } from "lucide-react";
import Link from "next/link";

interface SignupFormProps {
  onSuccess?: () => void;
  redirectTo?: string;
}

interface PasswordStrength {
  score: number;
  label: string;
  color: string;
  requirements: {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
    special: boolean;
  };
}

export function SignupForm({ onSuccess, redirectTo = "/" }: SignupFormProps) {
  const { signup, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculatePasswordStrength = (password: string): PasswordStrength => {
    const requirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    const score = Object.values(requirements).filter(Boolean).length;

    let label = "Very Weak";
    let color = "text-red-500";

    if (score >= 4) {
      label = "Strong";
      color = "text-green-500";
    } else if (score >= 3) {
      label = "Good";
      color = "text-yellow-500";
    } else if (score >= 2) {
      label = "Fair";
      color = "text-orange-500";
    }

    return { score, label, color, requirements };
  };

  const passwordStrength = calculatePasswordStrength(formData.password);
  const passwordsMatch =
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isLoading) return;

    // Validate form
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (passwordStrength.score < 3) {
      setError("Please choose a stronger password");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await signup({
        email: formData.email,
        displayName: formData.username,
        password: formData.password,
      });

      if (response.success) {
        if (onSuccess) {
          onSuccess();
        } else {
          window.location.href = redirectTo;
        }
      } else {
        setError(response.message || "Signup failed");
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

  const isFormValid =
    formData.email &&
    formData.username &&
    formData.password &&
    formData.confirmPassword &&
    passwordsMatch &&
    passwordStrength.score >= 3;

  const isProcessing = isSubmitting || isLoading;

  return (
    <Card className="w-full max-w-md mx-auto p-6 bg-gray-900 border-gray-700">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-white">Create Account</h1>
          <p className="text-gray-400">Join the Diamondz ecosystem</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-3 rounded-md bg-red-900/50 border border-red-600 text-red-200 text-sm">
            {error}
          </div>
        )}

        {/* Signup Form */}
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
            <Label htmlFor="username" className="text-white">
              Username
            </Label>
            <Input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Choose a username"
              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
              disabled={isProcessing}
              minLength={3}
              maxLength={30}
              pattern="^[a-zA-Z0-9_-]+$"
              title="Username can only contain letters, numbers, underscores, and hyphens"
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
                placeholder="Create a strong password"
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

            {/* Password Strength Indicator */}
            {formData.password && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">
                    Password strength:
                  </span>
                  <span
                    className={`text-xs font-medium ${passwordStrength.color}`}
                  >
                    {passwordStrength.label}
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-1 text-xs">
                  {Object.entries(passwordStrength.requirements).map(
                    ([key, met]) => (
                      <div
                        key={key}
                        className="flex items-center justify-center"
                      >
                        {met ? (
                          <Check className="h-3 w-3 text-green-500" />
                        ) : (
                          <X className="h-3 w-3 text-gray-500" />
                        )}
                      </div>
                    )
                  )}
                </div>
                <div className="text-xs text-gray-500">
                  Requirements: 8+ chars, uppercase, lowercase, number, special
                  char
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-white">
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                className={`bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 pr-10 ${
                  formData.confirmPassword && !passwordsMatch
                    ? "border-red-500"
                    : ""
                }`}
                disabled={isProcessing}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                disabled={isProcessing}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {formData.confirmPassword && (
              <div
                className={`text-xs flex items-center gap-1 ${
                  passwordsMatch ? "text-green-500" : "text-red-500"
                }`}
              >
                {passwordsMatch ? (
                  <>
                    <Check className="h-3 w-3" /> Passwords match
                  </>
                ) : (
                  <>
                    <X className="h-3 w-3" /> Passwords do not match
                  </>
                )}
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-gray-200 flex items-center gap-2"
            disabled={!isFormValid || isProcessing}
          >
            {isProcessing ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <UserPlus className="h-4 w-4" />
            )}
            {isProcessing ? "Creating account..." : "Create Account"}
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

        {/* Footer */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => {
                // This should trigger switching to login within the modal
                // For now, we'll handle this through the parent component
                console.log("Switch to login - this should be handled by parent modal");
              }}
              className="text-white hover:underline font-medium"
            >
              Sign in
            </button>
          </p>
          <p className="text-xs text-gray-500">
            By creating an account, you agree to our Terms of Service and
            Privacy Policy
          </p>
        </div>
      </div>
    </Card>
  );
}
