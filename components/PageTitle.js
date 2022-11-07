import { motion } from "framer-motion"

const PageTitle = ({title, borderColour}) => {
    return (
        <div className={`text-4xl md:text-5xl mx-auto text-center w-3/5 md:w-1/4 uppercase pb-3 xxl:text-7xl xxl:pb-6`}>
            {title}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ stiffness: 50, duration: 0.9 }}
                >
                <div className={`mt-4 border-b ${borderColour} md:border-b-2`}></div>
            </motion.div>
        </div>
    )
}
export default PageTitle