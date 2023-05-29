import { Header } from '~/components/Header'
import styles from './page.module.css'
import { Section } from '~/components/Section'
import { Button } from '~/components/Button'
import Link from 'next/link'

const links = [
  {
    title: 'GitHub',
    href: 'https://www.github.com/glenngijsberts',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/glenn-gijsberts-0341a463/',
  },
  {
    title: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/5503094/giesburts',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/giesburts',
  },
]

const Home = () => {
  return (
    <main className={styles.pageLayout}>
      <Header />

      <Section title="Glenn Gijsberts">
        <p>
          Graduated as{' '}
          <a href="https://www.thuas.com/programmes/bachelors/user-experience-design">
            interaction designer
          </a>
          , now working as front-end developer on modern and user-friendly websites and apps.
          Currently I&apos;m working in the growth team of{' '}
          <a href="https://www.ticketswap.com">TicketSwap</a> and helping out as homework support
          volunteer at <a href="https://www.hackyourfuture.net/">HackYourFuture</a>.
        </p>

        <Link href="/about-me">
          <Button>Learn more about me</Button>
        </Link>

        <ul className={styles.links}>
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  )
}

export default Home
