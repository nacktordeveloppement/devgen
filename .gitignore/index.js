const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const db = low(adapter)

db.defaults({ histoires : []});


var bot = new Discord.Client();
var prefix = ("*");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'prefix : *, bot by DevGen', type: 0}});
    console.log("Bot ready !");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if(message.content === prefix + "ping"){
        message.reply("pong");
        console.log('ping pong');
    }

    if(message.content === prefix + "help"){

        var help_embed = new Discord.RichEmbed()
            .setColor('#E20808')
            .addField("*help: ", "   -Affiche les commandes du bot")
            .addField("*ping: ", "   -le bot répond par pong !")
            .setTitle("COMMANDES DU BOT !")
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes du bot :\n -help pour afficher les commandes");
        console.log("Commande d'help demandée!");
    }
});
