const Discord = require('discord.js');

const prefix = ';';

module.exports = async (client, message) => {

 try {

  if (message.author.bot) return;

  if (!message.guild) return;

  if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {

   const embed = new Discord.MessageEmbed()

    .setTitle(`Hi!`, message.guild.iconURL())

    .setColor('RANDOM')

    .setDescription("I'm a " + client.user.username + "! My prefix is \`" + prefix + "\` To see all commands please type \`" + prefix + " help\`")

    .setTimestamp()

   message.channel.send(embed);

  }

  if (!message.content.startsWith(prefix)) return;

  if (!message.member) message.member = await message.guild.fetchMember(message);

  const [cmd, ...args] = message.content

  .toLowerCase()

  .slice(prefix.length).trim().split(/ +/g);

  let command = client.modules.find((c) => c.help.aliases && c.help.aliases.includes(cmd));

  if (command) {

   command.run(client, message, args);

  }

 } catch (err) {

  console.log(err);

  message.channel.send({embed: {

   color: 16734039,

   description: "That command does not exist, Take a look at " + `${prefix}` + " help!"

  }});

 }

}
