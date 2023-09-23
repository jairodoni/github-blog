import { api } from '@/services/api'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface Post {
  id: number
  title: string
  body: string
  createdAt: string
}

interface PostsContextData {
  articles: Post[] | []
  isLoading: boolean
  loadArticles: () => void
  searchArticles: (query: string) => void
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextData)

export function PostsProvider({ children }: PostsProviderProps) {
  const [articles, setArticles] = useState<Post[] | []>([])
  const [isLoading, setIsLoading] = useState(false)

  async function loadArticles() {
    setIsLoading(true)
    // const params = await new URLSearchParams()
    const response = await api.get(
      `https://api.github.com/repos/jairodoni/github-blog/issues`,
      {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
        },
      },
    )

    const posts = response.data.map((post: any) => {
      return {
        id: post.number,
        title: post.title,
        body: post.body,
        createdAt: post.created_at,
      }
    })

    setArticles(posts)
    setIsLoading(false)
  }
  async function searchArticles(query?: string) {
    setIsLoading(true)
    // const params = await new URLSearchParams()
    const response = await api.get(
      `/search/issues?q=${query}%20repo:jairodoni/github-blog`,
    )

    const posts = response.data.items.map((post: any) => {
      return {
        id: post.number,
        title: post.title,
        body: post.body,
        createdAt: post.created_at,
      }
    })

    setArticles(posts)
    setIsLoading(false)
  }

  useEffect(() => {
    loadArticles()
  }, [])

  return (
    <PostsContext.Provider
      value={{ loadArticles, searchArticles, articles, isLoading }}
    >
      {children}
    </PostsContext.Provider>
  )
}
