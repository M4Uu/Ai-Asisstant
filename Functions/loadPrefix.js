async function loadPrefix(client) {
    
        const ascii = require('ascii-table');
        const fs = require('fs');
        const table = new ascii().setHeading('Commands','Status');
        await client.commands. clear();

        const commandFolder = fs.readdirSync('./Prefix');
        for (const folder of commandFolder) {
            const commandFiles = fs.readdirSync(`./Prefix/${folder}`).filter((file)=> file.endsWith('.js'));
            for (const file of commandFiles) {
                const commandFile = require(`../Prefix/${folder}/${file}`);
    
                const properties = {folder, ...commandFile};
                client.commands.set(commandFile.name, properties);
    
                
                client.on('messageCreate', async message => {
                    const prefix = 'ai!';
                    
                    if (message.content.startsWith(prefix) || !message.author.bot) {
                        const args = message.content.slice(prefix.length).trim().split(/ +/);
                        const prefixcmd = args.shift().toLowerCase();
                        if(commandFile.name === prefixcmd)
                            commandFile.run(client, message)
                        }
                });
                table.addRow(file,'Loaded');
                continue;
            }
        }
        
        
        return console.log(table.toString(),"\nLoaded Prefix Commands");
}

module.exports = { loadPrefix }