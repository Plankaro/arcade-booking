"use client"
import React from "react";

import BookingTable from "../../../components/admin/BookingTable";
import { useGetAllBookingHistoryQuery } from "@/store/api/admin";

const History = () => {

    const { data,refetch } = useGetAllBookingHistoryQuery()
    // console.log({data})
    return (
        <div className="w-full h-full flex flex-col items-start justify-center">
            <h1 className="font-semibold text-xl text-[#257FB5] mt-3">
                Booking History
            </h1>

            <div className="w-full h-full overflow-hidden">
                {" "}
                <BookingTable AllBookings={data ? data : []} historyRefetch={refetch} />
            </div>
        </div>
    );
};

export default History;

