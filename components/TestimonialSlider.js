// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "احسان حقیقت خواه",
    position: "استاد",
    message:
      "معماری و نقشه‌برداری، هنر پیوند زدن ایده‌های خلاقانه به واقعیت‌های ملموس است. تیم‌های ما با دقت و هم‌افزایی، زیرساخت‌های فردا را با الهام از نیازهای امروز خلق می‌کنند.",
  },
  {
    image: "/t-avt-2.png",
    name: "نریمان حقیقت خواه",
    position: "همکار",
    message:
      "کار تیمی در معماری و نقشه‌برداری، ترکیب علم، هنر و فناوری است؛ جایی که هر کدام از ما با تخصص‌های خود، نقشی کلیدی در ساختن دنیای بهتر ایفا می‌کنیم.",
  },
  {
    image: "/t-avt-3.png",
    name: "محسن حقیقت خواه",
    position: "داداش",
    message:
      "در معماری و نقشه‌برداری، هر خط و هر نقطه نشان از آینده‌ای دارد که در ذهن طراحان متولد می‌شود. تیم ما با همکاری و دقت، آنچه را که در تخیل است به دنیای واقعی می‌آورد.",
  },
]

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react"

// import swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// import required modules
import { Navigation, Pagination } from "swiper"

// icons
import { FaQuoteLeft } from "react-icons/fa"

import Image from "next/image"

// components

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={{ Navigation, Pagination }}
      className="h-[362px] sm:h-[480px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide dir="rtl" key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar,name,position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 ">
                <div className="flex flex-col justify-center text-center ">
                  {/* avatar */}
                  <div className="mb-2 mx-auto ">
                    <Image src={person.image} alt="" width={100} height={100} />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest ">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className="text-justify flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:px-20 ">
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg md:text-right text-center">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default TestimonialSlider
