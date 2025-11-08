import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  Trophy,
  BookOpen,
  Clock,
  TrendingUp,
  Target,
  Calendar,
  Flame,
  Award,
  ChevronRight,
  Star,
} from "lucide-react";

interface DashboardPageProps {
  onNavigate: (page: string, roadmapId?: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const stats = [
    { label: "Courses Completed", value: "1", icon: Trophy, color: "text-yellow-600", bgColor: "bg-yellow-50" },
    { label: "Hours Learned", value: "4", icon: Clock, color: "text-blue-600", bgColor: "bg-blue-50" },
    { label: "Current Streak", value: "3 days", icon: Flame, color: "text-orange-600", bgColor: "bg-orange-50" },
    { label: "Skills Acquired", value: "4", icon: BookOpen, color: "text-purple-600", bgColor: "bg-purple-50" },
  ];

  const currentCourses = [
    {
      id: "web-dev",
      name: "Web Development",
      progress: 35,
      color: "bg-blue-500",
      nextLesson: "JavaScript Fundamentals",
      timeLeft: "2 weeks remaining",
    },
    {
      id: "python",
      name: "Python for Data Science",
      progress: 0,
      color: "bg-green-500",
      nextLesson: "Getting Started",
      timeLeft: "Not started",
    },
  ];

  const weeklyGoals = [
    { goal: "Complete 3 lessons", current: 2, target: 3, completed: false },
    { goal: "Practice coding 5 days", current: 4, target: 5, completed: false },
    { goal: "Finish one project", current: 0, target: 1, completed: false },
  ];

  const achievements = [
    { title: "First Step", description: "Completed your first lesson", earned: true, icon: "🎯" },
    { title: "Week Warrior", description: "Maintained a 7-day streak", earned: true, icon: "🔥" },
    { title: "Code Master", description: "Completed 10 coding exercises", earned: true, icon: "💻" },
    { title: "Project Builder", description: "Built your first project", earned: false, icon: "🏗️" },
    { title: "Speed Learner", description: "Completed a course in record time", earned: false, icon: "⚡" },
    { title: "Consistent Coder", description: "30-day learning streak", earned: false, icon: "🌟" },
  ];

  const recentActivity = [
    {
      type: "lesson",
      title: "Completed: Advanced CSS Layouts",
      time: "2 hours ago",
      course: "Web Development",
    },
    {
      type: "achievement",
      title: "Earned: Week Warrior badge",
      time: "1 day ago",
      course: null,
    },
    {
      type: "lesson",
      title: "Completed: HTML Fundamentals",
      time: "2 days ago",
      course: "Web Development",
    },
  ];

  const upcomingDeadlines = [
    { task: "JavaScript Quiz", dueDate: "Tomorrow", course: "Web Development" },
    { task: "Portfolio Project", dueDate: "In 5 days", course: "Web Development" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-b dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500">
                <AvatarFallback className="bg-transparent text-white">U1</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-gray-900 dark:text-white">Welcome back, user1!</h1>
                <p className="text-gray-600 dark:text-gray-400">Ready to continue your learning journey?</p>
              </div>
            </div>
            <Button
              size="lg"
              className="rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg"
              onClick={() => onNavigate("roadmaps")}
            >
              Browse Roadmaps
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className={`p-6 rounded-2xl ${stat.bgColor} dark:bg-gray-800 border-2 border-transparent dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all`}>
                <stat.icon className={`w-8 h-8 ${stat.color} dark:${stat.color} mb-3`} />
                <p className="text-gray-900 dark:text-white mb-1">{stat.value}</p>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Continue Learning */}
              <div>
                <h2 className="text-gray-900 dark:text-white mb-4">Continue Learning</h2>
                <div className="space-y-4">
                  {currentCourses.map((course) => (
                    <Card
                      key={course.id}
                      className="p-6 rounded-2xl bg-white dark:bg-gray-800 hover:shadow-lg transition-all cursor-pointer"
                      onClick={() => onNavigate("roadmap-detail", course.id)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-gray-900 dark:text-white mb-1">{course.name}</h3>
                          <p className="text-gray-600 dark:text-gray-400">Next: {course.nextLesson}</p>
                        </div>
                        <Badge variant="secondary" className="rounded-full dark:bg-gray-700 dark:text-gray-200">
                          {course.timeLeft}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Progress</span>
                          <span className="text-gray-900 dark:text-white">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <Button className="w-full mt-4 rounded-full bg-purple-600 hover:bg-purple-700">
                        {course.progress > 0 ? "Continue" : "Start Course"}
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Weekly Goals */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-gray-900 dark:text-white">Weekly Goals</h2>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-5 h-5" />
                    <span>Oct 20 - Oct 26</span>
                  </div>
                </div>
                <Card className="p-6 rounded-2xl bg-white dark:bg-gray-800">
                  <div className="space-y-4">
                    {weeklyGoals.map((goal, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 dark:text-gray-300">{goal.goal}</span>
                          <span className="text-gray-600 dark:text-gray-400">
                            {goal.current}/{goal.target}
                          </span>
                        </div>
                        <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Recent Activity */}
              <div>
                <h2 className="text-gray-900 dark:text-white mb-4">Recent Activity</h2>
                <Card className="p-6 rounded-2xl bg-white dark:bg-gray-800">
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-4 pb-4 last:pb-0 border-b dark:border-gray-700 last:border-0">
                        <div className={`p-2 rounded-lg ${activity.type === 'achievement' ? 'bg-yellow-100 dark:bg-yellow-900/30' : 'bg-blue-100 dark:bg-blue-900/30'}`}>
                          {activity.type === 'achievement' ? (
                            <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-500" />
                          ) : (
                            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-900 dark:text-white">{activity.title}</p>
                          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1">
                            <Clock className="w-4 h-4" />
                            <span>{activity.time}</span>
                            {activity.course && (
                              <>
                                <span>•</span>
                                <span>{activity.course}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Achievements */}
              <div>
                <h2 className="text-gray-900 dark:text-white mb-4">Achievements</h2>
                <Card className="p-6 rounded-2xl bg-white dark:bg-gray-800">
                  <div className="grid grid-cols-3 gap-3">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className={`aspect-square rounded-xl flex flex-col items-center justify-center p-3 text-center ${
                          achievement.earned
                            ? "bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border-2 border-yellow-300 dark:border-yellow-700"
                            : "bg-gray-100 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600"
                        }`}
                        title={achievement.description}
                      >
                        <span className="text-2xl mb-1">{achievement.icon}</span>
                        <span className={`text-xs ${achievement.earned ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-gray-500"}`}>
                          {achievement.title}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-gray-600 dark:text-gray-400">3 of 6 earned</p>
                  </div>
                </Card>
              </div>

              {/* Upcoming Deadlines */}
              <div>
                <h2 className="text-gray-900 dark:text-white mb-4">Upcoming Deadlines</h2>
                <Card className="p-6 rounded-2xl bg-white dark:bg-gray-800">
                  <div className="space-y-4">
                    {upcomingDeadlines.map((deadline, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
                          <Target className="w-5 h-5 text-red-600 dark:text-red-400" />
                        </div>
                        <div>
                          <p className="text-gray-900 dark:text-white">{deadline.task}</p>
                          <p className="text-gray-600 dark:text-gray-400">{deadline.dueDate}</p>
                          <p className="text-gray-500 dark:text-gray-500">{deadline.course}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Study Streak */}
              <Card className="p-6 rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30">
                <div className="flex items-center gap-3 mb-4">
                  <Flame className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  <div>
                    <h3 className="text-gray-900 dark:text-white">7-Day Streak!</h3>
                    <p className="text-gray-600 dark:text-gray-400">Keep it going!</p>
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <div
                      key={day}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        day <= 7 ? "bg-orange-500 text-white" : "bg-white dark:bg-gray-700 text-gray-400"
                      }`}
                    >
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-center mt-4">
                  Study today to maintain your streak!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}