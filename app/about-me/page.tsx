import { Header } from '~/components/Header'
import { Section } from '~/components/Section'
import { Button } from '~/components/Button'
import Link from 'next/link'
import styles from './about.module.css'
import { GetPageInfoDocument } from '~/graphql/getPageInfo'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getClient } from '~/lib/apolloClient'

const AboutMe = async () => {
  const { data } = await getClient().query({
    query: GetPageInfoDocument,
    variables: {
      id: '5KoQznZaM11LaYYp2Y5IOc',
    },
  })

  return (
    <>
      <Header title={data?.website?.title || 'About me'} />

      <Section>
        {data?.website?.description && documentToReactComponents(data?.website?.description.json)}

        <a href="/glenngijsberts-resume.pdf">
          <Button>Download my resume</Button>
        </a>
      </Section>

      <footer className={styles.footer}>
        <Link href="/">&larr; Back to home</Link>
      </footer>
    </>
  )
}

export default AboutMe
