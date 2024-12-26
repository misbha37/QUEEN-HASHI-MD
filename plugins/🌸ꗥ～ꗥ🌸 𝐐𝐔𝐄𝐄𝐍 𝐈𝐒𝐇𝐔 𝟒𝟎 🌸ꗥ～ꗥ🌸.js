const { cmd, commands } = require('../command'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    sleep,
    fetchJson,
  } = require('../lib/functions')
cmd(
  {
    pattern: 'pair',
    alias: ['register', 'link'],
    react: '\uD83D\uDD22',
    desc: 'pair',
    category: 'download',
    use: '.pair +923096287432',
    filename: __filename,
  },
  async (
    _0x5b297c,
    _0x3a3e44,
    _0xefafe8,
    {
      from: _0x5aafb9,
      prefix: _0x322641,
      quoted: _0x587384,
      q: _0x560654,
      reply: _0x2b55a0,
    }
  ) => {
    try {
      if (!_0x560654) {
        return await _0x2b55a0('*Example - :* .pair +94760698006')
      }
      const _0x29763b = await fetchJson(
          'https://queen-ishu-md-bac894e0fbb6.herokuapp.com/code?number=' +
            _0x560654
        ),
        _0x3d603f = '_*🌸ꗥ～ꗥ🌸 𝐐𝐔𝐄𝐄𝐍 𝐈𝐒𝐇𝐔 𝐍𝐔𝐌𝐁𝐄𝐑 𝐏𝐀𝐈𝐑𝐄𝐃 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘... 🌸ꗥ～ꗥ🌸\u2705*_',
        _0x4b5713 = _0x29763b.code
      _0xefafe8.reply(_0x4b5713 + '\n\n' + _0x3d603f)
    } catch (_0x5be2b9) {
      console.log(_0x5be2b9)
      _0x2b55a0(_0x5be2b9)
    }
  }
)
