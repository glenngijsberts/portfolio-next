import { Header } from '~/components/Header'
import styles from './page.module.css'
import { Section } from '~/components/Section'
import { Button } from '~/components/Button'
import Link from 'next/link'
import { getClient } from '~/lib/apolloClient'
import { WebsiteEntryQueryDocument } from '~/graphql/getWebsiteInfo'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

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

const Home = async () => {
  const { data } = await getClient().query({
    query: WebsiteEntryQueryDocument,
    variables: {
      id: process.env.CF_WEBSITE_ID as string,
    },
  })

  return (
    <>
      <Header title={data?.website?.title || 'Glenn Gijsberts'} />

      <Section>
        {data?.website?.description && documentToReactComponents(data?.website?.description.json)}

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
    </>
  )
}

export default Home
