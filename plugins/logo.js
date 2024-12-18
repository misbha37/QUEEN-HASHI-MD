const {cmd , commands} = require('../command')

cmd({
    pattern: "logo",
    desc: "image.",
    react: "🌌",
    category: "logo",
    use: '.logo1',
    filename: __filename
},
async(conn, mek, m, {from, mnu, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try {
    if (!q) return reply('Please Provide A Name');
    await conn.sendMessage(from, { 
        image: { url: 'https://dummyimage.com/600x400/&text=${q}' }, 
        caption: '> CREATED BY LAKSIDU NIMSARA' 
    }, {quoted: mek});

} catch (e) {
    console.log(e);
    reply('${e}');
}
})
