import type { Metadata } from 'next'
import GeistProvider from './geist-provider'
import './styles/globals.scss'

export const metadata: Metadata = {
  title: 'Junxio is here',
  description: 'The site was built by Junxio(Russell Xio).',
  themeColor: '#eeeeee'
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.junxio.cc/" crossOrigin="" />
        <link href="https://cdn.junxio.cc/static/font/ST_Black/Regular/index.css" rel="stylesheet" />
        <link href="https://cdn.junxio.cc/static/font/ST_Black/Medium/index.css" rel="stylesheet" />
        <link href="https://cdn.junxio.cc/static/font/ST_Black/Bold/index.css" rel="stylesheet" />

        <meta property='og:title' content='Junxio is here' key='ogtitle' />
        <meta property='og:description' content="The site was built by Junxio(Russell Xio)." key='ogdescription' />
        <meta property='og:url' content='junxio.cc' key='ogurl' />
      </head>
      <body>
        <GeistProvider>{children}</GeistProvider>
      </body>
    </html>
  )
}
