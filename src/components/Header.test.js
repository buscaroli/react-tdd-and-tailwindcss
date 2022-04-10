import { screen, render } from '@testing-library/react'
import Header from './Header'

test('the component is displayed', () => {
  render(<Header title="TailwindCSS and TDD" />)
  const header = screen.getByRole('heading', { level: 1 })
  expect(header).toBeInTheDocument()
})

test('the component has a class of grow-0', () => {
  render(<Header title="TailwindCSS and TDD" />)
  const header = screen.getByRole('heading', { level: 1 })
  expect(header).toHaveClass('grow-0')
})

test('the component has the expected title', () => {
  render(<Header title="TailwindCSS and TDD" />)
  const header = screen.getByRole('heading', { level: 1 })
  expect(header).toHaveTextContent('TailwindCSS and TDD')
})
