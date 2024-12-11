const config = require('../config'),
  { cmd, commands } = require('../command'),
  { fetchJson } = require('../lib/functions')
cmd(
  {
    pattern: 'gemini',
    desc: 'gemini chat.',
    category: 'ai',
    react: '\uD83D\uDE80',
    filename: __filename,
  },
  async (
    _0x194d59,
    _0x3151b2,
    _0x4590d7,
    {
      from: _0x3e9524,
      quoted: _0xc8f1af,
      body: _0x5ba77a,
      isCmd: _0x55f8b6,
      command: _0x1531ef,
      args: _0x483f85,
      q: _0x28592f,
      isGroup: _0x473582,
      sender: _0x538271,
      senderNumber: _0x52bceb,
      botNumber2: _0x2c7110,
      botNumber: _0x2e51ef,
      pushname: _0x39d3e6,
      isMe: _0x288f7e,
      isOwner: _0x5028d2,
      groupMetadata: _0x572d03,
      groupName: _0x33359f,
      participants: _0x33af8b,
      groupAdmins: _0x2dab2c,
      isBotAdmins: _0x12245f,
      isAdmins: _0x52baca,
      reply: _0x57c513,
    }
  ) => {
    try {
      let _0xb5c28a = await fetchJson(
        'https://api.vihangayt.com/ai/gemini?q=' + _0x28592f
      )
      return _0x57c513('' + _0xb5c28a.data)
    } catch (_0x440d03) {
      console.log(_0x440d03)
      _0x57c513('' + _0x440d03)
    }
  }
)
