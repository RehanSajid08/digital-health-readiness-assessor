import React from 'react';

interface ZyterLogoProps {
  className?: string;
}

const ZyterLogo: React.FC<ZyterLogoProps> = ({ className = "h-10" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 165 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M57.552 14.656H37.456L55.472 32.8V35.744H34.064V31.744H51.584L33.648 13.632V10.656H57.552V14.656Z" fill="white"/>
      <path d="M73.468 11.1C73.468 13.42 71.596 15.28 69.036 15.28C66.508 15.28 64.636 13.42 64.636 11.1C64.636 8.78 66.508 6.92 69.036 6.92C71.596 6.92 73.468 8.78 73.468 11.1ZM65.66 35.74V17.72H72.412V35.74H65.66Z" fill="white"/>
      <path d="M85.564 35.74H78.78V10.66H85.564V35.74Z" fill="white"/>
      <path d="M101.079 36.16C94.4714 36.16 89.4394 31.38 89.4394 24.58C89.4394 17.78 94.4714 13 101.079 13C107.719 13 112.719 17.78 112.719 24.58C112.719 31.38 107.687 36.16 101.079 36.16ZM101.079 30.7C103.639 30.7 105.639 28.28 105.639 24.58C105.639 20.88 103.639 18.46 101.079 18.46C98.5194 18.46 96.5194 20.88 96.5194 24.58C96.5194 28.28 98.5194 30.7 101.079 30.7Z" fill="white"/>
      <path d="M133.042 17.72V35.74H126.41V33.08C125.386 34.8 123.386 36.16 120.346 36.16C115.666 36.16 112.43 32.32 112.43 26.56V17.72H119.182V25.68C119.182 28.44 120.638 30.22 123.226 30.22C125.734 30.22 126.986 28.5 126.986 25.68V17.72H133.042Z" fill="white"/>
      <path d="M137.066 35.74V10.66H143.85V35.74H137.066Z" fill="white"/>
      <path d="M164.478 26.76C164.478 32.72 160.146 36.16 153.99 36.16C147.834 36.16 143.53 32.72 143.53 26.76V17.72H150.282V26.68C150.282 29.34 151.734 30.76 153.99 30.76C156.246 30.76 157.698 29.34 157.698 26.68V17.72H164.45V26.76H164.478Z" fill="white"/>
      <path d="M30.488 14.528C30.488 22.544 23.848 29.024 15.736 29.024H0V13.504C0 5.488 6.64 0 14.752 0H30.488V14.528Z" fill="#18C8D3"/>
      <path d="M28.392 16.552C28.392 7.552 22.472 2 14.752 2H2V14.552C2 23.552 7.92 28 15.64 28H28.392V16.552Z" fill="white"/>
      <path d="M26.296 7.648L13.44 20.032L20.216 26.688H26.296V7.648Z" fill="url(#paint0_linear_0_1)"/>
      <path d="M6.16899 3.312L19.025 15.696L12.249 22.352H6.16899V3.312Z" fill="url(#paint1_linear_0_1)"/>
      <defs>
        <linearGradient id="paint0_linear_0_1" x1="13.7226" y1="19.7591" x2="24.7491" y2="15.2231" gradientUnits="userSpaceOnUse">
          <stop stop-color="#18C8D3"/>
          <stop offset="1" stop-color="#18C8D3"/>
        </linearGradient>
        <linearGradient id="paint1_linear_0_1" x1="6.16899" y1="12.832" x2="19.025" y2="12.832" gradientUnits="userSpaceOnUse">
          <stop stop-color="#18C8D3"/>
          <stop offset="1" stop-color="#18C8D3"/>
        </linearGradient>
      </defs>
      
      <text x="48" y="45" fill="white" fontSize="16" fontFamily="Arial, sans-serif" fontWeight="bold">TruCare</text>
    </svg>
  );
};

export default ZyterLogo;
