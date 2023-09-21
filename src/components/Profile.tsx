import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaUserGroup,
} from 'react-icons/fa6'

interface ProfileProps {
  user: {
    name: string
    avatarUrl: string
    bio: string
    followers: string
  }
}

export function Profile({ user }: ProfileProps) {
  return (
    <div className=" -mt-[7.625rem] mb-[4.5rem] flex h-full w-full flex-row rounded-[10px] bg-navy-blue-700 px-10 py-8 max-sm:flex-col">
      <img
        src="https://avatars.githubusercontent.com/u/38520302?v=4"
        alt=""
        className="mr-8 h-[9.25rem] w-[9.25rem] rounded-[8px] object-cover max-sm:mb-4 max-sm:h-[16rem] max-sm:w-full"
      />
      <div className="flex flex-col items-start justify-between">
        <div className="inline-flex w-full justify-between font-bold max-sm:mb-4">
          <h1 className="text-2xl font-bold leading-[1.3] text-gray-50">
            Jairo Doni
          </h1>
          <a
            className="flex cursor-pointer flex-row items-center justify-center border-none text-base text-blue-400 shadow-none outline-none duration-200 ease-in hover:brightness-50"
            target="_blank"
            href={`https://github.com/${user.name}`}
            rel="noreferrer"
          >
            <span className="mr-2 text-xs leading-[1.6]">GITHUB</span>
            <FaArrowUpRightFromSquare size={12} />
          </a>
        </div>
        <p className="text-base font-normal leading-[1.6] max-sm:mb-4">
          {user.bio}
        </p>
        <div className="flex flex-row items-center text-sm">
          <div className="mr-6 flex flex-row items-center justify-center">
            <FaGithub size={24} className="text-navy-blue-400" />
            <span className="ml-2 text-base font-normal lowercase leading-[1.6] text-gray-100">
              {user.name}
            </span>
          </div>
          <div className="mr-6 flex flex-row items-center justify-center">
            <FaUserGroup size={24} className="text-navy-blue-400" />
            <span className="ml-2 text-base font-normal leading-[1.6] text-gray-100">
              {user.followers}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
