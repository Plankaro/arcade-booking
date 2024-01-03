"use client";
import React, { useEffect, useState } from 'react'
import AskForLandscape from './AskForLandscape';

const RotateToLandscapeNotifier = () => {
  const [isLandscape, setIsLandscape] = useState(true);

  useEffect(() => {
    const handleOrientationChange = () => {
      setTimeout(() => {
        setIsLandscape(window.innerWidth > window.innerHeight);
      }, 100);
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);
  return (
    <>
      {!isLandscape && <AskForLandscape />}
    </>
  )
}

export default RotateToLandscapeNotifier;
