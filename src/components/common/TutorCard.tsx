
import React from 'react';

interface TutorCardProps {
  name: string;
  image?: string; 
  specialization: string;
  experience: string;
  subjects: string[];
  bio?: string;
}

const TutorCard: React.FC<TutorCardProps> = ({
  name,
  image,
  specialization,
  experience,
  subjects,
  bio,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-muted">
      {/* Tutor Image */}
      <div className="h-60 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-accent flex items-center justify-center">
            <span className="font-heading text-6xl text-accent-foreground">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      
      {/* Tutor Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-1">{name}</h3>
        <p className="text-muted-foreground mb-3">{specialization}</p>
        
        <div className="mb-4">
          <p className="text-sm"><span className="font-medium">Experience:</span> {experience}</p>
        </div>
        
        {/* Subjects */}
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Subjects:</p>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject, index) => (
              <span 
                key={index}
                className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
        
        {/* Bio - Optional */}
        {bio && (
          <div className="mt-4 pt-4 border-t border-muted">
            <p className="text-sm text-foreground/90 line-clamp-3">{bio}</p>
          </div>
        )}
        
        {/* View Profile Button */}
        <button className="btn btn-outline w-full mt-4 py-2">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default TutorCard;
