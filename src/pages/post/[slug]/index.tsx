import { DetailsPost } from '@/components/DetailsPost'
import { api } from '@/services/api'
import ptBR from 'dayjs/locale/pt-br'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { GetStaticPaths, GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { usePosts } from '@/hooks/usePosts'
import Skeleton from 'react-loading-skeleton'
import { SkeletonDetailsPost } from '@/components/SkeletonDetailsPost'

dayjs.extend(relativeTime)
dayjs.locale(ptBR)

interface PostProps {
  post: {
    postId: number
    title: string
    body: string
    commentsNumber: number
    createdAt: string
    author: string
  }
}

export default function Post({ post }: PostProps) {
  const { isLoading } = usePosts()
  return (
    <>
      {isLoading && (
        <div>
          <SkeletonDetailsPost />
          <div className="flex w-full flex-col p-[2rem]">
            <Skeleton height={16} count={10} />
          </div>
        </div>
      )}
      {!isLoading && (
        <div>
          <DetailsPost
            title={post?.title}
            commentsNumber={post?.commentsNumber}
            createdAt={post?.createdAt}
            author={post?.author}
          />
          <div className="p-[2rem]">
            <ReactMarkdown
              remarkPlugins={[[remarkGfm, { skipHtml: false }]]}
              className="text-[1rem]/[1.6]"
            >
              {post?.body}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({
  params,
}: any) => {
  const postId = params.slug

  const response = await api.get(
    `/repos/jairodoni/github-blog/issues/${postId}`,
  )
  const data = response.data

  const post = {
    title: data.title,
    body: data.body,
    commentsNumber: data.comments,
    createdAt: dayjs(new Date(data.createdAt)).fromNow(),
    author: data.user.login,
  }

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
