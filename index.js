const { Client, Collection } = require("discord.js");
const { token, nodes, spCID, spCS } = require('./config');
const fs = require("fs");
const client = new Client ();
client.modules = new Collection();
["command", "event"].forEach(x => require(`./structures/${x}`)(client));

client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./structures/${handler}`)(client);
});
const { Manager } = require("erela.js");
const Spotify  = require("erela.js-spotify");

  const clientID = spCID;
  const clientSecret = spCS;

  client.manager = new Manager({
    nodes,
    plugins: [ new Spotify({ clientID, clientSecret }) ],
    autoPlay: true,
    send: (id, payload) => {
      const guild = client.guilds.cache.get(id);
      if (guild) guild.shard.send(payload);
    }
  });


  
  client.manager.on("nodeConnect", node => {
      console.log(`Node "${node.options.identifier}" connected.`)
  })
  
  client.manager.on("nodeError", (node, error) => {
      console.log(`Node "${node.options.identifier}" encountered an error: ${error.message}.`)
  })
  
  client.on("raw", d => client.manager.updateVoiceState(d));

  client.manager.on("trackStart", (player, track) => {
    const channel = client.channels.cache.get(player.textChannel);
    channel.send(`Now playing: \`${track.title}\`, requested by \`${track.requester.tag}\`.`);
  });
  
  // Emitted the player queue ends
 client.manager.on("queueEnd", player => {
    const channel = client.channels.cache.get(player.textChannel);
    channel.send("Queue has ended.");
    player.destroy();
  });

client.login(token)
