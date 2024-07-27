import '@/app/styles/projects.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from '@/app/components/server'

const myProjects = [
  {
    name: 'Study GPT',
    home_link: 'https://studygpt.xbuddy.ai/',
    cover: 'https://ik.imagekit.io/junxio/tr:w-652/projects/study-gpt.png',
    cover_back: 'https://fakeimg.pl/200x150/?text=Study GPT',
    desc: 'StudyGPT 是一款免费的 Chrome 插件，利用 AI 改变你的学习和研究方式，提供了回答学术问题、总结研究论文、解释复杂概念、创建测试题，以及协助撰写论文等功能。',
    tags: [
      'GPT4',
      '16w+用户',
      '谷歌插件'
    ]
  },
  {
    name: 'HD TLive',
    home_link: 'https://hdedu.ai',
    cover: 'https://ik.imagekit.io/junxio/tr:w-652/projects/hd-tlive.png',
    cover_back: 'https://fakeimg.pl/200x150/?text=HD TLive',
    desc: 'HD TLive 基于腾讯云实时音视频、白板互动和即时通讯基础服务，提供了丰富的教学工具，包括白板演示、屏幕共享、聊天 IM 和直播录制回放等功能，师生拥有稳定流畅的线上教学环境，近乎线下的课堂体验。',
    tags: [
      'TRTC',
      '同屏连麦',
      '云录制',
      '聊天室'
    ]
  },
  {
    name: 'OKKI CRM',
    home_link: 'https://www.xiaoman.cn/zh-cn/products.html',
    cover: 'https://ik.imagekit.io/junxio/tr:w-652/projects/okki-crm.jpg',
    cover_back: 'https://fakeimg.pl/200x150/?text=OKKI CRM',
    desc: 'OKKI CRM 是一款客户关系管理软件，帮助企业管理客户互动和关系。其主要功能包括客户数据管理、销售管理、市场营销自动化、客户支持以及分析与报告，旨在提高客户满意度和销售业绩。',
    tags: [
      '阿里国际站 SasS',
      '外贸工具'
    ]
  }
]

export default function Projects () {
  return (
    <div className='page-projects'>
      <div className="projects-wrapper">
        <h2 className='text-center text-4xl mt-10 mb-16 drop-shadow-lg'>
          Project Space
        </h2>

        <div className='card-project-wrapper'>
          {
            myProjects.map((item) => (
              <Link href={item.home_link} target='_blank' key={item.name}>

                <div className="card-project">
                  <div className="name">{item.name}</div>

                  <div className="cover">
                    <Skeleton width='100%' height='100%'>
                      <Image
                        src={item.cover}
                        fill
                        loading='lazy'
                        alt='cover-project'
                      />
                    </Skeleton>
                  </div>

                  <div className="desc">{item.desc}</div>

                  <div className='tags'>
                    {item.tags.map((item, i) => (
                      <div
                        key={`tag-${i}-${item}`}
                        className='tag'
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

              </Link>
            ))
          }
        </div>

      </div>
    </div>
  )
}
