import BackButton from '@/components/shared/BackButton'
import RotateToLandscapeNotifier from '@/components/specific/Home/RotateToLandscapeNotifier'
import React from 'react'

const layout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className=' min-h-screen'>
      {children}
      <RotateToLandscapeNotifier />
      <BackButton />
    </div>
  )
}

export default layout
