import { Button } from "../components/ui/button";
import { LearningPathCard } from "../components/LearningPathCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { DashboardPreview } from "../components/DashboardPreview";
import thinkingStudentImg from "figma:asset/c6a3859997520d58044ac1b8032670a78daeb619.png";
import {
  Code2,
  Database,
  Smartphone,
  Brain,
  Coffee,
  Sparkles,
  ChevronRight,
  BookOpen,
  Target,
  Zap,
  ClipboardList,
} from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string, roadmapId?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const learningPaths = [
    {
      id: "web-dev",
      icon: <Code2 className="w-6 h-6 text-blue-600" />,
      title: "Web Development",
      description: "Master HTML, CSS, JavaScript, and modern frameworks like React and Vue.",
      duration: "12 weeks",
      level: "Beginner",
      accentColor: "border-blue-200 hover:border-blue-400",
    },
    {
      id: "java",
      icon: <Coffee className="w-6 h-6 text-orange-600" />,
      title: "Java Programming",
      description: "Learn object-oriented programming and build enterprise applications.",
      duration: "10 weeks",
      level: "Beginner",
      accentColor: "border-orange-200 hover:border-orange-400",
    },
    {
      id: "python",
      icon: <Database className="w-6 h-6 text-green-600" />,
      title: "Python & Data Science",
      description: "Explore Python fundamentals, data analysis, and machine learning basics.",
      duration: "14 weeks",
      level: "Intermediate",
      accentColor: "border-green-200 hover:border-green-400",
    },
    {
      id: "ai",
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: "Artificial Intelligence",
      description: "Dive into AI concepts, neural networks, and deep learning frameworks.",
      duration: "16 weeks",
      level: "Advanced",
      accentColor: "border-purple-200 hover:border-purple-400",
    },
    {
      id: "mobile",
      icon: <Smartphone className="w-6 h-6 text-cyan-600" />,
      title: "Mobile Development",
      description: "Build native and cross-platform mobile apps with React Native.",
      duration: "12 weeks",
      level: "Intermediate",
      accentColor: "border-cyan-200 hover:border-cyan-400",
    },
    {
      id: "uiux",
      icon: <Sparkles className="w-6 h-6 text-pink-600" />,
      title: "UI/UX Design",
      description: "Create beautiful, user-friendly interfaces with Figma and design principles.",
      duration: "8 weeks",
      level: "Beginner",
      accentColor: "border-pink-200 hover:border-pink-400",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1628887590259-9222254ecfea?w=100&h=100&fit=crop",
      testimonial:
        "SmartStudy helped me transition from marketing to tech in just 6 months. The structured roadmaps made learning so much easier!",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Data Analyst",
      image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=100&h=100&fit=crop",
      testimonial:
        "The progress tracking feature kept me motivated throughout my Python journey. Now I'm working my dream job!",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1757480953529-8aac947baffc?w=100&h=100&fit=crop",
      testimonial:
        "Best learning platform I've used. The community support and clear learning paths are game-changers.",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-pulse delay-1000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-300 dark:bg-cyan-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-pulse delay-2000" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-5 py-2 rounded-full shadow-md">
                <Sparkles className="w-4 h-4" />
                <span>Your personalized tech learning journey</span>
              </div>
              
              <h1 className="text-gray-900 dark:text-white">
                Start Your Tech Journey with Confidence
              </h1>
              
              <p className="text-gray-600 dark:text-gray-300">
                Transform your career with personalized learning roadmaps, interactive courses, and a supportive
                community. Whether you're a complete beginner or looking to level up, SmartStudy guides you every
                step of the way.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <Button
                  size="lg"
                  className="rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => onNavigate("assessment")}
                >
                  <ClipboardList className="w-4 h-4 mr-2" />
                  Take Assessment
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full shadow-md hover:shadow-lg transition-all"
                  onClick={() => onNavigate("roadmaps")}
                >
                  Explore Courses
                </Button>
              </div>
            </div>
            
            {/* Right side - Thinking Student Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <img 
                  src={thinkingStudentImg} 
                  alt="Student learning programming languages"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Feature highlights - moved below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-5xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2 text-center">Structured Learning</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Follow expertly crafted roadmaps designed to take you from zero to hero
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2 text-center">Track Progress</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Monitor your journey with detailed analytics and milestone tracking
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50">
              <div className="bg-cyan-100 dark:bg-cyan-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2 text-center">Stay Motivated</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Build learning streaks and celebrate achievements along the way
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section id="paths" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">Popular Learning Paths</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose from our expertly crafted roadmaps designed to take you from beginner to job-ready in your
              chosen field.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <div key={path.id} onClick={() => onNavigate("roadmap-detail", path.id)}>
                <LearningPathCard {...path} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full shadow-md hover:shadow-lg transition-all"
              onClick={() => onNavigate("roadmaps")}
            >
              View All Roadmaps
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">Track Your Progress</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay motivated with our comprehensive dashboard. Monitor your learning journey, celebrate milestones,
              and keep your streak alive.
            </p>
          </div>
          <DashboardPreview />
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl transition-all"
              onClick={() => onNavigate("dashboard")}
            >
              Go to Dashboard
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">Success Stories</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with SmartStudy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="mb-4 text-white">Ready to Start Learning?</h2>
            <p className="mb-8 text-purple-100 dark:text-purple-200 max-w-2xl mx-auto">
              Join SmartStudy today and get your personalized learning roadmap. Start building the future you deserve.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-white text-purple-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
              onClick={() => onNavigate("roadmaps")}
            >
              Get Started For Free
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}