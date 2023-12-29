'use client';
import BookingForm from '@/components/specific/BookingForm';
import { useRouter } from 'next/navigation';
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const BookingModal = ({ params: { building, floor, room } }: any) => {
  const router = useRouter();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => router.back()}
        className=' z-0 fixed inset-0 backdrop-brightness-50 backdrop-blur-sm' />
      <AnimatePresence>
        <motion.section
          initial={{ opacity: 0, translateY: '0%', translateX: '-50%' }}
          animate={{ opacity: 1, translateY: '-50%', translateX: '-50%' }}
          exit={{ opacity: 0, translateY: '-100%', translateX: '-50%' }}
          className=' p-4 bg-white rounded-md fixed top-1/2 left-1/2 z-10'>
          <header className=' mb-4'>
            <h2 className='text-2xl font-bold '>Book a room</h2>
            <p className=' text-sm'>
              {building} / {floor} / {room}
            </p>
          </header>

          <BookingForm room_id={"0"} />
        </motion.section >
      </AnimatePresence>
    </>
  )
}

export default BookingModal
