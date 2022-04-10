import { rest } from 'msw'

export const handlers = [
  rest.get('https://dog.ceo/api/breeds/image/random'),
  (req, res, ctx) => {
    return res(
      ctx.json([
        {
          message:
            'https://images.dog.ceo/breeds/mastiff-bull/n02108422_4445.jpg',
          status: 'success',
        },
        {
          message:
            'https://images.dog.ceo/breeds/terrier-lakeland/n02095570_2127.jpg',
          status: 'success',
        },
        {
          status: 'error',
          message:
            'No route found for "GET /api/breeds/image/random2" with code: 0',
          code: 404,
        },
      ])
    )
  },
]
