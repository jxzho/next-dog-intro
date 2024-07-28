import React from 'react'
import styles from '@/app/styles/ui.module.scss'

export function Skeleton (props: {
  width: string | number
  height: string | number
  children?: React.ReactNode
}) {
  return (
    <div className={styles.skl} style={{ width: props.width, height: props.height }}>
      {props.children}
    </div>
  )
}
