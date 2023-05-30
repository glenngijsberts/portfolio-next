import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'graphql/schema.json',
  documents: 'graphql/**/*.graphql',
  generates: {
    'graphql/types.ts': { plugins: ['typescript'] },
    'graphql/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.tsx',
        baseTypesPath: 'types.ts',
      },
      plugins: ['typescript-operations', 'typed-document-node'],
    },
  },
}
export default config
