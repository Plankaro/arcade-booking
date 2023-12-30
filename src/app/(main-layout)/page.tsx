import HomeTypeSelectionCards from '@/components/specific/Home/HomeTypeSelectionCards'
import MainBuildingOverlay from '@/components/specific/Home/MainBuildingOverlay'
import BlockASelection from '@/components/specific/RoomSelection/BlockA'
import React from 'react'

const HomePage = () => {
  return (
    <div className=' relative overflow-hidden h-screen w-screen bg-black flex items-center md:pt-20 pt-0'
    >
      <MainBuildingOverlay />
      {/* <BlockASelection /> */}
      <HomeTypeSelectionCards />
    </div>
  )
}

export default HomePage
