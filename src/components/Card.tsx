import Link from 'next/link'
import ptBR from 'dayjs/locale/pt-br'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

dayjs.extend(relativeTime)
dayjs.locale(ptBR)

interface CardProps {
  postId: number
  title: string
  body: string
  createdAt: string
}

export function Card({ postId, title, body, createdAt }: CardProps) {
  const formattedDate = dayjs(createdAt).fromNow()

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
          <ReactMarkdown remarkPlugins={[[remarkGfm, { skipHtml: false }]]}>
            {body}
          </ReactMarkdown>
        </p>
      </div>
    </Link>
  )
}
