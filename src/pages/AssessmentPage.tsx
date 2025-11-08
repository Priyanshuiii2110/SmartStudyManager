import { useState, useEffect } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import {
  CheckCircle,
  Brain,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Code2,
  Database,
  Lock,
  Smartphone,
  Palette,
  Cloud,
  Terminal,
} from "lucide-react";

interface AssessmentPageProps {
  onNavigate: (page: string, roadmapId?: string) => void;
}

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    category: string;
  }[];
}

interface CourseRecommendation {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
  bgColor: string;
}

export function AssessmentPage({ onNavigate }: AssessmentPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [recommendation, setRecommendation] = useState<CourseRecommendation | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Load previous result from localStorage
  useEffect(() => {
    const savedResult = localStorage.getItem("smartStudyAssessmentResult");
    if (savedResult) {
      const result = JSON.parse(savedResult);
      setRecommendation(result);
    }
  }, []);

  const questions: Question[] = [
    {
      id: 1,
      question: "What type of projects excite you the most?",
      options: [
        { text: "Building websites and web applications", category: "web-dev" },
        { text: "Analyzing data and finding patterns", category: "data-science" },
        { text: "Creating mobile apps for iOS and Android", category: "mobile" },
        { text: "Designing beautiful user interfaces", category: "uiux" },
      ],
    },
    {
      id: 2,
      question: "Which skill would you like to master first?",
      options: [
        { text: "Programming and coding", category: "web-dev" },
        { text: "Statistics and mathematics", category: "data-science" },
        { text: "Visual design and creativity", category: "uiux" },
        { text: "Problem-solving and logic", category: "ai" },
      ],
    },
    {
      id: 3,
      question: "What's your preferred way of learning?",
      options: [
        { text: "Building real projects hands-on", category: "web-dev" },
        { text: "Understanding theories and concepts", category: "ai" },
        { text: "Working with visual tools and design", category: "uiux" },
        { text: "Experimenting with data and numbers", category: "data-science" },
      ],
    },
    {
      id: 4,
      question: "Which industry interests you most?",
      options: [
        { text: "E-commerce and online businesses", category: "web-dev" },
        { text: "Finance and business analytics", category: "data-science" },
        { text: "Gaming and entertainment", category: "game-dev" },
        { text: "Security and protecting systems", category: "security" },
      ],
    },
    {
      id: 5,
      question: "What motivates you in your career?",
      options: [
        { text: "Creating things people use every day", category: "web-dev" },
        { text: "Solving complex problems with AI", category: "ai" },
        { text: "Making things look beautiful", category: "uiux" },
        { text: "Working with cutting-edge technology", category: "blockchain" },
      ],
    },
    {
      id: 6,
      question: "How do you approach problem-solving?",
      options: [
        { text: "Break it down into smaller steps", category: "web-dev" },
        { text: "Analyze data to find solutions", category: "data-science" },
        { text: "Think creatively and visually", category: "uiux" },
        { text: "Use logical and systematic methods", category: "ai" },
      ],
    },
    {
      id: 7,
      question: "Which technology area fascinates you?",
      options: [
        { text: "Cloud computing and infrastructure", category: "cloud" },
        { text: "Artificial intelligence and robots", category: "ai" },
        { text: "Mobile apps and touchscreen interfaces", category: "mobile" },
        { text: "Cybersecurity and ethical hacking", category: "security" },
      ],
    },
    {
      id: 8,
      question: "What type of work environment suits you?",
      options: [
        { text: "Fast-paced startup building products", category: "web-dev" },
        { text: "Research-focused tech company", category: "ai" },
        { text: "Creative agency or design studio", category: "uiux" },
        { text: "Enterprise with complex systems", category: "devops" },
      ],
    },
    {
      id: 9,
      question: "Which superpower would you choose?",
      options: [
        { text: "Ability to create anything instantly", category: "web-dev" },
        { text: "Reading minds and predicting behavior", category: "data-science" },
        { text: "Perfect artistic vision and taste", category: "uiux" },
        { text: "Superhuman intelligence and logic", category: "ai" },
      ],
    },
    {
      id: 10,
      question: "What's your ideal final project?",
      options: [
        { text: "A fully functional e-commerce platform", category: "web-dev" },
        { text: "An AI chatbot that helps people", category: "ai" },
        { text: "A beautifully designed mobile app", category: "mobile" },
        { text: "A data dashboard with insights", category: "data-science" },
      ],
    },
  ];

  const courseRecommendations: Record<string, CourseRecommendation> = {
    "web-dev": {
      id: "web-dev",
      title: "Web Development",
      description: "Perfect for you! Start building modern websites and web applications with HTML, CSS, JavaScript, and React. You'll create interactive experiences that millions of users will love.",
      icon: <Code2 className="w-12 h-12" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    "data-science": {
      id: "python",
      title: "Python & Data Science",
      description: "Great match! Dive into Python programming and data analysis. Learn to uncover insights from data using Pandas, NumPy, and machine learning algorithms.",
      icon: <Database className="w-12 h-12" />,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    "ai": {
      id: "ai",
      title: "Artificial Intelligence",
      description: "Excellent choice! Explore AI, neural networks, and deep learning. Build intelligent systems that can learn, reason, and solve complex problems.",
      icon: <Brain className="w-12 h-12" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    "mobile": {
      id: "mobile",
      title: "Mobile Development",
      description: "Perfect fit! Create native and cross-platform mobile apps with React Native and Flutter. Bring your ideas to life on iOS and Android devices.",
      icon: <Smartphone className="w-12 h-12" />,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
    },
    "uiux": {
      id: "uiux",
      title: "UI/UX Design",
      description: "Ideal for you! Master the art of creating beautiful, user-friendly interfaces. Learn design principles, Figma, and create amazing user experiences.",
      icon: <Palette className="w-12 h-12" />,
      color: "text-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
    },
    "security": {
      id: "security",
      title: "Cybersecurity",
      description: "Great match! Learn ethical hacking, network security, and protect systems from cyber threats. Become a guardian of the digital world.",
      icon: <Lock className="w-12 h-12" />,
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    "cloud": {
      id: "cloud",
      title: "Cloud Computing",
      description: "Perfect choice! Master AWS, Azure, and Google Cloud Platform. Learn to deploy, scale, and manage applications in the cloud.",
      icon: <Cloud className="w-12 h-12" />,
      color: "text-sky-600",
      bgColor: "bg-sky-50 dark:bg-sky-900/20",
    },
    "blockchain": {
      id: "blockchain",
      title: "Blockchain Development",
      description: "Excellent fit! Learn blockchain fundamentals and smart contracts. Build decentralized applications and be part of Web3 revolution.",
      icon: <Terminal className="w-12 h-12" />,
      color: "text-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
    },
    "game-dev": {
      id: "game-dev",
      title: "Game Development",
      description: "Great choice! Create amazing games with Unity and Unreal Engine. Learn game design, 3D graphics, and bring your creative visions to life.",
      icon: <Sparkles className="w-12 h-12" />,
      color: "text-violet-600",
      bgColor: "bg-violet-50 dark:bg-violet-900/20",
    },
    "devops": {
      id: "devops",
      title: "DevOps Engineering",
      description: "Perfect for you! Master CI/CD, Docker, Kubernetes, and automation. Bridge the gap between development and operations.",
      icon: <Terminal className="w-12 h-12" />,
      color: "text-teal-600",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
    },
  };

  const handleAnswerSelect = (category: string) => {
    setAnswers({ ...answers, [currentQuestion]: category });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    // Count occurrences of each category
    const categoryCounts: Record<string, number> = {};
    Object.values(answers).forEach((category) => {
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });

    // Find the category with the highest count
    let maxCount = 0;
    let recommendedCategory = "web-dev";
    Object.entries(categoryCounts).forEach(([category, count]) => {
      if (count > maxCount) {
        maxCount = count;
        recommendedCategory = category;
      }
    });

    const result = courseRecommendations[recommendedCategory];
    setRecommendation(result);
    setShowResult(true);

    // Save to localStorage
    localStorage.setItem("smartStudyAssessmentResult", JSON.stringify(result));
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResult(false);
    setHasStarted(false);
    setRecommendation(null);
    localStorage.removeItem("smartStudyAssessmentResult");
  };

  const handleStartLearning = () => {
    if (recommendation) {
      onNavigate("roadmap", recommendation.id);
    }
  };

  const progressPercentage = ((Object.keys(answers).length / questions.length) * 100);

  // Welcome Screen
  if (!hasStarted && !showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 transition-colors">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-6">
              <Brain className="w-10 h-10 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-gray-900 dark:text-white mb-4">
              Career Path Assessment
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover which tech field matches your interests and skills! Answer 10 quick questions and we'll recommend the perfect learning path for you.
            </p>
          </div>

          <Card className="p-8 rounded-2xl shadow-xl bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-gray-900 dark:text-white mb-1">10 Quick Questions</h3>
                  <p className="text-gray-600 dark:text-gray-300">Takes only 3-5 minutes to complete</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-gray-900 dark:text-white mb-1">Personalized Recommendation</h3>
                  <p className="text-gray-600 dark:text-gray-300">Get a custom learning path based on your answers</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-gray-900 dark:text-white mb-1">Start Learning Immediately</h3>
                  <p className="text-gray-600 dark:text-gray-300">Jump right into your recommended course roadmap</p>
                </div>
              </div>
            </div>

            {recommendation && (
              <div className="mt-8 p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                <p className="text-purple-900 dark:text-purple-200">
                  💡 You previously received a recommendation for <span className="font-semibold">{recommendation.title}</span>. You can view it or retake the assessment.
                </p>
              </div>
            )}

            <div className="mt-8 flex gap-4">
              <Button
                onClick={() => setHasStarted(true)}
                className="flex-1 rounded-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 shadow-lg"
                size="lg"
              >
                Start Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              {recommendation && (
                <Button
                  onClick={() => setShowResult(true)}
                  variant="outline"
                  className="flex-1 rounded-full"
                  size="lg"
                >
                  View Previous Result
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Result Screen
  if (showResult && recommendation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 transition-colors">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 animate-fadeIn">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-gray-900 dark:text-white mb-4">
              Assessment Complete!
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Based on your answers, here's our recommendation
            </p>
          </div>

          <Card className={`p-8 rounded-2xl shadow-xl ${recommendation.bgColor} border-2 border-${recommendation.color.replace('text-', '')} dark:bg-gray-800 dark:border-gray-700 animate-fadeIn`}>
            <div className="text-center mb-6">
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-white dark:bg-gray-900 shadow-lg mb-4 ${recommendation.color}`}>
                {recommendation.icon}
              </div>
              <h2 className="text-gray-900 dark:text-white mb-2">
                {recommendation.title}
              </h2>
              <Badge className={`${recommendation.color} bg-white dark:bg-gray-900`}>
                Recommended for You
              </Badge>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-center mb-8">
              {recommendation.description}
            </p>

            <div className="flex gap-4">
              <Button
                onClick={handleStartLearning}
                className="flex-1 rounded-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 shadow-lg"
                size="lg"
              >
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={handleRetake}
                variant="outline"
                className="rounded-full"
                size="lg"
              >
                <RotateCcw className="w-5 h-5" />
              </Button>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <Button
              onClick={() => onNavigate("roadmaps")}
              variant="ghost"
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              View All Learning Paths
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Question Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 transition-colors">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 dark:text-gray-300">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              {Math.round(progressPercentage)}% Complete
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="p-8 rounded-2xl shadow-xl bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-6 animate-fadeIn">
          <h2 className="text-gray-900 dark:text-white mb-6">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <label
                key={index}
                className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${
                  answers[currentQuestion] === option.category
                    ? "border-purple-600 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-500"
                    : "border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700"
                }`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option.category}
                  checked={answers[currentQuestion] === option.category}
                  onChange={() => handleAnswerSelect(option.category)}
                  className="mt-1 w-5 h-5 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-gray-700 dark:text-gray-300 flex-1">
                  {option.text}
                </span>
              </label>
            ))}
          </div>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={handlePrevious}
            variant="outline"
            disabled={currentQuestion === 0}
            className="rounded-full"
            size="lg"
          >
            Previous
          </Button>

          {currentQuestion === questions.length - 1 ? (
            <Button
              onClick={handleSubmit}
              disabled={!answers[currentQuestion]}
              className="flex-1 rounded-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 shadow-lg"
              size="lg"
            >
              Submit Assessment
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
              className="flex-1 rounded-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 shadow-lg"
              size="lg"
            >
              Next Question
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          )}
        </div>

        {/* Skip Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Please answer the current question to continue
          </p>
        </div>
      </div>
    </div>
  );
}
