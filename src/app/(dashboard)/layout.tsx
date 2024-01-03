import Sidebar from '@/components/admin/Sidebar'
import React from 'react'

const layout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className=' '>
      <Sidebar>

        {children}

      </Sidebar>
    </div>
  )
}

export default layout
