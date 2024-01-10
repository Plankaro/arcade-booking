"use client";
import React, { useState } from "react";
import DetailsCard from "./DetailsCard";
import BookingTable from "./BookingTable";
import ConfirmModel from "./ConfirmModel";
import { useConfirmBookingMutation, useGetAllBookingQuery } from "@/store/api/admin";
import { Booking } from "@/types/bookingTypes";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface ShowModel {
  isShow: boolean;
  model: string;
  modelLable: string;
  value: any
}
const MainBody = () => {

  const [showModel, setShowModel] = useState<ShowModel>({
    isShow: false,
    model: "",
    modelLable: "",
    value: null
  });
  const [backdropOpen, setBackdropOpen] = React.useState(false);

  const { data: AllBookings, refetch } = useGetAllBookingQuery()

  // console.log(AllBookings)

  const [ConfirmBooking, { isLoading }] = useConfirmBookingMutation()

  const handelModelClick = (data: any) => {
    setShowModel({
      isShow: true,
      model: data.model,
      modelLable: data.modelLable,
      value: data.value
    });
    // console.log(data);
  };

  const handelModelClose = () => {
    setShowModel({
      isShow: false,
      model: "",
      modelLable: "",
      value: null
    });
  };


  const handleModelSubmit = async () => {
    // console.log("clicked")
    setBackdropOpen(true)
    const data = {
      isBooked: showModel.model,
      bookingId: showModel?.value?.id,
      roomId: showModel?.value?.room?.[0]?.id

    }
    console.log(data)
    await ConfirmBooking(data).then((res: any) => {
      // console.log(res)

      setBackdropOpen(false)
      handelModelClose()
      refetch()
    }).catch((err) => {
      handelModelClose()
      setBackdropOpen(false)
    })
  }


  return (
    <>
      {showModel.isShow && (
        <ConfirmModel
          title={showModel.modelLable}
          buttonLabel={"Confirm"}
          onClick={handleModelSubmit}
          handelModelClose={handelModelClose}
        />
      )}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="w-full h-full flex flex-col overflow-hidden">
        <div className="w-full grid grid-cols-3 gap-4 ">
          <DetailsCard title="Total Booking" content="5849" />
          <DetailsCard title="Pending Approval" content="1000" />
          <DetailsCard title="24 Hour Booking" content="2303" />
        </div>
        <div className="w-full h-full overflow-hidden mt-3">
          {" "}
          <BookingTable handelModelClick={handelModelClick} AllBookings={AllBookings ? AllBookings : []} />
        </div>
      </div>
    </>
  );
};

export default MainBody;
