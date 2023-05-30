const { getIntrospectionQuery } = require('graphql')
const fs = require('fs')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
  path: path.resolve(process.cwd(), '.env.local'),
})

const destination = path.resolve('./graphql/schema.json')
const endpoint = `${process.env.CF_API_BASE_URL}/${process.env.CF_SPACE_ID}/?access_token=${process.env.CF_API_TOKEN}`

const run = async () => {
  const data = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getIntrospectionQuery(),
    }),
  }).then(res => res.json())

  const { data: schemaString } = data

  fs.writeFileSync(destination, JSON.stringify(schemaString, null, 2), { flag: 'w' })
}

run()
