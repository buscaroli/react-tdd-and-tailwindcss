const { default: axios } = require('axios')

const data = {
  monster: {
    url: 'https://app.pixelencounter.com/api/basic/svgmonsters?primaryColor=string',
  },
  pet: {
    url: 'https://dog.ceo/api/breeds/image/random',
  },
  joke: {
    url: 'https://api.chucknorris.io/jokes/random',
  },
  coin: {
    url: 'https://api.coingecko.com/api/v3/coins/bitcoin',
  },
}

export const getData = (target) => {
  switch (target) {
    case 'pets':
      return {
        message:
          'https://images.dog.ceo/breeds/terrier-american/n02093428_12462.jpg',
        status: 'success',
      }
    default:
      return
  }
}
