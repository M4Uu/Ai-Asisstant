const { Client, GatewayIntentBits, Partials, Collection, ActivityType } = require("discord.js");
const config = require("../config.json");
const {loadEvents} = require('../Functions/loadEvents.js');
const {loadCommands} = require('../Functions/loadCommands.js');
const {loadPrefix} = require('../Functions/loadPrefix');


const client = new Client({
     intents: [
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
     ],

     partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.GuildScheduledEvent,
        Partials.Message,
        Partials.Reaction,
        Partials.ThreadMember,
        Partials.User,
     ]
});

client.commands = new Collection ();
client.events = new Collection ();
client.prefix = new Collection ();
client.setMaxListeners(0);

client.on("ready", () =>{
    client.user.setActivity(`Cyberpunk: Edgerunner 💔 `, { type : ActivityType.Watching});
    client.user.setStatus('idle');
    console.log(`¡${client.user.tag} al servicio!`);
});

client.login(config.token).then(async () => {
    await loadEvents(client)
    await loadCommands(client)
    await loadPrefix(client)
}).catch((err) => {
    console.log(err);
});