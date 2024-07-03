'use client'

import { GeistProvider, CssBaseline } from '@geist-ui/core'

export default function RootGeistProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <GeistProvider>
      {/* <CssBaseline /> */}
      {children}
    </GeistProvider>
  )
}
