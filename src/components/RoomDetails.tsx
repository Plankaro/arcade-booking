import React from 'react'
import SharedButton from './shared/Button'

const RoomDetails = () => {
  return (
    <div className='w-full flex flex-col items-center gap-y-7 justify-center p-3 text-white'>
    
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minima quibusdam nesciunt explicabo, quam quas molestiae dolore voluptas fuga doloribus. Quo non tenetur laboriosam veniam error labore culpa optio rerum!
      <div className='flex gap-4 w-full'>
          <SharedButton title='Book Now'/>
          <SharedButton title='VR Tour' />
      </div>
    </div>
  )
}

export default RoomDetails
