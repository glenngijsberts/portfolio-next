import { render, screen } from '@testing-library/react'
import { Section } from '.'

describe('Section', () => {
  it('renders without crashing', () => {
    render(<Section title="Test">Test</Section>)

    const title = screen.getByRole('heading', {
      name: /Test/i,
    })

    expect(title).toBeInTheDocument()
  })
})
