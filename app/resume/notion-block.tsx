import { fetchNotionResume, parseDataBlockResumeToJSX } from '../utils'

export default async function NotionBlock (props: {
  id: string
}) {
  const data = await fetchNotionResume(props.id)
  return parseDataBlockResumeToJSX(data)
}
