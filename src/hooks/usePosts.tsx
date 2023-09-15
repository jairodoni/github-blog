import { PostsContext } from '@/context/PostsContexts';
import { useContext } from 'react';

export const usePosts = () => {
  return useContext(PostsContext);
}