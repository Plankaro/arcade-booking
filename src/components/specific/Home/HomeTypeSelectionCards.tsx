"use client";
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import SelecitonCards from './SelecitonCards';

interface HomeTypeSelectionCardsProps {
  typeSelection: boolean;
  setTypeSelection: React.Dispatch<React.SetStateAction<boolean>>;
};


const HomeTypeSelectionCards = (props: HomeTypeSelectionCardsProps) => {
  const router = useRouter();
  if (!props?.typeSelection) return null;
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: props?.typeSelection ? 1 : 0 }}
        exit={{ opacity: 0 }}
        onClick={() => { router.back(); props?.setTypeSelection(false); }}
        className=' z-0 fixed inset-0 backdrop-brightness-50 backdrop-blur-sm' />
      <AnimatePresence>
        <motion.section
          initial={{ opacity: 0, translateY: '0%', translateX: '-50%' }}
          animate={{ opacity: props?.typeSelection ? 1 : 0, translateY: props?.typeSelection ? '-50%' : '0%', translateX: '-50%' }}
          exit={{ opacity: 0, translateY: '-100%', translateX: '-50%' }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className=' p-4 rounded-md fixed top-1/2 left-1/2 z-10'>
          <SelecitonCards />
        </motion.section >
      </AnimatePresence>
    </>
  )
}

export default HomeTypeSelectionCards
