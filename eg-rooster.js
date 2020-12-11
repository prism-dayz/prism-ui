const { Client: DiscordClient, MessageEmbed, MessageAttachment, RichEmbed } = require('discord.js')

const discordClient = new DiscordClient({ partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER'] })
const client = discordClient

client.once('ready', async () => {
  const channelExperimental = client.channels.cache
    .find(channel => `${channel.id}` === `697563823594536972`)
  // const jsonOutput = JSON.stringify({
  //   coords: [234234,234234],
  //   players: ['sdfsdf', 'sdfsdfsdf'],
  //   x: 0, y: 'sadfsdf'
  // }, null, 2)
  // // channelJudges.send(`**TEST**: \`test\` at __TEST__ <https://dayz.ginfo.gg/#location=${0};${0}> \`\`\`${jsonOutput}\`\`\``)
  // channelExperimental.send(
  //   // `<@&783137187403268147> `
  //   `**EPD ALERT**: \`TEST\` approaching __NPC JUDGE__ <https://dayz.ginfo.gg/#location=${0};${0}> \`\`\`BEEF\`\`\``
  // )
})

client.on('messageReactionAdd', async (reaction, user) => {
	if (reaction.partial) {
		// If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
		try {
			await reaction.fetch()
      console.log(reaction, user)
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error)
		}
	}
})

client.login(`Njk5MDMxMTM4ODAyNTk3OTE4.XpOdeg.xLNUSlSBr8AqI8lyZCmh_mhx4lY`)