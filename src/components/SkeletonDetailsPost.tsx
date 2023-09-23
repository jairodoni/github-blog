import Skeleton from 'react-loading-skeleton'

export function SkeletonDetailsPost() {
  let screenWidth = 0

  if (typeof window !== 'undefined') {
    screenWidth = window.screen.width
  }

  return (
    <div className=" -mt-[7.625rem] mb-[4.5rem] flex h-[10.5rem] w-full flex-col justify-between rounded-[10px] bg-navy-blue-700 px-10 py-8 max-sm:flex-col ">
      <div className="mb-5 inline-flex w-full justify-between font-bold max-sm:mb-4">
        <Skeleton height={20} className="w-[6.25rem] max-sm:w-[4rem]" />

        <Skeleton height={20} className="w-[6.25rem] max-sm:w-[4rem]" />
      </div>
      <div>
        <Skeleton height={32} className="mb-3 w-full" />
      </div>

      <div className="flex flex-row items-center text-sm">
        <div className="mr-6 flex flex-row items-center justify-center">
          <Skeleton height={20} className="w-[6.25rem] max-sm:w-[4rem]" />
        </div>
        <div className="mr-6 flex flex-row items-center justify-center">
          <Skeleton height={20} className="w-[6.25rem] max-sm:w-[4rem]" />
        </div>
        <div className="mr-6 flex flex-row items-center justify-center">
          <Skeleton height={20} className="w-[6.25rem] max-sm:w-[4rem]" />
        </div>
      </div>
    </div>
  )
}
