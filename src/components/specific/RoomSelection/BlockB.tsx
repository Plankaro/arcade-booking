"use client";
import Tooltip, { TooltipProps } from '@/components/shared/common/Tooltip';
import Link from 'next/link';
import React, { MouseEvent, useEffect, useRef, useState } from 'react'

const BlockBRoomSelection = ({ floor }: { floor: string }) => {
  const pathClassName = ' opacity-0 hover:opacity-70  transition-opacity duration-300 cursor-pointer';
  const paths = [
    {
      path: "M1817 1058V864H2117C2132.86 915.845 2149.91 926.38 2187 930V864L2419 874V998H2463V1092H2419V1134H2451V1174H2483L2497 1380H2151V1414H2085V1380H1891V1262H1851V1134H1891V1058H1817Z",
      name: "3 BHK B",
      id: "3-BHK-B",
    },
    {
      path: "M2513 272H2293L2281 604C2331.26 608.626 2347.22 623.314 2357 668H2293V866H2477V900H2595V866H2741V604H2777V564H2807V340H2595V300H2513V272Z",
      name: "2 BHK C",
      id: "2-BHK-C",
    },
    {
      path: "M1729 268H1541V748H1565V678C1606.58 693.129 1619.47 710.085 1633 748H2137V268H1923V300H1841V336H1729V268Z",
      name: "2 BHK B",
      id: "2-BHK-B",
    },
    {
      path: "M393 342H243V616L205 606V628H175V830H243V864H393V906H519V864H571V906H653V864H793V266H591V342H519V300H393V342Z",
      name: "3 BHK A",
      id: "3-BHK-A",
    },
    {
      path: "M1149 266H943V750H1449C1452.96 702.337 1469.95 688.317 1515 676V750H1533V266H1351V334H1239V304H1149V266Z",
      name: "2 BHK A",
      id: "2-BHK-A",
    },
  ];

  const [tooltip, setTooltip] = React.useState<TooltipProps>({
    text: '',
    rect: null,
  });

  const handlePathMouseEnter = (e: MouseEvent, text: string) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setTooltip({
      text: text,
      rect,
    })
  }

  const handlePathMouseLeave = () => {
    setTooltip({ rect: null, text: '' })
  }

  const imageRef = useRef<HTMLImageElement>(null);
  const [imageNaturalAspectRatio, setImageNaturalAspectRatio] = useState<number>(0);
  useEffect(() => {
    if (imageRef.current) {
      setImageNaturalAspectRatio(imageRef.current.naturalWidth / imageRef.current.naturalHeight);
    }
  }, [imageRef.current]);

  return (
    <div className="relative w-full"
      style={{
        maxWidth: `${imageRef.current?.width}px`,
      }}
    >
      <Tooltip {...tooltip} />
      <img
        ref={imageRef}
        className=' z-10 block w-full h-auto'
        src="/Images/Block B-1st floor.png"
        alt="" />

      <svg
        className=' absolute z-20'
        style={{ width: '107.5%', height: 'auto', top: '-4.3%', left: '-3.6%' }}
        viewBox="0 0 3000 1633"
        fill="none">
        {
          paths.map((path, index) => (
            <Link
              key={index}
              href={`/block-b/${floor}/${path.id}`}>
              <path
                d={path.path}
                className={pathClassName}
                onMouseEnter={(e) => handlePathMouseEnter(e, path.name)}
                stroke="black"
                fill='black'
                fillOpacity={0.4}
                strokeWidth="8"
                onMouseLeave={handlePathMouseLeave}
              />
            </Link>
          ))
        }
      </svg>
    </div>
  )
}

export default BlockBRoomSelection;


