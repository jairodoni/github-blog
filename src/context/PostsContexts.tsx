import { createContext, ReactNode } from 'react';

interface PostsContextData {

}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextData)

export function PostsProvider({ children }: PostsProviderProps) {

  return (
    <PostsContext.Provider value={{}}>
      {children}
    </PostsContext.Provider>
  )
}