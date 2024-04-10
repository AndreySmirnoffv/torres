const { startKeyboard } = require("../keyboard/keyboard")

async function checkSub(bot, msg){
    try{
        const chatMember = await bot.getChatMember('-1002056424069', msg.message.from.id);
        if (chatMember && (chatMember.status === "member" || chatMember.status === "administrator" || chatMember.status === "creator")) {
            await bot.sendMessage(msg.message.chat.id, "Привет, я Безумная Нейросеть, и я готова помогать тебе абсолютно бесплатно. На сегодня я умею:\n-отвечать на любые текстовые запросы\n- генерировать фото по некоторым запросам.\nОсталось всего пару кликов.", startKeyboard)
        }
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    checkSub: checkSub
}