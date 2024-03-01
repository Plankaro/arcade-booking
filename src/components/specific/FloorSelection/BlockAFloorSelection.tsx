"use client";
import Tooltip, { TooltipProps } from '@/components/shared/common/Tooltip';
import { Backdrop, CircularProgress } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { MouseEvent, useCallback, useEffect, useState } from 'react'
import "../../../app/style/homestyle.css"

// starts from top floor
const BlockAFloorSelectionSvg = [
  {
    path: "M836.5 270L292.5 307V368.5L836.5 334L1751 357V292.5L836.5 270Z",
    floor: "11th floor",
    id: "floor-10",
  },
  {
    path: "M834 358.5L291 390V444L834 414L1749.5 431.5V382.5L834 358.5Z",
    floor: "10th floor",
    id: "floor-9",
  },
  {
    path: "M836.5 437L292.5 461.5V518.5L836.5 495.5L1749.5 510V454L836.5 437Z",
    floor: "9th floor",
  },
  {
    path: "M835.5 517L296.5 541.5V594L835.5 575.5L1748 585.5V534L835.5 517Z",
    floor: "8th floor",
    id: "floor-7"
  },
  {
    path: "M841 597L291 615.5V670L841 651.5L1746.5 660V605.5L841 597Z",
    floor: "7th floor",
    id: "floor-6"
  },
  {
    path: "M834 678.5L285.5 688.5V740H834H1748V688.5L834 678.5Z",
    floor: "6th floor",
    id: "floor-5"
  },
  {
    path: "M835.5 755.5L288 764V817H835.5H1756.5V764L835.5 755.5Z",
    floor: "5th floor",
    id: "floor-4"
  },
  {
    path: "M718 835.5H292.5V890L836.5 900L1755.5 890V835.5H718Z",
    floor: "4th floor",
    id: "floor-3"
  },
  {
    path: "M714 914H288V967L841 975.5L1755.5 967V914H714Z",
    floor: "3rd floor",
    id: "floor-2"
  },
  {
    path: "M862 1002.5L288 988.5V1045.5L842 1058L1315.5 1045.5H1763.5V988.5H1315.5L862 1002.5Z",
    floor: "2nd floor",
    id: "floor-1"
  },
  {
    path: "M715.5 1079.5L289.5 1064V1118L714 1134.5L1308 1127L1765 1118V1064L1308 1079.5H715.5Z",
    floor: "1st floor",
    id: "floor-0"
  },
]

const BlockAFloorSelection = () => {
  const pathClassName = ' opacity-0 hover:opacity-90  transition-opacity duration-300 cursor-pointer';
  const [tooltip, setTooltip] = React.useState<TooltipProps>({ text: '', rect: null, });
  const [isBackdropShow, setisBackdropShow] = useState<boolean>(false)


  const router = useRouter()

  const onMouseEnter = (e: React.MouseEvent, floor: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({ text: floor, rect, })
  }
  const onMouseLeave = () => {
    setTooltip({
      text: '',
      rect: null,
    });
  }
  const imageRef = React.useRef<HTMLImageElement>(null);
  const [imageNaturalAspectRatio, setImageNaturalAspectRatio] = React.useState<number>(0);
  useEffect(() => {
    if (imageRef.current) {
      setImageNaturalAspectRatio(imageRef.current.naturalWidth / imageRef.current.naturalHeight);
    }
  }, [imageRef.current]);

  // useCallback(() => {
  //   if (typeof window === 'undefined') {
  //     router.refresh()
  //   }
  // }, [window])


  return (
    <div className={`relative w-full room`}
    // style={{
    //   maxWidth: `${window.innerHeight * imageNaturalAspectRatio ?? 1000}px`,
    // }}
    >
      <Tooltip {...tooltip} />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isBackdropShow}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <img
        ref={imageRef}
        className='z-10 block w-full h-auto'
        src="/Images/Block  A_1.jpg"
        alt="" />
      <svg
        className='absolute z-20'
        style={{ width: '104.8%', height: 'auto', top: '-3.7%', left: '-1.8%' }}
        viewBox="0 0 2120 1620"
        fill="none"
      >
        {BlockAFloorSelectionSvg.map(({ path, floor, id }, index) => {
          return (
            <Link href={`block-a/${id}`} key={index} onClick={() => setisBackdropShow(true)}>
              <path
                key={index}
                className={pathClassName}
                onMouseEnter={(e: MouseEvent) => onMouseEnter(e, floor)}
                onMouseLeave={onMouseLeave}
                d={path}
                fill="black"
                fillOpacity="0.5"
                stroke="white"
                strokeWidth="2"
              />
            </Link>
          )
        })}
      </svg>
    </div>
  )
}

export default BlockAFloorSelection












{/* <path
className={pathClassName}
onMouseEnter={(e: MouseEvent) => onMouseEnter(e, 'floor 11')}
onMouseLeave={onMouseLeave}
d="M836.5 270L292.5 307V368.5L836.5 334L1751 357V292.5L836.5 270Z"
fill="black"
fillOpacity="0.5"
stroke="white"
strokeWidth="2"
/>
<path
className={pathClassName}
onMouseEnter={(e: MouseEvent) => onMouseEnter(e, 'floor 10')}
onMouseLeave={onMouseLeave}
d="M834 358.5L291 390V444L834 414L1749.5 431.5V382.5L834 358.5Z"
fill="black"
fillOpacity="0.5"
stroke="white"
strokeWidth="2"
/>
<path
className={pathClassName}
onMouseEnter={(e: MouseEvent) => onMouseEnter(e, 'floor 9')}
onMouseLeave={onMouseLeave}
d="M836.5 437L292.5 461.5V518.5L836.5 495.5L1749.5 510V454L836.5 437Z"
fill="black"
fillOpacity="0.5"
stroke="white"
strokeWidth="2"
/>
<path
className={pathClassName}
onMouseEnter={(e: MouseEvent) => onMouseEnter(e, 'floor 8')}
onMouseLeave={onMouseLeave}
d="M835.5 517L296.5 541.5V594L835.5 575.5L1748 585.5V534L835.5 517Z"
fill="black"
fillOpacity="0.5"
stroke="white"
strokeWidth="2"
/>
<path
className={pathClassName}
onMouseEnter={(e: MouseEvent) => onMouseEnter(e, 'floor 7')}
onMouseLeave={onMouseLeave}
d="M841 597L291 615.5V670L841 651.5L1746.5 660V605.5L841 597Z"
fill="black"
fillOpacity="0.5"
stroke="white"
strokeWidth="2"
/>
<path
className={pathClassName}
onMouseEnter={(e: MouseEvent) => onMouseEnter(e, 'floor 6')}
onMouseLeave={onMouseLeave}
d="M834 678.5L285.5 688.5V740H834H1748V688.5L834 678.5Z" fill="black"
fillOpacity="0.5"

stroke="white"
strokeWidth="2"
/>
<path
className={pathClassName}
onMouseEnter={(e: MouseEvent) => onMouseEnter(e, 'floor 5')}
onMouseLeave={onMouseLeave}
d="M835.5 755.5L288 764V817H835.5H1756.5V764L835.5 755.5Z"
fill="black"
fillOpacity="0.5"
stroke="white"
strokeWidth="2"
/>
<path
className={pathClassName}
onMouseEnter={(e: MouseEvent) => onMouseEnter(e, 'floor 4')}
onMouseLeave={onMouseLeave}
d="M718 835.5H292.5V890L836.5 900L1755.5 890V835.5H718Z" fill="black"
fillOpacity="0.5"

stroke="white"
strokeWidth="2"
/>
<path
className={pathClassName}
onMouseEnter={(e: MouseEvent) => onMouseEnter(e, 'floor 2')}
onMouseLeave={onMouseLeave}
d="M714 914H288V967L841 975.5L1755.5 967V914H714Z" fill="black"
fillOpacity="0.5"
stroke="white"
strokeWidth="2"
/>
<path
className={pathClassName}
onMouseEnter={(e: MouseEvent) => onMouseEnter(e, 'floor 1')}
onMouseLeave={onMouseLeave}
d="M862 1002.5L288 988.5V1045.5L842 1058L1315.5 1045.5H1763.5V988.5H1315.5L862 1002.5Z"
fill="black" fillOpacity="0.5"
stroke="white"
strokeWidth="2"
/>
<path
className={pathClassName}
onMouseEnter={(e: MouseEvent) => onMouseEnter(e, 'floor 0')}
onMouseLeave={onMouseLeave}
d="M715.5 1079.5L289.5 1064V1118L714 1134.5L1308 1127L1765 1118V1064L1308 1079.5H715.5Z"
fill="black" fillOpacity="0.5"
stroke="white"
strokeWidth="2"
/> */}