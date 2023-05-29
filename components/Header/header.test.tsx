import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />)

    const image = screen.getByRole('img', {
      name: /Photo of Glenn Gijsberts/i,
    })

    expect(image).toBeInTheDocument()
  })
})
