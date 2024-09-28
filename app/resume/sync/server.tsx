'use server'

import fs from 'fs/promises'
import path from 'path'

const htmlStaticPath = path.join(process.cwd(), 'app/resume/sync/html_static_resume')

export async function updateToServer (html: string) {
  return await fs.writeFile(htmlStaticPath, html, {
    encoding: 'utf8'
  })
}

export async function getFromServer () {
  return await fs.readFile(
    htmlStaticPath,
    {
      encoding: 'utf8'
    }
  )
}
