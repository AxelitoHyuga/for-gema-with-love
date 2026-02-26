import { motion } from 'framer-motion';

interface YesButtonProps {
  onClick: () => void;
  scale: number;
}

const YesButton = ({ onClick, scale }: YesButtonProps) => {
  return (
    <motion.button
      className="bg-primary hover:bg-accent text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 text-xl z-20"
      onClick={onClick}
      style={{ scale }}
      whileHover={{ scale: scale * 1.05 }}
      whileTap={{ scale: scale * 0.95 }}
    >
      Sí
    </motion.button>
  );
};

export default YesButton;