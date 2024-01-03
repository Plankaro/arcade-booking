"use client"
import React from 'react'

import DataTable from '../../../components/(Admin)/BookingTable'

const page = () => {
    return (
        <div className='w-full h-full flex flex-col items-start justify-center'>
            <h1 className='font-semibold text-xl text-[#257FB5] mt-3'>Booking History</h1>

            <div
                className='w-full h-full overflow-hidden'> <DataTable /></div
            >
        </div>
    )
}

export default page
