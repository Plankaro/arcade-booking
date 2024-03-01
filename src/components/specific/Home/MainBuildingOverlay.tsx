"use client";
import Link from 'next/link';
import React, { use, useEffect } from 'react'
import "../../../app/style/homestyle.css"

const MainBuildingOverlay = () => {
  const imageRef = React.useRef<HTMLImageElement>(null);
  const [imageNaturalAspectRatio, setImageNaturalAspectRatio] = React.useState<number>(0);
  useEffect(() => {
    if (imageRef.current) {
      setImageNaturalAspectRatio(imageRef.current.naturalWidth / imageRef.current.naturalHeight);
    }
  }, [imageRef.current]);

  // const largerScreensStyles = {
  //   '@media screen and (max-height: 900px)': {
  //     maxWidth: '1220px',
  //   },
  // }


  return (
    <div className={`relative w-full home`}
      // style={{
      //   ...largerScreensStyles['@media screen and (max-height: 900px)'],
      // }}

    >
      <img
        ref={imageRef}
        src="/Images/hero/ren2-min.jpg"
        alt="Your Image"
        className="z-10 block w-full h-auto object-cover"
      // className="z-10 block w-full h-auto object-right-bottom"
      />
      <svg
        className='absolute'
        viewBox="0 0 4351 2997"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '109%', height: '112%', top: '-5.5%', left: '-4.2%' }}
      >
        <Link href="/?typeSelection=true" >
          <path
            className=' opacity-0 hover:opacity-50 transition-opacity duration-300 w-full h-full cursor-pointer'
            d="M1059.5 542H852V617H817V682H702L712 974.5L519.5 999.5L542 1579.5L619.5 1632L774.5 1599.5L887 1697L1344.5 1827L1697 1894.5L2222 1674.5V724.5H2159.5L2142 672V594.5H1949.5L1652 494.5L1574.5 557L1427 479.5L1059.5 569.5V542Z" fill="black" fillOpacity="0.5" stroke="white" strokeWidth="10" />
        </Link>
      </svg>
    </div>
  )
}


export default MainBuildingOverlay;
