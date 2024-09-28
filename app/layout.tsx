import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { getColorScheme } from '@/app/utils/server'
import clsx from 'clsx'
import GeistProvider from './geist-provider'
import { ProviderColorScheme } from './color-scheme-provider'
import { SwitchColorScheme } from './components/client/switch-color-scheme'
import './styles/globals.scss'

export const metadata: Metadata = {
  title: 'Junxio is here',
  description: 'The site was built by Junxio(Russell Xio).',
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const colorScheme = await getColorScheme()
  return (
    <html lang="en" className={clsx({ dark: colorScheme?.value === 'dark' })}>
      <head>
        <link rel="preconnect" href="https://cdn.junxio.cc/" crossOrigin="" />
        <link href="https://cdn.junxio.cc/static/font/ST_Black/Regular/index.css" rel="stylesheet" />
        <link href="https://cdn.junxio.cc/static/font/ST_Black/Medium/index.css" rel="stylesheet" />
        <link href="https://cdn.junxio.cc/static/font/ST_Black/Bold/index.css" rel="stylesheet" />

        <meta name="theme-color" content="#eee" />
        <meta property='og:title' content='Junxio is here' key='ogtitle' />
        <meta property='og:description' content="The site was built by Junxio(Russell Xio)." key='ogdescription' />
        <meta property='og:url' content='junxio.cc' key='ogurl' />
      </head>
      <body>
        <GeistProvider>
          <ProviderColorScheme>
            {children}
            <div className='fixed top-0 right-0'>
              <SwitchColorScheme colorScheme={colorScheme?.value as 'dark' | 'light' |  undefined} />
            </div>
          </ProviderColorScheme>
        </GeistProvider>
        <Analytics />
      </body>
    </html>
  )
}
