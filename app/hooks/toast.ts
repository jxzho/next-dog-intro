import { useToasts } from '@geist-ui/core'

export function useToast () {
  const { setToast } = useToasts({
    width: 'auto'
  })

  const toast = (text: string) => setToast({ text })

  return toast
}
