'use client'

import { useEffect, useState, useContext } from 'react'
import { ContextColorScheme } from '@/app/color-scheme-provider'

const mapColorScheme = new Map<string | undefined, string>([
  ['light', '#333333'],
  ['dark', '#f5f5f5']
])

function SwitchColorScheme (props: {
  colorScheme: 'dark' | 'light'
}) {
  const { colorScheme, setColorScheme } = useContext(ContextColorScheme)
  
  const [colorHEX, setColorHEX] = useState(mapColorScheme.get(colorScheme))

  function toggleColorScheme () {
    setColorScheme(preVal => {
      const val = preVal === 'dark'
        ? 'light'
        : 'dark'
      syncCookie(val)
      return val
    })
  }

  useEffect(() => {
    const color = mapColorScheme.get(colorScheme)
    if (color) {
      setColorHEX(color)
    }
  }, [colorScheme])

  return (
    <div
      className='flex items-center cursor-pointer'
      style={{ color: colorHEX }}
      onClick={toggleColorScheme}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" color="currentcolor"><path fillRule="evenodd" clipRule="evenodd" d="M8.75.75V0h-1.5v2.75h1.5v-2zm2.432 3.007l.53-.53.354-.354.53-.53 1.06 1.06-.53.531-.353.354-.53.53-1.061-1.06zM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5.25-4.75H16v1.5h-2.75v-1.5zm-12.5 0H0v1.5h2.75v-1.5h-2zm2.123 4.816l-.53.53 1.06 1.06.531-.53.354-.353.53-.53-1.06-1.061-.531.53-.354.354zm.884-7.248l-.53-.53-.354-.354-.53-.53 1.06-1.06.531.53.354.353.53.53-1.06 1.061zm8.309 8.309l.53.53 1.06-1.06-.53-.531-.353-.354-.53-.53-1.061 1.06.53.531.354.354zm-3.316.123V16h-1.5v-2.75h1.5z" fill="currentColor"/></svg>
    </div>
  )
}

function deleteCookie (name: string) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}

function syncCookie (colorScheme: 'dark' | 'light') {
  const COOKIE_NAME = 'color-scheme'
  if (colorScheme === 'dark') {
    document.cookie = `${COOKIE_NAME}=${colorScheme};`
  } else {
    deleteCookie(COOKIE_NAME)
  }
}

export { SwitchColorScheme }
