import { Loading as UiLoading } from '@/app/ui'

export default function Loading () {
  return (
    <div className='max-w-screen-sm mx-auto my-8 px-5 sm:px-0;'>
      <UiLoading className='max-w-10' />
    </div>
  )
}
