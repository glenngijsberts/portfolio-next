import { ReactNode } from 'react'
import styles from './section.module.css'

interface Props {
  children: ReactNode
  title: string
}

export const Section = ({ children, title }: Props) => (
  <section className={styles.container}>
    <h1>{title}</h1>

    {children}
  </section>
)
