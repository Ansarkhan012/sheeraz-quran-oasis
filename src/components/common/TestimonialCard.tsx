
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role?: string;
  avatar?: string;
  quote: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  avatar,
  quote,
  rating = 5,
}) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-muted">
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-gold fill-gold' : 'text-muted'}`}
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="mb-6">
        <p className="text-foreground italic">{quote}</p>
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center">
        {avatar ? (
          <img 
            src={avatar} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mr-4">
            <span className="font-medium text-lg text-accent-foreground">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-medium text-primary">{name}</p>
          {role && <p className="text-sm text-muted-foreground">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
