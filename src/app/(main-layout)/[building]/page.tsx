import BlockAFloorSelection from '@/components/specific/FloorSelection/BlockA'
import BlockBFloorSelection from '@/components/specific/FloorSelection/BlockB'
// import MainBuildingOverlay from '@/components/specific/Home/MainBuildingOverlay'
// import BlockARoomSelection from '@/components/specific/RoomSelection/BlockA'
// import BlockBRoomSelection from '@/components/specific/RoomSelection/BlockB'
import Link from 'next/link'
import React from 'react'
import dynamic from 'next/dynamic'
// const BlockAFloorSelection = dynamic(() => import('@/components/specific/FloorSelection/BlockA'), { ssr: false })
// const BlockBFloorSelection = dynamic(() => import('@/components/specific/FloorSelection/BlockB'), { ssr: false })

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
