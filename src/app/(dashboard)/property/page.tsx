"use client"
import BookingTable from '@/components/admin/BookingTable'
import PropertyTable from '@/components/admin/PropertyTable'
import { useGetAllPropertyQuery } from '@/store/api/admin'
import React from 'react'

const Property = () => {
  const { data } = useGetAllPropertyQuery()
  console.log(data)
  return (
    <div className="w-full h-full flex flex-col items-start justify-center">
      <h1 className="font-semibold text-xl text-[#257FB5] mt-3">
        All Property Details
      </h1>

      <div className="w-full h-full overflow-hidden">
        {" "}
        <BookingTable AllBookings={data ? data : []} isPropertyTable  />
      </div>
    </div>
  )
}

export default Property
