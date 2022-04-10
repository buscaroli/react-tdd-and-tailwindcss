import { screen, render } from '@testing-library/react'

import Joke from './Joke'

test('a title is displayed from the server', () => {
  render(<Joke />)

  // search an element that has a role of img and an alt text of 'random dog'
  const jokeTitle = screen.getByRole('heading', { level: 3 })
  expect(jokeTitle).toBeInTheDocument()
})

test('the component is displaying the element with the text', () => {
  render(<Joke />)

  const jokeText = screen.getByTestId('joketext')
  expect(jokeText).toBeInTheDocument()
})

test('the component is displaying an element with a class of "grow"', () => {
  render(<Joke />)

  const jokeText = screen.getByTestId('joketext')
  expect(jokeText).toHaveClass('grow')
})
