import HomeTypeSelectionCards from '@/components/specific/Home/HomeTypeSelectionCards'
import MainBuildingOverlay from '@/components/specific/Home/MainBuildingOverlay'
import React from 'react'

const HomePage = () => {
  return (
    <div className=' relative overflow-hidden h-screen w-screen bg-black flex items-center justify-center'
    >
      <MainBuildingOverlay />
      <HomeTypeSelectionCards />
    </div>
  )
}

export default HomePage
