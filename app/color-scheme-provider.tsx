'use client'

import { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react'

type ColorSchema = 'light' | 'dark'

const ContextColorScheme = createContext<{
  colorScheme?: ColorSchema
  setColorScheme: Dispatch<SetStateAction<ColorSchema | undefined>>
}>(null as any)

type Props = Readonly<{ children: React.ReactNode }>

function ProviderColorScheme({ children }: Props) {
  const stringColorSchemeCookies = document.cookie.split(';').find(item => item.trim().includes('color-scheme'))?.trim()
  const colorSchemeFromCookie = stringColorSchemeCookies?.split('=')[1] as (ColorSchema | undefined)
  const [colorScheme, setColorScheme] = useState(colorSchemeFromCookie)

  useEffect(() => {
    const html = document.documentElement
    if (colorScheme !== 'dark' && html.classList.contains('dark')) {
      html.classList.remove('dark')
    } else if (colorScheme === 'dark' && !html.classList.contains('dark')) {
      html.classList.add('dark')
    }
  }, [colorScheme])
  
  useEffect(() => {
    if (matchMedia) {
      const isDark = matchMedia('(prefers-color-scheme: dark)').matches || colorSchemeFromCookie
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
