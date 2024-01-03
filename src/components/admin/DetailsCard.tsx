import React from 'react'

interface DetailsCardProps{
    title: string
    content:string
}

const DetailsCard:React.FC<DetailsCardProps> = ({
    title,
    content
}) => {
  return (
    <div className='max-w-[30rem] shadow-md w-full border-2 border-[#69CCCD] rounded-md flex flex-col gap-2 items-center justify-center p-3'>
      <h2 className='text-[#69CCCD] font-semibold rounded-md  '>{title}</h2>
      <h2 className='font-semibold text-[#257FB5]'>{content}</h2>
    </div>
  )
}

export default DetailsCard
