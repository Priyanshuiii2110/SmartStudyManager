import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { RoadmapStepCard } from "../components/RoadmapStepCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AspectRatio } from "../components/ui/aspect-ratio";
import {
  ArrowLeft,
  Clock,
  Users,
  Award,
  BookOpen,
  Target,
  Star,
  TrendingUp,
} from "lucide-react";

interface RoadmapDetailPageProps {
  roadmapId?: string;
  onNavigate: (page: string) => void;
}

export function RoadmapDetailPage({ roadmapId = "web-dev", onNavigate }: RoadmapDetailPageProps) {
  const roadmapData: Record<string, any> = {
    "web-dev": {
      title: "Web Development",
      subtitle: "Master modern web development from basics to advanced",
      level: "Beginner",
      duration: "12 weeks",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1667984436031-ea1d9ff307ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      progress: 35,
      description:
        "This comprehensive roadmap will take you from HTML basics to building full-stack web applications with React, Node.js, and modern development tools. You'll learn industry best practices and build real-world projects.",
    },
    python: {
      title: "Python & Data Science",
      subtitle: "From Python basics to data analysis and machine learning",
      level: "Intermediate",
      duration: "14 weeks",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      progress: 0,
      description:
        "Learn Python programming and dive into data science. Master Pandas, NumPy, data visualization, and machine learning fundamentals to analyze data and build predictive models.",
    },
    mobile: {
      title: "Mobile Development",
      subtitle: "Build native and cross-platform mobile applications",
      level: "Intermediate",
      duration: "12 weeks",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      progress: 0,
      description:
        "Master mobile app development with React Native and Flutter. Build iOS and Android apps, work with APIs, and publish to app stores.",
    },
  };

  const currentRoadmap = roadmapData[roadmapId] || roadmapData["web-dev"];

  const learningSteps = [
    {
      stepNumber: 1,
      title: "Introduction to Web Development",
      description: "Learn the fundamentals of how the web works, HTML structure, and basic CSS styling.",
      duration: "1 week",
      status: "completed" as const,
      resources: { videos: 8, articles: 5, exercises: 10 },
    },
    {
      stepNumber: 2,
      title: "Advanced CSS & Responsive Design",
      description: "Master Flexbox, Grid, animations, and create responsive layouts for all devices.",
      duration: "1.5 weeks",
      status: "completed" as const,
      resources: { videos: 12, articles: 8, exercises: 15 },
    },
    {
      stepNumber: 3,
      title: "JavaScript Fundamentals",
      description: "Understand variables, functions, DOM manipulation, and asynchronous programming.",
      duration: "2 weeks",
      status: "current" as const,
      resources: { videos: 15, articles: 10, exercises: 20 },
    },
    {
      stepNumber: 4,
      title: "Modern JavaScript (ES6+)",
      description: "Learn arrow functions, destructuring, modules, async/await, and modern JS features.",
      duration: "1.5 weeks",
      status: "locked" as const,
      resources: { videos: 10, articles: 7, exercises: 12 },
    },
    {
      stepNumber: 5,
      title: "React Basics",
      description: "Build interactive UIs with React components, props, state, and hooks.",
      duration: "2 weeks",
      status: "locked" as const,
      resources: { videos: 18, articles: 12, exercises: 25 },
    },
    {
      stepNumber: 6,
      title: "Advanced React & State Management",
      description: "Master Context API, Redux, custom hooks, and performance optimization.",
      duration: "2 weeks",
      status: "locked" as const,
      resources: { videos: 14, articles: 9, exercises: 18 },
    },
    {
      stepNumber: 7,
      title: "Backend Development with Node.js",
      description: "Build REST APIs, work with databases, and handle authentication.",
      duration: "2 weeks",
      status: "locked" as const,
      resources: { videos: 16, articles: 11, exercises: 22 },
    },
  ];

  const milestones = [
    { title: "First HTML Page", completed: true },
    { title: "Responsive Portfolio", completed: true },
    { title: "Interactive Calculator", completed: false },
    { title: "React Todo App", completed: false },
    { title: "Full-Stack Project", completed: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
      {/* Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            className="mb-4 rounded-full"
            onClick={() => onNavigate("roadmaps")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roadmaps
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="rounded-full bg-purple-100 text-purple-700">
                  {currentRoadmap.level}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-gray-600">{currentRoadmap.rating}</span>
                </div>
              </div>
              <h1 className="text-gray-900 mb-2">{currentRoadmap.title}</h1>
              <p className="text-gray-600 mb-4">{currentRoadmap.subtitle}</p>
              <p className="text-gray-700 mb-6">{currentRoadmap.description}</p>

              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>{currentRoadmap.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <BookOpen className="w-5 h-5" />
                  <span>7 modules</span>
                </div>
              </div>

              <Button size="lg" className="rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg">
                {currentRoadmap.progress > 0 ? "Continue Learning" : "Start Roadmap"}
              </Button>
            </div>

            <div className="relative">
              <AspectRatio ratio={4 / 3}>
                <ImageWithFallback
                  src={currentRoadmap.image}
                  alt={currentRoadmap.title}
                  className="rounded-2xl shadow-xl w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      {currentRoadmap.progress > 0 && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Card className="p-6 rounded-2xl bg-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-gray-900 mb-1">Your Progress</h3>
                  <p className="text-gray-600">Keep up the great work!</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-900">{currentRoadmap.progress}%</p>
                  <p className="text-gray-600">Complete</p>
                </div>
              </div>
              <Progress value={currentRoadmap.progress} className="h-3 mb-4" />
              <div className="flex items-center gap-2 text-green-600">
                <TrendingUp className="w-5 h-5" />
                <span>2 steps completed this week</span>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Learning Path */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-gray-900 mb-6">Learning Path</h2>
              <div className="space-y-4">
                {learningSteps.map((step) => (
                  <RoadmapStepCard key={step.stepNumber} {...step} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Milestones */}
              <Card className="p-6 rounded-2xl bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-purple-600" />
                  <h3 className="text-gray-900">Milestones</h3>
                </div>
                <div className="space-y-3">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          milestone.completed ? "bg-green-500" : "bg-gray-300"
                        }`}
                      />
                      <span
                        className={
                          milestone.completed ? "text-gray-900" : "text-gray-500"
                        }
                      >
                        {milestone.title}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Skills You'll Learn */}
              <Card className="p-6 rounded-2xl bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-purple-600" />
                  <h3 className="text-gray-900">Skills You'll Learn</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["HTML5", "CSS3", "JavaScript", "React", "Node.js", "APIs", "Git", "Responsive Design"].map(
                    (skill) => (
                      <Badge key={skill} variant="secondary" className="rounded-full">
                        {skill}
                      </Badge>
                    )
                  )}
                </div>
              </Card>

              {/* Career Outcomes */}
              <Card className="p-6 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100">
                <h3 className="text-gray-900 mb-2">Career Outcomes</h3>
                <p className="text-gray-600 mb-4">
                  Graduates of this roadmap have landed roles such as:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Frontend Developer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Full-Stack Developer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>React Developer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Web Application Developer</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}