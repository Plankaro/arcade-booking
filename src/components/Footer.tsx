"use client"
import { FaExternalLinkAlt } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Footer = () => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{
                    transform: "translate(-50%, 100%)",
                    opacity: 0,
                }}
                animate={{
                    transform: "translate(-50%, 0%)",
                    opacity: 1,
                }}
                exit={{
                    transform: "translate(-50%, 100%)",
                    opacity: 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className=" z-10 copyright absolute text-[2vh] bottom-[2vh] left-1/2 -translate-x-1/2 bg-black/80 p-[1vh] rounded-[2vh]"
            >
                <p className="text-white text-center text-[0.7rem]">
                    <strong>&copy;</strong> {new Date().getFullYear()}{" "}
                    <span>Arcade | All rights reserved | Designed and Developed by</span>
                    <a
                        href="https://stackkaroo.com"
                        target="__blank"
                        className=" ml-[1vh] text-white font-bold inline-flex items-baseline"
                    >
                        Stackkaroo
                        <FaExternalLinkAlt className="inline text-white ml-[0.4vh] text-[1.7vh]" />
                    </a>
                </p>
            </motion.div>
        </AnimatePresence>
    );
};

export default Footer;
