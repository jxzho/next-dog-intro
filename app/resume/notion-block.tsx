import { fetchNotionResume, parseDataBlockResumeToJSX } from '@/app/utils/server'

export default async function NotionBlock (props: {
  id: string
}) {
  const data = await fetchNotionResume(props.id)
  return parseDataBlockResumeToJSX(data)
}
