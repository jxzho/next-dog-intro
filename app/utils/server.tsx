import { Suspense } from 'react'
import { Client } from '@notionhq/client'
import { ListBlockChildrenResponse, BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import NotionBlock from '@/app/resume/notion-block'
import clsx from 'clsx'
import { DotList } from '@/app/ui'
import { unstable_noStore } from 'next/cache'

const PAGE_ID_RESUME = 'e96e3a8a0c6d4553b523c6a0847a2acb'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  timeoutMs: 2 * 60 * 1000
})

export async function fetchNotionResume (block_id = PAGE_ID_RESUME): Promise<ListBlockChildrenResponse> {
  unstable_noStore()
  const data = await notion.blocks.children.list({
    block_id,
    page_size: 999999
  })
  return data
}

export function parseDataBlockResumeToJSX (data: Awaited<ReturnType<typeof fetchNotionResume>>) {
  // @ts-expect-error
  return data.results.map<string | JSX.Element>((item: BlockObjectResponse, index: number) => {
    if (item.type === 'paragraph') {
      const hasValues = item.paragraph.rich_text?.length
      return (
        <p key={item.id} className={clsx({ 'min-h-5': !hasValues })}>
          {item.paragraph.rich_text?.map(({ plain_text, href, annotations }, index) => {
            if (href) {
              return <a key={item.id + index} href={href} target='_blank' title='点击跳转'>{ plain_text }</a>
            }
            return annotations.bold
              ? <span className='font-bold'>{ plain_text }</span>
              : plain_text
          })}
        </p>
      )
    }

    if (item.type === 'numbered_list_item') {
      return (
        <div key={item.id} className='my-1.5 block-list-item'>
          <DotList num={index + 1} className='absolute left-0 top-0' />
          {item.numbered_list_item.rich_text?.map(({ plain_text, href, annotations }, index) => {
            return annotations.bold
              ? <span className='font-bold'>{ plain_text }</span>
              : plain_text
          })}
          {item.has_children && (
            <Suspense fallback={<div>loading block...</div>}>
              {/* @ts-expect-error Async Server Component */}
              <NotionBlock id={item.id} />
            </Suspense>
          )}
        </div>
      )
    }

    if (item.type === 'bulleted_list_item') {
      return (
        <div key={item.id} className='my-1.5 block-list-item'>
          <DotList className='absolute left-0 top-0' />
          {item.bulleted_list_item.rich_text?.map(({ plain_text, href, annotations }, index) => {
            return annotations.bold
              ? <span key={item.id + index} className='font-bold'>{ plain_text }</span>
              : plain_text
          })}
          {item.has_children && (
            <Suspense fallback={<div>loading block...</div>}>
              {/* @ts-expect-error Async Server Component */}
              <NotionBlock id={item.id} />
            </Suspense>
          )}
        </div>
      )
    }

    if (item.type === 'heading_1') {
      return <h1 key={item.id}>{ item.heading_1.rich_text?.map(_ => _.plain_text) }</h1>
    }

    if (item.type === 'heading_2') {
      return <h2 key={item.id}>{ item.heading_2.rich_text?.map(_ => _.plain_text) }</h2>
    }

    if (item.type === 'heading_3') {
      return <h3 key={item.id}>{ item.heading_3.rich_text?.map(_ => _.plain_text) }</h3>
    }

    return ''
  })
}
