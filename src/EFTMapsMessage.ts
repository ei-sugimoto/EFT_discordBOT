import { GatewayIntentBits, Client, Partials, Message, MessageManager} from 'discord.js'
import {match} from 'ts-pattern'

export type Map = 'reserve' | 'woods' | 'lighthouse' | 'customs' | 'shoreline' | 'interchange'

export class EFTMapsMessage {

    public async sendMap(message: Message, map: Map): Promise<void> {
        if (message.author.bot) return
        if(message.content.startsWith('!map')){
            const map = message.content.split(' ')[1] as Map
            match(map)
            .with('reserve', () => message.channel.send({files: ['src/images/RESERVE.jepg']}))
            .with('woods', () => message.channel.send({files: ['src/images/WOODS.webp']}))
            .with('lighthouse', () => message.channel.send({files: ['src/images/LIGHTHOUSE.webp']}))
            .with('customs', () => message.channel.send({files: ['src/images/CUSTOMS.webp']})) 
            .with('shoreline', () => message.channel.send({files: ['src/images/SHORELINE.webp']}))
            .with('interchange', () => message.channel.send({files: ['src/images/INTERCHANGE.webp']}))
            .otherwise(() => message.channel.send('reserve, woods, lighthouse, customs, shoreline, interchange'))
        }
        }
}