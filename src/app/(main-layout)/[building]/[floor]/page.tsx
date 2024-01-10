"use client"
import BlockARoomSelection from "@/components/specific/RoomSelection/BlockA";
import BlockBRoomSelection from "@/components/specific/RoomSelection/BlockB";
import { useGetAllPropertyDetailsQuery } from "@/store/api/booking";
import React from "react";

const RoomSelectionPage = ({ params: { building, floor } }: any) => {
  // console.log(floor, building)
  const params = {
    type: building,
    floor
  }
  const { data } = useGetAllPropertyDetailsQuery(params)

  // console.log(data)


  return (
    <div className=" max-w-full overflow-hidden relative min-h-screen max-h-screen bg-black flex items-center justify-center ">
      {building === "block-a" && <BlockARoomSelection floor={floor} floorData={data ? data : []} />}
      {building === "block-b" && <BlockBRoomSelection floor={floor} floorData={data ? data : []} />}
    </div>
  );
};

export default RoomSelectionPage;
