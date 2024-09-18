// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "../public/thumb1.jpg",
        },
        {
          title: "title",
          path: "../public/thumb2.jpg",
        },
        {
          title: "title",
          path: "../public/thumb3.jpg",
        },
        {
          title: "title",
          path: "../public/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "../public/thumb4.jpg",
        },
        {
          title: "title",
          path: "../public/thumb1.jpg",
        },
        {
          title: "title",
          path: "../public/thumb2.jpg",
        },
        {
          title: "title",
          path: "../public/thumb3.jpg",
        },
      ],
    },
  ],
}

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react"

// import swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper"

// icons
import { BsArrowLeft } from "react-icons/bs"

import Image from "next/image"

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={{ Pagination }}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-50 transition-all duration-1000"></div>
                      {/* title */}
                      <div
                        dir="rtl"
                        className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-500"
                      >
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100 ">نمای</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            پروژه
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowLeft />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default WorkSlider
