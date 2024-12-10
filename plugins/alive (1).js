/*
███████╗  ██╗   ██╗ ███████╗ ███████╗ ███╗   ██╗       ███   █████████    ███     ███    ███     ███
██╔═══██╗ ██║   ██║ ██╔════╝ ██╔════╝ ████╗  ██║       ███   ███          ███     ███    ███     ███
██║   ██║ ██║   ██║ █████╗   █████╗   ██╔██╗ ██║       ███   █████████    ███████████    ███     ███
██║▄▄ ██║ ██║   ██║ ██╔══╝   ██╔══╝   ██║╚██╗██        ███         ███    ███     ███    ███████████
╚██████╔╝ ╚██████╔╝ ███████╗ ███████╗ ██║ ╚████║       ███   █████████    ███     ███      ███████
created by laksidu
 DONT COPY
*/

const { readEnv } = require('../lib/database')
const { cmd, commands } = require('../command')
const os = require('os')
const { runtime } = require('../lib/functions')
const moment = require('moment-timezone')
const sensitiveData = require('../auth_info_baileys/a/b/c/d/dddamsbs')
cmd(
  {
    pattern: 'alive',
    desc: 'Check uptime, RAM usage, and more',
    category: 'main',
    react: '\uD83D\uDC7A',
    filename: __filename,
  },
  async (
    conn,
    mek,
    m,
    {
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
      reply,
    }
  ) => {
    try {
      const config = await readEnv()
      const totalRAM = Math.round(os.totalmem() / 1024 / 1024)
      const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
      const freeRAM = (totalRAM - parseFloat(usedRAM)).toFixed(2)
      const date = moment().tz('Asia/Colombo').format('YYYY-MM-DD')
      const time = moment().tz('Asia/Colombo').format('HH:mm:ss')
      const hour = moment().tz('Asia/Colombo').format('HH')
      const minute = moment().tz('Asia/Colombo').format('mm')
      const greeting =
        hour >= 0 && hour < 12
          ? '\uD835\uDDDA\uD835\uDDE2\uD835\uDDE2\uD835\uDDD7 \uD835\uDDE0\uD835\uDDE2\uD835\uDDE5\uD835\uDDE1\uD835\uDDDC\uD835\uDDE1\uD835\uDDDA'
          : hour >= 12 && hour < 18
          ? '\uD835\uDDDA\uD835\uDDE2\uD835\uDDE2\uD835\uDDD7 \uD835\uDDD4\uD835\uDDD9\uD835\uDDE7\uD835\uDDD8\uD835\uDDE5\uD835\uDDE1\uD835\uDDE2\uD835\uDDE2\uD835\uDDE1'
          : '\uD835\uDDDA\uD835\uDDE2\uD835\uDDE2\uD835\uDDD7 \uD835\uDDE1\uD835\uDDDC\uD835\uDDDA\uD835\uDDDB\uD835\uDDE7'
      const roundedMinute = Math.round(minute / 30) * 30
      const roundedTime = `${hour}:${
        roundedMinute < 10 ? '0' + roundedMinute : roundedMinute
      }`
      const currentTimeEmoji =
        timeEmojiMap[
          `${hour}:${roundedMinute < 10 ? '0' + roundedMinute : roundedMinute}`
        ] || '\uD83E\uDEC2'
      const dateEmoji = date
        .split('-')
        .map((part) =>
          part
            .replace(/0/g, '0️\u20E3')
            .replace(/1/g, '1️\u20E3')
            .replace(/2/g, '2️\u20E3')
            .replace(/3/g, '3️\u20E3')
            .replace(/4/g, '4️\u20E3')
            .replace(/5/g, '5️\u20E3')
            .replace(/6/g, '6️\u20E3')
            .replace(/7/g, '7️\u20E3')
            .replace(/8/g, '8️\u20E3')
            .replace(/9/g, '9️\u20E3')
        )
        .join('-')
      const timeEmoji = time
        .split(':')
        .map((part) =>
          part
            .replace(/0/g, '0️\u20E3')
            .replace(/1/g, '1️\u20E3')
            .replace(/2/g, '2️\u20E3')
            .replace(/3/g, '3️\u20E3')
            .replace(/4/g, '4️\u20E3')
            .replace(/5/g, '5️\u20E3')
            .replace(/6/g, '6️\u20E3')
            .replace(/7/g, '7️\u20E3')
            .replace(/8/g, '8️\u20E3')
            .replace(/9/g, '9️\u20E3')
        )
        .join(':')
      const caption = `𝗛𝗲𝘆 ${pushname}\n${greeting} ${currentTimeEmoji}\n\n${config.ALIVE_MSG}\n\n𝗗𝗔𝗧𝗘: \n${dateEmoji}\n𝗧𝗜𝗠𝗘: \n${timeEmoji}\n\n${sensitiveData.plugginssd}`
      let sentMessage = await conn.sendMessage(
        from,
        {
          image: { url: config.ALIVE_IMG },
          caption: caption,
        },
        { quoted: mek || null }
      )
      await conn.sendMessage(from, {
        react: {
          text: '\uD83D\uDC7A',
          key: sentMessage.key,
        },
      })
      let sentAudio = await conn.sendMessage(
        from,
        {
          audio: { url: sensitiveData.audiomp('') },
          mimetype: 'audio/mpeg',
          ptt: true,
        },
        { quoted: mek }
      )
      await conn.sendMessage(from, {
        react: {
          text: '\uD83D\uDC7A',
          key: sentAudio.key,
        },
      })
      await conn.sendPresenceUpdate('recording', from)
    } catch (e) {
      console.log(e)
      reply(`Error: ${e}`)
    }
  }
)
