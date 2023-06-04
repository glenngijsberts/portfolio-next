import { ReactNode } from 'react'
import styles from './section.module.css'

interface Props {
  children: ReactNode
}

export const Section = ({ children }: Props) => (
  <section className={styles.section}>{children}</section>
)
