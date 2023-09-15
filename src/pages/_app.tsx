import { HeaderCustom } from '@/components/HeaderCustom'
import type { AppProps } from 'next/app'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import './global.css'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: 'GitHub Blog',
  description: 'Um blog cheio de artigos falando de tecnologia e programação',
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${nunito.variable} bg-navy-blue-800 text-navy-blue-200 font-nunito text-base normal-case`}>
      <HeaderCustom />
      <div className='max-w-[1200px] my-0 mx-auto px-4 py-4'>

        <Component {...pageProps} />
      </div>
    </main>
  )
}
