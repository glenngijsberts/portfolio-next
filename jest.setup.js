import '@testing-library/jest-dom/extend-expect'

jest.mock('./lib/apolloClient', () => {
  return {
    __esModule: true,
    getClient: () => ({
      query: () => ({
        data: {
          website: {
            title: 'Glenn Gijsberts',
          },
        },
      }),
    }),
  }
})
