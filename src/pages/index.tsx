import { api } from '@/services/api'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { Card } from '../components/Card'
import { Profile } from '../components/Profile'
import { SearchForm } from '../components/SearchForm'
import { usePosts } from '@/hooks/usePosts'

export default function Home() {
  const { articles } = usePosts()

  return (
    <div className="h-full max-h-screen w-full max-w-[1200px]">
      <div className="mb-[4.5rem] min-h-[13.25rem] w-full rounded text-2xl font-bold">
        <Profile />
      </div>

      <SearchForm />
      <div className="mt-12 grid w-full grid-cols-custom gap-8 max-sm:grid-cols-1">
        {articles.map((post) => (
          <Card
            key={post.id}
            postId={post.id}
            title={post.title}
            body={post.body}
            createdAt={post.createdAt}
          />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/users/jairodoni')

  const user = response.data

  return {
    props: {
      user,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
