import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from 'framer-motion';

interface ButtonProps {
  onClick?: () => void;
  variant?: 'accent' | 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
}

const Button = ({ onClick, type = "button", variant = 'primary', disabled = false, isLoading, children }: ButtonProps) => {
  let buttonClasses = 'px-[1.4dvh] py-[1dvh] rounded-[1.2dvh] focus:outline-none flex items-center justify-center gap-[1dvh] text-[2.4dvh]';

  // Apply different styles based on the variant prop
  switch (variant) {
    case 'accent':
      buttonClasses += ' bg-accent-gradient text-white hover:bg-accent-dark disabled:bg-black';
      break;
    case 'primary':
      buttonClasses += ' bg-primary text-white hover:bg-primary-dark';
      break;
    case 'secondary':
      buttonClasses += ' bg-secondary text-white hover:bg-secondary-dark';
      break;
    case 'danger':
      buttonClasses += ' bg-danger text-white hover:bg-danger-dark';
      break;
    default:
      buttonClasses += ' bg-default text-white hover:bg-default-dark';
      break;
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${buttonClasses} ${disabled || isLoading && ' pointer-events-none opacity-50 cursor-not-allowed '} select-none`}
      type={type}
    >
      {isLoading ? (
        <motion.span
          className='text-[1.4dvh]'
          initial={{ rotate: 0 }} 
          animate={{ rotate: 360 }} 
          transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }} 
        >
          <AiOutlineLoading3Quarters />
        </motion.span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
