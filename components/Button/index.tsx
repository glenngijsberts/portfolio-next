import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './button.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({ children, ...props }: Props) => (
  <button className={styles.button} {...props}>
    {children}
  </button>
)
