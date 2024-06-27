import type { Metadata } from 'next'
import './globals.css'
import styles from './styles/layout.module.scss'

export const metadata: Metadata = {
  title: 'Junxio is here',
  description: 'The site was built by Junxio(Russell Xio).',
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
      </head>
      <body className={styles.layout}>
        {children}
        <span className={styles.author}>© 2024 Junxio.</span>
      </body>
    </html>
  )
}
