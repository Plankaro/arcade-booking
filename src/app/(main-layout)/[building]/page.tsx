import Link from 'next/link'
import React from 'react'

const FloorSelectionPage = ({ params: { building } }: any) => {
  return (
    <div>
      <Link href={'./'} className='block'>back</Link>
      your selection: {building}
      <Link href={`${building}/floor1`} className='block'>floor_1</Link>
      <Link href={`${building}/floor2`} className='block'>floor_2</Link>
      <Link href={`${building}/floor3`} className='block'>floor_3</Link>
      <Link href={`${building}/floor4`} className='block'>floor_4</Link>
      <Link href={`${building}/floor5`} className='block'>floor_5</Link>
      <Link href={`${building}/floor6`} className='block'>floor_6</Link>
      <Link href={`${building}/floor7`} className='block'>floor_7</Link>
    </div>
  )
}

export default FloorSelectionPage
