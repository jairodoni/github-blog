import { DetailsPost } from '@/components/DetailsPost'
import { api } from '@/services/api'
import ptBR from 'dayjs/locale/pt-br'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { GetStaticPaths, GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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
  return (
    <div>
      <DetailsPost
        title={post?.title}
        commentsNumber={post?.commentsNumber}
        createdAt={post?.createdAt}
        author={post?.author}
      />
      <ReactMarkdown
        remarkPlugins={[[remarkGfm, { skipHtml: false }]]}
        className="text-[1rem]/[1.6]"
      >
        {post?.body}
      </ReactMarkdown>
    </div>
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
