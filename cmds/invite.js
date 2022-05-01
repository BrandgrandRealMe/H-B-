var bowner = '531186390717825074';
const links = require('../links.json');
module.exports = {
  catagory: 'bot',
  name: 'invite',
  desc: 'Get The Bots Invite!',
  aliases: ['inv'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member, mpembed) => {
  const embed = [{
    color: 16295218,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },

    title: "Support Server!",
    description: "**ᛃHʏᴘᴇTᴇᴀᴍᛃ**\n```fix\nᛃHʏᴘᴇTᴇᴀᴍᛃ is the support server for HʏᴘᴇBᴏᴛ a simple multifunction fun bot. And place to hang out and have fun. We do polls, game, and more. \nWe have channels for Images, Memes, Links, Self-Promo, Global chat, and more.\nWhat are you waiting for join and have fun!```\n**What to expect**\n```fix\n⭐ Fun things to do.\n⭐ Prioritized feedback.\n⭐ Places to share your memes.\n```",
    timestamp: new Date(),
    footer: {
      text: "//help"
    }
  }]


    client.api.channels[message.channel.id].messages.post({data: {
 "embeds": embed,
 "components": [
 {
 "type": 1,
 "components": [
{
 "type": 2,
 "label": "Invite The Bot!",
 "style": 5,
 "url": `${links.botinv}`
 },
   {
 "type": 2,
 "label": "Join Support!",
 "style": 5,
 "url": `${links.supportinv}`
 },
 {
 "type": 2,
 "label": "Website!",
 "style": 5,
 "url": "https://hypebot.brandgrand.tech"
 },
 {
 "type": 2,
 "label": "Top.gg | Server",
 "style": 5,
 "url": "https://top.gg/servers/746032875799052329"
 },
 {
 "type": 2,
 "label": "Top.gg | Bot",
 "style": 5,
 "url": "https://top.gg/bot/745786473554378832"
 }
 ]

 }
 ]
}})

if (message.deletable) return message.delete();
}};