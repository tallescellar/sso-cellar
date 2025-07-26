
import React from 'react';
import cellarLogo from '@/assets/cellar-logo.png';

const CompanyLogo = () => {
  return (
    <div className="flex items-center justify-center">
      <img 
        src={cellarLogo} 
        alt="Cellar Vinhos" 
        className="h-12 w-auto"
      />
    </div>
  );
};

export default CompanyLogo;
