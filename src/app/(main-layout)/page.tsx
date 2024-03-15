'use client';
import HomeTypeSelectionCards from '@/components/specific/Home/HomeTypeSelectionCards'
import MainBuildingOverlay from '@/components/specific/Home/MainBuildingOverlay'
import { useSearchParams } from 'next/navigation';
import React from 'react'

const HomePage = () => {
  const params = useSearchParams();
  const [typeSelection, setTypeSelection] = React.useState(params.get('typeSelection') === 'true');
  return (
    <div className=' relative overflow-hidden h-screen w-screen bg-black flex items-center justify-center'>
      <MainBuildingOverlay
        typeSelection={typeSelection}
        setTypeSelection={setTypeSelection}
      />
      <HomeTypeSelectionCards
        typeSelection={typeSelection}
        setTypeSelection={setTypeSelection}
      />
    </div>
  )
}

export default HomePage
