  const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
var bowner = '531186390717825074';
// levels
const level = 1 // 0 Disabled | 1 Enabled | 2 Testing | 3 Debug | 4 Developer Only
const status = {
  0: "Disabled",
  1: "Enabled",
  2: "Testing",
  3: "Debug",
  4: "Developer Only",
}

module.exports = {
  status,
  level,
  catagory: 'mod',
  name: 'ban',
  desc: 'Ban Someone!',
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
// levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
 if (!message.member.hasPermission('BAN_MEMBERS') && !bowner.includes(message.author.id)) return message.reply(mpmsg);
      if (!message.guild) return;
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'Banned!',
          })
          .then(() => {
            message.reply(`I Have Banned ${user.tag}!`);
          })
          .catch(err => {
            message.reply('I Faild To Ban That User!');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this server!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  
if (message.deletable) return message.delete();
}};