import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";
import {
  Code2,
  Database,
  Smartphone,
  Brain,
  Coffee,
  Sparkles,
  Search,
  ArrowRight,
  Cloud,
  Lock,
  BarChart,
  Layers,
  Terminal,
  Palette,
} from "lucide-react";

interface RoadmapsPageProps {
  onNavigate: (page: string, roadmapId?: string) => void;
}

export function RoadmapsPage({ onNavigate }: RoadmapsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allRoadmaps = [
    {
      id: "web-dev",
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      title: "Web Development",
      description: "Master HTML, CSS, JavaScript, and modern frameworks like React, Vue, and Angular.",
      duration: "12 weeks",
      modules: 48,
      level: "Beginner",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      id: "java",
      icon: <Coffee className="w-8 h-8 text-orange-600" />,
      title: "Java Programming",
      description: "Learn object-oriented programming, Spring framework, and enterprise application development.",
      duration: "10 weeks",
      modules: 40,
      level: "Beginner",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      id: "python",
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: "Python & Data Science",
      description: "Explore Python fundamentals, data analysis with Pandas, NumPy, and machine learning basics.",
      duration: "14 weeks",
      modules: 56,
      level: "Intermediate",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      id: "ai",
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "Artificial Intelligence",
      description: "Dive into AI concepts, neural networks, deep learning, and natural language processing.",
      duration: "16 weeks",
      modules: 64,
      level: "Advanced",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      id: "mobile",
      icon: <Smartphone className="w-8 h-8 text-cyan-600" />,
      title: "Mobile Development",
      description: "Build native and cross-platform mobile apps with React Native and Flutter.",
      duration: "12 weeks",
      modules: 48,
      level: "Intermediate",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      id: "uiux",
      icon: <Palette className="w-8 h-8 text-pink-600" />,
      title: "UI/UX Design",
      description: "Create beautiful, user-friendly interfaces with Figma and master design principles.",
      duration: "8 weeks",
      modules: 32,
      level: "Beginner",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      id: "cloud",
      icon: <Cloud className="w-8 h-8 text-sky-600" />,
      title: "Cloud Computing",
      description: "Master AWS, Azure, and Google Cloud Platform. Learn deployment and scaling.",
      duration: "10 weeks",
      modules: 40,
      level: "Intermediate",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
    },
    {
      id: "security",
      icon: <Lock className="w-8 h-8 text-red-600" />,
      title: "Cybersecurity",
      description: "Learn ethical hacking, network security, and protect systems from cyber threats.",
      duration: "14 weeks",
      modules: 56,
      level: "Advanced",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      id: "data-eng",
      icon: <BarChart className="w-8 h-8 text-indigo-600" />,
      title: "Data Engineering",
      description: "Build data pipelines, work with big data technologies, and master ETL processes.",
      duration: "12 weeks",
      modules: 48,
      level: "Advanced",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
    {
      id: "devops",
      icon: <Layers className="w-8 h-8 text-teal-600" />,
      title: "DevOps Engineering",
      description: "Master CI/CD, Docker, Kubernetes, and automation tools for modern development.",
      duration: "10 weeks",
      modules: 40,
      level: "Intermediate",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
    {
      id: "blockchain",
      icon: <Terminal className="w-8 h-8 text-amber-600" />,
      title: "Blockchain Development",
      description: "Learn blockchain fundamentals, smart contracts, and build decentralized applications.",
      duration: "12 weeks",
      modules: 48,
      level: "Advanced",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      id: "game-dev",
      icon: <Sparkles className="w-8 h-8 text-violet-600" />,
      title: "Game Development",
      description: "Create games with Unity and Unreal Engine. Learn game design and 3D graphics.",
      duration: "16 weeks",
      modules: 64,
      level: "Intermediate",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
    },
  ];

  const categories = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-gray-900 dark:text-white mb-4">Explore All Learning Roadmaps</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Choose your path and start your journey to becoming a tech professional. Each roadmap is carefully
              crafted by industry experts.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for roadmaps..."
                  className="pl-12 pr-4 py-6 rounded-full border-2 border-gray-200 dark:border-gray-700 focus:border-purple-400 dark:focus:border-purple-500 transition-colors dark:bg-gray-800 dark:text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Filter Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmaps Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allRoadmaps
              .filter(
                (roadmap) =>
                  (selectedCategory === "All" || roadmap.level === selectedCategory) &&
                  roadmap.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((roadmap) => (
                <Card
                  key={roadmap.id}
                  className={`p-6 rounded-2xl border-2 ${roadmap.borderColor} dark:border-gray-700 ${roadmap.bgColor} dark:bg-gray-800 hover:shadow-xl transition-all cursor-pointer group`}
                  onClick={() => onNavigate("roadmap-detail", roadmap.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-white dark:bg-gray-700 shadow-sm`}>
                      {roadmap.icon}
                    </div>
                    <Badge variant="secondary" className="rounded-full dark:bg-gray-700 dark:text-gray-200">
                      {roadmap.level}
                    </Badge>
                  </div>

                  <h3 className="mb-2 text-gray-900 dark:text-white">{roadmap.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{roadmap.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
                      <span>Duration</span>
                      <span>{roadmap.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
                      <span>Modules</span>
                      <span>{roadmap.modules} lessons</span>
                    </div>
                  </div>

                  <Button className="w-full rounded-full group-hover:bg-purple-600 transition-colors">
                    Start Learning
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-gray-900 dark:text-white mb-4">Not sure where to start?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Take our quick assessment to get a personalized roadmap recommendation based on your interests and
            experience level.
          </p>
          <Button size="lg" className="rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg">
            Take Assessment
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}