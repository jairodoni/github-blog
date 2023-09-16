import logo from '../assets/imgs/logo.svg'
import backgroundHeader from '../assets/imgs/backgroundHeader.png'
import Image from 'next/image'

export function HeaderCustom() {
  return (
    <div className="flex h-[18.5rem] w-full items-center justify-center bg-[url(../assets/imgs/backgroundHeader.png)] bg-cover bg-center">
      <Image
        src={logo}
        alt=""
        className="z-2 absolute right-1/2 top-16 h-auto w-[9.25rem] translate-x-1/2 max-md:top-8 max-md:w-24 "
      />
    </div>
  )
}
