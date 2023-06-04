import { ReactNode } from 'react'
import styles from './pageLayout.module.css'

interface Props {
  children: ReactNode
}

export const PageLayout = ({ children }: Props) => (
  <main className={styles.pageLayout}>{children}</main>
)
