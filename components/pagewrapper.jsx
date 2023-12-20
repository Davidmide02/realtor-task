import { motion, AnimatePresence } from "framer-motion";

const Pagewrapper = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}
        className="wrap"
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
};
export default Pagewrapper;
