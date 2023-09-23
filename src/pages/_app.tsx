import { HeaderCustom } from '@/components/HeaderCustom'
import type { AppProps } from 'next/app'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import './global.css'
import { PostsProvider } from '@/context/PostsContexts'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: 'GitHub Blog',
  description: 'Um blog cheio de artigos falando de tecnologia e programação',
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <PostsProvider>
      <SkeletonTheme baseColor="#1C2F41" highlightColor="#C4D4E3">
        <main
          className={`${nunito.variable} bg-navy-blue-800 font-nunito text-base normal-case text-navy-blue-200`}
        >
          <HeaderCustom />
          <div className="mx-auto my-0 max-w-[1200px] px-4 py-4">
            <Component {...pageProps} />
          </div>
        </main>
      </SkeletonTheme>
    </PostsProvider>
  )
}
