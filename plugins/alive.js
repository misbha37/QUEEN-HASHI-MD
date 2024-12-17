
const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')
const {sleep} = require('../lib/functions')



cmd({

    pattern: "alive",

    react: "👋",


    desc: "Get bot\'s settings list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeSetting =`
╔════✮❁•°♛°•❁✮ ════╗
👀𝐐𝐔𝐄𝐄𝐍 𝐈𝐒𝐇𝐔 𝐀𝐋𝐈𝐕𝐄 𝐍𝐎𝐖👀
╚════✮❁•°❀°•❁✮════╝
╭──────────────
│ 💜 "ලස්සනට ආදරේ විදින්න උඹ අකුරෙන් අකුර මට හුරු කලාට..."
│
│💜උඹට අමතක උනා මැණික මට තනියෙන් ඉන්න පුරුදු කරන්න🙂❤️‍🩹
│
│💜 ඒ නිසා මන් අදටත් රැයක් දවාලක් නැතුව තනිකම එක්ක යාලු වෙන්න පොරබදනව😔
│
│💜 ස්තූතිය....!
│ˡᶦᵏᵉ ᶜᵒᵐᵐᵉⁿᵗ ˢᵃᵛᵉ ˢʰᵃʳᵉ
│-"❤️🥺"-
⁠⁠⁠⁠╰─────────────
╔════════✮❁•°♛°•❁✮ ════════╗
║CREATER : LAKSIDU NIMSARA
║VERSION : ᴠ.1.0.0
║UPTIME : 24 minutes, 59 seconds
║RAG USAGE : 2TB
║HOST NAME : HEROKU
╚════════✮❁•°♛°•❁✮ ════════╝
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ
*•────────────•⟢*
`


await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeSetting},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})



cmd({
    pattern: "repo",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*[ •❤️‍🔥B O T - O W N E R❤️‍🔥 ‎• ]*
*╭================•*
*│  ◦* *LAKSIDU NIMSARA*
*╰================•*

*[ •❤️‍🔥QUEEN ISHU MD REPO❤️‍🔥‎• ]*
*╭================•*
*│  ◦* *https://github.com/laksidunimsara1/QUEEN-ISHU-MD*
*╰================•*

*[ •❤️‍🔥QUEEN ISHU MD WEBSITE❤️‍🔥‎• ]*
*╭================•*
*│  ◦* *https://queen-ishu-md.tiiny.site/*
*╰================•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ
*•────────────•⟢*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '',
      newsletterName: "QUEEN",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'QUEEN ISHU',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/laksidunimsara1/QUEEN-ISHU-MD" ,
thumbnailUrl: "https://i.imgur.com/dUav9x3.jpeg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
