import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  testimonial: string;
  rating: number;
}

export function TestimonialCard({
  name,
  role,
  image,
  testimonial,
  rating,
}: TestimonialCardProps) {
  return (
    <Card className="p-6 rounded-2xl bg-white dark:bg-gray-800">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial}"</p>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-gray-900 dark:text-white">{name}</h4>
          <p className="text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </Card>
  );
}
