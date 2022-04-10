import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the App component', () => {
  render(<App />)
  const id = screen.getByTestId('container')
  expect(id).toBeInTheDocument()
})

test('component has a class of flex', () => {
  render(<App />)
  const id = screen.getByTestId('container')
  expect(id).toHaveClass('flex')
})
