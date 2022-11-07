import { motion } from 'framer-motion'

const BorderMotion = () => (
  <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ stiffness: 50, duration: 0.9 }}
    >
      <div className="mt-1 border-b border-black md:border-b-2 md:mt-4"></div>
  </motion.div>
)

export default BorderMotion
