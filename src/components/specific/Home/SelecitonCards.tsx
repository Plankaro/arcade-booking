import Button from '@/components/shared/common/Button'
import Link from 'next/link'
import React from 'react'

const SelecitonCards = () => {
  return (
    <div className='relative z-50 flex gap-[6dvh]'>
      <Link href={'block-a'} className='block'>
        <Card
          title='Commercial'
          description='This is a commercial selection. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta incidunt quas obcaecati molestiae, neque quis delectus blanditiis ipsam expedita error.'
          image='/Images/Block  A_1.jpg'
        />
      </Link>
      <Link href={'block-b'} className='block'>
        <Card
          title='Residential'
          description='This is a residential selection. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta incidunt quas obcaecati molestiae, neque quis delectus blanditiis ipsam expedita error.'
          image='/Images/Block B_1.jpg'
        />
      </Link>
    </div>
  )
}

export default SelecitonCards


interface CardProps {
  title: string;
  description: string;
  image?: string;
}

const Card = (props: CardProps) => {
  return (
    <div className=' bg-white p-[2dvh] rounded-md'>
      <div className=' h-[60dvh] w-[40dvh] flex flex-col'>
        <div className=' '>
          <img className=' object-cover rounded-md' src={props.image} alt="" />
        </div>
        <h3 className=' text-[3dvh] font-bold mt-[1dvh]'>{props.title}</h3>
        <p className=' text-[2dvh] font-light'>{props.description}</p>
        <div className=' mt-auto w-full flex flex-col items-stretch'>
          <Button variant='accent'>
            <span>View</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

