import { fetchNotionResume, parseDataBlockResumeToJSX } from '@/app/utils/server'
import '../styles/preview.scss'

export default async function ResumePreview () {
  const data = await fetchNotionResume()
  return (
    <div className="resume-preview-wrapper">
      <h1 className="!text-3xl mb-5">钟俊雄</h1>
      {parseDataBlockResumeToJSX(data)}
    </div>
  )
}
