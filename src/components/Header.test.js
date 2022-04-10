import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'

test('the heading is displayed', () => {
  render(<Header title="TailwindCSS and TDD" bitcoin="32000" />)

  const header = screen.getByRole('heading', { level: 1 })
  expect(header).toBeInTheDocument()
})

test('the heading has a class of grow-0', () => {
  render(<Header title="TailwindCSS and TDD" bitcoin="32000" />)

  const header = screen.getByRole('heading', { level: 1 })
  expect(header).toHaveClass('text-5xl')
})

test('the heading has the expected title', () => {
  render(<Header title="TailwindCSS and TDD" bitcoin="32000" />)

  const header = screen.getByRole('heading', { level: 1 })
  expect(header).toHaveTextContent('TailwindCSS and TDD')
})

test('the themes sun icon is displayed', () => {
  render(<Header title="TailwindCSS and TDD" bitcoin="32000" />)

  const icon = screen.getByTestId('sunicon')
  expect(icon).toBeInTheDocument()
})

test('the themes moon icon is displayed after icon is clicked once', () => {
  render(<Header title="TailwindCSS and TDD" bitcoin="32000" />)

  const clickableContainer = screen.getByTestId('header-theme')
  userEvent.click(clickableContainer)

  const icon = screen.getByTestId('moonicon')
  expect(icon).toBeInTheDocument()
})

test('the themes sun icon is displayed after icon is clicked twice', () => {
  render(<Header title="TailwindCSS and TDD" bitcoin="32000" />)

  const clickableContainer = screen.getByTestId('header-theme')
  userEvent.click(clickableContainer)
  userEvent.click(clickableContainer)

  const icon = screen.getByTestId('sunicon')
  expect(icon).toBeInTheDocument()
})

test('the element that shows the bitcoin price is displayed', () => {
  render(<Header title="TailwindCSS and TDD" bitcoin="32000" />)

  const bitcoin = screen.getByTestId('header-bitcoin')
  expect(bitcoin).toBeInTheDocument()
})

test('the element that shows the bitcoin price has a price of 32000', () => {
  render(<Header title="TailwindCSS and TDD" bitcoin="32000" />)

  const bitcoin = screen.getByTestId('header-bitcoin')
  expect(bitcoin).toHaveTextContent('32000')
})
