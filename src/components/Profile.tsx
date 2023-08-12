import { FaArrowUpRightFromSquare, FaGithub, FaUserGroup } from 'react-icons/fa6'

export function Profile() {
  return (
    <div className=" flex flex-row max-sm:flex-col w-full h-full -mt-[7.625rem] mb-[4.5rem] bg-navy-blue-700 rounded-[10px] py-8 px-10">
      <img
        src="https://avatars.githubusercontent.com/u/38520302?v=4"
        alt=""
        className="rounded-[8px] h-[9.25rem] w-[9.25rem] mr-8 max-sm:h-[16rem] max-sm:w-full max-sm:mb-4 object-cover"
      />
      <div className='flex items-start justify-between flex-col'>
        <div className='inline-flex justify-between w-full max-sm:mb-4 font-bold'>
          <h1 className='text-gray-50 text-2xl leading-[1.3] font-bold'>Jairo Doni</h1>
          <div className='flex flex-row items-center justify-center text-base text-blue-400'>
            <span className='mr-2 text-xs leading-[1.6]'>GITHUB</span>
            <FaArrowUpRightFromSquare size={12} />
          </div>
        </div>
        <p className='font-normal text-base leading-[1.6] max-sm:mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <div className='flex flex-row items-center text-sm'>
          <div className='flex flex-row items-center justify-center mr-6'>
            <FaGithub size={24} className="text-navy-blue-400" />
            <span className="ml-2 text-gray-100 text-base leading-[1.6] font-normal lowercase">jairodoni</span>
          </div>
          <div className='flex flex-row items-center justify-center mr-6'>
            <FaUserGroup size={24} className="text-navy-blue-400" />
            <span className='ml-2 text-gray-100 text-base leading-[1.6] font-normal'>20</span>
          </div>
        </div>
      </div>
    </div>
  );
}