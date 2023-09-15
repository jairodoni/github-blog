import Link from "next/link"

export function Card() {
  return (
    <Link href="/post/asd">
      <div className="flex flex-col w-full h-[16rem] relative p-8 bg-navy-blue-600 rounded-[10px] leading-[1.6]">
        <div className="flex flex-row justify-between">
          <div className="h-[5.25rem]">

            <h1 className="max-h-14 max-w-[440px] text-navy-blue-50 text-xl max-md:text-[1.125rem] font-bold title-card break-all">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h1>
          </div>
          <span className="text-sm font-normal text-navy-blue-300 w-20 text-right whitespace-nowrap ... ml-1">
            Há 1 dia
          </span>
        </div>
        <p className="text-card text-[1rem] font-normal text-navy-blue-200">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </Link>
  );
}