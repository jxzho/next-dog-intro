'use client'

import { Button } from '@geist-ui/core'
import { useToast } from '@/app/hooks'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Loading } from '@/app/ui'

export default function ButtonSync ({ updateToServer, children }: {
  updateToServer: (html: string) => Promise<void>
  children: React.ReactNode
}) {
  const router = useRouter()
  const toast = useToast()
  const [isPending, startTransition] = useTransition()

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh()
    })
  }

  const handleUpdateToServer = async () => {
    const html = document.querySelector('.resume-preview-wrapper')?.innerHTML
    if (html) {
      await updateToServer(html)
      toast('更新成功')
    } else {
      toast('未找到预览内容')
    }
  }

  return (
    <>
      <div className='flex gap-x-2'>
        {/* @ts-expect-error */}
        <Button scale={0.7} onClick={handleRefresh} loading={isPending}>
          <svg className='mr-1 inline-block' strokeLinejoin="round" viewBox="0 0 16 16" width="10" height="10" style={{ color: 'currentcolor' }}><path fillRule="evenodd" clipRule="evenodd" d="M2.5 8C2.5 4.96643 4.97431 2.5 8.03548 2.5C10.5716 2.5 12.7064 4.19393 13.3628 6.5H10.75H10V8H10.75H15.25C15.6642 8 16 7.66421 16 7.25V2.75V2H14.5V2.75V5.23347C13.4215 2.74164 10.9316 1 8.03548 1C4.1539 1 1 4.13001 1 8C1 11.87 4.1539 15 8.03548 15C10.3763 15 12.4513 13.8617 13.7295 12.1122L14.172 11.5066L12.9609 10.6217L12.5184 11.2273C11.5117 12.6051 9.87945 13.5 8.03548 13.5C4.97431 13.5 2.5 11.0336 2.5 8Z" fill="currentColor"></path></svg>
          刷新
        </Button>
        {/* @ts-expect-error */}
        <Button scale={0.7} onClick={handleUpdateToServer} loading={isPending}>
          更新至服务端
        </Button>
        {/* @ts-expect-error */}
        <Button scale={0.7} onClick={() => router.push('/resume')}>
          查看简历
        </Button>
      </div>
      {isPending
        ? <Loading className='block max-w-10 !my-5' />
        : children}
    </>
  )
}
