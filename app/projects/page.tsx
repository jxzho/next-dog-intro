'use client'

import '@/app/styles/projects.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from '@/app/components/server/skeleton'
import { data_projects } from './data'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Projects () {
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    gsap.from(refs.current, {
      yPercent: '-20',
      duration: 0.56,
      opacity: 0,
      ease: 'back.out',
      stagger: {
        each: 0.2
      }
    })
  }, {
    dependencies: [refs]
  })

  return (
    <div className='page-projects'>
      <div className="projects-wrapper">
        <h2 className='text-center text-4xl mt-10 mb-16 drop-shadow-lg'>
          Project Space
        </h2>

        <div className='card-project-wrapper'>
          {
            data_projects.map((item, i) => (
              <Link href={item.home_link} target='_blank' key={item.name}>

                <div className="card-project" ref={el => { refs.current[i] = el }}>
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
