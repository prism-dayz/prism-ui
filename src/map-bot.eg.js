const { Client: DiscordClient, MessageAttachment } = require('discord.js')
const { createCanvas, loadImage } = require('canvas')

const discordClient = new DiscordClient({ partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER'] })
const client = discordClient
client.login(`ODA1OTMxNjU2Mjc0OTAzMDYw.YBiEWA.xcY7EEyn5qkVJfMcum7fLuEhCgU`)

client.once('ready', async () => {
  const channel = client.channels.cache
    .find(channel => `${channel.id}` === `805974579859816529`)
  channel.send(`Ready`)
  const mapCanvas = createCanvas(767.5, 767.5)
  const mapCanvasCtx = mapCanvas.getContext('2d')
  const mapImage = await loadImage('./src/assets/dayz-map-small.jpeg')
  const playerImage = await loadImage('./src/assets/player-small.png')
  mapCanvasCtx.drawImage(mapImage, 0, 0)
  mapCanvasCtx.drawImage(playerImage, 142.745 + 100, 279.15000000000003)
  mapCanvasCtx.drawImage(playerImage, 122.45 + 100, 254.32500000000002)
  const attachment = new MessageAttachment(mapCanvas.toBuffer(), 'player-map.png')
  channel.send(attachment)
})
