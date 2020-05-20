const botconfig = require("./botconfig.json")
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone:  true});

bot.on("ready", async () =>{
    console.log(`${bot.user.username} is \status!`)
    bot.user.setActivity("Powerd by Stack. https://discord.gg/NmDjmqR", {type: "PLAYING"});
})


bot.on("guildMemberAdd", async member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome")
    if(!channel) return;

    channel.send(`Welcome to our ${message.guild.name}, this is a test`)
    member.send("Welcome this is a test!")
})
    

bot.on("message", async message => {
       if(message.author.bot || message.channel.type === "dm") return;

       let prefix = botconfix.prefix;
       let messageArray = message.content.split(" ")
       let cmd = messageArray[0];
       let args = messageArray.slice[0];

       if(cmd === `${prefix}hello`){
           return message.channle.send("Hello")
       }
    })

bot.login(botconfig.token);