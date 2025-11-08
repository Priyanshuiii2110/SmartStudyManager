import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";

interface LearningPathCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: string;
  level: string;
  accentColor: string;
}

export function LearningPathCard({
  icon,
  title,
  description,
  duration,
  level,
  accentColor,
}: LearningPathCardProps) {
  return (
    <Card className={`p-6 rounded-2xl border-2 hover:shadow-lg dark:hover:shadow-purple-500/20 transition-all cursor-pointer group ${accentColor} dark:bg-gray-800 dark:border-gray-700`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${accentColor.replace('border-', 'bg-').replace('-200', '-100')} dark:bg-gray-700`}>
          {icon}
        </div>
        <Badge variant="secondary" className="rounded-full">
          {level}
        </Badge>
      </div>
      <h3 className="mb-2 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-gray-500 dark:text-gray-400">{duration}</span>
        <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:translate-x-1 transition-transform" />
      </div>
    </Card>
  );
}
