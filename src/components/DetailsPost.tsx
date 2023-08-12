import { FaArrowUpRightFromSquare, FaGithub, FaUserGroup, FaChevronLeft } from 'react-icons/fa6'

export function DetailsPost() {
  return (
    <div className=" flex flex-col justify-between max-sm:flex-col w-full h-[10.5rem] -mt-[7.625rem] mb-[4.5rem] bg-navy-blue-700 rounded-[10px] py-8 px-10 ">
      <div className='inline-flex justify-between w-full max-sm:mb-4 font-bold mb-5'>
        <div className='flex flex-row items-center justify-center text-base text-blue-400'>
          <FaChevronLeft size={12} />
          <span className='ml-2 text-xs leading-[1.6] uppercase'>Voltar</span>
        </div>
        <div className='flex flex-row items-center justify-center text-base text-blue-400'>
          <span className='mr-2 text-xs leading-[1.6]'>GITHUB</span>
          <FaArrowUpRightFromSquare size={12} />
        </div>
      </div>

      <h1 className='text-gray-50 text-2xl font-bold leading-[1.3] mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>

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
  );
}