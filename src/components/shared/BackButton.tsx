"use client";
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const BackButton = () => {
  const route = usePathname();
  const router = useRouter();

  if (route === '/') return null;
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => router.back()}
      className=" z-50 p-2  bg-[#F2F2F2] rounded-full flex justify-center items-center cursor-pointer"
    >
      <FaChevronLeft className="text-[#5F5F5F] text-[4dvh]" />
    </motion.button>
  )
}

export default BackButton;
