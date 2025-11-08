import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Trophy, BookOpen, Clock, TrendingUp, User } from "lucide-react";

export function DashboardPreview() {
  const stats = [
    { label: "Courses Completed", value: "8", icon: Trophy, color: "text-yellow-600" },
    { label: "Hours Learned", value: "48", icon: Clock, color: "text-blue-600" },
    { label: "Current Streak", value: "3 days", icon: TrendingUp, color: "text-green-600" },
    { label: "Skills Acquired", value: "5", icon: BookOpen, color: "text-purple-600" },
  ];

  const currentCourses = [
    { name: "React Fundamentals", progress: 75, color: "bg-blue-500" },
    { name: "Python for AI", progress: 45, color: "bg-purple-500" },
    { name: "Advanced JavaScript", progress: 90, color: "bg-cyan-500" },
  ];

  return (
    <div className="space-y-6">
      {/* User Profile Section */}
      <Card className="p-6 rounded-2xl bg-white dark:bg-gray-800">
        <div className="flex items-center gap-4">
          {/* User Avatar Illustration */}
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
            <User className="w-10 h-10 text-white" />
          </div>
          
          {/* User Info */}
          <div className="flex-1">
            <h3 className="text-gray-900 dark:text-white mb-1">user1</h3>
            <p className="text-gray-600 dark:text-gray-400">Keep up the great work!</p>
          </div>
          
          {/* Status Badge */}
          <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 hover:bg-green-100">
            Active Learner
          </Badge>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
              <stat.icon className={`w-6 h-6 ${stat.color} mb-2`} />
              <p className="text-gray-600 dark:text-gray-400 mb-1">{stat.label}</p>
              <p className="text-gray-900 dark:text-white">{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Current Courses */}
        <Card className="p-6 rounded-2xl bg-white dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="dark:text-white">Continue Learning</h3>
            <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 hover:bg-green-100">Active</Badge>
          </div>
          <div className="space-y-4">
            {currentCourses.map((course, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">{course.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}