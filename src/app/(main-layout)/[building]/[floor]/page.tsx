import BlockARoomSelection from '@/components/specific/RoomSelection/BlockA'
import BlockBRoomSelection from '@/components/specific/RoomSelection/BlockB'
import React from 'react'

const RoomSelectionPage = ({ params: { building, floor } }: any) => {
  return (
    <div className=' max-w-full overflow-hidden relative min-h-screen max-h-screen bg-black flex items-center justify-center' >
      {building === 'block-a' && <BlockARoomSelection floor={floor} />}
      {building === 'block-b' && <BlockBRoomSelection floor={floor} />}
    </div>
  )
}

export default RoomSelectionPage
