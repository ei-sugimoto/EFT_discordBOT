//必要なパッケージをインポートする
import { GatewayIntentBits, Client, Partials, Message, MessageManager} from 'discord.js'
import dotenv from 'dotenv'
import {EFTMapsMessage, Map} from './EFTMapsMessage'


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
    const eftMapsMessage = new EFTMapsMessage()
    const map = message.content.split(' ')[1] as Map
    eftMapsMessage.sendMap(message, map)
})  


//ボット作成時のトークンでDiscordと接続
client.login(process.env.TOKEN)
