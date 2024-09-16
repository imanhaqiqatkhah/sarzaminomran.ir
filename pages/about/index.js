import React, { useState } from "react"

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa"

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si"

//  data
const aboutData = [
  {
    title: "جوایز",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "مدارک",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
  {
    title: "سوابق",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "تخصص",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
]

// components
import Avatar3 from "../../components/Avatar3"
import Circles from "../../components/Circles"

// framer motion
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

//counter
import CountUp from "react-countup"

const About = () => {
  const [index, setIndex] = useState(3)
  console.log(index)

  return (
    <div className="h-full w-full bg-primary/30 py-32 text-center xl:text-right">
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 mt-10 xl:mt-16">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 !text-lg md:!text-3xl"
          >
            شغل مهندسی عمرانی شامل{" "}
            <span className="text-amber-500">
              طراحی، ساخت و نگهداری زیرساخت‌هایی مانند{" "}
            </span>
            پل‌ها، جاده‌ها، ساختمان‌ها و سیستم‌های آب‌رسانی است
          </motion.h2>
          <motion.p
            dir="rtl"
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 my-3 xl:mb-12 px-2 xl:px-0 text-sm md:text-base text-justify"
          >
            این شغل علاوه بر مهارت‌های فنی، نیاز به توانایی‌های مدیریتی، حل
            مسئله و ارتباط مؤثر با تیم‌ها و کارفرماها دارد. با رشد روزافزون
            شهرسازی و نیاز به توسعه زیرساخت‌ها، مهندسی عمران یکی از پرتقاضاترین
            و پراهمیت‌ترین مشاغل در بازار کار است
          </motion.p>
          {/* counters */}

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="md:max-w-xl text-center xl:max-2-none mx-auto xl:mx-0 mb-4 "
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div
                  dir="rtl"
                  className="text-2xl xl:text-4xl font-extrabold text-amber-500 mb-2"
                >
                  <CountUp start={0} end={8} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  لوح تقدیر
                </div>
              </div>
              {/* clients */}
              <div
                dir="rtl"
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 "
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-amber-500 mb-2">
                  <CountUp start={0} end={250} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  رضایت شغلی
                </div>
              </div>
              {/* projects */}
              <div
                dir="rtl"
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 "
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-amber-500 mb-2">
                  <CountUp start={0} end={650} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  پروژه به اتمام رسیده
                </div>
              </div>
              {/* Awards */}
              <div dir="rtl" className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-amber-500 mb-2">
                  <CountUp start={0} end={10} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  سابقه کار
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:x-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:right-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-end ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 "
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0 ">{item.title}</div>
                  <div className="hidden md:flex"></div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4 ">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div
                          key={itemIndex}
                          className="text-2xl transition-all duration-500 text-white"
                        >
                          {icon}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
