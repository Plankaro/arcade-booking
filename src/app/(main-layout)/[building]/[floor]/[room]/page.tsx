import Link from 'next/link'
import React from 'react'

const BookingPage = ({ params: { building, floor, room } }: any) => {
  return (
    <div>
      <Link href={'./'} className='block'>back</Link>
      your selection: {building} / {floor} / {room}
    </div>
  )
}

export default BookingPage;
