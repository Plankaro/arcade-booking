import { AnimatePresence, motion } from 'framer-motion';

export interface TooltipProps {
  rect: DOMRect | null;
  text: string;
  side?: 'top' | 'bottom';
}

// const Tooltip = ({ x, y, text, visible, side = 'bottom' }: TooltipProps) => {
const Tooltip = ({ rect, text, side = 'bottom' }: TooltipProps) => {
  const triangleSize = 8; // Adjust the triangle size as needed
  let tooltipStyles = {};
  if (!rect) return null;
  const { x, y, width, height } = rect;
  switch (side) {
    case 'top':
      tooltipStyles = {
        position: 'fixed',
        left: `${x + width / 2}px`,
        top: `${y - 80}px`,
        transform: 'translateX(-50%)',
        zIndex: 9999,
      };
      break;
    case 'bottom':
      tooltipStyles = {
        position: 'fixed',
        left: `${x + width / 2}px`,
        top: `${y + height + 10}px`,
        transform: 'translateX(-50%)',
        zIndex: 9999,
      };
      break;
    default:
      tooltipStyles = {
        position: 'fixed',
        left: '50%',
        top: `${y + triangleSize}px`,
        transform: 'translateX(-50%)',
        zIndex: 9999,
      };
      break;
  }

  return (
    <AnimatePresence>
      {text && (
        <motion.div
          key={text}
          initial={{
            opacity: 0,
            translateY: side == 'bottom' ? 10 : side == 'top' ? -10 : 0,
            translateX: '-50%',
          }}
          animate={{
            opacity: 1,
            translateY: 0,
            translateX: '-50%',
          }}
          className='fixed bg-primary text-black font-medium text-[2vh] capitalize text-center rounded-md border-4 border-primary'
          style={tooltipStyles}
        >
          <span className='block py-[1vh] px-[2vh]' style={{ width: 'fit-content' }}>
            {text}
          </span>
          <div
            className={`border-transparent border-[${side}]-primary`}
            style={{
              position: 'absolute',
              top: side === 'bottom' ? `-${2.3}vh` : 'auto',
              bottom: side === 'top' ? `-${2.3}vh` : 'auto',
              left: '50%',
              width: 0,
              height: 0,
              transform: 'translateX(-50%)',
              border: `${triangleSize}px solid transparent`,
              borderTopColor: side === 'top' ? '#FF9209' : 'transparent',
              borderBottomColor: side === 'bottom' ? '#FF9209' : 'transparent',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Tooltip;