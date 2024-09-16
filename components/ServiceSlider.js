// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx"

// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: "تحلیل و ارزیابی",
    description:
      "بررسی شرایط زمین، محیط و مصالح برای ارائه بهترین راه‌حل‌های فنی و اقتصادی",
  },
  {
    icon: <RxPencil2 />,
    title: "نظارت بر ساخت و اجرا",
    description:
      "نترل کیفیت و نظارت بر عملیات ساخت‌وساز، اطمینان از رعایت استانداردها و مقررات ایمنی",
  },
  {
    icon: <RxDesktop />,
    title: "طراحی و برنامه‌ریزی",
    description:
      "طراحی نقشه‌های فنی برای پروژه‌ها با استفاده از نرم‌افزارهای تخصصی مانند AutoCAD و Revit",
  },
  {
    icon: <RxReader />,
    title: "مدیریت پروژه",
    description:
      "برنامه‌ریزی، زمان‌بندی و مدیریت منابع برای اجرای صحیح و به‌موقع پروژه‌ها",
  },
  {
    icon: <RxRocket />,
    title: "نگهداری و تعمیرات",
    description:
      "مهندسین عمران بر حفظ و نگهداری زیرساخت‌ها نظارت دارند و برنامه‌های بهبود ارائه می‌دهند",
  },
]

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react"

// import swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

// import required modules
import { FreeMode, Pagination } from "swiper"

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={{ FreeMode, Pagination }}
      className="h-[200px] sm:h-[365px] xl:mt-10"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              dir="rtl"
              className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-4 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
            >
              {/* icon */}
              <div className="text-4xl text-amber-500 mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8 text-justify">
                <div className="mb-2 text-lg ">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-amber-500 transition-all duration-300 " />
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default ServiceSlider
