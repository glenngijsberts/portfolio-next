import { render, screen } from '@testing-library/react'
import { Button } from '.'

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button>Button</Button>)

    const button = screen.getByRole('button', {
      name: /Button/i,
    })

    expect(button).toBeInTheDocument()
  })
})
