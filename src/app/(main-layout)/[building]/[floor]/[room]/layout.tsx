'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const RoomLayout = ({ children, booking }: {
  children: React.ReactNode,
  booking: React.ReactNode,
}) => {

  const isBooking = useSearchParams().has('booking');

  return (
    <>
      {children}
      {isBooking && booking}
    </>
  )
}

export default RoomLayout
