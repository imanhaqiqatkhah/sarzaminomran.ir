// components
import Circles from "../../components/Circles"

// icons
import { BsArrowLeft } from "react-icons/bs"

// framer
import { motion } from "framer-motion"

// variants
import { fadeIn } from "../../variants"

const Contact = () => {
  return (
    <div dir="rtl" className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-right flex items-center justify-center h-full mt-5   ">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center my-9"
          >
            راه <span className="text-amber-500">ارتباطی</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full ">
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="input"
              />
              <input type="email" placeholder="ایمیل" className="input" />
            </div>
            <input type="text" placeholder="موضوع" className="input" />
            <textarea placeholder="پیام" className="textarea"></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-amber-800 group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                ثبت درخواست
              </span>
              <BsArrowLeft className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact
