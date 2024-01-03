import Sidebar from '@/components/admin/Sidebar'
import { redirect } from 'next/navigation'
import React from 'react'

const layout = ({ children }: {
  children: React.ReactNode
}) => {
  const isAuth = false

  if(isAuth){
    redirect("/auth/login")
  }


  return (
    <div className=' '>
      <Sidebar>

        {children}

      </Sidebar>
    </div>
  )
}

export default layout
