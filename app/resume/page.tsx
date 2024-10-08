import { getFromServer } from '@/app/resume/sync/server'
import Dom from './dom'
import ResumePreview from './preview'
import styles from '../styles/resume.module.scss'
import '../styles/preview.scss'

export default async function Resume () {
  try {
    const html = await getFromServer()
    if (html) {
      return (
        <div className={styles.wrapper} data-static>
          <div className='resume-preview-wrapper' dangerouslySetInnerHTML={{ __html: html }}></div>
          <Dom />
        </div>
      )
    }
  } catch (error) {
    console.log('=>> init resume error', { error })    
  }
  return (
    <div className={styles.wrapper} data-from-server>
      <ResumePreview />
      <Dom />
    </div>
  )
}
