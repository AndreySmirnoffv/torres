module.exports = {
    keyboard: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "Подписаться", url: "t.me/+qGqHrwBiSCthZTNi"}],
                [{text: "Я подписался", callback_data: "checksub"}]
            ]
        })
    },
    startKeyboard: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "Начать", url: "t.me/AI_Generation17_bot"}]
            ]
        })
    }
}