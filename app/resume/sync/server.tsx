'use server'

import fs from 'fs/promises'
import { revalidatePath } from 'next/cache'

export async function updateFromNotion () {
  // revalidatePath('/resume/sync')
}

export async function updateToServer (html: string) {
  return await fs.writeFile(
    process.cwd() + '/app/resume/sync/html.txt', 
    html,
    {
      encoding: 'utf8'
    }
  )
}

export async function getFromServer () {
  return await fs.readFile(
    process.cwd() + '/app/resume/sync/html.txt',
    {
      encoding: 'utf8'
    }
  )
}
