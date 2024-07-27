import { Suspense, useState } from 'react'
import { Loading } from '@/app/ui'
import ResumeSync from './sync'
import { updateFromNotion, updateToServer } from './server'
import ResumePreview from '../preview'

export default async function PageResumeSync () {
  return (
    <div className='px-5 sm:p-10'>
      <ResumeSync updateToServer={updateToServer}>
        <ResumePreview />
      </ResumeSync>
    </div>
  )
}
