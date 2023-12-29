import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      hello world

      <Link href={'arcade_commercial'} className='block'>arcade_commercial</Link>
      <Link href={'arcade_residential'} className='block'>arcade_residential</Link>
    </div>
  )
}

export default HomePage
