
import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image?: string;
  date: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  image,
  date,
  category,
}) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-muted">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-accent flex items-center justify-center">
            <span className="font-heading text-xl text-accent-foreground">
              Al Sheeraz Blog
            </span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Category & Date */}
        <div className="flex items-center justify-between mb-3 text-sm">
          <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full">{category}</span>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="font-heading text-xl font-semibold mb-2">
          <Link to={`/blog/${id}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>
        
        {/* Excerpt */}
        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        
        {/* Read More Link */}
        <Link 
          to={`/blog/${id}`} 
          className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
        >
          Read More
          <svg 
            className="ml-1 w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
