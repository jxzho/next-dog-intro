import { Suspense } from 'react'
import { Loading } from '@/app/ui'
import ResumeSync from './sync'
import { updateFromNotion, updateToServer } from './server'
import ResumePreview from '../preview'

export default async function PageResumeSync () {
  return (
    <div className='px-5 sm:p-10'>
      <ResumeSync
        updateToServer={updateToServer}
      />
      <Suspense
        key={Date.now()}
        fallback={(
          <div className='h-10'>
            <Loading className='max-w-10' />
          </div>
        )}
      >
        {/* @ts-expect-error Async Server Component */}
        <ResumePreview />
      </Suspense>
    </div>
  )
}
