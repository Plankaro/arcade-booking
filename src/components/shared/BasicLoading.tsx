// import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";

const BasicLoading = () => {
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      exit={{
        scale: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className='bg-white/40 h-[10rem] w-[10rem] rounded-full flex items-center justify-center absolute overflow-hidden'>
      <Image
        src={"/logo-new.png"}
        alt="logo"
        className="z-40 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-3/5 rounded-full"
        width={100}
        height={100}
      />
      <svg className="loading-spinner absolute top-0 left-0 w-full h-full">
        <circle cx="50%" cy="50%" r="48%" />
      </svg>
    </motion.div>
  )
}

export default BasicLoading
