const fs = require('fs')
const { Client: DiscordClient } = require('discord.js')

const whitelistDb = './eg-whitelist.hash'
const whitelistDbBuffer = fs.readFileSync(whitelistDb)
const whitelist = JSON.parse(whitelistDbBuffer.toString())
const THREE_HOURS = 3 * 3.6e+6

const discordClient = new DiscordClient({ partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER'] })
const client = discordClient
client.login(`Nzg2OTkzMzk5OTk1Njk1MTU4.X9OeuA.the9cP2CwPM2SkiimZvn0_HX-xE`)

// client.once('ready', async () => {
//   const channelExperimental = client.channels.cache
//     .find(channel => `${channel.id}` === `697563823594536972`)
//   // const jsonOutput = JSON.stringify({
//   //   coords: [234234,234234],
//   //   players: ['sdfsdf', 'sdfsdfsdf'],
//   //   x: 0, y: 'sadfsdf'
//   // }, null, 2)
//   // channelJudges.send(`**TEST**: \`test\` at __TEST__ <https://dayz.ginfo.gg/#location=${0};${0}> \`\`\`${jsonOutput}\`\`\``)
//   // channelExperimental.send(
//   //   // `<@&783137187403268147> `
//   //   `**EPD ALERT**: \`TEST\` approaching __NPC JUDGE__ <https://dayz.ginfo.gg/#location=${0};${0}> \`\`\`BEEF\`\`\``
//   // )
//   setInterval(() => {
//     Object
//       .keys(whitelist)
//       .filter((key) => {
//         const timeRemaining = ((new Date().getTime() - whitelist[key].expires)/60000).toFixed(0) * -1
//         return timeRemaining <= 0
//       })
//       .forEach((key) => {
//         const id = `${whitelist[key]}`
//         delete whitelist[key]
//         fs.writeFileSync(whitelistDb, JSON.stringify(whitelist))
//         if (!whitelist[key]) {
//           channelExperimental.send(`Safezone access **expired**, removed \`${key}\` for <@${id}>`)
//         } else {
//           channelExperimental.send(`Safezone access **expired**, but could not remove \`${key}\` for <@${id}>`)
//         }
//       })
//   }, 60000)
// })

// client.on('message', async (message) => {
//   const { content, author } = message
//   const { id } = author
//   const channelExperimental = client.channels.cache
//     .find(channel => `${channel.id}` === `697563823594536972`)
//   const safezone = `!safezone `
//   const add = `add `
//   const remove = `remove `
//   const list = `list`

//   if (content.substring(0,safezone.length) === safezone) {

//     if (content.substring(safezone.length, safezone.length + add.length) === add) {
//       const targetPlayerName = message.content.substring(safezone.length + add.length, content.length)
//       const expires = new Date().getTime() + THREE_HOURS
//       whitelist[`${targetPlayerName}`] = {
//         expires,
//         id
//       }
//       fs.writeFileSync(whitelistDb, JSON.stringify(whitelist))
//       if (whitelist[`${targetPlayerName}`]) {
//         channelExperimental.send(`Citizen \`${targetPlayerName}\` authorized by <@${id}> for 3 hours`)
//       } else {
//         channelExperimental.send(`Could not add \`${targetPlayerName}\` <@${id}>`)
//       }
//     } else if (content.substring(safezone.length, safezone.length + remove.length) === remove) {
//       const targetPlayerName = message.content.substring(safezone.length + remove.length, content.length)
//       delete whitelist[`${targetPlayerName}`]
//       fs.writeFileSync(whitelistDb, JSON.stringify(whitelist))
//       if (!whitelist[`${targetPlayerName}`]) {
//         channelExperimental.send(`Removed \`${targetPlayerName}\` <@${id}>`)
//       } else {
//         channelExperimental.send(`Could not remove \`${targetPlayerName}\` <@${id}>`)
//       }
//     } else if (content.substring(safezone.length, safezone.length + list.length) === list) {
//       if (Object.keys(whitelist).length > 0) {
//         Object
//           .keys(whitelist)
//           .forEach(key => channelExperimental
//             .send(`\`${key}\` authorized by <@${whitelist[key].id}> expires in ${((new Date().getTime() - whitelist[key].expires)/60000).toFixed(0) * -1} minutes`))
//       } else {
//         channelExperimental.send(`Zero authorized access`)
//       }
//     }

//   }

// })

client.on('message', async (message) => {
  console.log(message.content)
})

// client.on('messageReactionAdd', async (reaction, user) => {
// 	if (reaction.partial) {
// 		// If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
// 		try {
// 			await reaction.fetch()
//       console.log(reaction, user)
// 		} catch (error) {
// 			console.error('Something went wrong when fetching the message: ', error)
// 		}
// 	}
// })