"use client";
import Tooltip, { TooltipProps } from '@/components/shared/common/Tooltip';
import React, { MouseEvent } from 'react'

const BlockARoomSelection = () => {
  const pathClassName = ' opacity-0 hover:opacity-70  transition-opacity duration-300 cursor-pointer';

  const [tooltip, setTooltip] = React.useState<TooltipProps>({
    x: 0,
    y: 0,
    text: '',
    visible: false,
  });

  const handlePathMouseEnter = (e: MouseEvent, text: string) => {
    const { top, left, height, width } = e.currentTarget.getBoundingClientRect();
    
    setTooltip({
      x: left + width / 2 ,
      y: top + 130,
      text: text,
      visible: true
    })
  }

  const handlePathMouseLeave = () => {
    setTooltip({
      x: -100,
      y: -100,
      text: '',
      visible: false
    })
  }

  return (
    <div className="relative w-full">
      <Tooltip {...tooltip} />
      <img className=' z-10 block w-full h-auto' src="/Images/Block_ A Service Floor.png"
        alt="" />
      <svg
        className=' absolute z-20'
        style={{ width: '104.8%', height: 'auto', top: '-10.5%', left: '-1.8%' }}
        viewBox="0 0 4267 1452" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          className={pathClassName}
          d="M4017 613L3838 569L3755 879L3574 833L3540 961L3593 976C3576.34 1004.32 3563.85 1016.24 3522 1013L3513 1048L3670 1089L3665 1103L3712 1119L3719 1103L3888 1147L4017 613Z" fill="black" fill-opacity="0.5"
          stroke="black"
          stroke-width="8"
          onMouseEnter={(e) => handlePathMouseEnter(e, "room")}
          onMouseLeave={handlePathMouseLeave}
        />
        <path
          className={pathClassName}
          d="M3833 568L3463 474L3362 891C3384.86 853.467 3401.25 843.319 3438 848L3427 907L3545 934L3573 831L3751 875L3833 568Z" fill="black" fill-opacity="0.5"
          stroke="black"
          stroke-width="8"
          onMouseEnter={(e) => handlePathMouseEnter(e, "room")}
          onMouseLeave={handlePathMouseLeave}
        />
        <path
          className={pathClassName}
          d="M3459 473L3082 378L2998 691L3096 717L3066 813L3091 819C3108.9 780.809 3124.54 771.952 3162 778L3157 835L3358 889L3459 473Z" fill="black" fill-opacity="0.5"
          stroke="black"
          stroke-width="8"
          onMouseEnter={(e) => handlePathMouseEnter(e, "room")}
          onMouseLeave={handlePathMouseLeave}
        />
        <path
          className={pathClassName}
          d="M2793 752L2886 336L2589 255H2432V685H2549L2608 704L2619 685L2702 704V729C2725.95 685.62 2742.71 676.545 2778 685L2761 742L2793 752Z" fill="black" fill-opacity="0.5"
          stroke="black"
          stroke-width="8"
          onMouseEnter={(e) => handlePathMouseEnter(e, "room")}
          onMouseLeave={handlePathMouseLeave}
        />
        <path
          className={pathClassName}
          d="M2427 681C2425.33 645.667 2422 511.6 2422 258H1816L1823 681H2035V623C2065.14 630.823 2077.69 649.287 2098 689V666H2203V681H2427Z" fill="black" fill-opacity="0.5"
          stroke="black"
          stroke-width="8"
          onMouseEnter={(e) => handlePathMouseEnter(e, "room")}
          onMouseLeave={handlePathMouseLeave}
        />
        <path
          className={pathClassName}
          d="M1808 256H1419V567H1514V683H1532C1541.35 644.305 1555.6 631.212 1600 626V683H1817L1808 256Z" fill="black" fill-opacity="0.5"
          stroke="black"
          stroke-width="8"
          onMouseEnter={(e) => handlePathMouseEnter(e, "room")}
          onMouseLeave={handlePathMouseLeave}
        />
        <path
          className={pathClassName}
          d="M1249 255H854L861 687L876 682V623C905.878 631.507 918.838 644.826 936 682V656H1038L1045 687H1258L1249 255Z" fill="black" fill-opacity="0.5"
          stroke="black"
          stroke-width="8"
          onMouseEnter={(e) => handlePathMouseEnter(e, "room")}
          onMouseLeave={handlePathMouseLeave}
        />
        <path
          className={pathClassName}
          d="M849 255H436V505H565V621H642L648 687H770C774.731 651.51 784.5 636.299 829 627V682L858 687L849 255Z" fill="black" fill-opacity="0.5"
          stroke="black"
          stroke-width="8"
          onMouseEnter={(e) => handlePathMouseEnter(e, "room")}
          onMouseLeave={handlePathMouseLeave}
        />
        <path
          className={pathClassName}
          d="M639 626H563V505H435V253H238V818H285V803H574V818H624V803H646V756C612.568 758.852 599.906 746.972 588 702H646L639 626Z" fill="black" fill-opacity="0.5"
          stroke="black"
          stroke-width="8"
          onMouseEnter={(e) => handlePathMouseEnter(e, "room")}
          onMouseLeave={handlePathMouseLeave}
        />
      </svg>
    </div>
  )
}

export default BlockARoomSelection;

