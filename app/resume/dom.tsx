'use client'

import { useEffect, useState, useRef } from 'react'
import { copyToClipboard } from '@/app/utils/client'

const isBackwards = ({ anchorNode, anchorOffset, focusNode, focusOffset }: Selection) => {
  let range = document.createRange()
  range.setStart(anchorNode!, anchorOffset)
  range.setEnd(focusNode!, focusOffset)

  let backwards = range.collapsed
  range.detach()
  return backwards
}

export default function Dom () {
  const [visible, setVisible] = useState(false)
  const [text, setText] = useState('')
  const [rect, setRect] = useState<null | DOMRect>(null)
  const refEleLocator = useRef<null | HTMLElement>(null)
  const [isCopied, setCopied] = useState(false)
  const timerCopy = useRef<null | number>(null)

  const [isbw, setIsBackward] = useState<boolean | null>(null)

  const cleanData = () => {
    document.getSelection()?.removeAllRanges()
    setVisible(false)
    setIsBackward(false)
    refEleLocator.current!.remove()
    setText('')
    setRect(null)
  }

  const startCopy = async () => {
    await copyToClipboard(text.trim())
    setCopied(true)
  }

  const onSelectEnd = () => {
    const selection = document.getSelection()
    
    // No selection return
    if (!selection || selection?.isCollapsed || selection.rangeCount <= 0 || selection.type !== 'Range') {
      return
    }

    const isBackward = isBackwards(selection)
    setIsBackward(isBackward)

    const range = selection.getRangeAt(0)

    const rangeRects = range.getClientRects()
    // 前往后：取 last
    // 后往前：取 first

    const isSingleLine = rangeRects.length === 1 || (
      rangeRects[0].top === rangeRects[rangeRects.length - 1].top
    )

    let startRect: DOMRect
    let endRect: DOMRect

    if (isSingleLine) {
      const _rect = rangeRects[0]
      startRect = {
        ..._rect,
        y: _rect.y,
        top: _rect.top,
        x: isBackward ? _rect.x + _rect.width : _rect.x,
        left: isBackward ? _rect.left + _rect.width : _rect.left
      }

      endRect = {
        ..._rect,
        y: _rect.y,
        top: _rect.top,
        x: isBackward ? _rect.x : _rect.x + _rect.width,
        left: isBackward ? _rect.left : _rect.left + _rect.width
      }
    } else {
      /** multiple line */
      startRect = isBackward ? rangeRects[rangeRects.length - 1] : rangeRects[0]
      endRect = isBackward ? rangeRects[0] : rangeRects[rangeRects.length - 1]
    }

    const rectData = {
      isSingleLine,
      isBackward,
      startRect,
      endRect
    }

    const rangeCloned = range.cloneRange()
    rangeCloned.collapse(!!isBackward)
    rangeCloned.insertNode(refEleLocator.current!)
  
    const select = {
      rect: refEleLocator.current!.getBoundingClientRect(),
      text: selection.toString()
    }

    setText(select.text)
    setRect(select.rect)
    
    setVisible(true)
  }
  
  const onSelectStart = () => {
    cleanData()
  }
  
  useEffect(() => {
    refEleLocator.current = document.createElement('i')
    refEleLocator.current.classList.add('invisible')
    document.addEventListener('selectstart', onSelectStart)
    document.addEventListener('mouseup', onSelectEnd)
    document.addEventListener('scroll', cleanData)
    
    return () => {
      document.removeEventListener('selectstart', onSelectStart)
      document.removeEventListener('mouseup', onSelectEnd)
      document.addEventListener('scroll', cleanData)
    }
  }, [])

  useEffect(() => {
    if (visible) {
      timerCopy.current && window.clearTimeout(timerCopy.current)
    }
    setCopied(false)
  }, [visible])

  useEffect(() => {
    if (isCopied) {
      timerCopy.current = window.setTimeout(() => {
        setVisible(false)
        setIsBackward(null)
        timerCopy.current = null
      }, 2000)
    }
  }, [isCopied])

  return visible ? (
    <div
      className='fixed left-0 top-0 bg-white !m-0 px-2 py-1 border border-solid border-gray-300 transition-all rounded-md inline-flex items-center cursor-pointer select-none'
      style={{
        transform: rect
          ? `translate3d(
              ${Math.floor(rect.x + ( isbw ? -(65 + 5) : 5 ))}px,
              ${Math.round(rect.top - ( (29 - rect.height) / 2 ))}px,
              0
            )`
          : ''
      }}
      onClick={() => startCopy()}
    >
      {
        !isCopied
          ? <>
            <svg className='mr-1' strokeLinejoin="round" viewBox="0 0 16 16" width="12" height="12" style={{ color: 'currentcolor' }}><path fillRule="evenodd" clipRule="evenodd" d="M2.75 0.5C1.7835 0.5 1 1.2835 1 2.25V9.75C1 10.7165 1.7835 11.5 2.75 11.5H3.75H4.5V10H3.75H2.75C2.61193 10 2.5 9.88807 2.5 9.75V2.25C2.5 2.11193 2.61193 2 2.75 2H8.25C8.38807 2 8.5 2.11193 8.5 2.25V3H10V2.25C10 1.2835 9.2165 0.5 8.25 0.5H2.75ZM7.75 4.5C6.7835 4.5 6 5.2835 6 6.25V13.75C6 14.7165 6.7835 15.5 7.75 15.5H13.25C14.2165 15.5 15 14.7165 15 13.75V6.25C15 5.2835 14.2165 4.5 13.25 4.5H7.75ZM7.5 6.25C7.5 6.11193 7.61193 6 7.75 6H13.25C13.3881 6 13.5 6.11193 13.5 6.25V13.75C13.5 13.8881 13.3881 14 13.25 14H7.75C7.61193 14 7.5 13.8881 7.5 13.75V6.25Z" fill="currentColor"></path></svg>
            copy
          </>
          : <>
            <svg className='mr-1' strokeLinejoin="round" viewBox="0 0 16 16" width="12" height="12" style={{ color: 'currentcolor' }}><path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path></svg>
            <span className='text-green-500'>copied</span>
          </>
      }
    </div>
  ) : null
}
