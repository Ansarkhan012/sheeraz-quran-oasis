
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  background?: 'pattern' | 'islamic' | 'none';
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  background = 'pattern'
}) => {
  return (
    <div className={`pt-32 pb-16 ${
      background === 'pattern' ? 'pattern-bg' : 
      background === 'islamic' ? 'islamic-pattern' : ''
    }`}>
      <div className="container-custom text-center">
        <h1 className="page-title mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
