import Link from 'next/link'
import React from 'react'

const RoomSelectionPage = ({ params: { building, floor } }: any) => {
  return (
    <div>
      <Link href={'./'} className='block'>back</Link>
      your selection: {building} / {floor}
      <Link href={`${floor}/room1`} className='block'>room1</Link>
      <Link href={`${floor}/room2`} className='block'>room2</Link>
      <Link href={`${floor}/room3`} className='block'>room3</Link>
      <Link href={`${floor}/room4`} className='block'>room4</Link>
      <Link href={`${floor}/room5`} className='block'>room5</Link>
      <Link href={`${floor}/room6`} className='block'>room6</Link>
      <Link href={`${floor}/room7`} className='block'>room7</Link>
    </div>
  )
}

export default RoomSelectionPage
