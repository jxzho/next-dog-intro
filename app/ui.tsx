'use client'

export * from '@geist-ui/core'

import styles from '@/app/styles/ui.module.scss'

export const DotList = ({ num }: { num?: number }) => (
  <div
    className={styles['dot-list']}
    style={{
      // @ts-expect-error
      '--list-num': typeof num === 'number'
        ? `"${num}."`
        : null
    }}
  ></div>
)
