const Discord = require('discord.js');

const prefix = '!';

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter( file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'riddle'){
        client.commands.get('riddle').execute(message, args, Discord);
    }

    if(command === 'verify'){
        client.commands.get('verify').execute(message, args, Discord);
    }

    if(command === 'embed'){
        client.commands.get('embed').execute(message, args, Discord);
    }
});


client.on('ready', () => {
    console.log('Up and ready to serve!');
});

client.login(process.env.token);