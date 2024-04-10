const { startKeyboard } = require("../keyboard/keyboard")

async function checkSub(bot, msg){
    try{
        const chatMember = await bot.getChatMember('@ai_midjourney017', msg.message.chat.id);
        if (chatMember && (chatMember.status === "member" || chatMember.status === "administrator" || chatMember.status === "creator")) {
            await bot.sendMessage(msg.message.chat.id, "Привет, я Безумная Нейросеть, и я готова помогать тебе абсолютно бесплатно. На сегодня я умею:\n-отвечать на любые текстовые запросы\n- генерировать фото по некоторым запросам.\nОсталось всего пару кликов.", startKeyboard)
        }else{
            await bot.sendMessage(msg.message.chat.id, "Вы не подписаны на канал вам надо подписаться чтобы пройти дальше")
        }
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    checkSub: checkSub
}