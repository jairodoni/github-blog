import Skeleton from 'react-loading-skeleton'

export function SkeletonSearchForm() {
  let screenWidth = 0

  if (typeof window !== 'undefined') {
    screenWidth = window.screen.width
  }
  return (
    <div className="leading-[1.6]">
      <div className="mb-3 flex justify-between">
        <Skeleton height={20} className="w-[6.25rem] max-sm:w-[4rem]" />
        <Skeleton height={20} className="w-[6.25rem] max-sm:w-[4rem]" />
      </div>
      <Skeleton height={32} className="w-full" />
    </div>
  )
}
