import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CheckCircle2, Circle, Lock, Play, FileText, Code } from "lucide-react";

interface RoadmapStepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  duration: string;
  status: "completed" | "current" | "locked";
  resources: {
    videos: number;
    articles: number;
    exercises: number;
  };
}

export function RoadmapStepCard({
  stepNumber,
  title,
  description,
  duration,
  status,
  resources,
}: RoadmapStepCardProps) {
  const getStatusIcon = () => {
    if (status === "completed") {
      return <CheckCircle2 className="w-6 h-6 text-green-600" />;
    } else if (status === "current") {
      return <Circle className="w-6 h-6 text-purple-600 fill-purple-600" />;
    } else {
      return <Lock className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = () => {
    if (status === "completed") return "border-green-200 bg-green-50";
    if (status === "current") return "border-purple-300 bg-purple-50";
    return "border-gray-200 bg-gray-50";
  };

  return (
    <Card className={`p-6 rounded-2xl border-2 ${getStatusColor()} transition-all`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">{getStatusIcon()}</div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="rounded-full">
                  Step {stepNumber}
                </Badge>
                <span className="text-gray-500">{duration}</span>
              </div>
              <h3 className="text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4 mb-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              <span>{resources.videos} videos</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>{resources.articles} articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>{resources.exercises} exercises</span>
            </div>
          </div>

          {status === "completed" && (
            <Button variant="outline" className="rounded-full">
              Review
            </Button>
          )}
          {status === "current" && (
            <Button className="rounded-full bg-purple-600 hover:bg-purple-700">
              Continue Learning
            </Button>
          )}
          {status === "locked" && (
            <Button variant="ghost" disabled className="rounded-full">
              Locked
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
