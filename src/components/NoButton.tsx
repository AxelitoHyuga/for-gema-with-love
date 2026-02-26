import { useState } from 'react';
import { motion } from 'framer-motion';

interface NoButtonProps {
  onInteraction: () => void;
}

const texts = [
  "No",
  "¿Estás segura?",
  "¿Piénsalo bien?",
  "¿En serio?",
  "¡No me hagas esto!",
  "¡Mira el otro botón!",
  "💔",
  "😢",
  "No seas así..."
];

const NoButton = ({ onInteraction }: NoButtonProps) => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [textIndex, setTextIndex] = useState(0);
  const [scale, setScale] = useState(1);

  const handleInteraction = () => {
    // Calculate random position within viewport
    // Ensure it doesn't go off screen (padding of 50px)
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;
    
    // Ensure we don't get negative values if screen is small
    const safeMaxX = Math.max(maxX, 50);
    const safeMaxY = Math.max(maxY, 50);

    const randomX = Math.random() * (safeMaxX - 50) + 25;
    const randomY = Math.random() * (safeMaxY - 50) + 25;

    setPosition({ x: randomX, y: randomY });
    
    // Change text randomly
    setTextIndex((prev) => (prev + 1) % texts.length);
    
    // Shrink
    setScale((prev) => Math.max(prev * 0.85, 0.5)); // Don't get too small

    onInteraction();
  };

  return (
    <motion.button
      className="bg-secondary hover:bg-red-200 text-accent font-bold py-3 px-8 rounded-full shadow-md transition-colors duration-300 text-xl z-30 whitespace-nowrap"
      onClick={handleInteraction}
      onMouseEnter={handleInteraction}
      style={{
        position: position ? 'fixed' : 'static',
        left: position ? position.x : 'auto',
        top: position ? position.y : 'auto',
      }}
      animate={{ scale: scale }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {texts[textIndex]}
    </motion.button>
  );
};

export default NoButton;