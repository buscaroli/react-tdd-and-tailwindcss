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

export const getData = async (target) => {
  try {
    const response = await axios.get(data[target]['url'])
    if (response.status >= 200 && response.status < 300) {
      // console.log('response: ', response.data)
      return response.data
    } else {
      // console.log('response error: ', response.data)
      return { error: 'Something went wrong trying to fetch data.' }
    }
  } catch (error) {
    // console.log('api catch error: ', error)
    return { error }
  }
}
