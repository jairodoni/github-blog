import Skeleton from 'react-loading-skeleton'

export function SkeletonCard() {
  let screenWidth = 0

  if (typeof window !== 'undefined') {
    screenWidth = window.screen.width
  }

  return (
    <div className="relative flex h-[16rem] w-full flex-col rounded-[10px] bg-navy-blue-600 p-8 leading-[1.6]">
      <div className="flex flex-row justify-between">
        <div className="mr-2 h-[5.25rem] w-full">
          <Skeleton className="mb-[0.5rem] h-[3rem] w-[15.625rem] max-sm:w-full" />
        </div>
        <Skeleton className="mb-[0.5rem] h-[1rem] w-[3.125rem]" />
      </div>
      <Skeleton height={16} count={4} />
    </div>
  )
}
