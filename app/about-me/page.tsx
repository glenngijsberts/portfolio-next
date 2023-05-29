import { Header } from '~/components/Header'
import styles from './about-me.module.css'
import { Section } from '~/components/Section'
import { Button } from '~/components/Button'

const AboutMe = () => (
  <main className={styles.pageLayout}>
    <Header />

    <Section title="About me">
      <p>
        I&apos;m 27 years old and originally from{' '}
        <a href="https://en.wikipedia.org/wiki/The_Hague">The Hague</a>. I&apos;m now living in{' '}
        <a href="https://en.wikipedia.org/wiki/Amsterdam">Amsterdam</a>, working at TicketSwap as
        front-end developer. I&apos;ve started learning web development in 2012 during my studies.
        After doing several internships, I&apos;ve started working as a front-end developer in 2016
        at <a href="https://sqits.nl/">Sqits</a>.
      </p>

      <p>
        In 2020 I graduated as Interaction Designer at The Hague University. In the meantime
        I&apos;ve kept working as front-end developer, gaining experience in various stacks and
        doing multiple projects. I&apos;ve experience in modern technologies like{' '}
        <a href="https://stackshare.io/glenngijsberts">
          React, Vue, TypeScript, GraphQL, Contentful, and more
        </a>
        .
      </p>

      <p>
        Currently I&apos;m working at <a href="https://www.ticketswap.com">TicketSwap</a> in the
        growth team. Projects I did includes several integrations with third-party services like
        Google, Spotify and Optimizely, but also building new product features and maintaing the
        existing codebase.
      </p>

      <a href="/glenngijsberts-resume.pdf">
        <Button>Download my resume</Button>
      </a>
    </Section>
  </main>
)

export default AboutMe
