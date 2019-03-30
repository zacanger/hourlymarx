const Twit = require('twit')
const quotes = require('fs')
  .readFileSync(require('path').resolve(__dirname, 'quotes.txt'))
  .toString()
  .split('\n')
  .filter(Boolean)

const config =  {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
}

const twitInstance = new Twit(config)

const generateStatus = () =>
  quotes[~~(Math.random() * quotes.length)]

twitInstance.post(
  'statuses/update',
  { status: generateStatus() },
  (err, data, response) => {
    if (err) {
      console.error(err)
    }
  }
)
