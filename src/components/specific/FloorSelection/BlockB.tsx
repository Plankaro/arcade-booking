"use client";
import Tooltip, { TooltipProps } from '@/components/shared/common/Tooltip';
import React, { useEffect, useRef, useState } from 'react'

const BlockBFloorSelection = () => {
  const pathClassName = 'opacity-0 hover:opacity-90 transition-opacity duration-300 cursor-pointer';
  const [tooltip, setTooltip] = useState<TooltipProps>({
    x: 0,
    y: 0,
    text: '',
    visible: false,
  });

  const onMouseEnter = (e: React.MouseEvent, floor: string) => {
    const { top, left, height, width } = e.currentTarget.getBoundingClientRect();
    setTooltip({
      x: left + width / 2,
      y: top + 40,
      text: floor,
      visible: true,
    });
  };

  const onMouseLeave = () => {
    setTooltip({
      x: -100,
      y: -100,
      text: '',
      visible: false,
    });
  };

  const imageRef = useRef<HTMLImageElement>(null);
  const [imageNaturalAspectRatio, setImageNaturalAspectRatio] = useState<number>(0);

  useEffect(() => {
    if (imageRef.current) {
      setImageNaturalAspectRatio(imageRef.current.naturalWidth / imageRef.current.naturalHeight);
    }
  }, [imageRef.current]);

  if (typeof window === 'undefined') return null;
  return (
    <div className={`relative w-full`}
      style={{
        maxWidth: `${window.innerHeight * imageNaturalAspectRatio}px`,
      }}
    >
      <Tooltip {...tooltip} />
      <img
        ref={imageRef}
        className='z-10 block w-full h-auto'
        src="/Images/Block B_1.jpg"
        alt="" />

      <svg
        className='absolute z-20'
        style={{ width: '104.8%', height: 'auto', top: '-3.7%', left: '-1.8%' }} viewBox="0 0 2158 1678" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={pathClassName}
          d="M1236 1348.64V1222L1601 1234.82V1363L1236 1348.64Z"
          fill="black"
          fillOpacity="0.25"
          strokeWidth="4"
          stroke="black"
          onMouseEnter={(e) => onMouseEnter(e, "floor")}
          onMouseLeave={onMouseLeave}
        />
        <path className={pathClassName}
          d="M1237 1224.86V1107L1601 1111.57V1234L1237 1224.86Z"
          fill="black"
          fillOpacity="0.25"
          strokeWidth="4"
          stroke="black"
          onMouseEnter={(e) => onMouseEnter(e, "floor")}
          onMouseLeave={onMouseLeave}
        />
        <path className={pathClassName}
          d="M1237.5 1106.5V983H1601.5V1110.5L1237.5 1106.5Z"
          fill="black"
          fillOpacity="0.25"
          strokeWidth="4"
          stroke="black"
          onMouseEnter={(e) => onMouseEnter(e, "floor")}
          onMouseLeave={onMouseLeave}
        />
        <path className={pathClassName}
          d="M1237 982V858H1601V982H1237Z"
          fill="black"
          fillOpacity="0.25"
          strokeWidth="4"
          stroke="black"
          onMouseEnter={(e) => onMouseEnter(e, "floor")}
          onMouseLeave={onMouseLeave}
        />
        <path className={pathClassName}
          d="M1601 731V858H1237V731H1601Z"
          fill="black"
          fillOpacity="0.25"
          strokeWidth="4"
          stroke="black"
          onMouseEnter={(e) => onMouseEnter(e, "floor")}
          onMouseLeave={onMouseLeave}
        />
        <path className={pathClassName}
          d="M1237 731H1601V602L1237 612V731Z"
          fill="black"
          fillOpacity="0.25"
          strokeWidth="4"
          stroke="black"
          onMouseEnter={(e) => onMouseEnter(e, "floor")}
          onMouseLeave={onMouseLeave}
        />
        <path className={pathClassName}
          d="M1237 611L1600 602.469V474L1237 485.04V611Z"
          fill="black"
          fillOpacity="0.25"
          strokeWidth="4"
          stroke="black"
          onMouseEnter={(e) => onMouseEnter(e, "floor")}
          onMouseLeave={onMouseLeave}
        />
      </svg>
    </div>
  )
}

export default BlockBFloorSelection
