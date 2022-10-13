const request = require("request");
var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
const sub = "BirdPhotography"

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
  catagory: 'reddit',
  name: 'birbpic',
  desc: 'Get a random post from r/BirdPhotography',
  aliases: ["birb", "birds", "birbs", "bird"],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
 // levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
       // start
const embed = new Discord.MessageEmbed();
      
message.channel.startTyping();
      
request({
    uri: "https://www.reddit.com/r/" + sub + "/random/.json", // URL
    json: true
}, (error, response, body, json) => {


    const [list] = response.body;
    const [post] = list.data.children;
    
    const permalink = post.data.permalink;
    const postUrl = `https://reddit.com${permalink}`;
    const postImage = post.data.url;
    const postTitle = post.data.title;
    const postUpvotes = post.data.ups;
    const postNumComments = post.data.num_comments;
    const postAuthor = post.data.author;
    const postDesc = post.data.selftext;
  
    embed.setTitle(`${postTitle}`);
    embed.setAuthor(postAuthor);
    embed.setThumbnail('https://styles.redditmedia.com/t5_397f2/styles/communityIcon_5pfhcg74cst31.png')
    embed.setDescription(postDesc);
    embed.setURL(`${postUrl}`);
    embed.setColor(16295218);

  
    if ( isValidImageURL(postImage) ){
      embed.setImage(postImage);
    }

    function isValidImageURL(str){
        if ( typeof str !== 'string' ) return false;
        return !!str.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi);
    }
    embed.setFooter(`👍 ${postUpvotes} 💬 ${postNumComments} | ` + "Provided by r/" + sub);
    message.channel.send(embed);

    message.channel.stopTyping();
});

      //end
 if (message.deletable) return message.delete();
}};