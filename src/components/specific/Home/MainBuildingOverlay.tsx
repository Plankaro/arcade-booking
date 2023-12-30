"use client";
import Link from 'next/link';
import React from 'react'

const MainBuildingOverlay = () => {
  const imageRef = React.useRef<HTMLImageElement>(null);
  return (
    <div className={`relative w-full`}
      style={{
        maxWidth: `${imageRef.current?.width}px`,
      }}
    >
      <img
        ref={imageRef}
        src="/Images/hero/Hero-small.jpg"
        alt="Your Image"
        className="z-10 block w-full h-auto"
      />
      <svg
        className='absolute'
        viewBox="0 0 4351 2997"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '120%', height: '115%', top: '-7%', left: '-10%' }}
      >
        <Link href="/?typeSelection=true" >
          <path
            className=' opacity-0 hover:opacity-50 transition-opacity duration-300 w-full h-full'
            d="M1059.5 542H852V617H817V682H702L712 974.5L519.5 999.5L542 1579.5L619.5 1632L774.5 1599.5L887 1697L1344.5 1827L1697 1894.5L2222 1674.5V724.5H2159.5L2142 672V594.5H1949.5L1652 494.5L1574.5 557L1427 479.5L1059.5 569.5V542Z" fill="black" fillOpacity="0.5" stroke="white" stroke-width="10" />
        </Link>
      </svg>
    </div>
  )
}


export default MainBuildingOverlay;
{/* <svg
          className='absolute top-[25%] left-[-3%] w-[32%] h-[30%]'
          viewBox="317.5178859212668 16.91257950384904 237.76692952810103 450.0588308924771"
        >
          <polygon className=' opacity-0 hover:opacity-50 transition-opacity duration-300 w-full h-full' points="319.2162211321818,18.61091471476405 317.5178859212668,466.9714103963261 317.5178859212668,466.9714103963261 341.2945788740769,465.27307518541113 341.2945788740769,449.98805828717605 512.8264351764926,449.98805828717605 516.2231055983227,460.1780695526661 543.3964689729628,461.8764047635811 548.4914746057079,448.28972307626105 555.2848154493678,446.591387865346 555.2848154493678,353.1829512650205 483.9547365909375,354.88128647593567 483.9547365909375,309.0262357812303 500.93808870008763,305.6295653594004 497.5414182782576,215.61779918090497 427.9096746307423,219.01446960273498 429.60800984165735,16.91257950384904 320.9145563430967,20.307237428287234 "
          ></polygon>
        </svg> */}