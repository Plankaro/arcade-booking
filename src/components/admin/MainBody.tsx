"use client";
import React, { useState } from "react";
import DetailsCard from "./DetailsCard";
import BookingTable from "./BookingTable";
import ConfirmModel from "./ConfirmModel";
import {
  useConfirmBookingMutation,
  useGetAllBookingQuery,
  useGetDetailsQuery,
  useLockBookingMutation,
} from "@/store/api/admin";
import { Booking } from "@/types/bookingTypes";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import PropertyTable from "./PropertyTable";

interface ShowModel {
  isShow: boolean;
  model: string;
  modelLable: string;
  value: any;
}

interface MainBodyProps {
  isPropertyTable?: boolean;
  propertyData?: any;
  refetchData?: () => void;
}
const MainBody: React.FC<MainBodyProps> = ({
  isPropertyTable,
  propertyData,
  refetchData,
}) => {
  const [showModel, setShowModel] = useState<ShowModel>({
    isShow: false,
    model: "",
    modelLable: "",
    value: null,
  });
  const [backdropOpen, setBackdropOpen] = React.useState(false);

  const { data: AllBookings, refetch } = useGetAllBookingQuery();

  // console.log(AllBookings)

  const [ConfirmBooking, { isLoading }] = useConfirmBookingMutation();
  const [LockBooking, { isLoading: loading }] = useLockBookingMutation();
  const { data: AllDetails, isLoading: Loading, refetch: DetailsRefetch } = useGetDetailsQuery();

  const handelModelClick = (data: any) => {
    setShowModel({
      isShow: true,
      model: data.model,
      modelLable: data.modelLable,
      value: data.value,
    });
    console.log(data);
  };

  const handelModelClose = () => {
    setShowModel({
      isShow: false,
      model: "",
      modelLable: "",
      value: null,
    });
  };

  const handleModelSubmit = async () => {
    // console.log("clicked")
    setBackdropOpen(true);
    const data = {
      isBooked: showModel.model,
      bookingId: isPropertyTable
        ? showModel?.value?.floorId
        : showModel?.value?.id,
      roomId: isPropertyTable
        ? showModel?.value?.roomId
        : showModel?.value?.rooms?.[0]?.id,
    };
    console.log(data);
    await ConfirmBooking(data)
      .then((res: any) => {
        console.log(res);

        setBackdropOpen(false);
        handelModelClose();
        isPropertyTable ? refetchData?.() : refetch(); DetailsRefetch();
      })
      .catch((err: any) => {
        handelModelClose();
        setBackdropOpen(false);
      });
  };


  // console.log(AllDetails)
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
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {isPropertyTable ? (
        <PropertyTable
          AllBookings={propertyData ? propertyData : []}
          handelModelClick={handelModelClick}
        />
      ) : (
        <div className="w-full h-full flex flex-col overflow-hidden">
          <div className="w-full grid grid-cols-3 gap-4 ">
            <DetailsCard
              title="Total Booking"
              content={AllDetails?.totalBooking}
            />
            <DetailsCard
              title="Pending Approval"
              content={AllDetails?.pendingApproval}
            />
            <DetailsCard
              title="24 Hour Booking"
              content={AllDetails?.dayBooking}
            />
          </div>
          <div className="w-full h-full overflow-hidden mt-3">
            {" "}
            <BookingTable
              handelModelClick={handelModelClick}
              AllBookings={AllBookings ? AllBookings : []}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MainBody;
