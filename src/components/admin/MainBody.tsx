"use client";
import React, { useState } from "react";
import DetailsCard from "./DetailsCard";
import DataTable from "./BookingTable";
import ConfirmModel from "./ConfirmModel";

interface ShowModel {
  isShow: boolean;
  model: string;
}
const MainBody = () => {
  const [showModel, setShowModel] = useState<ShowModel>({
    isShow: false,
    model: "",
  });

  const handelModelClick = (value: any) => {
    setShowModel({
      isShow: true,
      model: value.model,
    });
    // console.log(value);
  };

  const handelModelClose = () => {
    setShowModel({
      isShow: false,
      model: "",
    });
  };
  return (
    <>
      {showModel.isShow && (
        <ConfirmModel
          title={showModel.model}
          buttonLabel={showModel.model}
          onClick={() => { }}
          handelModelClose={handelModelClose}
        />
      )}
      <div className="w-full h-full flex flex-col overflow-hidden">
        <div className="w-full grid grid-cols-3 gap-4 ">
          <DetailsCard title="Total Booking" content="5849" />
          <DetailsCard title="Pending Approval" content="1000" />
          <DetailsCard title="24 Hour Booking" content="2303" />
        </div>
        <div className="w-full h-full overflow-hidden mt-3">
          {" "}
          <DataTable handelModelClick={handelModelClick} />
        </div>
      </div>
    </>
  );
};

export default MainBody;
