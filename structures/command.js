const { readdirSync } = require("fs")

module.exports = (client) => {
    const load = dirs => {
        const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of commands) {
            let props = require(`../commands/${dirs}/${file}`);
            client.modules.set(props.help.name, props);
          };
        };
        ["music"].forEach(x => load(x));
    	console.log(`${client.modules.size} commands have been loaded`)
};
