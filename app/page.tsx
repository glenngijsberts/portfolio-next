import { Header } from '~/components/Header'
import styles from './page.module.css'
import { Section } from '~/components/Section'

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
      </Section>
    </main>
  )
}

export default Home
