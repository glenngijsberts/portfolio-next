import Image from 'next/image'
import photo from '~/public/images/glenngijsberts.webp'
import styles from './header.module.css'

export const Header = () => (
  <header>
    <Image className={styles.image} src={photo} alt="Photo of Glenn Gijsberts" priority />
  </header>
)
