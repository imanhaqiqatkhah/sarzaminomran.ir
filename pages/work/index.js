// components
import WorkSlider from "../../components/WorkSlider"
import Bulb from "../../components/Bulb"
import Circles from "../../components/Circles"

//framer-motion
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

const Work = () => {
  return (
    <div className="h-full bg-primary/30 mt-12 flex items-center ">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-6">
          {/* text */}
          <div
            dir="rtl"
            className="text-center flex xl:w-[31vw] flex-col lg:text-right mb-4 xl:mb-0 "
          >
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:!text-[50px] !text-[35px] xl:mt-12 text-amber-500"
            >
              سابقه کاری من
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-2 max-w-[420px] mx-auto lg:mx-0 text-justify text-[14px] xl:text-[17px]"
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
            className="w-full xl:max-w-[60%] max-w-max xl:-order-last"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default Work
