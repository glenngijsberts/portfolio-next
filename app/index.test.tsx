import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home', () => {
  it('renders without crashing', async () => {
    render(await Home())

    const heading = screen.getByRole('heading', {
      name: /Glenn Gijsberts/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
