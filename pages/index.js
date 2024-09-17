// components
import ParticlesContainer from "../components/ParticlesContainer"
import ProjectsBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"
import Avatar2 from "../components/Avatar2"

// framer motion
import { motion } from "framer-motion"

//variants
import { fadeIn } from "../variants"

const Home = () => {
  return (
    <div dir="rtl" className="bg-primary/80 h-full font-yekan">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 ">
        <div className="text-center flex flex-col justify-center xl:pt-10 xl:text-right h-full container mx-auto pt-12">
          {/* title */}
          <div className="flex justify-center xl:flex-none xl:justify-normal my-7 mt-8">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-accent h1 my-auto"
            >
              سرزمین عمران
            </motion.h1>
            <Avatar2 />
          </div>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-lg mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            هدف ما در سرزمین عمران، ارائه راهکارهای جامع و نوآورانه در زمینه
            نقشه‌برداری و طراحی مهندسی است، ما آماده‌ایم تا با تلاش و تعهد،
            بهترین خدمات را ارائه دهیم، تیم سرزمین عمران به همکاری با شما افتخار
            می‌کند و در مسیر توسعه و پیشرفت پروژه‌های عمرانی شما، همراهی‌تان
            خواهد کرد.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative ">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex "
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute left-0 bottom-0">
        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-left xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particle */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[620px] max-h-[550px] absolute -bottom-32 lg:bottom-0 lg:left-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
