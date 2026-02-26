import { motion } from 'framer-motion';

const Question = () => {
  return (
    <motion.h1
      className="text-3xl md:text-5xl font-bold text-primary drop-shadow-sm px-4 max-w-4xl mx-auto leading-tight text-balance"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      ¿Te gustaría que dejáramos de ser dos extraños para convertirnos en un 'nosotros', un paso a la vez?
    </motion.h1>
  );
};

export default Question;
