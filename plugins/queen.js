const _0x4e4736 = (function () {
    let _0x890b8d = true
    return function (_0x23e2d7, _0x37af21) {
      const _0x2b52db = _0x890b8d
        ? function () {
            if (_0x37af21) {
              const _0x38b43c = _0x37af21.apply(_0x23e2d7, arguments)
              return (_0x37af21 = null), _0x38b43c
            }
          }
        : function () {}
      return (_0x890b8d = false), _0x2b52db
    }
  })(),
  _0x521f08 = _0x4e4736(this, function () {
    return _0x521f08
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x521f08)
      .search('(((.+)+)+)+$')
  })
_0x521f08()
const _0x3f6954 = (function () {
  let _0x38ff0c = true
  return function (_0x3146f8, _0x2c6048) {
    const _0x2dc529 = _0x38ff0c
      ? function () {
          if (_0x2c6048) {
            const _0x1e407d = _0x2c6048.apply(_0x3146f8, arguments)
            return (_0x2c6048 = null), _0x1e407d
          }
        }
      : function () {}
    return (_0x38ff0c = false), _0x2dc529
  }
})()
;(function () {
  _0x3f6954(this, function () {
    const _0x431995 = new RegExp('function *\\( *\\)'),
      _0x3eab77 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x4c9924 = _0x2d9700('init')
    if (
      !_0x431995.test(_0x4c9924 + 'chain') ||
      !_0x3eab77.test(_0x4c9924 + 'input')
    ) {
      _0x4c9924('0')
    } else {
      _0x2d9700()
    }
  })()
})()
const { SinhalaSub } = require('@sl-code-lords/movie-api'),
  { cmd } = require('../lib/command'),
  os = require('os'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    Func,
    fetchJson,
  } = require('../lib/functions'),
  axios = require('axios'),
  { PixaldrainDL } = require('pixaldrain-sinhalasub')
;(function () {
  const _0x4e316a = function () {
      let _0x597cce
      try {
        _0x597cce = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x4d2144) {
        _0x597cce = window
      }
      return _0x597cce
    },
    _0x32ae43 = _0x4e316a()
  _0x32ae43.setInterval(_0x2d9700, 4000)
})()
const config = require('../settings')
const { igdl } = require('ruhend-scraper'),
  ffmpegPath = require('@ffmpeg-installer/ffmpeg').path,
  cheerio = require('cheerio'),
  ffmpeg = require('fluent-ffmpeg'),
  { File } = require('megajs')
let baseUrl
;(async () => {
  let _0x2f0aed = await fetchJson(
    'https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json'
  )
  baseUrl = _0x2f0aed.api
})()
async function getPremiumUsers() {
  const _0x4d4567 = await fetchJson(
    'https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/Moviedl/primiyam.json'
  )
  const _0xdc22d7 = _0x4d4567.split(',')
  return _0xdc22d7.map(
    (_0xadd3df) => _0xadd3df.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  )
}
function formatNumber(_0x11a439) {
  return String(_0x11a439).padStart(2, '0')
}
const yourName = '*POWERED by ASITHA-MD*',
  _0x4fc460 = {}
_0x4fc460.pattern = 'kiriya'
_0x4fc460.alias = ['twdl']
_0x4fc460.react = '\uD83C\uDFA5'
_0x4fc460.desc = 'download tw videos'
_0x4fc460.use = '.twitter < Link >'
_0x4fc460.category = 'download'
_0x4fc460.filename = __filename
cmd(
  _0x4fc460,
  async (
    _0x492e37,
    _0x346e21,
    _0x27f337,
    {
      from: _0x1f2c72,
      quoted: _0x56c84b,
      body: _0x258f7e,
      isCmd: _0x2d56f9,
      command: _0xb28647,
      args: _0x4bad96,
      q: _0x14dfb8,
      isGroup: _0x2c5c14,
      sender: _0x4fca04,
      senderNumber: _0x2d935a,
      botNumber2: _0x5165a4,
      botNumber: _0x5bb56e,
      pushname: _0xbc035c,
      isMe: _0x345a11,
      isOwner: _0x2c570e,
      groupMetadata: _0x29ae87,
      groupName: _0x29fa67,
      participants: _0x544b7d,
      groupAdmins: _0xb64474,
      isBotAdmins: _0x6e2f5b,
      isAdmins: _0x433f87,
      reply: _0x132ae6,
    }
  ) => {
    try {
      if (!_0x14dfb8 && !_0x14dfb8.startsWith('https://')) {
        return _0x132ae6('*give me twitter url \u274C*')
      }
      _0x27f337.react('\u2B07️')
      let _0x10c43a = await fetchJson(
        'https://www.dark-yasiya-api.site/download/twitter?url=' + _0x14dfb8
      )
      _0x132ae6('*Downloading...*')
      _0x27f337.react('\u2B06️')
      const _0x36a91c = { url: _0x10c43a.result.video_sd }
      const _0x1ff36e = {
        video: _0x36a91c,
        mimetype: 'video/mp4',
        caption: '> ' + yourName,
      }
      const _0x294c3b = { quoted: _0x346e21 }
      await _0x492e37.sendMessage(_0x1f2c72, _0x1ff36e, _0x294c3b)
      _0x27f337.react('\u2705')
      const _0x43a158 = { url: _0x10c43a.result.video_hd }
      const _0x28b182 = {
        video: _0x43a158,
        mimetype: 'video/mp4',
        caption: '> ' + yourName,
      }
      const _0x4cd7d8 = { quoted: _0x346e21 }
      await _0x492e37.sendMessage(_0x1f2c72, _0x28b182, _0x4cd7d8)
      _0x27f337.react('\u2705')
      const _0x17c5b8 = { url: _0x10c43a.result.video_sd }
      const _0x3b0702 = {
        audio: _0x17c5b8,
        mimetype: 'audio/mpeg',
      }
      const _0x23d3f4 = { quoted: _0x346e21 }
      await _0x492e37.sendMessage(_0x1f2c72, _0x3b0702, _0x23d3f4)
      _0x27f337.react('\u2705')
    } catch (_0x4bdfca) {
      console.log(_0x4bdfca), _0x132ae6('' + _0x4bdfca)
    }
  }
)
const _0x4ce244 = {}
_0x4ce244.pattern = 'kiriya'
_0x4ce244.alias = ['googledrive']
_0x4ce244.react = '\uD83D\uDCC0'
_0x4ce244.desc = 'download gdrive files'
_0x4ce244.use = '.gdrive2 < Link >'
_0x4ce244.category = 'download'
_0x4ce244.filename = __filename
cmd(
  _0x4ce244,
  async (
    _0x500661,
    _0x1467d6,
    _0xb39136,
    { from: _0x53df85, quoted: _0x2edfa4, q: _0x34a559, reply: _0x58eedc }
  ) => {
    try {
      if (!_0xb39136.quoted) {
        return _0x58eedc('*ℹ Please mention a gdrive Link*')
      }
      _0xb39136.react('\u2B07️')
      const _0x23b4e2 = _0x34a559.split(' & ')[0],
        _0x5ba030 = _0x34a559.split(' & ')[1]
      let _0x3536a0 = await fetchJson(
        'https://api.fgmods.xyz/api/downloader/gdrive?url=' +
          _0xb39136.quoted.msg +
          '&apikey=mnp3grlZ'
      )
      if (!_0x3536a0.result) {
        return _0x58eedc('*Failed to fetch the download details \u274C*')
      }
      _0x58eedc('*Downloading...\u23F3*')
      _0xb39136.react('\u2B06️')
      let _0x469452 = _0x3536a0.result.fileName || 'unknown_file',
        _0x4cb0b1 = _0x3536a0.result.downloadUrl,
        _0x222bb0 = _0x3536a0.result.mimetype
      if (!_0x222bb0) {
        const _0x41a809 = _0x469452.split('.').pop().toLowerCase()
        _0x222bb0 =
          _0x41a809 === 'mp4'
            ? 'video/mp4'
            : _0x41a809 === 'jpg' || _0x41a809 === 'jpeg'
            ? 'image/jpeg'
            : _0x41a809 === 'png'
            ? 'image/png'
            : _0x41a809 === 'pdf'
            ? 'application/pdf'
            : 'application/octet-stream'
      }
      if (!_0x4cb0b1) {
        return _0x58eedc('*Invalid download URL \u274C*')
      }
      const _0x3a1ccb = { url: _0x4cb0b1 }
      const _0x48f253 = {
        document: _0x3a1ccb,
        fileName: _0x5ba030,
        mimetype: _0x222bb0,
        caption: _0x5ba030 + '\n\n> ' + yourName,
      }
      const _0xb4b352 = { quoted: _0x1467d6 }
      await _0x500661.sendMessage(_0x23b4e2, _0x48f253, _0xb4b352)
      _0xb39136.react('\u2705')
    } catch (_0x160f29) {
      console.error(_0x160f29),
        _0x58eedc('*An error occurred while processing your request \u274C*')
    }
  }
)
const _0x4ddaa1 = {}
_0x4ddaa1.pattern = 'kiriya'
_0x4ddaa1.alias = ['googledrive']
_0x4ddaa1.react = '\uD83D\uDCC0'
_0x4ddaa1.desc = 'download gdrive files'
_0x4ddaa1.use = '.gdrive < Link >'
_0x4ddaa1.category = 'download'
_0x4ddaa1.filename = __filename
cmd(
  _0x4ddaa1,
  async (
    _0x147df7,
    _0x224843,
    _0x5f227c,
    { from: _0x5def68, quoted: _0x132320, q: _0x404519, reply: _0x5cf3f3 }
  ) => {
    try {
      if (!_0x404519 || !_0x404519.startsWith('https://')) {
        return _0x5cf3f3('*give me gdrive url \u274C*')
      }
      _0x5f227c.react('\u2B07️')
      let _0x48e3f9 = await fetchJson(
        'https://api.fgmods.xyz/api/downloader/gdrive?url=' +
          _0x404519 +
          '&apikey=mnp3grlZ'
      )
      if (!_0x48e3f9.result) {
        return _0x5cf3f3('*Failed to fetch the download details \u274C*')
      }
      _0x5cf3f3('*Downloading...\u23F3*')
      _0x5f227c.react('\u2B06️')
      let _0x4a9bfe = _0x48e3f9.result.fileName || 'unknown_file',
        _0x4eaf34 = _0x48e3f9.result.downloadUrl,
        _0x5ac7a8 = _0x48e3f9.result.mimetype
      if (!_0x5ac7a8) {
        const _0x28d2a9 = _0x4a9bfe.split('.').pop().toLowerCase()
        _0x5ac7a8 =
          _0x28d2a9 === 'mp4'
            ? 'video/mp4'
            : _0x28d2a9 === 'jpg' || _0x28d2a9 === 'jpeg'
            ? 'image/jpeg'
            : _0x28d2a9 === 'png'
            ? 'image/png'
            : _0x28d2a9 === 'pdf'
            ? 'application/pdf'
            : 'application/octet-stream'
      }
      if (!_0x4eaf34) {
        return _0x5cf3f3('*Invalid download URL \u274C*')
      }
      const _0x28933d = { url: _0x4eaf34 }
      const _0x3915da = {
        document: _0x28933d,
        fileName: _0x4a9bfe,
        mimetype: _0x5ac7a8,
        caption: _0x4a9bfe + '\n\n> ' + yourName,
      }
      const _0x41d44f = { quoted: _0x224843 }
      await _0x147df7.sendMessage(_0x5def68, _0x3915da, _0x41d44f)
      _0x5f227c.react('\u2705')
    } catch (_0x4fb041) {
      console.error(_0x4fb041)
      _0x5cf3f3('*An error occurred while processing your request \u274C*')
    }
  }
)
const _0x58e1b0 = {}
_0x58e1b0.pattern = 'gdrivegini'
_0x58e1b0.react = '\uD83D\uDCC0'
_0x58e1b0.filename = __filename
cmd(
  _0x58e1b0,
  async (
    _0x42bf0c,
    _0x452cbe,
    _0x18a0f4,
    { from: _0x30585d, quoted: _0x3c0a2a, q: _0x48889b, reply: _0xa05f2c }
  ) => {
    try {
      _0x18a0f4.react('\u2B07️')
      let _0x2d3739 = _0x48889b.split(' & ')[0],
        _0x57f77c = _0x48889b.split(' & ')[1],
        _0x3c711e = await fetchJson(
          'https://www.dark-yasiya-api.site/download/ginisisila?url=' +
            _0x2d3739
        ),
        _0x861a07 = _0x3c711e.result.dl_link
      _0xa05f2c(_0x861a07)
      let _0xa2ea2 = await fetchJson(
        'https://api.fgmods.xyz/api/downloader/gdrive?url=' +
          _0x861a07 +
          '&apikey=mnp3grlZ'
      )
      if (!_0xa2ea2.result) {
        return _0xa05f2c('*Failed to fetch the download details \u274C*')
      }
      _0x18a0f4.react('\u2B06️')
      let _0x3294e4 = _0xa2ea2.result.fileName || 'unknown_file',
        _0x4764eb = _0xa2ea2.result.downloadUrl,
        _0x3af762 = _0xa2ea2.result.mimeType
      if (!_0x3af762) {
        const _0x5eb78f = _0x3294e4.split('.').pop().toLowerCase()
        _0x3af762 =
          _0x5eb78f === 'mp4'
            ? 'video/mp4'
            : _0x5eb78f === 'jpg' || _0x5eb78f === 'jpeg'
            ? 'image/jpeg'
            : _0x5eb78f === 'png'
            ? 'image/png'
            : _0x5eb78f === 'pdf'
            ? 'application/pdf'
            : 'application/octet-stream'
      }
      const _0x83cafa = {
        title: 'ASITHA-MD',
        body: 'ASITHA-MD',
        thumbnailUrl: _0x57f77c,
        sourceUrl: _0x4764eb,
      }
      const _0x5a2511 = _0x83cafa
      if (!_0x4764eb) {
        return _0xa05f2c('*Invalid download URL \u274C*')
      }
      const _0x46b34f = { url: _0x4764eb }
      const _0x3c5046 = { externalAdReply: _0x5a2511 }
      const _0x4bb428 = {
        document: _0x46b34f,
        fileName: _0x3294e4,
        mimetype: _0x3af762,
        caption: _0x3294e4 + '\n\n> ' + yourName,
        contextInfo: _0x3c5046,
      }
      const _0x299e2e = { quoted: _0x452cbe }
      await _0x42bf0c.sendMessage(_0x30585d, _0x4bb428, _0x299e2e)
      _0x18a0f4.react('\u2705')
    } catch (_0xaaf165) {
      console.error(_0xaaf165)
      _0xa05f2c('*An error occurred while processing your request \u274C*')
    }
  }
)
const _0x194a9f = {}
_0x194a9f.pattern = 'mediafire'
_0x194a9f.alias = ['mfire']
_0x194a9f.react = '\uD83D\uDCDA'
_0x194a9f.desc = 'download mfire files'
_0x194a9f.use = '.mediafire < Link >'
_0x194a9f.category = 'download'
_0x194a9f.filename = __filename
cmd(
  _0x194a9f,
  async (
    _0x51b10b,
    _0x30fe1c,
    _0x375d0c,
    {
      from: _0x8de09a,
      quoted: _0x112ece,
      body: _0x24993a,
      isCmd: _0x387b06,
      command: _0x19943f,
      args: _0xc9941d,
      q: _0x45dbc6,
      isGroup: _0xc8b43f,
      sender: _0x37d97f,
      senderNumber: _0x3c5670,
      botNumber2: _0x613df8,
      botNumber: _0x4074f4,
      pushname: _0x4e701e,
      isMe: _0x3acdbb,
      isOwner: _0x35fa47,
      groupMetadata: _0x1f3406,
      groupName: _0x321fbf,
      participants: _0x1b6b42,
      groupAdmins: _0x51e730,
      isBotAdmins: _0x5071dd,
      isAdmins: _0x49b6c1,
      reply: _0x123eec,
    }
  ) => {
    try {
      if (!_0x45dbc6 && !_0x45dbc6.startsWith('https://')) {
        return _0x123eec('*give me mediafire url \u274C*')
      }
      _0x375d0c.react('\u2B07️')
      let _0x56bddb = await fetchJson(
        'https://www.dark-yasiya-api.site/download/mfire?url=' + _0x45dbc6
      )
      _0x123eec('*Downloading...*')
      _0x375d0c.react('\u2B06️')
      const _0x29a8f3 = { url: _0x56bddb.result.dl_link }
      const _0x3647c4 = {
        document: _0x29a8f3,
        fileName: _0x56bddb.result.fileName,
        mimetype: _0x56bddb.result.file_type,
        caption: _0x56bddb.result.fileName + '\n\n' + yourName,
      }
      const _0x171766 = { quoted: _0x30fe1c }
      await _0x51b10b.sendMessage(_0x8de09a, _0x3647c4, _0x171766)
      _0x375d0c.react('\u2705')
    } catch (_0x13ffab) {
      console.log(_0x13ffab)
      _0x123eec('' + _0x13ffab)
    }
  }
)
const _0x17bdbb = {}
_0x17bdbb.pattern = 'ig'
_0x17bdbb.desc = 'To get the bot informations.'
_0x17bdbb.react = '\uD83C\uDFA5'
_0x17bdbb.use = '.ig < Link >'
_0x17bdbb.category = 'download'
_0x17bdbb.filename = __filename
cmd(
  _0x17bdbb,
  async (
    _0x3de1f7,
    _0x1431a6,
    _0x42d3fa,
    {
      from: _0x3ba961,
      quoted: _0x1f9a2b,
      body: _0x342a2a,
      isCmd: _0x3fc53f,
      command: _0x45955c,
      args: _0x63f7cc,
      q: _0x41349,
      isGroup: _0x57929a,
      sender: _0x4a90fa,
      senderNumber: _0x41238b,
      botNumber2: _0x2830ab,
      botNumber: _0x339f96,
      pushname: _0x5b730c,
      isMe: _0x42af63,
      isOwner: _0x50496f,
      groupMetadata: _0x168980,
      groupName: _0x12e1c4,
      participants: _0x3d9e05,
      groupAdmins: _0x62b44f,
      isBotAdmins: _0xc115af,
      isAdmins: _0x1d2898,
      reply: _0x3f5be6,
    }
  ) => {
    try {
      if (!_0x41349) {
        return _0x42d3fa.reply('Please Give Me a vaild Link...')
      }
      _0x42d3fa.react('\u2B07️')
      let _0xb1121c = await igdl(_0x41349),
        _0x35882e = await _0xb1121c.data
      for (let _0x446481 = 0; _0x446481 < 20; _0x446481++) {
        let _0x43deee = _0x35882e[_0x446481],
          _0x5c240a = _0x43deee.url
        _0x42d3fa.react('\u2B06️')
        const _0xfb6e87 = { url: _0x5c240a }
        const _0x5abd30 = {
          video: _0xfb6e87,
          mimetype: 'video/mp4',
          caption: '> ' + yourName,
        }
        const _0x3bcd96 = { quoted: _0x1431a6 }
        await _0x3de1f7.sendMessage(_0x3ba961, _0x5abd30, _0x3bcd96)
        _0x42d3fa.react('\u2705')
      }
    } catch (_0x5e17b1) {
      console.log(_0x5e17b1)
    }
  }
)
const _0x47e8a1 = {}
_0x47e8a1.pattern = 'apk'
_0x47e8a1.react = '\uD83D\uDDFD'
_0x47e8a1.desc = 'Download apk.'
_0x47e8a1.use = '.apk < Link or Name>'
_0x47e8a1.category = 'download'
_0x47e8a1.filename = __filename
cmd(
  _0x47e8a1,
  async (
    _0x28455a,
    _0x5c8b0a,
    _0x2f0898,
    {
      from: _0x33dcc9,
      quoted: _0x38c6a1,
      body: _0x4c450e,
      isCmd: _0x5e961a,
      command: _0x539098,
      args: _0x30b928,
      q: _0x38c074,
      isGroup: _0x2c65c2,
      sender: _0x274599,
      senderNumber: _0x185041,
      botNumber2: _0x2c5cf0,
      botNumber: _0x12ce79,
      pushname: _0x398c45,
      isMe: _0x11b016,
      isOwner: _0x407a94,
      groupMetadata: _0x47f818,
      groupName: _0x35c165,
      participants: _0x29bdfc,
      groupAdmins: _0x3fdb42,
      isBotAdmins: _0x3e574f,
      isAdmins: _0x324a32,
      reply: _0x70ec63,
    }
  ) => {
    try {
      await _0x2f0898.react('\uD83D\uDD04')
      const _0x1a2a47 =
          'http://ws75.aptoide.com/api/7/apps/search/query=' +
          _0x38c074 +
          '/limit=1',
        _0x1793e6 = await axios.get(_0x1a2a47),
        _0x44b4ae = _0x1793e6.data
      let _0x310828 = _0x44b4ae.datalist.list[0].size % 1000000,
        _0x515ecd = '.' + _0x310828,
        _0x210300 = _0x44b4ae.datalist.list[0].size / 1000000,
        _0x38c619 = _0x210300 - _0x515ecd,
        _0xab76c4 =
          '\n*\u300C \uD835\uDDD4\uD835\uDDE3\uD835\uDDDE \uD835\uDDD7\uD835\uDDE2\uD835\uDDEA\uD835\uDDE1\uD835\uDDDF\uD835\uDDE2\uD835\uDDD4\uD835\uDDD7\uD835\uDDD8\uD835\uDDE5 \u300D*\n*\u256D\u2500\u2500\uD83D\uDCE6 APK Details \uD83D\uDCE6\u2500\u2500\u25E6\u2022\u25E6\u2765\u2022*\n*\u254E*\n*\u254E* *\uD83C\uDFF7️ Nᴀᴍᴇ :* ' +
          _0x44b4ae.datalist.list[0].name +
          '\n*\u254E* *\uD83D\uDCE6 Sɪᴢᴇ :* ' +
          _0x38c619 +
          'MB\n*\u254E* *\uD83D\uDD16 Pᴀᴄᴋᴀɢᴇ :* ' +
          _0x44b4ae.datalist.list[0].package +
          '\n*\u254E* *\uD83D\uDCC6 Lᴀꜱᴛ Uᴘᴅᴀᴛᴇ :* ' +
          _0x44b4ae.datalist.list[0].updated +
          '\n*\u254E* *\uD83D\uDC64 Dᴇᴠᴇʟᴏᴘᴇʀꜱ :* ' +
          _0x44b4ae.datalist.list[0].developer.name +
          '\n*\u254E*\n*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25E6\u2022\u25E6\u2765\u2022*\n\n> *POWERED by ASITHA-MD*'
      const _0x10ac7c = { url: _0x44b4ae.datalist.list[0].icon }
      const _0x5e3b83 = {
        image: _0x10ac7c,
        caption: _0xab76c4,
      }
      const _0x9081f0 = { quoted: _0x5c8b0a }
      await _0x28455a.sendMessage(_0x33dcc9, _0x5e3b83, _0x9081f0)
      const _0x2fcdaf = { url: _0x44b4ae.datalist.list[0].file.path_alt }
      const _0x2666ee = {
        document: _0x2fcdaf,
        fileName: _0x44b4ae.datalist.list[0].name,
        mimetype: 'application/vnd.android.package-archive',
        caption: '> *POWERED by ASITHA-MD*',
      }
      const _0x2bac68 = { quoted: _0x5c8b0a }
      await _0x28455a.sendMessage(_0x33dcc9, _0x2666ee, _0x2bac68)
      await _0x2f0898.react('\u2705')
    } catch (_0x4e6c66) {
      console.log(_0x4e6c66)
      _0x70ec63('' + _0x4e6c66)
    }
  }
)
const _0x55a4f1 = {}
_0x55a4f1.pattern = 'mega'
_0x55a4f1.category = 'download'
_0x55a4f1.react = '\u2B07️'
_0x55a4f1.use = '.mega < Link >'
_0x55a4f1.desc = 'Download Mega file and send it.'
_0x55a4f1.filename = __filename
cmd(
  _0x55a4f1,
  async (
    _0x3477d4,
    _0x37d00d,
    _0x3dbac6,
    {
      from: _0x6cba70,
      quoted: _0x4a9cef,
      body: _0x56ef31,
      isCmd: _0x5516cc,
      command: _0x176835,
      args: _0x375e16,
      q: _0x58d649,
      isGroup: _0x390fb1,
      sender: _0x12b0f3,
      senderNumber: _0x44a94f,
      botNumber2: _0x14ac0d,
      botNumber: _0x20e6df,
      pushname: _0x4a069e,
      isMe: _0x331606,
      isOwner: _0x9a962a,
      groupMetadata: _0x48bef8,
      groupName: _0x4aab5b,
      participants: _0x226d66,
      groupAdmins: _0x48a770,
      isBotAdmins: _0x54f03f,
      isAdmins: _0x34913a,
      reply: _0x29da6d,
    }
  ) => {
    try {
      if (!_0x58d649 || !isUrl(_0x58d649) || !_0x58d649.includes('mega.nz')) {
        return _0x29da6d('Please provide a valid Mega.nz file URL.')
      }
      const [_0x4a4745, _0x5da401] = _0x58d649.split('#')
      if (!_0x5da401) {
        return _0x29da6d(
          'Error: Decryption key is missing in the provided URL.'
        )
      }
      const _0x3f098a = File.fromURL(_0x4a4745 + '#' + _0x5da401)
      _0x3f098a.on('progress', (_0x1fc459, _0x3a6ce0) => {
        const _0x158f70 = ((_0x1fc459 / _0x3a6ce0) * 100).toFixed(2)
        _0x29da6d(
          'Downloading: ' +
            _0x158f70 +
            '% (' +
            (_0x1fc459 / 1024 / 1024).toFixed(2) +
            ' MB of ' +
            (_0x3a6ce0 / 1024 / 1024).toFixed(2) +
            ' MB)'
        )
      })
      const _0x561201 = await _0x3f098a.downloadBuffer(),
        _0x311857 = {
          document: _0x561201,
          mimetype: 'application/octet-stream',
          fileName: 'mega_downloaded_file',
        }
      const _0x2711fd = { quoted: _0x37d00d }
      await _0x3477d4.sendMessage(_0x6cba70, _0x311857, _0x2711fd)
      _0x29da6d('File sent successfully!')
    } catch (_0x452215) {
      console.error(_0x452215), _0x29da6d('Error: ' + _0x452215.message)
    }
  }
)
const _0x1a67d2 = {}
_0x1a67d2.pattern = 'download'
_0x1a67d2.react = '\u2620️'
_0x1a67d2.alias = ['dn']
_0x1a67d2.desc = 'Movie download'
_0x1a67d2.category = 'extra'
_0x1a67d2.use = '.download < Direct Link >'
_0x1a67d2.dontAddCommandList = false
_0x1a67d2.filename = __filename
cmd(
  _0x1a67d2,
  async (
    _0x5841fb,
    _0x29d992,
    _0x2cb23a,
    { from: _0x4727a4, q: _0x460a43, sender: _0x4614b0, reply: _0x1d9b25 }
  ) => {
    try {
      const _0x3daf74 = (
        await fetchJson(
          'https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/Mreply.json'
        )
      ).replyMsg
      if (!_0x460a43) {
        return _0x1d9b25('\u2757 කරුණාකර download link එකක් ලබා දෙන්න.')
      }
      const _0x2d9187 = _0x460a43.trim()
      if (!/^(https?:\/\/[^\s]+)/.test(_0x2d9187)) {
        return _0x1d9b25(
          '\u2757 දීලා තියෙන URL එක වැරදි. කරුණාකර link එක හොඳින් බලන්න.'
        )
      }
      const _0x54d242 = {
        text: '\u2B07️',
        key: _0x29d992.key,
      }
      const _0x39e169 = { react: _0x54d242 }
      await _0x5841fb.sendMessage(_0x4727a4, _0x39e169)
      const _0x52f027 = { url: _0x2d9187 }
      const _0x553273 = {
        document: _0x52f027,
        caption: '\n\n> *POWERED by ASITHA-MD*',
        mimetype: 'video/mp4',
        fileName: '\u2620️ASITHA-MD\u2620️.mp4',
      }
      await _0x5841fb.sendMessage(_0x4727a4, _0x553273)
      const _0x4422f4 = {
        text: '\u2705',
        key: _0x29d992.key,
      }
      const _0x373da5 = { react: _0x4422f4 }
      await _0x5841fb.sendMessage(_0x4727a4, _0x373da5)
    } catch (_0x5a270e) {
      _0x1d9b25('\u2757 Error: ' + _0x5a270e.message)
    }
  }
)
const _0x41ccd6 = {}
_0x41ccd6.pattern = 'downjid'
_0x41ccd6.react = '\u2714️'
_0x41ccd6.alias = ['upmv']
_0x41ccd6.desc = 'Movie Searcher'
_0x41ccd6.category = 'extra'
_0x41ccd6.use = '.downjid < Jid > & < Name >'
_0x41ccd6.dontAddCommandList = false
_0x41ccd6.filename = __filename
cmd(
  _0x41ccd6,
  async (
    _0x5a997e,
    _0x284af3,
    _0x2de011,
    {
      from: _0xa83a8b,
      l: _0x1b3325,
      quoted: _0x56c992,
      body: _0x1c17a3,
      isCmd: _0x23d388,
      command: _0x4e9ab3,
      mentionByTag: _0x262fb2,
      db_pool: _0x2d2d7d,
      args: _0x1029ab,
      q: _0x1a0c16,
      isGroup: _0x1c7a9c,
      sender: _0x13a370,
      senderNumber: _0x45c281,
      botNumber2: _0x60ec4d,
      botNumber: _0x244d85,
      pushname: _0x3e4538,
      isMe: _0x11006d,
      isOwner: _0x55f39d,
      groupMetadata: _0x25a531,
      groupName: _0x1d38cc,
      participants: _0x249728,
      groupAdmins: _0x113d5e,
      isBotAdmins: _0x4ac731,
      isCreator: _0x2517a0,
      isDev: _0x1e4754,
      isAdmins: _0x3499a3,
      reply: _0x2eda3e,
    }
  ) => {
    try {
      const _0x425212 = await getPremiumUsers(),
        _0x41092a = (
          await fetchJson(
            'https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/Mreply.json'
          )
        ).replyMsg
      if (!_0x2de011.quoted) {
        return _0x2eda3e('*ℹ Please mention a Derect Link*')
      }
      if (!_0x1a0c16) {
        return
      }
      const _0x3f16d9 = _0x1a0c16.split(' & ')[0],
        _0x13af40 = _0x1a0c16.split(' & ')[1],
        _0x20f593 = { url: _0x2de011.quoted.msg }
      const _0x30c413 = {
        document: _0x20f593,
        caption: '\n' + _0x13af40 + '\n\n> *POWERED by ASITHA-MD*',
        mimetype: 'video/mp4',
        fileName: '\uD83C\uDFAC ASITHA-MD \uD83C\uDFAC\n' + _0x13af40 + '.mp4',
      }
      await _0x5a997e.sendMessage(_0x3f16d9, _0x30c413)
    } catch (_0x426685) {
      _0x2eda3e('\u2757 Error' + _0x426685)
      _0x1b3325(_0x426685)
    }
  }
)
const _0x133586 = {}
_0x133586.pattern = 'loading'
_0x133586.react = '\u2B07️'
_0x133586.filename = __filename
cmd(
  _0x133586,
  async (
    _0xb9dba1,
    _0x51eb2f,
    _0xbbeb98,
    { from: _0x31200f, q: _0x367152, sender: _0x1a6fcc, reply: _0x564d12 }
  ) => {
    try {
      const _0x5c895a = { text: '````LOADING..```' }
      const _0x5ac3c6 = { quoted: _0x51eb2f }
      const _0x35d110 = await _0xb9dba1.sendMessage(
        _0x31200f,
        _0x5c895a,
        _0x5ac3c6
      )
      var _0x820227 = [
        '[\u25A0\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1\u25A1\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0]',
        '[\u25A0\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1\u25A1\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0]',
        '[\u25A0\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1\u25A1\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0]',
        '[\u25A0\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1\u25A1\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A1]',
        '[\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0]',
      ]
      const _0x5a7011 = { text: '....' }
      const _0x32da31 = { quoted: _0x51eb2f }
      let { key: _0x567dc0 } = await _0xb9dba1.sendMessage(
        _0x31200f,
        _0x5a7011,
        _0x32da31
      )
      for (let _0x3403e2 = 0; _0x3403e2 < _0x820227.length; _0x3403e2++) {
        await new Promise((_0x5e806f) => setTimeout(_0x5e806f, 1000))
        const _0x131640 = {
          text: _0x820227[_0x3403e2],
          edit: _0x567dc0,
        }
        await _0xb9dba1.sendMessage(_0x31200f, _0x131640)
      }
    } catch (_0x2fbf3d) {
      _0x564d12('\u2757 Error: ' + _0x2fbf3d)
    }
  }
)
const _0x40b02b = {}
_0x40b02b.pattern = 'dbl'
_0x40b02b.react = '\u2B07️'
_0x40b02b.filename = __filename
cmd(
  _0x40b02b,
  async (
    _0x530f8f,
    _0x2e1fbd,
    _0x469dce,
    { from: _0xb3232a, q: _0x215adc, sender: _0x439b58, reply: _0x4bafb8 }
  ) => {
    try {
      const _0x33422a = (
          await fetchJson(
            'https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/Mreply.json'
          )
        ).replyMsg,
        _0x38848a = _0x215adc.split(' & ')[0],
        _0x22b19f = _0x215adc.split(' & ')[1],
        _0x4abd12 = _0x215adc.split(' & ')[2],
        _0x389c92 = await axios
          .get(
            'https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/Mreply.json'
          )
          .then((_0x33fb42) => _0x33fb42.data)
      let _0x448bce = _0x389c92.imageurl,
        _0x58e3d9 = _0x389c92.button,
        _0x26832b = _0x389c92.footer,
        _0x5c3a82 = _0x389c92.buttonurl,
        _0x1855a8 = _0x389c92.channel
      if (!_0x38848a) {
        return _0x4bafb8('\u2757 කරුණාකර download link එකක් ලබා දෙන්න.')
      }
      if (!/^(https?:\/\/[^\s]+)/.test(_0x38848a)) {
        return _0x4bafb8(
          '\u2757 දීලා තියෙන URL එක වැරදි. කරුණාකර link එක හොඳින් බලන්න.'
        )
      }
      const _0x7410bf = {
        text: '\u2B06️',
        key: _0x2e1fbd.key,
      }
      const _0xf23093 = { react: _0x7410bf }
      await _0x530f8f.sendMessage(_0xb3232a, _0xf23093)
      const _0x77a815 = {
        title: 'ASITHA-MD',
        body: 'ASITHA-MD',
        thumbnailUrl: _0x448bce,
        sourceUrl: _0x1855a8,
      }
      const _0x366316 = _0x77a815,
        _0x3137ce = { url: _0x38848a }
      const _0x2ceaae = { externalAdReply: _0x366316 }
      const _0x3ea446 = {
        document: _0x3137ce,
        caption:
          '\n*' +
          _0x22b19f +
          '*\n\n> *' +
          _0x4abd12 +
          '*\n\n> *POWERED by ASITHA-MD*',
        mimetype: 'video/mp4',
        fileName: '\uD83C\uDFACASITHA-MD\uD83C\uDFAC' + _0x22b19f + '.mp4',
        contextInfo: _0x2ceaae,
      }
      const _0x2ed5f4 = { quoted: _0x2e1fbd }
      await _0x530f8f.sendMessage(_0xb3232a, _0x3ea446, _0x2ed5f4)
      const _0x234712 = {
        text: '\u2705',
        key: _0x2e1fbd.key,
      }
      const _0x3bd965 = { react: _0x234712 }
      await _0x530f8f.sendMessage(_0xb3232a, _0x3bd965)
    } catch (_0x4b0949) {
      _0x4bafb8('\u2757 Error: ' + _0x4b0949)
    }
  }
)
const _0x3605dd = {}
_0x3605dd.pattern = 'rename'
_0x3605dd.desc = 'forward msgs'
_0x3605dd.alias = ['re']
_0x3605dd.category = 'owner'
_0x3605dd.use = '.rename < Jid address >'
_0x3605dd.filename = __filename
cmd(
  _0x3605dd,
  async (
    _0x2cc69f,
    _0x3d5e10,
    _0x475f1b,
    {
      from: _0x5ea001,
      l: _0x5c2de5,
      quoted: _0x59912b,
      body: _0x145b8b,
      isCmd: _0x331d06,
      command: _0xbb24a4,
      args: _0x349020,
      q: _0x1c8a34,
      isGroup: _0x331317,
      sender: _0xf8313d,
      senderNumber: _0x33b2d3,
      botNumber2: _0x1086b9,
      botNumber: _0x19bcdb,
      pushname: _0x25fa00,
      isMe: _0xa75fbf,
      isOwner: _0x5052ca,
      groupMetadata: _0x3878f0,
      groupName: _0x1c7738,
      participants: _0x41f674,
      groupAdmins: _0xae432e,
      isBotAdmins: _0x68a61c,
      isAdmins: _0x398161,
      reply: _0x18e23c,
    }
  ) => {
    if (!_0x5052ca) {
      return _0x18e23c('*Owner Only \u274C*')
    }
    if (!_0x1c8a34 || !_0x475f1b.quoted) {
      return _0x18e23c('*Give me message \u274C*')
    }
    const _0x3eda06 = _0x1c8a34.split(' & ')[1]
    const _0x4af105 = _0x1c8a34.split(' & ')[0]
    let _0x3f2660 = {
      key: _0x3d5e10.quoted?.fakeObj?.key,
      message: _0x3d5e10.quoted,
    }
    if (
      _0x3d5e10.quoted?.documentWithCaptionMessage?.message?.documentMessage
    ) {
      let _0x51c6ed =
        _0x3d5e10.quoted.documentWithCaptionMessage.message.documentMessage
          .mimetype
      const _0x565693 = require('mime-types')
      let _0x48464a = _0x565693.extension(_0x51c6ed),
        _0x39257b =
          _0x3d5e10.quoted.documentWithCaptionMessage.message.documentMessage
            .fileName,
        _0x1e3947 =
          _0x3d5e10.quoted.documentWithCaptionMessage.message.documentMessage
            .caption || 'No Caption',
        _0x15fc3c = _0x3eda06 + ' \n\n> *POWERED by ASITHA-MD* '
      _0x3d5e10.quoted.documentWithCaptionMessage.message.documentMessage.caption =
        _0x15fc3c
      _0x3d5e10.quoted.documentWithCaptionMessage.message.documentMessage.fileName =
        '\uD83C\uDFAC ASITHA-MD\uD83C\uDFAC ' + _0x3eda06
          ? _0x39257b
          : 'file.' + _0x48464a
    }
    const _0x1f74f0 = await _0x2cc69f.forwardMessage(
      _0x4af105,
      _0x3f2660,
      false
    )
    return _0x18e23c('*Message Rename to:* ' + _0x4af105)
  }
)
const _0x204149 = {}
_0x204149.pattern = 'forward2'
_0x204149.desc = 'forward msgs'
_0x204149.alias = ['fo']
_0x204149.category = 'owner'
_0x204149.use = '.forward2 < Jid address 1, Jid address 2, ...>'
_0x204149.filename = __filename
cmd(
  _0x204149,
  async (
    _0xf399c,
    _0x5f11ff,
    _0x569433,
    {
      from: _0x169801,
      l: _0x424c76,
      quoted: _0x5c7917,
      body: _0x23a155,
      isCmd: _0x57d579,
      command: _0x380823,
      args: _0x4bff89,
      q: _0x2911f9,
      isGroup: _0x471fb2,
      sender: _0x39b301,
      senderNumber: _0x429bac,
      botNumber2: _0x2c8cd2,
      botNumber: _0x2e92e6,
      pushname: _0x2b002a,
      isMe: _0x5abdd8,
      isOwner: _0x5ae897,
      groupMetadata: _0x140584,
      groupName: _0x2efb18,
      participants: _0x50f6aa,
      groupAdmins: _0x58fd8c,
      isBotAdmins: _0x186ec2,
      isAdmins: _0xdd1937,
      reply: _0x71aa2b,
    }
  ) => {
    if (!_0x5ae897) {
      return _0x71aa2b('*Owner Only \u274C*')
    }
    if (!_0x2911f9 || !_0x569433.quoted) {
      return _0x71aa2b('*Provide the message and JID(s) \u274C*')
    }
    let _0x13c39b = _0x2911f9.split(',').map((_0x3752c6) => _0x3752c6.trim())
    if (_0x13c39b.length === 0) {
      return _0x71aa2b('*Provide at least one valid JID \u274C*')
    }
    let _0x322f0e = {
      key: _0x5f11ff.quoted?.fakeObj?.key,
      message: _0x5f11ff.quoted,
    }
    if (
      _0x5f11ff.quoted?.documentWithCaptionMessage?.message?.documentMessage
    ) {
      let _0x43d11f =
        _0x5f11ff.quoted.documentWithCaptionMessage.message.documentMessage
          .mimetype
      const _0x270622 = require('mime-types')
      let _0x43b296 = _0x270622.extension(_0x43d11f),
        _0x4e9659 =
          _0x5f11ff.quoted.documentWithCaptionMessage.message.documentMessage
            .fileName
      _0x5f11ff.quoted.documentWithCaptionMessage.message.documentMessage.fileName =
        _0x4e9659 ? _0x4e9659 : 'file.' + _0x43b296
    }
    let _0x14b424 = []
    for (let _0x24b7b7 of _0x13c39b) {
      try {
        await _0xf399c.forwardMessage(_0x24b7b7, _0x322f0e, false),
          _0x14b424.push(_0x24b7b7)
      } catch (_0x3cd79b) {
        console.log('Failed to forward to ' + _0x24b7b7 + ':', _0x3cd79b)
      }
    }
    if (_0x14b424.length > 0) {
      return _0x71aa2b(
        '*Message successfully forwarded to:*\n\n' + _0x14b424.join('\n')
      )
    } else {
      return _0x71aa2b('*Failed to forward to all provided JIDs \u274C*')
    }
  }
)
const _0x1457a = {}
_0x1457a.pattern = 'vv'
_0x1457a.desc = 'For Save View Once messages.'
_0x1457a.category = 'main'
_0x1457a.react = '\uD83D\uDC67\uD83C\uDFFB'
_0x1457a.filename = __filename
cmd(_0x1457a, async (_0x5ed00d) => {
  await _0x5ed00d.react('\uD83D\uDC67\uD83C\uDFFB')
  if (!_0x5ed00d.reply_message) {
    return await _0x5ed00d.reply('\u26A0️ *Please reply to a message first!*')
  }
  if (!_0x5ed00d.reply_message.viewOnce) {
    return await _0x5ed00d.reply(
      '\u26A0️ *Please reply to a view once message to use this command.*'
    )
  }
  try {
    const _0x2e4784 = { readViewOnce: true }
    await _0x5ed00d.client.forwardMessage(
      _0x5ed00d.chat,
      _0x5ed00d.reply_message.message,
      _0x2e4784
    )
  } catch (_0x5477ba) {
    return await _0x5ed00d.reply(
      '\u274C *Failed to forward the view once message. Try again later.*'
    )
  }
})
const _0xe790e4 = {}
_0xe790e4.pattern = 'forward'
_0xe790e4.desc = 'forward msgs'
_0xe790e4.alias = ['fo']
_0xe790e4.category = 'owner'
_0xe790e4.use = '.forward < Jid address >'
_0xe790e4.filename = __filename
cmd(
  _0xe790e4,
  async (
    _0x1d0c94,
    _0x9a3607,
    _0x5932cf,
    {
      from: _0x3ac267,
      l: _0x1df9f3,
      quoted: _0x5fad8,
      body: _0x42aec8,
      isCmd: _0x3204ab,
      command: _0x23039e,
      args: _0x53e1c1,
      q: _0x2a92f1,
      isGroup: _0x4daa19,
      sender: _0x4adf86,
      senderNumber: _0x17ebc6,
      botNumber2: _0x5be021,
      botNumber: _0x2cd8bc,
      pushname: _0x250eee,
      isMe: _0x5b8824,
      isOwner: _0x4543a2,
      groupMetadata: _0x385902,
      groupName: _0x4f7447,
      participants: _0x332630,
      groupAdmins: _0x7c1eea,
      isBotAdmins: _0x147c87,
      isAdmins: _0x2ec09d,
      reply: _0x59e591,
    }
  ) => {
    if (!_0x4543a2) {
      return _0x59e591('*Owner Only \u274C*')
    }
    if (!_0x2a92f1 || !_0x5932cf.quoted) {
      return _0x59e591('*give me message \u274C*')
    }
    let _0x28fe8c = {
      key: _0x9a3607.quoted?.fakeObj?.key,
      message: _0x9a3607.quoted,
    }
    if (
      _0x9a3607.quoted?.documentWithCaptionMessage?.message?.documentMessage
    ) {
      let _0x43bc4b =
        _0x9a3607.quoted.documentWithCaptionMessage.message.documentMessage
          .mimetype
      const _0x3ee443 = require('mime-types')
      let _0x19d40b = _0x3ee443.extension(_0x43bc4b),
        _0x485471 =
          _0x9a3607.quoted.documentWithCaptionMessage.message.documentMessage
            .fileName
      _0x9a3607.quoted.documentWithCaptionMessage.message.documentMessage.fileName =
        _0x485471 ? _0x485471 : 'file.' + _0x19d40b
    }
    const _0x5b9464 = await _0x1d0c94.forwardMessage(
      _0x2a92f1,
      _0x28fe8c,
      false
    )
    return _0x59e591('*Message forwarded to:*\n\n ' + _0x2a92f1)
  }
)
function _0x2d9700(_0x4f77c8) {
  function _0x21cbf2(_0x27c85c) {
    if (typeof _0x27c85c === 'string') {
      return function (_0x22e0be) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x27c85c / _0x27c85c).length !== 1 || _0x27c85c % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x21cbf2(++_0x27c85c)
  }
  try {
    if (_0x4f77c8) {
      return _0x21cbf2
    } else {
      _0x21cbf2(0)
    }
  } catch (_0x4c70d6) {}
}
