module.exports.run = (bot, message, args) => {
    var num = Math.round((Math.random() * 2) + 1);
    if (num === 1) {
        message.react("✅").catch(console.error);
        message.channel.send(`**You were snapped.** You have had the privilege of being saved by the Great Titan. You took it.`);
    }
    else if (num === 2) {
        message.react("❌").catch(console.error);
        message.channel.send(`**You were spared.** You have had the privilege of being saved by the Great Titan. You did not take it.`);
    }
};