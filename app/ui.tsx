'use client'

export * from '@geist-ui/core'

import styles from '@/app/styles/ui.module.scss'
import clsx from 'clsx'

export const DotList = ({ num, className }: {
  num?: number
  className?: string
}) => (
  <div
    className={clsx([
      styles['dot-list'],
      className
    ])}
    style={{
      // @ts-expect-error
      '--list-num': typeof num === 'number'
        ? `"${num}."`
        : null
    }}
  ></div>
)
