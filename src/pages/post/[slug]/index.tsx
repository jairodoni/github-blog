import { DetailsPost } from '@/components/DetailsPost'
import { api } from '@/services/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface PostProps {
  post: {
    postId: number
    title: string
    body: string
    createdAt: string
  }
}

export default function Post({ post }: PostProps) {
  return (
    <div>
      <DetailsPost title={post.title} />
      <ReactMarkdown remarkPlugins={[[remarkGfm, { skipHtml: false }]]}>
        {post.body}
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
    createdAt: data.created_at,
  }
  console.log('AAAA: ', data)

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
