import Image from 'next/image'
import photo from '~/public/images/glenngijsberts.webp'
import styles from './header.module.css'

interface Props {
  title: string
}

export const Header = ({ title }: Props) => (
  <header className={styles.header}>
    <Image className={styles.image} src={photo} alt="Photo of Glenn Gijsberts" priority />

    <h1 className={styles.title}>{title}</h1>
  </header>
)
