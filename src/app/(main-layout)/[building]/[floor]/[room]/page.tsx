"use client"
import RoomDetails from "@/components/RoomDetails";
import BasicLoading from "@/components/shared/BasicLoading";
import VLine from "@/components/shared/Vline";
import BookingForm from "@/components/specific/BookingForm";
import { useGetAllPropertyDetailsQuery } from "@/store/api/booking";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type RoomsType = {
  id: string;
  image: string;
}[];

const BookingPage = ({ params: { building, floor, room } }: any) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  console.log(building, floor, room)

  const params = {
    type: building,
    floor,
    room
  }
  const { data } = useGetAllPropertyDetailsQuery(params)
  console.log("ac->", data)

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
    <div className="w-full flex items-center justify-center bg-black">
      <div className="w-full h-screen flex flex-wrap items-center  justify-center p-9 overflow-hidden overflow-y-scroll">
        <div className="relative w-[40rem] h-[40rem] flex items-center justify-center">
          {!imageLoaded && <BasicLoading />}
          <Image
            width={500}
            height={400}
            className=" object-cover h-full"
            src={roomImage ? roomImage : ""}
            alt=""
            style={{ opacity: imageLoaded ? 1 : 0 }}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="w-[40rem] h-[30rem] flex items-center">

          <RoomDetails building={building} data={data} floor={floor} room={room} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;

export function NoDataFound() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">No data found</h1>
        <p className="text-xl">Please select another room</p>
      </div>
    </div>
  );
}
