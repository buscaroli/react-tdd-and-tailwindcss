import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'

describe('Heading', () => {
  test('is displayed', () => {
    render(<Header title="TailwindCSS and TDD" bitcoin="32000" />)

    const header = screen.getByRole('heading', { level: 1 })
    expect(header).toBeInTheDocument()
  })

  test('has a class of grow-0', () => {
    render(<Header title="TailwindCSS and TDD" bitcoin="32000" />)

    const header = screen.getByRole('heading', { level: 1 })
    expect(header).toHaveClass('text-5xl')
  })

  test('has the expected title', () => {
    render(<Header title="TailwindCSS and TDD" bitcoin="32000" />)

    const header = screen.getByRole('heading', { level: 1 })
    expect(header).toHaveTextContent('TailwindCSS and TDD')
  })
})

describe('The theme', () => {
  test('has the sun icon displayed', () => {
    render(<Header title="TailwindCSS and TDD" bitcoin="32000" />)

    const icon = screen.getByTestId('sunicon')
    expect(icon).toBeInTheDocument()
  })

  test('has the moon icon displayed after the icon is clicked once', () => {
    render(<Header title="TailwindCSS and TDD" bitcoin="32000" />)

    const clickableContainer = screen.getByTestId('header-theme')
    userEvent.click(clickableContainer)

    const icon = screen.getByTestId('moonicon')
    expect(icon).toBeInTheDocument()
  })

  test('has the sun icon displayed after the icon is clicked twice', () => {
    render(<Header title="TailwindCSS and TDD" bitcoin="32000" />)

    const clickableContainer = screen.getByTestId('header-theme')
    userEvent.click(clickableContainer)
    userEvent.click(clickableContainer)

    const icon = screen.getByTestId('sunicon')
    expect(icon).toBeInTheDocument()
  })
})

describe('The bitcoin element', () => {
  test('is displayed', () => {
    render(<Header title="TailwindCSS and TDD" bitcoin="32000" />)

    const bitcoin = screen.getByTestId('header-bitcoin')
    expect(bitcoin).toBeInTheDocument()
  })

  test('has a price of 32000', () => {
    render(<Header title="TailwindCSS and TDD" bitcoin="32000" />)

    const bitcoin = screen.getByTestId('header-bitcoin')
    expect(bitcoin).toHaveTextContent('32000')
  })
})
