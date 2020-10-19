module.exports = {

    run: async(client, message) => {
      const player = message.client.manager.players.get(message.guild.id);
      if (!player) return message.reply("I have not joined a channel because I have nothing to play. Use the play command to play the song.");
  
      const { channel } = message.member.voice;
      
      if (!channel) return message.reply("You need to join a voice channel.");
      if (channel.id !== player.voiceChannel) return message.reply("You're not in the same voice channel.");
      if (player.paused) return message.reply("The player is already paused.");
  
      player.pause(true);
      return message.reply("Paused the player.");
    },
help: {
    name: 'pause',
    aliases: ["pause"]
    }
    }
