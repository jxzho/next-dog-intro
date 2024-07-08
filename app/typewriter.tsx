'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TextPlugin from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

export default function TypeWriter ({ selector, words }: {
  selector: string
  words: string[]
}) {
  useGSAP(() => {
    const tlMaster = gsap.timeline({ repeat: -1  })
    words.forEach((item) => {
      const tl = gsap.timeline({
        repeat: 1,
        repeatDelay: 0.68,
        yoyo: true,
      })
      tl.to(selector, {
        text: item,
        duration: 1.8,
        ease: 'power1.out'
      })
      tlMaster.add(tl)
    })
  }, [words])
  return null
}
