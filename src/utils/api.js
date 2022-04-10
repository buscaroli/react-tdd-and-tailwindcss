const { default: axios } = require('axios')

const data = {
  pet: {
    url: 'https://dog.ceo/api/breeds/image/random',
  },
  joke: {
    url: 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,explicit&type=single',
  },
  coin: {
    url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=gbp&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false',
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
