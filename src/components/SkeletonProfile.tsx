import Skeleton from 'react-loading-skeleton'

export function SkeletonProfile() {
  let screenWidth = 0

  if (typeof window !== 'undefined') {
    screenWidth = window.screen.width
  }

  return (
    <div className=" -mt-[7.625rem] mb-[4.5rem] flex h-full w-full flex-row rounded-[10px] bg-navy-blue-700 px-10 py-8 max-sm:flex-col">
      <Skeleton className="mr-8 h-[9.25rem] w-[9.25rem] rounded-[8px] object-cover max-sm:mb-4 max-sm:h-[16rem] max-sm:w-full" />
      <div className="flex w-full flex-col items-start justify-between">
        <div className="inline-flex w-full justify-between font-bold max-sm:mb-2">
          <div className="w-[15.625rem] max-sm:w-[8rem]">
            <Skeleton height={32} />
          </div>
          <div className="w-[6.25rem] max-sm:w-[4rem]">
            <Skeleton height={32} />
          </div>
        </div>
        <div className="mb-3 flex h-[32px] w-full flex-col max-sm:mb-[2.5rem]">
          <Skeleton count={2} />
        </div>
        <div className="flex flex-row items-center text-sm">
          <div className="mr-6 flex  flex-row items-center justify-center">
            <Skeleton height={20} className="w-[6.25rem] max-sm:w-[4rem]" />
          </div>
          <div className="flex flex-row items-center justify-center">
            <Skeleton height={20} className="w-[6.25rem] max-sm:w-[4rem]" />
          </div>
        </div>
      </div>
    </div>
  )
}
