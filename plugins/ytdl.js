const { cmd, commands } = require('../command'),
  fg = require('api-dylux'),
  yts = require('yt-search')
cmd(
  {
    pattern: 'play2',
    desc: 'To download songs.',
    react: '\uD83C\uDFB5',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x5d94a6,
    _0x10d540,
    _0x5d4d85,
    {
      from: _0x551890,
      quoted: _0x34cce3,
      body: _0x1f750a,
      isCmd: _0x595edc,
      command: _0x532e37,
      args: _0x2d87e2,
      q: _0x378362,
      isGroup: _0x14fb91,
      sender: _0x3f4eb8,
      senderNumber: _0x378a9a,
      botNumber2: _0x434983,
      botNumber: _0x223140,
      pushname: _0x1bcb9c,
      isMe: _0x5b9de1,
      isOwner: _0xb71054,
      groupMetadata: _0x110038,
      groupName: _0x271e1b,
      participants: _0x202c46,
      groupAdmins: _0x557a84,
      isBotAdmins: _0x615da3,
      isAdmins: _0x8d367f,
      reply: _0x2d1262,
    }
  ) => {
    try {
      if (!_0x378362) {
        return _0x2d1262('Please give me a url or title')
      }
      const _0x3b263b = await yts(_0x378362),
        _0x59148b = _0x3b263b.videos[0],
        _0x1595ef = _0x59148b.url
      let _0x4cee0b =
        '\n\n\u2AF7\u2981[ *SILENT-SOBX-MD MUSIC DOWNLOADING* ]\u2981\u2AF8\n\n\uD83C\uDFB5 *MUSIC FOUND!* \n\n\u27A5 *Title:* ' +
        _0x59148b.title +
        ' \n\n\u27A5 *Duration:* ' +
        _0x59148b.timestamp +
        ' \n\n\u27A5 *Views:* ' +
        _0x59148b.views +
        ' \n\n\u27A5 *Uploaded On:* ' +
        _0x59148b.ago +
        ' \n\n\u27A5 *Link:* ' +
        _0x59148b.url +
        ' \n\n\uD83C\uDFA7 *ENJOY THE MUSIC BROUGHT TO YOU!*\n\n> *SILENT-SOBX-MD WHATSAPP BOT* \n\n> *\xA9 ᴄʀᴇᴀᴛᴇᴅ ʙʏ sɪʟᴇɴᴛ ʟᴏᴠᴇʀ\u2074\xB3\xB2* \n\n'
      await _0x5d94a6.sendMessage(
        _0x551890,
        {
          image: { url: _0x59148b.thumbnail },
          caption: _0x4cee0b,
        },
        { quoted: _0x10d540 }
      )
      let _0x44c69a = await fg.yta(_0x1595ef),
        _0x56cd32 = _0x44c69a.dl_url
      await _0x5d94a6.sendMessage(
        _0x551890,
        {
          audio: { url: _0x56cd32 },
          mimetype: 'audio/mpeg',
        },
        { quoted: _0x10d540 }
      )
      await _0x5d94a6.sendMessage(
        _0x551890,
        {
          document: { url: _0x56cd32 },
          mimetype: 'audio/mpeg',
          fileName: _0x59148b.title + '.mp3',
          caption: '*\xA9 ᴄʀᴇᴀᴛᴇᴅ ʙʏ sɪʟᴇɴᴛ ʟᴏᴠᴇʀ\u2074\xB3\xB2*',
        },
        { quoted: _0x10d540 }
      )
    } catch (_0x8dc0ec) {
      console.log(_0x8dc0ec)
      _0x2d1262('${e}')
    }
  }
)
cmd(
  {
    pattern: 'darama',
    alias: ['video2'],
    desc: 'To download videos.',
    react: '\uD83C\uDFA5',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x571d7b,
    _0x1879d8,
    _0x14b603,
    {
      from: _0x25e30c,
      quoted: _0x366f81,
      body: _0x490052,
      isCmd: _0x444bf8,
      command: _0xea106b,
      args: _0x3c13b2,
      q: _0xcaeab9,
      isGroup: _0x24708b,
      sender: _0x45fdc8,
      senderNumber: _0x5b3a38,
      botNumber2: _0x349701,
      botNumber: _0x44cc16,
      pushname: _0x1f60ed,
      isMe: _0x3e9a91,
      isOwner: _0x2e07fc,
      groupMetadata: _0x455f2d,
      groupName: _0x230f6b,
      participants: _0x4b96a8,
      groupAdmins: _0x83b164,
      isBotAdmins: _0x339974,
      isAdmins: _0x1bb302,
      reply: _0x123ec1,
    }
  ) => {
    try {
      if (!_0xcaeab9) {
        return _0x123ec1('Please give me a url or title')
      }
      const _0x231ff9 = await yts(_0xcaeab9),
        _0x273a02 = _0x231ff9.videos[0],
        _0x3ef9a0 = _0x273a02.url
      let _0x46df01 =
        '\n\n\u2AF7\u2981[ *\u2022SILENT-SOBX-MD VIDEO DOWNLOADING* ]\u2981\u2AF8 \n\n\uD83C\uDFA5 *VIDEO FOUND!* \n\n\u27A5 *Title:* ' +
        _0x273a02.title +
        ' \n\n\u27A5 *Duration:* ' +
        _0x273a02.timestamp +
        ' \n\n\u27A5 *Views:* ' +
        _0x273a02.views +
        ' \n\n\u27A5 *Uploaded On:* ' +
        _0x273a02.ago +
        ' \n\n\u27A5 *Link:* ' +
        _0x273a02.url +
        ' \n\n\uD83C\uDFAC *ENJOY THE VIDEO BROUGHT TO YOU!*\n\n> *SILENT-SOBX-MD WHATSAPP BOT* \n\n> *\xA9 ᴄʀᴇᴀᴛᴇᴅ ʙʏ sɪʟᴇɴᴛ ʟᴏᴠᴇʀ\u2074\xB3\xB2*\n\n'
      await _0x571d7b.sendMessage(
        _0x25e30c,
        {
          image: { url: _0x273a02.thumbnail },
          caption: _0x46df01,
        },
        { quoted: _0x1879d8 }
      )
      let _0x10db55 = await fg.ytv(_0x3ef9a0),
        _0x2caacd = _0x10db55.dl_url
      await _0x571d7b.sendMessage(
        _0x25e30c,
        {
          video: { url: _0x2caacd },
          mimetype: 'video/mp4',
        },
        { quoted: _0x1879d8 }
      )
      await _0x571d7b.sendMessage(
        _0x25e30c,
        {
          document: { url: _0x2caacd },
          mimetype: 'video/mp4',
          fileName: _0x273a02.title + '.mp4',
          caption: '*\xA9 ᴄʀᴇᴀᴛᴇᴅ ʙʏ sɪʟᴇɴᴛ ʟᴏᴠᴇʀ\u2074\xB3\xB2*',
        },
        { quoted: _0x1879d8 }
      )
    } catch (_0x4bff46) {
      console.log(_0x4bff46)
      _0x123ec1('${e}')
    }
  }
)
