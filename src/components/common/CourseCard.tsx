
import React from 'react';
import { BookOpen } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  duration: string;
  icon?: React.ReactNode;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  level,
  duration,
  icon = <BookOpen className="h-6 w-6" />
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-muted hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="mr-4 p-3 bg-primary/10 rounded-full text-primary">
          {icon}
        </div>
        <h3 className="font-heading text-xl font-semibold">{title}</h3>
      </div>
      
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center">
          <span className="font-medium mr-2">Level:</span> {level}
        </div>
        <div className="flex items-center">
          <span className="font-medium mr-2">Duration:</span> {duration}
        </div>
      </div>
      
      <button className="btn btn-primary w-full mt-4 py-2">
        Learn More
      </button>
    </div>
  );
};

export default CourseCard;
