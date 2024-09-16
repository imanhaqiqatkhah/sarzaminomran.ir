// next image
import Image from "next/image"

// next link
import Link from "next/link"

// components
import Socials from "../components/Socials"

const Header = () => {
  return (
    <header
      dir="rtl"
      className="absolute z-30 w-full flex items-center px-16 xl:px-0 h-[160px]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-3">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/sdadd.svg"}
              width={220}
              height={170}
              alt=""
              priority={true}
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  )
}

export default Header
