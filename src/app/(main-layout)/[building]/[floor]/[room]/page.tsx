import RoomDetails from "@/components/RoomDetails";
import VLine from "@/components/shared/Vline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type RoomsType = {
  id: string;
  image: string;
}[];

const BookingPage = ({ params: { building, floor, room } }: any) => {
  const blockARooms: RoomsType = [
    {
      id: "1-BHK-A",
      image: "/Images/Block-A/Block A-1 BHK (01).png",
    },
    {
      id: "1-BHK-B",
      image: "/Images/Block-A/Block A-1 BHK (02).png",
    },
    {
      id: "1-BHK-C",
      image: "/Images/Block-A/Block A-1 BHK (03).png",
    },
    {
      id: "1-BHK-D",
      image: "/Images/Block-A/Block A-1 BHK (04).png",
    },
    {
      id: "1-BHK-E",
      image: "/Images/Block-A/Block A-1 BHK (05).png",
    },
    {
      id: "1-BHK-F",
      image: "/Images/Block-A/Block A-1 BHK (06).png",
    },
    {
      id: "1-BHK-G",
      image: "/Images/Block-A/Block A-1 BHK (07).png",
    },
    {
      id: "1-BHK-H",
      image: "/Images/Block-A/Block A-1 BHK (08).png",
    },
    {
      id: "2-BHK-A",
      image: "/Images/Block-A/Block A-2 BHK.png",
    },
  ];
  const blockBRooms: RoomsType = [
    {
      id: "3-BHK-B",
      image: "/Images/Block-B/Block B-3 BHK (02).png",
    },
    {
      id: "2-BHK-A",
      image: "/Images/Block-B/Block B-2 BHK (01).png"
    },
    {
      id: "2-BHK-B",
      image: "/Images/Block-B/Block B-2 BHK (02).png",
    },
    {
      id: "2-BHK-C",
      image: "/Images/Block-B/Block B-2 BHK (03).png"
    },
    {
      id: "3-BHK-A",
      image: "/Images/Block-B/Block A-3 BHK (01).png",
    },
  ];

  const roomImage =
    building === "block-a"
      ? blockARooms.find((check: RoomsType[number]) => check.id === room)?.image
      : blockBRooms.find((check: RoomsType[number]) => check.id === room)
        ?.image;

  return (
    <>
      <div className="w-full h-screen grid grid-cols-2 items-center  justify-between px-24 bg-black overflow-hidden">
        <div className=" max-w-screen w-[80vh] max-h-screen h-[80vh]  object-contain">
          <Image
            layout="responsive"
            width={600}
            height={600}
            className=" object-cover h-full"
            src={roomImage ? roomImage : ""}
            alt=""
          />
        </div>

        <RoomDetails />
      </div>
      <div className=" p-[2vh] rounded-md fixed top-[10dvh] right-[10dvh] bg-white">
        <div>
          <h4 className=" capitalize pb-[2vh] text-[2vh] mb-0">
            {building} <VLine /> {floor} <VLine /> {room}
          </h4>
        </div>
        <Link
          href={`/${building}/${floor}/${room}/?booking=true`}
          className=" m-0 p-0 box-border"
        >
          <button className=" bg-accent-gradient px-[4vh] py-[2vh] text-[2vh] rounded-md">
            Book Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default BookingPage;

export const NoDataFound = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">No data found</h1>
        <p className="text-xl">Please select another room</p>
      </div>
    </div>
  );
};
