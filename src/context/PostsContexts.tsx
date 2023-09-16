import { api } from '@/services/api'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface PostsContextData {
  articles: any
  loadArticles: () => void
  searchArticles: (query: string) => void
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextData)

export function PostsProvider({ children }: PostsProviderProps) {
  const [articles, setArticles] = useState([])

  async function loadArticles() {
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

    const posts = response.data.map((post) => {
      return {
        id: post.number,
        title: post.title,
        body: post.body,
        createdAt: post.created_at,
      }
    })

    setArticles(posts)
  }
  async function searchArticles(query?: string) {
    // const params = await new URLSearchParams()
    const response = await api.get(
      `/search/issues?q=${query}%20repo:jairodoni/github-blog`,
      {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      },
    )

    // const data = response.data
    // setArticles(data)
  }

  useEffect(() => {
    loadArticles()
  }, [])

  return (
    <PostsContext.Provider value={{ loadArticles, searchArticles, articles }}>
      {children}
    </PostsContext.Provider>
  )
}
