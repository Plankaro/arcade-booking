import { motion } from "framer-motion";
import { FaArrowRotateRight } from "react-icons/fa6";


const AskForLandscape = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className=" fixed inset-0 bg-black/90 ">
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 45 }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="h-[60px] sm:h-[100px] aspect-[9/16] bg-black border border-white rounded-sm flex items-center justify-center text-white text-md md:text-xl"
        >
          <FaArrowRotateRight />
        </motion.div>
        <p className=" text-sm sm:text-md md:text-lg text-white text-center">
          Please rotate your device to 
            <span className="text-primary"> Landscape </span>
           mode
        </p>
      </div>
    </motion.div>
  );
};

export default AskForLandscape;
