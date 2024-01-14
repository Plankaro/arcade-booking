import React from 'react'

const CardHeader = ({ label }: { label: string }) => {
  return (
    <div className='w-full flex flex-col gap-y-4 pt-2 items-center justify-center'>
      <h1 className='font-semibold text-3xl'>{label}</h1>
    </div>
  )
}

export default CardHeader
