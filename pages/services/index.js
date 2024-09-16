// components
import ServiceSlider from "../../components/ServiceSlider"
import Bulb from "../../components/Bulb"
import Circles from "../../components/Circles"

//framer-motion
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center ">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-6 ">
          {/* text */}
          <div
            dir="rtl"
            className="text-center flex xl:w-[30vw] flex-col lg:text-right mb-4 xl:mb-0 "
          >
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8 text-amber-500"
            >
              خدمات من
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-justify"
            >
              مهندسین عمران می‌توانند در شرکت‌های ساختمانی، سازمان‌های دولتی،
              مشاوره‌های مهندسی، و پروژه‌های عمرانی بزرگ مشغول به کار شوند.
              همچنین، امکان فعالیت به عنوان پیمانکار، مدیر پروژه، و یا مشاور در
              این رشته وجود دارد
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[70%] xl:-order-last"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default Services
