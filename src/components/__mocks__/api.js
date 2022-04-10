const { default: axios } = require('axios')

export const getData = (target) => {
  switch (target) {
    case 'pets':
      return {
        message:
          'https://images.dog.ceo/breeds/terrier-american/n02093428_12462.jpg',
        status: 'success',
      }
    case 'joke':
      return {
        error: false,
        category: 'Programming',
        type: 'single',
        joke: 'A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says "Can\'t you see the warning on the cigarette pack? Smoking is hazardous to your health!" to which the man replies, "I am a programmer.  We don\'t worry about warnings; we only worry about errors."',
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 38,
        safe: true,
        lang: 'en',
      }
    case 'coin':
      return {
        bitcoin: {
          gbp: '33218',
        },
      }
    default:
      return
  }
}
