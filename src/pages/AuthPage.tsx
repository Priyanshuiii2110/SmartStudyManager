import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Sparkles, Mail, Lock, User, Chrome } from "lucide-react";

import { auth, googleProvider } from "../lib/firebaseConfig";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

interface AuthPageProps {
  onNavigate: (page: string) => void;
}

export function AuthPage({ onNavigate }: AuthPageProps) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Sign Up
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      alert(`Account created successfully for ${formData.fullName}!`);
      setFormData({ fullName: "", email: "", password: "", confirmPassword: "" });
      onNavigate("home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  // ✅ Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert(`Welcome back, ${formData.email}`);
      setFormData({ fullName: "", email: "", password: "", confirmPassword: "" });
      onNavigate("home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  // ✅ Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed in successfully with Google!");
      onNavigate("home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  // Toggle between Sign Up and Login
  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({ fullName: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center transition-colors">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <button
            onClick={() => onNavigate("home")}
            className="inline-flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
          >
            <Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <span className="text-gray-900 dark:text-white text-xl font-semibold">
              SmartStudy
            </span>
          </button>
          <h1 className="text-gray-900 dark:text-white mb-2 text-2xl font-semibold">
            {isSignUp ? "Create Your Account" : "Welcome Back"}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {isSignUp
              ? "Start your learning journey today"
              : "Continue your learning journey"}
          </p>
        </div>

        {/* Auth Card */}
        <Card className="p-8 rounded-2xl shadow-xl bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-300">
          <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
            {/* Full Name (Sign Up only) */}
            {isSignUp && (
              <div className="mb-4">
                <Label htmlFor="fullName" className="text-gray-700 dark:text-gray-300 mb-2 block">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="pl-10 rounded-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                    required
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div className="mb-4">
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 mb-2 block">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="pl-10 rounded-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-4">
              <Label htmlFor="password" className="text-gray-700 dark:text-gray-300 mb-2 block">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="pl-10 rounded-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  required
                />
              </div>
            </div>

            {/* Confirm Password (Sign Up only) */}
            {isSignUp && (
              <div className="mb-6">
                <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300 mb-2 block">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className="pl-10 rounded-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                    required
                  />
                </div>
              </div>
            )}

            {/* Forgot Password (Login only) */}
            {!isSignUp && (
              <div className="mb-6 text-right">
                <button
                  type="button"
                  className="text-purple-600 dark:text-purple-400 hover:underline transition-colors"
                  onClick={() => alert("Password reset coming soon!")}
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full rounded-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 mb-4 shadow-lg transition-all"
              size="lg"
            >
              {isSignUp ? "Sign Up" : "Login"}
            </Button>

            {/* Divider */}
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  or
                </span>
              </div>
            </div>

            {/* Google Sign-In */}
            <Button
              type="button"
              variant="outline"
              className="w-full rounded-full border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              size="lg"
              onClick={handleGoogleSignIn}
            >
              <Chrome className="w-5 h-5 mr-2" />
              Sign {isSignUp ? "up" : "in"} with Google
            </Button>
          </form>

          {/* Toggle */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              {isSignUp ? "Already have an account?" : "New user?"}{" "}
              <button
                onClick={toggleAuthMode}
                className="text-purple-600 dark:text-purple-400 hover:underline transition-colors"
              >
                {isSignUp ? "Login here" : "Create an account"}
              </button>
            </p>
          </div>
        </Card>

        {/* Footer */}
        <p className="text-center text-gray-500 dark:text-gray-400 mt-6 text-sm">
          By continuing, you agree to SmartStudy’s{" "}
          <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
