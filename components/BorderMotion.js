import { motion } from 'framer-motion'

const BorderMotion = () => (
  <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ stiffness: 50, duration: 0.9 }}
    >
      <div className="mt-4 border-b border-black md:border-b-2"></div>
  </motion.div>
)

export default BorderMotion
