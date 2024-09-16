// next image
import Image from "next/image"

const Bulb = () => {
  return (
    <div className="absolute xl:-left-28 -left-16 bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[140px] xl:w-[200px]">
      <Image
        src={"/bulb.png"}
        width={260}
        height={200}
        alt=""
        className="w-full h-full"
      />
    </div>
  )
}

export default Bulb
