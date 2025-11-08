import { Button } from "./ui/button";
import { Sparkles, Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Navbar({ currentPage, onNavigate, darkMode, onToggleDarkMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", page: "home" },
    { label: "Roadmaps", page: "roadmaps" },
    { label: "Dashboard", page: "dashboard" },
  ];

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <span className="text-gray-900 dark:text-white">SmartStudy</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`transition-colors ${
                  currentPage === item.page
                    ? "text-purple-600 dark:text-purple-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
            
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => onNavigate("auth")}
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.page
                    ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button 
                variant="outline" 
                className="w-full rounded-full"
                onClick={() => {
                  onNavigate("auth");
                  setMobileMenuOpen(false);
                }}
              >
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}