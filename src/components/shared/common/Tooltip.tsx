import { AnimatePresence, motion } from 'framer-motion';

export interface TooltipProps {
  x: number;
  y: number;
  text: string;
  visible?: boolean;
  side?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip = ({ x, y, text, visible, side = 'bottom' }: TooltipProps) => {
  const triangleSize = 8; // Adjust the triangle size as needed
  let tooltipStyles = {};

  switch (side) {
    case 'top':
      tooltipStyles = {
        position: 'absolute',
        left: '50%',
        top: `${y + triangleSize}px`,
        transform: 'translateX(-50%)',
        zIndex: 9999,
      };
      break;
    case 'bottom':
      tooltipStyles = {
        position: 'absolute',
        left: '50%',
        top: `${y + triangleSize}px`,
        transform: 'translateX(-50%)',
        zIndex: 9999,
      };
      break;
    default:
      tooltipStyles = {
        position: 'absolute',
        left: '50%',
        top: `${y + triangleSize}px`,
        transform: 'translateX(-50%)',
        zIndex: 9999,
      };
      break;
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className='fixed bg-primary text-black font-medium text-[2vh] capitalize text-center rounded-md border-4 border-primary'
          style={tooltipStyles}
        >
           <span className='block py-2 px-4' style={{ width: 'fit-content' }}>
              {text}
            </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Tooltip;