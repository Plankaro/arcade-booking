"use client"
import React from 'react'
import DetailsCard from './DetailsCard'
import DataTable from './BookingTable'

const MainBody = () => {
  return (
    <div className='w-full h-full flex flex-col overflow-hidden'>
      <div className='w-full grid grid-cols-3 gap-4 '>
        <DetailsCard title='Total Booking' content='5849' />
        <DetailsCard title='Pending Approval' content='1000' />
        <DetailsCard title='24 Hour Booking' content='2303' />
      </div>
      <div className='w-full h-full overflow-hidden mt-3'> <DataTable /></div >
    </div>
  )
}

export default MainBody
