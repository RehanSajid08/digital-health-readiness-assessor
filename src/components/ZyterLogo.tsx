
import React from 'react';

interface ZyterLogoProps {
  className?: string;
}

const ZyterLogo: React.FC<ZyterLogoProps> = ({ className = "h-10" }) => {
  return (
    <div className={className}>
      <img 
        src="/lovable-uploads/86e7bf7c-f72a-4295-abe3-c9d3be511e4a.png" 
        alt="Zyter Logo" 
        className="h-full"
      />
    </div>
  );
};

export default ZyterLogo;
