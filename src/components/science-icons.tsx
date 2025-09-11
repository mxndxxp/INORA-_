import React from 'react';

const ElectrolysisIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22V15" />
    <path d="M18 15V8" />
    <path d="M6 15V8" />
    <path d="M12 15h6" />
    <path d="M12 15H6" />
    <path d="M4 8h16" />
    <path d="M10 2v3" />
    <path d="M14 2v3" />
    <path d="M18 8a2 2 0 0 1-2-2h-4a2 2 0 0 1-2 2" />
  </svg>
);

const OrpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m16 8-8 8" />
    <path d="M14.5 16H16v-1.5" />
    <path d="M9.5 8H8v1.5" />
  </svg>
);

const PhScaleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2v20" />
    <path d="M2 12h20" />
    <path d="M2 7h4" />
    <path d="M18 7h4" />
    <path d="M2 17h4" />
    <path d="M18 17h4" />
    <path d="M7 2v4" />
    <path d="M7 18v4" />
    <path d="M17 2v4" />
    <path d="M17 18v4" />
  </svg>
);

const MicroclusteringIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
    <path d="M12 20.5a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17Z" />
    <path d="M12 4.5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5Z" />
    <path d="M18.5 9.5a2.5 2.5 0 1 1-4.33 2.5a2.5 2.5 0 0 1 4.33-2.5Z" />
    <path d="M5.5 9.5a2.5 2.5 0 1 0 4.33 2.5A2.5 2.5 0 0 0 5.5 9.5Z" />
  </svg>
);

const HydrogenIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        {...props}
    >
        <path d="M2 15h6m-3-3v6"/>
        <path d="M10 15h6m-3-3v6"/>
        <path d="M21.5 15a4.5 4.5 0 0 0-4.5-4.5H16v6h1.5a4.5 4.5 0 0 0 4.5-4.5Z"/>
        <path d="M4 3.46a2 2 0 0 1 2-1.46h12a2 2 0 0 1 2 1.46l-2 6.54H6Z"/>
    </svg>
);


export const ScienceIcons = {
  ElectrolysisIcon,
  OrpIcon,
  PhScaleIcon,
  MicroclusteringIcon,
  HydrogenIcon,
};
