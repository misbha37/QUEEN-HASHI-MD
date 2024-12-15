/*
███████╗  ██╗   ██╗ ███████╗ ███████╗ ███╗   ██╗       ███   █████████    ███     ███    ███     ███
██╔═══██╗ ██║   ██║ ██╔════╝ ██╔════╝ ████╗  ██║       ███   ███          ███     ███    ███     ███
██║   ██║ ██║   ██║ █████╗   █████╗   ██╔██╗ ██║       ███   █████████    ███████████    ███     ███
██║▄▄ ██║ ██║   ██║ ██╔══╝   ██╔══╝   ██║╚██╗██        ███         ███    ███     ███    ███████████
╚██████╔╝ ╚██████╔╝ ███████╗ ███████╗ ██║ ╚████║       ███   █████████    ███     ███      ███████
created by laksidu

*/



const { cmd, commands } = require('../command'),
  fg = require('api-dylux'),
  yts = require('yt-search')
cmd(
  {
    pattern: 'song',
    alias: ['song1', 'play'],
    desc: 'download songs',
    category: 'download',
    react: '\uD83D\uDCE9',
    filename: __filename,
  },
  async (
    _0x1d1d9b,
    _0x5c7c44,
    _0x5cf054,
    {
      from: _0x352370,
      quoted: _0x1c88da,
      body: _0xe92335,
      isCmd: _0x467d8d,
      command: _0x4eb0f,
      args: _0x2d9409,
      q: _0x3456fe,
      isGroup: _0x16047a,
      sender: _0x362d28,
      senderNumber: _0x40dbb5,
      botNumber2: _0x3a92db,
      botNumber: _0x542734,
      pushname: _0x43d3e8,
      isMe: _0xda8cd4,
      isOwner: _0x106639,
      groupMetadata: _0x322a25,
      groupName: _0x254a64,
      participants: _0x80bda8,
      groupAdmins: _0x27289f,
      isBotAdmins: _0x1290b8,
      isAdmins: _0xd7a7ab,
      reply: _0x570f29,
    }
  ) => {
    try {
      if (!_0x3456fe) {
        return _0x570f29('*කරුණාකර Link එකක් හො නමක් ලබා දෙන්න\uD83D\uDCAB.*')
      }
      const _0x1c98e7 = await yts(_0x3456fe),
        _0x184b0f = _0x1c98e7.videos[0],
        _0x1cafb2 = _0x184b0f.url
      let _0xc0a815 =
        '*\uD83C\uDFBCQUEEN-ISHU-MD SONG DOWNLOADER..\uD83D\uDCE9*\n\n\uD83E\uDDDA‍\u2642️ ᴛɪᴛʟᴇ - ' +
        _0x184b0f.title +
        '\n\n\uD83E\uDDDA‍\u2642️ ᴠɪᴇᴡꜱ - ' +
        _0x184b0f.views +
        '\n\n\uD83E\uDDDA‍\u2642️ ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ - ' +
        _0x184b0f.description +
        '\n\n\uD83E\uDDDA‍\u2642️ ᴛɪᴍᴇ - ' +
        _0x184b0f.timestamp +
        '\n\n\uD83E\uDDDA‍\u2642️ ᴀɢᴏ - ' +
        _0x184b0f.ago +
        "\n\n*\uD83E\uDDEC\n\n> *\xA9 \uD835\uDE7F\uD835\uDE98\uD835\uDEA0\uD835\uDE8E\uD835\uDE9B\uD835\uDE8D \uD835\uDE71\uD835\uDEA2 \uD83E\uDDDA‍\u2642️\u20DD\uD835\uDE82\uD835\uDE84\uD835\uDE77\uD835\uDE70\uD835\uDE82-\uD835\uDE7C\uD835\uDE73 \uD835\uDE858 \uD83D\uDC95\u20DF*\n"
      await _0x1d1d9b.sendMessage(
        _0x352370,
        {
          image: { url: _0x184b0f.thumbnail },
          caption: _0xc0a815,
        },
        { quoted: _0x5c7c44 }
      )
      let _0x126231 = await fg.yta(_0x1cafb2),
        _0x11c7e8 = _0x126231.dl_url
      await _0x1d1d9b.sendMessage(
        _0x352370,
        {
          audio: { url: _0x11c7e8 },
          mimetype: 'audio/mpeg',
        },
        { quoted: _0x5c7c44 }
      )
      await _0x1d1d9b.sendMessage(
        _0x352370,
        {
          document: { url: _0x11c7e8 },
          mimetype: 'audio/mpeg',
          fileName: _0x184b0f.title + 'mp3',
          caption: 'CREATED BY LAKSIDU \uD83C\uDFB5',
        },
        { quoted: _0x5c7c44 }
      )
      await _0x5cf054.react('\u2705')
    } catch (_0x18b0e0) {
      _0x570f29('' + _0x18b0e0)
    }
  }
)
cmd(
  {
    pattern: 'video',
    alias: ['yt', 'ytmp4'],
    desc: 'download video',
    category: 'download',
    react: '\uD83D\uDCE9',
    filename: __filename,
  },
  async (
    _0x5d0ff6,
    _0x292272,
    _0x241edd,
    {
      from: _0x45e45b,
      quoted: _0x23e43a,
      body: _0x239088,
      isCmd: _0x274ea1,
      command: _0x29ea35,
      args: _0x281c13,
      q: _0x650313,
      isGroup: _0x4f3e20,
      sender: _0x292628,
      senderNumber: _0x577306,
      botNumber2: _0x380bd9,
      botNumber: _0x1e78a8,
      pushname: _0x564182,
      isMe: _0x16781f,
      isOwner: _0x5c0bfb,
      groupMetadata: _0x30291b,
      groupName: _0x282015,
      participants: _0x45f299,
      groupAdmins: _0x5431a6,
      isBotAdmins: _0x19b171,
      isAdmins: _0x3f988f,
      reply: _0x1e6e90,
    }
  ) => {
    try {
      if (!_0x650313) {
        return _0x1e6e90('*කරුණාකර Link එකක් හො නමක් ලබා දෙන්න\uD83D\uDCAB*')
      }
      const _0x4e1d9b = await yts(_0x650313),
        _0x2223cd = _0x4e1d9b.videos[0],
        _0x18714c = _0x2223cd.url
      let _0x51f0e1 =
        '*\uD83C\uDFA5QUEEN-ISHU-MD VIDEO DOWNLOADER..\uD83D\uDCE9*\n\n\uD83E\uDDDA‍\u2642️ ᴛɪᴛʟᴇ - ' +
        _0x2223cd.title +
        '\n\n\uD83E\uDDDA‍\u2642️ ᴠɪᴇᴡꜱ - ' +
        _0x2223cd.views +
        '\n\n\uD83E\uDDDA‍\u2642️ ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ - ' +
        _0x2223cd.description +
        '\n\n\uD83E\uDDDA‍\u2642️ ᴛɪᴍᴇ - ' +
        _0x2223cd.timestamp +
        '\n\n\uD83E\uDDDA‍\u2642️ ᴀɢᴏ - ' +
        _0x2223cd.ago +
        "\n\n*\uD83E\uDDECDon't FDE7F\uD835\uDE98\uD835\uDEA0\uD835\uDE8E\uD835\uDE9B\uD835\uDE8D \uD835\uDE71\uD835\uDEA2 \uD83E\uDDDA‍\u2642️\u20DD\uD835\uDE82\uD835\uDE84\uD835\uDE77\uD835\uDE70\uD835\uDE82-\uD835\uDE7C\uD835\uDE73 \uD835\uDE858 \uD83D\uDC95\u20DF*                   \n"
      await _0x5d0ff6.sendMessage(
        _0x45e45b,
        {
          image: { url: _0x2223cd.thumbnail },
          caption: _0x51f0e1,
        },
        { quoted: _0x292272 }
      )
      let _0x239ad1 = await fg.ytv(_0x18714c),
        _0x5b7ed4 = _0x239ad1.dl_url
      await _0x5d0ff6.sendMessage(
        _0x45e45b,
        {
          video: { url: _0x5b7ed4 },
          mimetype: 'video/mp4',
        },
        { quoted: _0x292272 }
      )
      await _0x5d0ff6.sendMessage(
        _0x45e45b,
        {
          document: { url: _0x5b7ed4 },
          mimetype: 'video/mp4',
          fileName: _0x2223cd.title + 'mp4',
          caption: 'CREATED BY LAKSIDU \uD83C\uDFAC',
        },
        { quoted: _0x292272 }
      )
      await _0x241edd.react('\u2705')
    } catch (_0x15cad3) {
      _0x1e6e90('' + _0x15cad3)
    }
  }
)
function hi() {
  console.log('Hello World!')
}
hi()
