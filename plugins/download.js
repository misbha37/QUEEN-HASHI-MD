const { fetchJson } = require('../lib/functions'),
  config = require('../config'),
  { cmd, commands } = require('../command')
let baseUrl
;(async () => {
  let _0x2a72ca = await fetchJson('https://www.dark-yasiya-api.site')
  baseUrl = _0x2a72ca.api
})()
const yourName = '*\xA9QUEEN-ISHU-MD*'
cmd(
  {
    pattern: 'fb',
    alias: ['facebook'],
    desc: 'download fb videos',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x2f4f23,
    _0x4b97d0,
    _0x2718d4,
    {
      from: _0x187924,
      quoted: _0x217b6b,
      body: _0x3e84ec,
      isCmd: _0x569b22,
      command: _0x4b3bc5,
      args: _0xc11c62,
      q: _0xc72184,
      isGroup: _0x3b2f33,
      sender: _0x176aab,
      senderNumber: _0x167c7c,
      botNumber2: _0x35a5ee,
      botNumber: _0x869b87,
      pushname: _0x22fc65,
      isMe: _0x56af32,
      isOwner: _0x49134a,
      groupMetadata: _0x49ef41,
      groupName: _0x2dce05,
      participants: _0x15c5f6,
      groupAdmins: _0x102877,
      isBotAdmins: _0x3e906a,
      isAdmins: _0x8ecd88,
      reply: _0xa62406,
    }
  ) => {
    try {
      if (!_0xc72184 && !_0xc72184.startsWith('https://')) {
        return _0xa62406('give me fb url')
      }
      let _0x35b0cb = await fetchJson(baseUrl + '/api/fdown?url=' + _0xc72184)
      _0xa62406('*\u2B07 DOWNLOADONG\u25AB\u25AB\u25AB*')
      await _0x2f4f23.sendMessage(
        _0x187924,
        {
          video: { url: _0x35b0cb.data.hd },
          mimetype: 'video/mp4',
          caption: '- HD\n\n ' + yourName,
        },
        { quoted: _0x4b97d0 }
      )
      await _0x2f4f23.sendMessage(
        _0x187924,
        {
          video: { url: _0x35b0cb.data.sd },
          mimetype: 'video/mp4',
          caption: '- SD \n\n ' + yourName,
        },
        { quoted: _0x4b97d0 }
      )
    } catch (_0xc35f82) {
      console.log(_0xc35f82)
      _0xa62406('' + _0xc35f82)
    }
  }
)
cmd(
  {
    pattern: 'tiktok',
    alias: ['tt'],
    desc: 'download tt videos',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x5e3dab,
    _0x3c9df2,
    _0xb5b3d0,
    {
      from: _0x1f07cd,
      quoted: _0x4223cb,
      body: _0x3cc115,
      isCmd: _0x314238,
      command: _0xe7a72a,
      args: _0x1df6d9,
      q: _0x45150b,
      isGroup: _0x1c154c,
      sender: _0x4fbd71,
      senderNumber: _0xa2232,
      botNumber2: _0x3cc524,
      botNumber: _0x534afb,
      pushname: _0x19c6bb,
      isMe: _0x238e9a,
      isOwner: _0xba61ae,
      groupMetadata: _0x5a66ef,
      groupName: _0x8b62c0,
      participants: _0x5388a8,
      groupAdmins: _0x54d47f,
      isBotAdmins: _0x2a73ab,
      isAdmins: _0x43ec9a,
      reply: _0x1befe6,
    }
  ) => {
    try {
      if (!_0x45150b && !_0x45150b.startsWith('https://')) {
        return _0x1befe6('give me tiktok url')
      }
      let _0x623724 = await fetchJson(
        baseUrl + '/api/tiktokdl?url=' + _0x45150b
      )
      _0x1befe6('*\u2B07 DOWNLOADING\u25AB\u25AB\u25AB*')
      await _0x5e3dab.sendMessage(
        _0x1f07cd,
        {
          video: { url: _0x623724.data.no_wm },
          mimetype: 'video/mp4',
          caption: '- NO-WATERMARK\n\n ' + yourName,
        },
        { quoted: _0x3c9df2 }
      )
      await _0x5e3dab.sendMessage(
        _0x1f07cd,
        {
          video: { url: _0x623724.data.wm },
          mimetype: 'video/mp4',
          caption: '- WITH-WATERMARK \n\n ' + yourName,
        },
        { quoted: _0x3c9df2 }
      )
      await _0x5e3dab.sendMessage(
        _0x1f07cd,
        {
          audio: { url: _0x623724.data.audio },
          mimetype: 'audio/mpeg',
        },
        { quoted: _0x3c9df2 }
      )
    } catch (_0x5b7dfe) {
      console.log(_0x5b7dfe)
      _0x1befe6('' + _0x5b7dfe)
    }
  }
)
cmd(
  {
    pattern: 'twitter',
    alias: ['twdl'],
    desc: 'download tw videos',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x319937,
    _0x5280e5,
    _0x39d245,
    {
      from: _0x48c831,
      quoted: _0x504952,
      body: _0x1672e9,
      isCmd: _0x49747b,
      command: _0x253af6,
      args: _0x27ba7f,
      q: _0x1b97a0,
      isGroup: _0x33f795,
      sender: _0x5afa22,
      senderNumber: _0x5076ef,
      botNumber2: _0x273c58,
      botNumber: _0x40304f,
      pushname: _0x34e5ad,
      isMe: _0x38d1fe,
      isOwner: _0x539b31,
      groupMetadata: _0xe4b742,
      groupName: _0x2c4b7d,
      participants: _0x598d31,
      groupAdmins: _0x36b51d,
      isBotAdmins: _0xf9abfc,
      isAdmins: _0x3ea416,
      reply: _0x222625,
    }
  ) => {
    try {
      if (!_0x1b97a0 && !_0x1b97a0.startsWith('https://')) {
        return _0x222625('give me twitter url')
      }
      let _0x1e2c54 = await fetchJson(
        baseUrl + '/api/twitterdl?url=' + _0x1b97a0
      )
      _0x222625('*\u2B07 DOWNLOADING\u25AB\u25AB\u25AB*')
      await _0x319937.sendMessage(
        _0x48c831,
        {
          video: { url: _0x1e2c54.data.data.HD },
          mimetype: 'video/mp4',
          caption: '- HD\n\n ' + yourName,
        },
        { quoted: _0x5280e5 }
      )
      await _0x319937.sendMessage(
        _0x48c831,
        {
          video: { url: _0x1e2c54.data.data.SD },
          mimetype: 'video/mp4',
          caption: '- SD \n\n ' + yourName,
        },
        { quoted: _0x5280e5 }
      )
      await _0x319937.sendMessage(
        _0x48c831,
        {
          audio: { url: _0x1e2c54.data.data.audio },
          mimetype: 'audio/mpeg',
        },
        { quoted: _0x5280e5 }
      )
    } catch (_0x1d66eb) {
      console.log(_0x1d66eb)
      _0x222625('' + _0x1d66eb)
    }
  }
)
cmd(
  {
    pattern: 'gfile',
    alias: ['googlefile'],
    desc: 'download gdrive files',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x4d2d8f,
    _0x4694fd,
    _0x120590,
    {
      from: _0x1a52c4,
      quoted: _0x3cb555,
      body: _0x30054b,
      isCmd: _0x2a57bd,
      command: _0x43bc11,
      args: _0x3cba27,
      q: _0x110ce5,
      isGroup: _0x23b5f9,
      sender: _0x1cc272,
      senderNumber: _0x542134,
      botNumber2: _0x21a16b,
      botNumber: _0x2875fd,
      pushname: _0x4cd2e2,
      isMe: _0x35ccb8,
      isOwner: _0x551bad,
      groupMetadata: _0x161c69,
      groupName: _0x4f5172,
      participants: _0x463267,
      groupAdmins: _0x6ac24,
      isBotAdmins: _0x23399d,
      isAdmins: _0x5c1025,
      reply: _0x51fe7d,
    }
  ) => {
    try {
      if (!_0x110ce5 && !_0x110ce5.startsWith('https://')) {
        return _0x51fe7d('give me gdrive url')
      }
      let _0x81e224 = await fetchJson(
        baseUrl + '/api/gdrivedl?url=' + _0x110ce5
      )
      _0x51fe7d('*\u2B07 DOWNLOADING\u25AB\u25AB\u25AB*')
      await _0x4d2d8f.sendMessage(
        _0x1a52c4,
        {
          document: { url: _0x81e224.data.download },
          fileName: _0x81e224.data.fileName,
          mimetype: _0x81e224.data.mimeType,
          caption: _0x81e224.data.fileName + '\n\n' + yourName,
        },
        { quoted: _0x4694fd }
      )
    } catch (_0xde0dec) {
      console.log(_0xde0dec)
      _0x51fe7d('' + _0xde0dec)
    }
  }
)
cmd(
  {
    pattern: 'mediafire',
    alias: ['mfire'],
    desc: 'download mfire files',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x2848c4,
    _0x45aee0,
    _0x2b7597,
    {
      from: _0x296059,
      quoted: _0xf078a8,
      body: _0x4f7381,
      isCmd: _0x289257,
      command: _0x4496fd,
      args: _0x4fbd78,
      q: _0x52f96a,
      isGroup: _0x5ca3da,
      sender: _0x587c1e,
      senderNumber: _0x39a5db,
      botNumber2: _0xfe8215,
      botNumber: _0x7aa2e9,
      pushname: _0x55c17b,
      isMe: _0x3898f3,
      isOwner: _0x1b5fec,
      groupMetadata: _0x3ff4cc,
      groupName: _0x5d3153,
      participants: _0x25a06f,
      groupAdmins: _0x70d54c,
      isBotAdmins: _0x510a30,
      isAdmins: _0x4facb2,
      reply: _0x1483d8,
    }
  ) => {
    try {
      if (!_0x52f96a && !_0x52f96a.startsWith('https://')) {
        return _0x1483d8('give me mediafire url')
      }
      let _0x1a1aad = await fetchJson(
        baseUrl + '/api/mediafiredl?url=' + _0x52f96a
      )
      _0x1483d8('*\u2B07 DOWNLOADING\u25AB\u25AB\u25AB*')
      await _0x2848c4.sendMessage(
        _0x296059,
        {
          document: { url: _0x1a1aad.data.link_1 },
          fileName: _0x1a1aad.data.name,
          mimetype: _0x1a1aad.data.file_type,
          caption: _0x1a1aad.data.name + '\n\n' + yourName,
        },
        { quoted: _0x45aee0 }
      )
    } catch (_0x5da042) {
      console.log(_0x5da042)
      _0x1483d8('' + _0x5da042)
    }
  }
)
