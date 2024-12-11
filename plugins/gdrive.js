const _0x220b17 = (function () {
    let _0x59e136 = true
    return function (_0x2fbed3, _0xd68770) {
      const _0x36256e = _0x59e136
        ? function () {
            if (_0xd68770) {
              const _0xe6fcde = _0xd68770.apply(_0x2fbed3, arguments)
              return (_0xd68770 = null), _0xe6fcde
            }
          }
        : function () {}
      return (_0x59e136 = false), _0x36256e
    }
  })(),
  _0x3a6ba9 = _0x220b17(this, function () {
    return _0x3a6ba9
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x3a6ba9)
      .search('(((.+)+)+)+$')
  })
_0x3a6ba9()
const _0x19d2ec = (function () {
    let _0x1f2492 = true
    return function (_0x4e3e70, _0x2a21b1) {
      const _0x3a166b = _0x1f2492
        ? function () {
            if (_0x2a21b1) {
              const _0x72c0dd = _0x2a21b1.apply(_0x4e3e70, arguments)
              return (_0x2a21b1 = null), _0x72c0dd
            }
          }
        : function () {}
      return (_0x1f2492 = false), _0x3a166b
    }
  })(),
  _0x3c3d61 = _0x19d2ec(this, function () {
    const _0x19f82c = function () {
      const _0x22bd49 = { tzWJt: '(((.+)+)+)+$' }
      const _0x3abc46 = _0x22bd49
      let _0xef48a8
      try {
        _0xef48a8 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x548be8) {
        _0xef48a8 = window
      }
      return _0xef48a8
    }
    const _0x28b4b3 = _0x19f82c(),
      _0x1fc0dd = (_0x28b4b3.console = _0x28b4b3.console || {}),
      _0x5490ad = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x3892f8 = 0; _0x3892f8 < _0x5490ad.length; _0x3892f8++) {
      const _0x9d5f70 = _0x19d2ec.constructor.prototype.bind(_0x19d2ec),
        _0x5bd0a2 = _0x5490ad[_0x3892f8],
        _0x493dd = _0x1fc0dd[_0x5bd0a2] || _0x9d5f70
      _0x9d5f70['__proto__'] = _0x19d2ec.bind(_0x19d2ec)
      _0x9d5f70.toString = _0x493dd.toString.bind(_0x493dd)
      _0x1fc0dd[_0x5bd0a2] = _0x9d5f70
    }
  })
_0x3c3d61()
const config = require('../config')
const fg = require('api-dylux'),
  { cmd, commands } = require('../command'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
  } = require('../lib/functions'),
  _0x3f425a = {}
_0x3f425a.pattern = 'gdrive'
_0x3f425a.alias = ['googledrive', 'gd', 'cyber_gd']
_0x3f425a.react = '\uD83D\uDCD1'
_0x3f425a.desc = 'Download googledrive files.'
_0x3f425a.category = 'download'
_0x3f425a.use = '.gdrive <googledrive link>'
_0x3f425a.filename = __filename
cmd(
  _0x3f425a,
  async (
    _0x4a6368,
    _0x4eb1fc,
    _0x992cb7,
    {
      from: _0x437561,
      l: _0x557d7a,
      quoted: _0x59fa34,
      body: _0x5a081a,
      isCmd: _0x4fc32a,
      command: _0x17cdc6,
      args: _0x975d20,
      q: _0x3da772,
      isGroup: _0x4b9bb6,
      sender: _0x2a3450,
      senderNumber: _0x32152d,
      botNumber2: _0x2534b9,
      botNumber: _0x56f55e,
      pushname: _0x15ff3c,
      isMe: _0xfc8162,
      isOwner: _0x1c72bb,
      groupMetadata: _0x2bd40d,
      groupName: _0xae0f20,
      participants: _0x3c0371,
      groupAdmins: _0x499ec4,
      isBotAdmins: _0x46ecf9,
      isAdmins: _0x1178df,
      reply: _0x10d62d,
    }
  ) => {
    try {
      if (!_0x3da772) {
        return _0x10d62d('*Please give me googledrive url...!!*')
      }
      let _0xd27439 = await fg.GDriveDl(_0x3da772)
      _0x10d62d(
        '\n\u2B07 *QUEEN-ISHU-GDRIVE DOWNLOADER*  \u2B07️\n\n*\uD83D\uDCC3 File name:*  ' +
          _0xd27439.fileName +
          '\n*\uD83D\uDC88 File Size:* ' +
          _0xd27439.fileSize +
          '\n*\uD83D\uDD79️ File type:* ' +
          _0xd27439.mimetype +
          '\n\n**\n*CREATE BY LAKSIDU NIMSARA*'
      )
      const _0x2344b5 = { url: _0xd27439.downloadUrl }
      const _0x2a312c = {
        document: _0x2344b5,
        fileName: _0xd27439.fileName,
        mimetype: _0xd27439.mimetype,
      }
      const _0x4c9582 = { quoted: _0x4eb1fc }
      _0x4a6368.sendMessage(_0x437561, _0x2a312c, _0x4c9582)
    } catch (_0x2bd223) {
      _0x10d62d('*Error..! Your Url is Private. Please Public It*')
      _0x557d7a(_0x2bd223)
    }
  }
)
