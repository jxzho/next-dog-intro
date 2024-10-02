'use client'

import { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react'

type ColorSchema = 'light' | 'dark'

const ContextColorScheme = createContext<{
  colorScheme: ColorSchema | undefined
  syncColorScheme(val: ColorSchema | undefined): void
}>(null as any)

type Props = Readonly<{ children: React.ReactNode }>

function ProviderColorScheme({ children }: Props) {
  const [colorScheme, setColorScheme] = useState<ColorSchema>()

  function syncColorScheme (val: 'light' | 'dark' | undefined) {
    setColorScheme(() => {
      const html = document.documentElement
      if (val !== 'dark' && html.classList.contains('dark')) {
        html.classList.remove('dark')
      } else if (val === 'dark' && !html.classList.contains('dark')) {
        html.classList.add('dark')
      }
      syncCookie(val)
      return val
    })
  }
  
  useEffect(() => {
    if (matchMedia) {
      const darkModeMedia = matchMedia('(prefers-color-scheme: dark)')
      darkModeMedia.addEventListener('change', (event) => {
        if (event.matches) {
          syncColorScheme('dark')
        } else {
          syncColorScheme('light')
        }
      })

      const stringColorSchemeCookies = document.cookie.split(';').find(item => item.trim().includes('color-scheme'))?.trim()
      const colorSchemeFromCookie = stringColorSchemeCookies?.split('=')[1] as (ColorSchema | undefined)
      const isDark = colorSchemeFromCookie === 'dark'
      if (isDark && colorScheme !== 'dark') {
        syncColorScheme('dark')
      }
      if (!isDark && colorScheme !== 'light') {
        syncColorScheme('light')
      }
    }
  }, [])

  return (
    <ContextColorScheme.Provider value={{ colorScheme, syncColorScheme }}>    
      {children}
    </ContextColorScheme.Provider>
  )
}

function deleteCookie (name: string) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}

function syncCookie (colorScheme: 'dark' | 'light' | undefined) {
  const COOKIE_NAME = 'color-scheme'
  if (colorScheme === 'dark') {
    document.cookie = `${COOKIE_NAME}=${colorScheme};`
  } else {
    deleteCookie(COOKIE_NAME)
  }
}

export { ProviderColorScheme, ContextColorScheme }
