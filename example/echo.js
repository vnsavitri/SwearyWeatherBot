'use strict'
const http = require('http')
const Bot = require('../')

let bot = new Bot({
  token: 'EAAKrRZB8LyN4BAHsAmEau03vrCgoQe8LZAEk6PaXLsL7ZBaZB4ZAvdldzbkWaVkb5VaD7mO7JqWpcGkZBOpQsSZCbulxEYwEMUTVSzX1V2yBRYCt246fZCV1zOxroHJHMKZB1fj4pNOyJsEmpyBOe1WN37ex4ZAfplCoUR2SjlYoFJQgZDZD',
  verify: 'just_do_it',
  app_secret: '539ba5eb824a3d78d208b1a8bbfcfa69'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000)
console.log('Echo bot server running at port 3000.')
