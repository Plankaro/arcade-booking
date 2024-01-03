import Footer from '@/components/Footer'
import Header from '@/components/Header'
import BackButton from '@/components/shared/BackButton'
import RotateToLandscapeNotifier from '@/components/specific/Home/RotateToLandscapeNotifier'
import React from 'react'

const layout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className=' '>
      <div className="h-screen relative overflow-hidden">
        <Header />
        {children}
        <Footer />
      </div>
      <BackButton />
    </div>
  )
}

export default layout
