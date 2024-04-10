const TelegramApi = require('node-telegram-bot-api')
const {keyboard} = require('./assets/keyboard/keyboard')
const { checkSub } = require('./assets/scripts/logic')
const bot = new TelegramApi('6994173540:AAHes5TMu_jC3avMh63n90WsfRshBR6Wnk0', {polling: true})

bot.on('message', async msg => {
    if(msg.text === '/start'){
        await bot.sendMessage(msg.chat.id, "Подпишись на наш тг канал, чтобы пользоваться ботом", keyboard)
    }
})

bot.on('callback_query', async msg => {
    if(msg.data === 'checksub'){
        checkSub(bot, msg)
    }
})


bot.on('polling_error', console.log)