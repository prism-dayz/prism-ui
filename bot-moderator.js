const { Client: DiscordClient } = require('discord.js')

const discordClient = new DiscordClient({ partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER'] })
const client = discordClient
client.login(`ODcxNzY3MzAwNTI3Nzc5ODYx.YQgGkQ.Q11qhHfrQNaJQJPfT546nQbxheI`)

client.once('ready', async () => {
  console.log('bot online')
})

client.on('messageReactionAdd', async (reaction, user) => {
  const { message, _emoji } = reaction
  const { guild } = message
  if (message.id === '871773721805852682') {
    if (_emoji.name === '👍') {
      const role = guild.roles.cache.find(role => role.name === "civilian")
      const member = await guild.members.fetch(user.id)
      const addedRole = await member.roles.add(role)
      console.log('added role', user.id)
    }
  }
})

client.on('messageReactionRemove', async (reaction, user) => {
  const { message, _emoji } = reaction
  const { guild } = message
  const role = guild.roles.cache.find(role => role.name === "civilian")
  const member = await guild.members.fetch(user.id)
  const addedRole = await member.roles.remove(role)
  console.log('removed role', user.id)
})