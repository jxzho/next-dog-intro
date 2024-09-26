'use client'

import { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react'

type ColorSchema = 'light' | 'dark'

const ContextColorScheme = createContext<{
  colorScheme?: ColorSchema
  setColorScheme: Dispatch<SetStateAction<ColorSchema | undefined>>
}>(null as any)

type Props = Readonly<{ children: React.ReactNode }>

function ProviderColorScheme({ children }: Props) {
  const [colorScheme, setColorScheme] = useState<ColorSchema>()

  useEffect(() => {
    if (colorScheme) {
      document.cookie = `color-scheme=${colorScheme};`
    }
  }, [colorScheme])
  
  useEffect(() => {
    if (matchMedia) {
      const stringColorSchemeCookies = document.cookie.split(';').find(item => item.trim().includes('color-scheme'))?.trim()

      const isDark = matchMedia('(prefers-color-scheme: dark)').matches ||
        stringColorSchemeCookies?.split('=')[1] === 'dark'
      if (isDark) {
        setColorScheme('dark')
      } else {
        setColorScheme('light')
      }
    }
  }, [])

  return (
    <ContextColorScheme.Provider value={{ colorScheme, setColorScheme }}>    
      {children}
    </ContextColorScheme.Provider>
  )
}

export { ProviderColorScheme, ContextColorScheme }
