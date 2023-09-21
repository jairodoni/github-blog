import { api } from '@/services/api'
import { GetStaticProps } from 'next'

import { Card } from '../components/Card'
import { Profile } from '../components/Profile'
import { SearchForm } from '../components/SearchForm'
import { usePosts } from '@/hooks/usePosts'

interface HomeProps {
  user: {
    name: string
    avatarUrl: string
    bio: string
    followers: string
  }
}

export default function Home({ user }: HomeProps) {
  const { articles } = usePosts()

  return (
    <div className="h-full max-h-screen w-full max-w-[1200px]">
      <div className="mb-[4.5rem] min-h-[13.25rem] w-full rounded text-2xl font-bold">
        <Profile user={user} />
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

  const userFormatted = {
    name: user.login,
    avatarUrl: user.avatar_url,
    bio: user.bio,
    followers: user.followers,
  }
  return {
    props: {
      user: userFormatted,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
