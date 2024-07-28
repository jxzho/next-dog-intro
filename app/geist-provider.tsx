'use client'

import { GeistProvider } from '@geist-ui/core'

export default function RootGeistProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <GeistProvider>
      {children}
    </GeistProvider>
  )
}
