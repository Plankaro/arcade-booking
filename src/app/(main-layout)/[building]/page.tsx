import BlockAFloorSelection from '@/components/specific/FloorSelection/BlockA'
import BlockBFloorSelection from '@/components/specific/FloorSelection/BlockB'
// import MainBuildingOverlay from '@/components/specific/Home/MainBuildingOverlay'
// import BlockARoomSelection from '@/components/specific/RoomSelection/BlockA'
// import BlockBRoomSelection from '@/components/specific/RoomSelection/BlockB'
import Link from 'next/link'
import React from 'react'

const FloorSelectionPage = ({ params: { building } }: any) => {
  return (
    <div className=' relative overflow-hidden min-h-screen w-screen bg-black flex items-center justify-center'
    >
      {building === 'block-a' && <BlockAFloorSelection />}
      {building === 'block-b' && <BlockBFloorSelection />}
    </div>
  )
}

export default FloorSelectionPage
