import { render, screen } from '@testing-library/react'
import { Section } from '.'

describe('Section', () => {
  it('renders without crashing', () => {
    render(<Section>Test</Section>)

    const title = screen.getByText(/Test/i)

    expect(title).toBeInTheDocument()
  })
})
