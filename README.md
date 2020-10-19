# Lavalink-Music-Bot
A small music bot using Lavalink (erela.js)

## Installation ##
1) Open the windows terminal, type ```git clone https://github.com/FC5570/Lavalink-Music-Bot.git```.
2) cd into your project, then type ```npm i```.
3) Wait for the Packages to install.
4) After the packages are installed, type node index.js to start your bot.

## Config and Self Hosting ##
### Config ###
1) Make a config.js file in the root folder with your bot token, it's prefix, the Spotify API Client ID and Client Secret and the lavalink nodes. Here's an example:

```javascript
exports.token = "Your bot token";
exports.prefix = ";";
exports.spCID =  "Client Id";
exports.spCS =  "Client Secret";
exports.nodes = [
    {
        port: "2333",
        host: "localhost",
        password: "youshallnotpass"
        },
    ]
```
1) **Token** is your Discord bot's token, which you can get at [Discord Developer Portal](https://discord.com/developers/applications). Go to this page and make a new application, name it and give it an avatar. Then click bot and click add bot. Then copy the token. This is your bots token.

2) **Prefix** prefix is a special character to which your bot will respond, it can be anything like !, ?, and #.

3) **spCID** is your Spotify application's client id. Which you can get at [Spotify Developer Portal](https://developer.spotify.com/dashboard/applications). Make a new application, give it a name, after that you'll be given a client id and client secret. 

4) **spCS** is your Spotify Application's Client Secret which you can get at the Spotify Developer Portal.

5) **nodes** are your lavalink connection details, the default port is ```2333```, host would be ```localhost``` and password would be ```youshallnotpass```. You need to get the details of your host's lavalink server from them if you're not localhosting your bot.

### Self Hosting ###
1) If you want to host an instance of this bot. Follow the Config steps above. I do not recommended using heroku or glitch to host this. You can use [Danbot Hosting](https://discord.com/invite/j5EnRwT) to host your bot. DanBot Hosting provides hosting for game servers and Discord Bots. However the lavalink details of DanBot are not the same. To get their host, port and password, you need to join their Discord server.


*You can always DM me on Discord (FC#5570) if you encounter any errors while starting the bot.*
