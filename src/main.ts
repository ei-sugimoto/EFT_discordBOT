//必要なパッケージをインポートする
import { GatewayIntentBits, Client, Partials, Message, MessageManager} from 'discord.js'
import dotenv from 'dotenv'

//.envファイルを読み込む
dotenv.config()

//Botで使うGatewayIntents、partials
const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message, Partials.Channel],
})

//Botがきちんと起動したか確認
client.once('ready', () => {
    console.log('Ready!')
    if(client.user){
        console.log(client.user.tag)
    }
})


client.on('messageCreate', async (message: Message) => {
    if (message.author.bot) return
    if (message.content === '!reserve') {
       message.channel.send({files: ['./src/images/RESERVE.jpeg']});
    }
    if(message.content === '!woods'){
        message.channel.send({files: ['./src/images/WOODS.webp']});
    }
})


//ボット作成時のトークンでDiscordと接続
client.login(process.env.TOKEN)
