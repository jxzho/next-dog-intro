import { fetchNotionResume, parseDataBlockResumeToJSX } from '@/app/utils/server'
import styles from '../styles/resume.module.scss'
import { getFromServer } from '@/app/resume/sync/server'
import Dom from './dom'

export default async function Resume () {
  const html = await getFromServer()

  if (html) {
    return (
      <>
        <div
          className={styles.wrapper}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <Dom />
      </>
    )
  }

  const data = await fetchNotionResume()
  return (
    <div className={styles.wrapper}>
      <h1 className={styles['my-name']}>钟俊雄</h1>
      {parseDataBlockResumeToJSX(data)}
    </div>
  )
}
