const Discord = require('discord.js');
exports.run = (client, channel) => {
	if (!channel) return;
	if (channel.type !== 'text') return;

	const tableload = client.guildconfs.get(channel.guild.id);
	if (!tableload) return;
	if (tableload.channeldeletelog === 'false') return;

	if (tableload.language === '') {
		tableload.language = 'en-US';
		client.guildconfs.set(channel.guild.id, tableload);
	}

		// CHANGE TO THE NEW CROWDIN SYSTEM
		if (tableload.language === 'en-US') {
			tableload.language = 'en-US';
			client.guildconfs.set(channel.guild.id, tableload);
		}
	
		if (tableload.language === 'ge') {
			tableload.language = 'de-DE';
			client.guildconfs.set(channel.guild.id, tableload);
		}
	
		if (tableload.language === 'fr') {
			tableload.language = 'fr-FR';
			client.guildconfs.set(channel.guild.id, tableload);
		}
		// CHANGE TO THE NEW CROWDIN SYSTEM

	const lang = require(`../languages/${tableload.language}.json`);

	const messagechannel = client.channels.get(tableload.channeldeletelogchannel);

	const embed = new Discord.RichEmbed()
		.setColor('#FE2E2E')
		.setTimestamp()
		.setAuthor(lang.channeldeleteevent_channeldeleted)
		.addField(`📎 ${lang.channelcreateevent_channelid}:`, channel.id)
		.addField(`📝 ${lang.channelcreateevent_name}:`, channel.name);
	messagechannel.send({ embed: embed });
};
