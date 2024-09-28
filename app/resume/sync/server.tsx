'use server'

import fs from 'fs/promises'

export async function updateToServer (html: string) {
  return await fs.writeFile(
    process.cwd() + '/app/resume/sync/html_static_resume', 
    html,
    {
      encoding: 'utf8'
    }
  )
}

export async function getFromServer () {
  return await fs.readFile(
    process.cwd() + '/app/resume/sync/html_static_resume',
    {
      encoding: 'utf8'
    }
  )
}
