import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Question from './components/Question';
import YesButton from './components/YesButton';
import NoButton from './components/NoButton';
import CelebrationOverlay from './components/CelebrationOverlay';

function App() {
  const [celebration, setCelebration] = useState(false);
  const [yesScale, setYesScale] = useState(1);

  const handleYesClick = () => {
    setCelebration(true);
  };

  const handleNoInteraction = () => {
    setYesScale((prev) => Math.min(prev + 0.1, 2.5)); // Cap scaling at 2.5x
  };

  const handleReset = () => {
    setCelebration(false);
    setYesScale(1);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-background overflow-hidden p-4">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 text-primary/20 text-6xl animate-pulse">❤️</div>
      <div className="absolute bottom-10 right-10 text-primary/20 text-6xl animate-pulse-slow">❤️</div>
      <div className="absolute top-1/4 right-1/4 text-accent/10 text-4xl animate-bounce">💕</div>
      <div className="absolute bottom-1/4 left-1/4 text-accent/10 text-4xl animate-bounce">💕</div>

      <AnimatePresence>
        {!celebration ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="z-10 flex flex-col items-center gap-8 text-center max-w-4xl w-full"
          >
            <Question />
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full">
              <YesButton onClick={handleYesClick} scale={yesScale} />
              <NoButton onInteraction={handleNoInteraction} />
            </div>
          </motion.div>
        ) : (
          <CelebrationOverlay onReset={handleReset} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
