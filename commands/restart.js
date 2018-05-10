module.exports.run = {
    run: async (bot, message, args) => {
        await message.channel.send('Restarting Frost... **__This may take a while__**');
        process.exit(0);
    },
    meta: {
        aliases: ['restart', 'reboot'],
        ownerOnly: true,
        usage: ''
    }
}
  module.exports.help = {
  name: "restart"
}