import React from 'react';

interface PageHeadingProps {
  heading: string;
  subheading?: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
}

const PageHeading = ({ heading, subheading, showBackButton = false, onBackClick }: PageHeadingProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      {showBackButton && onBackClick && (
        <button onClick={onBackClick} className="flex items-center space-x-2 text-blue-500 focus:outline-none">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>
      )}
      <div>
        <h1 className="text-2xl font-bold">{heading}</h1>
        {subheading && <p className="text-gray-500 text-sm">{subheading}</p>}
      </div>
    </div>
  );
};

export default PageHeading;
