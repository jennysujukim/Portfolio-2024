import Image from "next/image"
// assets
import logo from "@/app/assets/logo.svg"

export default function Sidebar() {
  return (
    <div>
      <Image 
        src={logo}
        alt="logo of Jenny Kim Portfolio"
        width={100}
        height={50}
      />
    </div>
  )
}
