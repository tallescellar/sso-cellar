
import React from 'react';

const CompanyLogo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-3 shadow-lg">
        <div className="text-white font-bold text-2xl tracking-wider">
          CELLAR
        </div>
        <div className="text-blue-200 text-xs tracking-widest text-center">
          VINHOS
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
