import { render, screen } from '@testing-library/react'
import Pets from './Pet'

test('an image is displayed from the server', () => {
  render(<Pets />)

  // search an element that has a role of img and an alt text of 'random dog'
  const picture = screen.getByRole('img', { name: /random/i })
  expect(picture).toBeInTheDocument()
})

test('image has a class of rounded-full', () => {
  render(<Pets />)

  // search an element that has a role of img
  const picture = screen.getByRole('img')
  expect(picture).toHaveClass('rounded-full')
})

test('image has an alt property of "random dog"', () => {
  render(<Pets />)

  // search an element that has a role of img
  const picture = screen.getByRole('img')
  expect(picture).toHaveProperty('alt', 'random dog')
})
