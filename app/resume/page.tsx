import { getFromServer } from '@/app/resume/sync/server'
import Dom from './dom'
import ResumePreview from './preview'
import styles from '../styles/resume.module.scss'
import '../styles/preview.scss'

export default async function Resume () {
  const html = await getFromServer()

  if (html) {
    return (
      <div className={styles.wrapper}>
        <div className='resume-preview-wrapper' dangerouslySetInnerHTML={{ __html: html }}></div>
        <Dom />
      </div>
    )
  }

  return <ResumePreview />
}
