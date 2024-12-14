const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    alias: ["mp3","play"],
    desc: "To download songs.",
    react: "🎧",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me a url or title*")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `🎧 *_-QUEEN-ISHU-MD AUDIO DOWNLOADER_* 🎧

▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
┃► ℹ️ *Title:* ${data.title} 
┃► 👤 *Duration:* ${data.timestamp} 
┃► 👁️‍🗨️ *Views:* ${data.views} 
┃► 🕘 *Uploaded On:* ${data.ago} 
┃► 📌 *Ago:* ${data.ago}
┃► 🔗 *Url* ${data.url} 
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁

*Choose Your Download Format*

*1 Audio File🎧*
*2 Document File📁*

*©QUEEN-ISHU*
`

const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let down = await fg.yta(url);
                        let downloadUrl = down.dl_url;
                        await conn.sendMessage(from, { audio: { url:downloadUrl }, caption: '*©QUEEN-ISHU*', mimetype: 'audio/mpeg'},{ quoted: mek });
                        break;
                    case '2':               
                        // Send Document File
                        let downdoc = await fg.yta(url);
                        let downloaddocUrl = downdoc.dl_url;
                        await conn.sendMessage(from, { document: { url:downloaddocUrl }, caption: '*©QUEEN-ISHU*', mimetype: 'audio/mpeg', fileName:data.title + ".mp3"}, { quoted: mek });
                        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});


//====================video_dl=======================

cmd({
    pattern: "video",
    desc: "To download videos.",
    react: "🎥",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me a url or title*")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `📽️ *_QUEEN-ISHU-MD VIDEO DOWNLOADER_* 📽️

▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
┃► ℹ️ *Title:* ${data.title} 
┃► 👤 *Duration:* ${data.timestamp} 
┃► 👁️‍🗨️ *Views:* ${data.views} 
┃► 🕘 *Uploaded On:* ${data.ago} 
┃► 📌 *Ago:* ${data.ago}
┃► 🔗 *Url* ${data.url} 
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁

*Choose Your Download Format*

*1 Video File📽️*
*2 Document File📁*

*©QUEEN-ISHU*
`

 const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let downvid = await fg.ytv(url);
                        let downloadvUrl = downvid.dl_url;
                        await conn.sendMessage(from, { video : { url:downloadvUrl }, caption: '*©QUEEN-ISHU*', mimetype: 'video/mp4'},{ quoted: mek });
                        break;
                    case '2':
                        let downviddoc = await fg.ytv(url);
                        let downloadvdocUrl = downviddoc.dl_url;
                        await conn.sendMessage(from, { document: { url:downloadvdocUrl }, caption: '*©QUEEN-ISHU*', mimetype: 'video/mp4', fileName:data.title + ".mp4" }, { quoted: mek });
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
