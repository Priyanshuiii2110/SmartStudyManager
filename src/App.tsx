import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { RoadmapsPage } from "./pages/RoadmapsPage";
import { RoadmapDetailPage } from "./pages/RoadmapDetailPage";
import { DashboardPage } from "./pages/DashboardPage";
import { AuthPage } from "./pages/AuthPage";
import { AssessmentPage } from "./pages/AssessmentPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [roadmapId, setRoadmapId] = useState<string | undefined>(undefined);
  const [darkMode, setDarkMode] = useState(() => {
    // Check if dark mode preference exists in localStorage
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Update the document class and save preference
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleNavigate = (page: string, id?: string) => {
    setCurrentPage(page);
    if (id) {
      setRoadmapId(id);
    }
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "roadmaps":
        return <RoadmapsPage onNavigate={handleNavigate} />;
      case "roadmap-detail":
        return <RoadmapDetailPage roadmapId={roadmapId} onNavigate={handleNavigate} />;
      case "dashboard":
        return <DashboardPage onNavigate={handleNavigate} />;
      case "auth":
        return <AuthPage onNavigate={handleNavigate} />;
      case "assessment":
        return <AssessmentPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}