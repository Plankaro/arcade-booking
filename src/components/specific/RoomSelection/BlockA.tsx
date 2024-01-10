"use client";
import Tooltip, { TooltipProps } from "@/components/shared/common/Tooltip";
import { Building, Floor } from "@/store/api/booking/dto/properType";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import Link from "next/link";
import React, { MouseEvent, useState } from "react";
import CustomPath from "./Path";

const BlockARoomSelection = ({
  floor,
  floorData,
}: {
  floor: string;
  floorData: Building[] | undefined;
}) => {
  const [tooltip, setTooltip] = React.useState<TooltipProps>({
    text: "",
    rect: null,
  });

  const [loading, setLoading] = useState(false)

  const handlePathMouseEnter = (e: MouseEvent, text: string) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setTooltip({
      text,
      rect,
    });
  };

  const handlePathMouseLeave = () => {
    setTooltip({
      rect: null,
      text: "",
    });
  };

  const paths = [
    {
      path: "M4017 613L3838 569L3755 879L3574 833L3540 961L3593 976C3576.34 1004.32 3563.85 1016.24 3522 1013L3513 1048L3670 1089L3665 1103L3712 1119L3719 1103L3888 1147L4017 613Z",
      id: "1-BHK-H",
      name: "1 BHK H",
    },
    {
      path: "M3833 568L3463 474L3362 891C3384.86 853.467 3401.25 843.319 3438 848L3427 907L3545 934L3573 831L3751 875L3833 568Z",
      id: "1-BHK-G",
      name: "1 BHK G",
    },
    {
      path: "M3459 473L3082 378L2998 691L3096 717L3066 813L3091 819C3108.9 780.809 3124.54 771.952 3162 778L3157 835L3358 889L3459 473Z",
      id: "1-BHK-F",
      name: "1 BHK F",
    },
    {
      path: "M2793 752L2886 336L2589 255H2432V685H2549L2608 704L2619 685L2702 704V729C2725.95 685.62 2742.71 676.545 2778 685L2761 742L2793 752Z",
      id: "1-BHK-E",
      name: "1 BHK E",
    },
    {
      path: "M2427 681C2425.33 645.667 2422 511.6 2422 258H1816L1823 681H2035V623C2065.14 630.823 2077.69 649.287 2098 689V666H2203V681H2427Z",
      id: "2-BHK-A",
      name: "2 BHK A",
    },
    {
      path: "M1808 256H1419V567H1514V683H1532C1541.35 644.305 1555.6 631.212 1600 626V683H1817L1808 256Z",
      id: "1-BHK-D",
      name: "1 BHK D",
    },
    {
      path: "M1249 255H854L861 687L876 682V623C905.878 631.507 918.838 644.826 936 682V656H1038L1045 687H1258L1249 255Z",
      id: "1-BHK-C",
      name: "1 BHK C",
    },
    {
      path: "M849 255H436V505H565V621H642L648 687H770C774.731 651.51 784.5 636.299 829 627V682L858 687L849 255Z",
      id: "1-BHK-B",
      name: "1 BHK B",
    },
    {
      path: "M639 626H563V505H435V253H238V818H285V803H574V818H624V803H646V756C612.568 758.852 599.906 746.972 588 702H646L639 626Z",
      id: "1-BHK-A",
      name: "1 BHK A",
    },
  ];

  const getBookedAndLockValue = (name: string) => {
    const room = floorData
      ?.flatMap((property) => property.floors.flatMap((floor) => floor.rooms))
      .find((room) => room.name === name);

    return room ? { isBooked: room.isBooked, lock: room.lock } : null;
  };

  return (
    <div className="w-screen flex items-center justify-center sm:max-w-[1120px] 2xl:max-w-[1920px] border">
      <div className="relative w-full">
        {
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        }
        <Tooltip {...tooltip} />
        <img
          className=" z-10 block w-full h-auto"
          src="/Images/Block_ A Service Floor.png"
          alt=""
        />
        <svg
          // className=' absolute w-full h-auto z-20'
          className=" absolute z-20"
          style={{
            width: "104.8%",
            height: "auto",
            top: "-10.5%",
            left: "-1.8%",
          }}
          viewBox="0 0 4267 1452"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          {paths.map((path, index) =>
            getBookedAndLockValue(path?.name)?.isBooked === "confirm" ? (
              // <path
              //   onMouseEnter={(e) => handlePathMouseEnter(e, "sold")}
              //   onMouseLeave={handlePathMouseLeave}
              //   key={index}
              //   className={`cursor-not-allowed `}
              //   d={path.path}
              //   id={path.id}
              //   stroke="black"
              //   fill="red"
              //   strokeWidth="6"
              // />
              <CustomPath
                index={index}
                hoverLable="Booked"
                path={{ path: path.path, id: path.id }} // Provide path data and ID
                handlePathMouseEnter={handlePathMouseEnter}
                handlePathMouseLeave={handlePathMouseLeave}
              />
            ) :
              getBookedAndLockValue(path?.name)?.isBooked === "notConfirmed" ? (

                <CustomPath
                  index={index}
                  hoverLable="Applyed For Booking"
                  path={{ path: path.path, id: path.id }}
                  handlePathMouseEnter={handlePathMouseEnter}
                  handlePathMouseLeave={handlePathMouseLeave}
                />
              ) : getBookedAndLockValue(path?.name)?.lock === "locked" ? (
                <CustomPath
                  index={index}
                  hoverLable="Sold"
                  path={{ path: path.path, id: path.id }} // Provide path data and ID
                  handlePathMouseEnter={handlePathMouseEnter}
                  handlePathMouseLeave={handlePathMouseLeave}
                />
              ) : (
                <Link href={`${floor}/${path.id}`} onClick={()=>setLoading(true)}>
                  <path
                    key={index}
                    onMouseEnter={(e) => handlePathMouseEnter(e, path.name)}
                    onMouseLeave={handlePathMouseLeave}
                    className={`opacity-0 cursor-pointer hover:opacity-70 transition-opacity duration-300`}
                    d={path.path}
                    id={path.id}
                    stroke="black"
                    fill="green"
                    strokeWidth="6"
                  />
                </Link>
              )
          )}
        </svg>
      </div>
    </div>
  );
};

export default BlockARoomSelection;
