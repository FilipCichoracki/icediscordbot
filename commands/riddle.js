module.exports = {
    name : 'riddle',
    description : "Send out a riddle to the channel",
    execute(message, args, Discord){
        message.channel.send('I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?');
    }
}