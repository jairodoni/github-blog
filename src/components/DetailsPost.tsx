import Link from 'next/link'
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaChevronLeft,
  FaComment,
  FaCalendarDay,
} from 'react-icons/fa6'

interface DetailsPostProps {
  title: string
  commentsNumber: string
  createdAt: string
  author: string
}

export function DetailsPost({
  title,
  commentsNumber,
  createdAt,
  author,
}: DetailsPostProps) {
  return (
    <div className=" -mt-[7.625rem] mb-[2rem] flex h-[10.5rem] w-full flex-col justify-between rounded-[10px] bg-navy-blue-700 px-10 py-8 max-sm:h-[15rem] max-sm:flex-col">
      <div className="mb-5 inline-flex w-full justify-between font-bold max-sm:mb-4">
        <Link
          className="flex cursor-pointer flex-row items-center justify-center text-base text-blue-400"
          href="/"
          rel="noreferrer"
        >
          <FaChevronLeft size={12} />
          <span className="ml-2 text-xs uppercase leading-[1.6]">Voltar</span>
        </Link>
        <a
          className="flex cursor-pointer flex-row items-center justify-center text-base text-blue-400"
          target="_blank"
          href={`https://github.com/${author}`}
          rel="noreferrer"
        >
          <span className="mr-2 text-xs leading-[1.6]">GITHUB</span>
          <FaArrowUpRightFromSquare size={12} />
        </a>
      </div>

      <h1 className="mb-2 text-2xl font-bold leading-[1.3] text-gray-50">
        {title}
      </h1>

      <div className="flex flex-row items-center text-sm max-sm:flex-col max-sm:items-start">
        <div className="mr-6 flex flex-row items-center justify-center">
          <FaGithub size={24} className="text-navy-blue-400" />
          <span className="ml-2 text-base font-normal lowercase leading-[1.6] text-gray-300">
            {author}
          </span>
        </div>
        <div className="mr-6 flex flex-row items-center justify-center max-sm:mt-2">
          <FaCalendarDay size={24} className="text-navy-blue-400" />
          <span className="ml-2 text-base font-normal leading-[1.6] text-gray-300  first-letter:uppercase">
            {createdAt}
          </span>
        </div>
        <div className="mr-6 flex flex-row items-center justify-center max-sm:mt-2">
          <FaComment size={24} className="text-navy-blue-400" />
          <span className="ml-2 text-base font-normal leading-[1.6] text-gray-300">
            {commentsNumber}
          </span>
        </div>
      </div>
    </div>
  )
}
