import logo from "../../assets/imgs/logo.svg"
import backgroundHeader from "../../assets/imgs/backgroundHeader.png"
import Image from "next/image";

export function Header() {
  return (
    <div className="flex items-center justify-center w-full h-[18.5rem] bg-[url(../assets/imgs/backgroundHeader.png)] bg-cover bg-center">
      <Image src={logo} alt="" className="h-auto w-[9.25rem] max-md:w-24 z-2 absolute right-1/2 translate-x-1/2 max-md:top-8 top-16 " />
    </div >
  );
}