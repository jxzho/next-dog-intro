'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import { Button } from '@/app/ui'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='p-5 sm:p-10'>
      <h2 className='text-3xl'>Something went wrong!</h2>
      {/* @ts-expect-error */}
      <Button
        scale={0.7}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        重试
      </Button>
    </div>
  )
}