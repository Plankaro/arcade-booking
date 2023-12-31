"use client";
import Tooltip, { TooltipProps } from '@/components/shared/common/Tooltip';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

const BlockBFloorSelection = () => {
  const pathClassName = 'opacity-0 hover:opacity-90 transition-opacity duration-300 cursor-pointer';
  const [tooltip, setTooltip] = React.useState<TooltipProps>({ text: '', rect: null, });

  const onMouseEnter = (e: React.MouseEvent, floor: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({text: floor,rect,})
  }
  const onMouseLeave = () => {
    setTooltip({
      text: '',
      rect: null,
    });
  }

  const imageRef = useRef<HTMLImageElement>(null);
  const [imageNaturalAspectRatio, setImageNaturalAspectRatio] = useState<number>(0);

  useEffect(() => {
    if (imageRef.current) {
      setImageNaturalAspectRatio(imageRef.current.naturalWidth / imageRef.current.naturalHeight);
    }
  }, [imageRef.current]);

  const floorOverleys = [
    {
      path: "M1236 1348.64V1222L1601 1234.82V1363L1236 1348.64Z",
      name: "1st floor",
      id: "floor-1"
    },
    {
      path: "M1237 1224.86V1107L1601 1111.57V1234L1237 1224.86Z",
      name: "2nd floor",
      id: "floor-2"
    },
    {
      path: "M1237.5 1106.5V983H1601.5V1110.5L1237.5 1106.5Z",
      name: "3rd floor",
      id: "floor-3"
    },
    {
      path: "M1237 982V858H1601V982H1237Z",
      name: "4th floor",
      id: "floor-4"
    },
    {
      path: "M1601 731V858H1237V731H1601Z",
      name: "5th floor",
      id: "floor-5"
    },
    {
      path: "M1237 731H1601V602L1237 612V731Z",
      name: "6th floor",
      id: "floor-6"
    },
    {
      path: "M1237 611L1600 602.469V474L1237 485.04V611Z",
      name: "7th floor",
      id: "floor-7"
    },]

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
        {
          floorOverleys.map((path, index) => {
            return (
              <Link key={index} href={`/block-b/${path.id}`}>
                <path
                  d={path.path}
                  className={pathClassName}
                  fill="black"
                  fillOpacity="0.25"
                  strokeWidth="4"
                  stroke="black"
                  onMouseEnter={(e) => onMouseEnter(e, path.name)}
                  onMouseLeave={onMouseLeave}
                />
              </Link>
            )
          })
        }
      </svg>
    </div>
  )
}

export default BlockBFloorSelection
