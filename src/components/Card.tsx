import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface CardProps {
  postId: number
  title: string
  body: string
  createdAt: string
}

export function Card({ postId, title, body, createdAt }: CardProps) {
  const formattedDate = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <Link href={`/post/${postId}`}>
      <div className="relative flex h-[16rem] w-full flex-col rounded-[10px] bg-navy-blue-600 p-8 leading-[1.6]">
        <div className="flex flex-row justify-between">
          <div className="h-[5.25rem]">
            <h1 className="title-card max-h-14 max-w-[440px] break-all text-xl font-bold text-navy-blue-50 max-md:text-[1.125rem]">
              {title}
            </h1>
          </div>
          <span className="... ml-1 w-[10rem] whitespace-nowrap text-right text-sm font-normal text-navy-blue-300">
            {formattedDate}
          </span>
        </div>
        <p className="text-card text-[1rem] font-normal text-navy-blue-200">
          {body}
        </p>
      </div>
    </Link>
  )
}
