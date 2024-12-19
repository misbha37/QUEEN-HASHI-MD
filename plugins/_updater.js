const DB = require('../lib/scraper'),
  { execSync } = require('child_process'),
  { tlang, Config, prefix, cmd } = require('../lib')
cmd(
  {
    pattern: 'update',
    react: '\uD83D\uDD0E',
    desc: "Shows repo's refreshed commits.",
    category: 'misc',
    filename: __filename,
  },
  async (_0x494257, _0x4834a5, _0x5dd90e, { isCreator: _0x3d798c }) => {
    if (!_0x3d798c) {
      return _0x4834a5.reply('This command is only for my owner \uD83D\uDEAB')
    }
    let _0x57dce7 = await DB.syncgit()
    if (_0x57dce7.total === 0) {
      _0x4834a5.reply(
        'Hey QUEEN-ISHU User ' +
          _0x4834a5.pushName +
          '. You have latest version installed.\u2705'
      )
    } else {
      let _0x3e220e = await DB.sync(),
        _0x2f567a = {
          text: _0x3e220e,
          footer: 'UPDATER',
          headerType: 4,
        }
      return await _0x494257.sendMessage(_0x4834a5.chat, _0x2f567a)
    }
  }
)
