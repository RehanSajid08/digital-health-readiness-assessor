
import React from 'react';
import ZyterLogo from './ZyterLogo';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="zyter-container flex justify-center md:justify-start">
        <ZyterLogo className="h-12" />
      </div>
    </header>
  );
};

export default Header;
