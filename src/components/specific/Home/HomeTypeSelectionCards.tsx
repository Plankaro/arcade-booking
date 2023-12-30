"use client";
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import SelecitonCards from './SelecitonCards';


const HomeTypeSelectionCards = () => {
  const router = useRouter();
  const params = useSearchParams();

  if (params.get('typeSelection') !== 'true') return null;
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
          transition={{ duration: 0.5, delay: 0.2 }}
          className=' p-4 rounded-md fixed top-1/2 left-1/2 z-10'>
        <SelecitonCards />
        </motion.section >
      </AnimatePresence>
    </>
  )
}

export default HomeTypeSelectionCards
