const { cmd, commands } = require('../command'),
  yts = require('yt-search'),
  { fetchJson } = require('../lib/functions'),
  axios = require('axios'),
  cheerio = require('cheerio')
async function ytmp4(_0x1db3ec, _0x4ace14) {
  try {
    if (!_0x1db3ec || !_0x4ace14) {
      throw new Error('url and format parameters are required.')
    }
    const _0x982c71 = parseInt(_0x4ace14.replace('p', ''), 10),
      _0xad3af8 = {
        button: 1,
        start: 1,
        end: 1,
        format: _0x982c71,
        url: _0x1db3ec,
      },
      _0x261cd1 = {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
        Origin: 'https://loader.to',
        Referer: 'https://loader.to',
        'Sec-Ch-Ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
        'Sec-Ch-Ua-Mobile': '?1',
        'Sec-Ch-Ua-Platform': '"Android"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent':
          'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
      },
      _0x59e46e = await axios.get(
        'https://ab.cococococ.com/ajax/download.php',
        {
          params: _0xad3af8,
          headers: _0x261cd1,
        }
      ),
      _0x293fd1 = _0x59e46e.data.id,
      _0x510afd = async () => {
        const _0xf29270 = 'https://p.oceansaver.in/ajax/progress.php',
          _0x58bcf2 = { id: _0x293fd1 }
        try {
          const _0xbe0c80 = await axios.get(_0xf29270, {
              params: _0x58bcf2,
              headers: _0x261cd1,
            }),
            {
              progress: _0x1c2f7b,
              download_url: _0x156874,
              text: _0x3c0cd2,
            } = _0xbe0c80.data
          return _0x3c0cd2 === 'Finished'
            ? _0x156874
            : (await new Promise((_0x2f1ea7) => setTimeout(_0x2f1ea7, 1000)),
              _0x510afd())
        } catch (_0x420d6c) {
          throw new Error('Error in progress check: ' + _0x420d6c.message)
        }
      }
    return await _0x510afd()
  } catch (_0x29fa0b) {
    return console.error('Error:', _0x29fa0b), { error: _0x29fa0b.message }
  }
}
module.exports = { ytmp4: ytmp4 }
function extractYouTubeId(_0x388de0) {
  const _0x11550c = _0x388de0.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return _0x11550c ? _0x11550c[1] : null
}
function convertYouTubeLink(_0x157c7a) {
  const _0x27f788 = extractYouTubeId(_0x157c7a)
  if (_0x27f788) {
    return 'https://www.youtube.com/watch?v=' + _0x27f788
  }
  return _0x157c7a
}
cmd(
  {
    pattern: 'song',
    alias: 'play',
    desc: 'To download songs.',
    react: '\uD83C\uDFB5',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x3d5570,
    _0x436950,
    _0x44322c,
    {
      from: _0x2c5242,
      quoted: _0x18ec1b,
      body: _0x57ed3c,
      isCmd: _0x2b1b9b,
      command: _0x3f82e9,
      args: _0x487de3,
      q: _0x3c4259,
      isGroup: _0x271ba4,
      sender: _0x5898b3,
      senderNumber: _0x5f049a,
      botNumber2: _0x2bbeef,
      botNumber: _0x33ce8b,
      pushname: _0x41c5e0,
      isMe: _0x47cba4,
      isOwner: _0x2ff880,
      groupMetadata: _0x1b1fb8,
      groupName: _0x144b3b,
      participants: _0x5b4479,
      groupAdmins: _0x2bd9f5,
      isBotAdmins: _0x416ddc,
      isAdmins: _0x2e6fe8,
      reply: _0x23487e,
    }
  ) => {
    try {
      if (!_0x3c4259) {
        return _0x23487e('Please give me a URL or title.')
      }
      _0x3c4259 = convertYouTubeLink(_0x3c4259)
      const _0x723eaa = await yts(_0x3c4259),
        _0x5671a3 = _0x723eaa.videos[0],
        _0x500e2b = _0x5671a3.url
      let _0x3ffbda =
          '\n\u25C9\u250F\u2501\u252B*\u26AC️𝐈𝐒𝐇𝐔  𝐒𝐎𝐍𝐆\u26AC*\u2523\u2501\u273E\n\u25C9\u2503             \u273B\n\u250F\u253B\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u2503*️𝐈𝐒𝐇𝐔  𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 \u273B*\n\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u250F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u274D*ᴛɪᴛʟᴇ :* ' +
          _0x5671a3.title +
          '\n\u274D*ᴅᴜʀᴀᴛɪᴏɴ :* ' +
          _0x5671a3.timestamp +
          '\n\u274D*ᴠɪᴇᴡꜱ :* ' +
          _0x5671a3.views +
          '\n\u274D*ᴜᴘʟᴏᴀᴅ ᴏɴ :* ' +
          _0x5671a3.ago +
          '\n\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u256D\u2500\u2500\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u2500\u2500\n\u2502        *​🇨​​🇷​​🇪​​🇦​​🇹​​🇪​​🇩​ ​🇧​​🇾​ ​🇱​​🇦​​🇰​​🇸​​🇮​​🇩​​🇺​ ​🇳​​🇮​​🇲​​🇸​​🇦​​🇷​​🇦​*\n\u2570\u2500\u2500\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2500\u2500\n\n\uD83D\uDD22 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴜᴅɪᴏ \uD83C\uDFA7*\n\n*1*     \u2503  *ᴀᴜᴅɪᴏ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ \uD83D\uDCC1*\n\n*2*     \u2503  *ᴅᴏᴄᴜᴍᴇɴᴛ*\n\n> QUEEN-ISHU \u273B\n',
        _0x5e54c4 = '\n*\xA9 ​🇨​​🇷​​🇪​​🇦​​🇹​​🇪​​🇩​ ​🇧​​🇾​ ​🇱​​🇦​​🇰​​🇸​​🇮​​🇩​​🇺​ ​🇳​​🇮​​🇲​​🇸​​🇦​​🇷​​🇦​ \xB7 \xB7 \xB7*\n '
      const _0xbd8769 = await _0x3d5570.sendMessage(
          _0x2c5242,
          {
            image: { url: _0x5671a3.thumbnail },
            caption: _0x3ffbda,
            contextInfo: {
              mentionedJid: ['94760698006@s.whatsapp.net'],
              groupMentions: [],
              forwardingScore: 1,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: '94760698006@s.whatsapp.net',
                newsletterName: 'QUEEN-ISHU \u273B',
                serverMessageId: 999,
              },
              externalAdReply: {
                title: 'QUEEN-ISHU',
                body: '🇱​​🇦​​🇰​​🇸​​🇮​​🇩​​🇺​ ​🇳​​🇮​​🇲​​🇸​​🇦​​🇷​​🇦​',
                mediaType: 1,
                sourceUrl: 'https://whatsapp.com/channel/0029Vao7dOmDOQISArwnHT0e',
                thumbnailUrl:
                  'https://i.imgur.com/dUav9x3.jpeg',
                renderLargerThumbnail: false,
                showAdAttribution: true,
              },
            },
          },
          { quoted: _0x436950 }
        ),
        _0x466340 = _0xbd8769.key.id
      _0x3d5570.ev.on('messages.upsert', async (_0x126a8b) => {
        const _0x12c592 = _0x126a8b.messages[0]
        if (!_0x12c592.message) {
          return
        }
        const _0x1e564f =
            _0x12c592.message.conversation ||
            _0x12c592.message.extendedTextMessage?.text,
          _0x4b6f73 = _0x12c592.key.remoteJid,
          _0x5e7cb9 = _0x12c592.key.participant || _0x12c592.key.remoteJid,
          _0x256f37 =
            _0x12c592.message.extendedTextMessage &&
            _0x12c592.message.extendedTextMessage.contextInfo.stanzaId ===
              _0x466340
        if (_0x256f37) {
          await _0x3d5570.sendMessage(_0x4b6f73, {
            react: {
              text: '\u2B07️',
              key: _0x12c592.key,
            },
          })
          const _0x2da7d8 = await fetchJson(
              'https://www.dark-yasiya-api.site/download/ytmp3?url=' + _0x500e2b
            ),
            _0xac0fb6 = _0x2da7d8.result.dl_link
          await _0x3d5570.sendMessage(_0x4b6f73, { delete: _0xbd8769.key })
          await _0x3d5570.sendMessage(_0x4b6f73, {
            react: {
              text: '\u2B06️',
              key: _0x12c592.key,
            },
          })
          if (_0x1e564f === '1') {
            await _0x3d5570.sendMessage(
              _0x4b6f73,
              {
                audio: { url: _0xac0fb6 },
                mimetype: 'audio/mpeg',
                contextInfo: {
                  externalAdReply: {
                    title: _0x5671a3.title,
                    body: _0x5671a3.videoId,
                    mediaType: 1,
                    sourceUrl: _0x5671a3.url,
                    thumbnailUrl: _0x5671a3.thumbnail,
                    renderLargerThumbnail: true,
                    showAdAttribution: true,
                  },
                },
              },
              { quoted: _0x12c592 }
            )
            await _0x3d5570.sendMessage(_0x4b6f73, {
              react: {
                text: '\u2705',
                key: _0x12c592.key,
              },
            })
          } else {
            _0x1e564f === '2' &&
              (await _0x3d5570.sendMessage(
                _0x4b6f73,
                {
                  document: { url: _0xac0fb6 },
                  mimetype: 'audio/mp3',
                  fileName: _0x5671a3.title + '.mp3',
                  caption: _0x5e54c4,
                },
                { quoted: _0x12c592 }
              ),
              await _0x3d5570.sendMessage(_0x4b6f73, {
                react: {
                  text: '\u2705',
                  key: _0x12c592.key,
                },
              }))
          }
        }
      })
    } catch (_0x26278e) {
      console.log(_0x26278e)
      _0x23487e('' + _0x26278e)
    }
  }
)
cmd(
  {
    pattern: 'video',
    desc: 'To download videos.',
    react: '\uD83C\uDFA5',
    category: 'download',
    filename: __filename,
  },
  async (
    _0x36d303,
    _0x5ab2cb,
    _0x35a6b6,
    {
      from: _0x5e2209,
      quoted: _0x223681,
      body: _0x1ac86c,
      isCmd: _0x1f1722,
      command: _0x48d1cd,
      args: _0x278c34,
      q: _0x2a82cb,
      isGroup: _0x1c7c55,
      sender: _0x5e6454,
      senderNumber: _0x139ff6,
      botNumber2: _0x531ef3,
      botNumber: _0x7bf6fa,
      pushname: _0x348a3c,
      isMe: _0x26cdfe,
      isOwner: _0x1482fc,
      groupMetadata: _0x44f040,
      groupName: _0x2f9cb5,
      participants: _0x55717d,
      groupAdmins: _0x27b261,
      isBotAdmins: _0x3e502a,
      isAdmins: _0x55221c,
      reply: _0x3483a0,
    }
  ) => {
    try {
      if (!_0x2a82cb) {
        return _0x3483a0('Please give me a URL or title.')
      }
      _0x2a82cb = convertYouTubeLink(_0x2a82cb)
      const _0x4b4a5b = await yts(_0x2a82cb),
        _0x24aa0d = _0x4b4a5b.videos[0],
        _0x4b8aee = _0x24aa0d.url
      let _0x46f6dc =
          '\n\u25C9\u250F\u2501\u252B*\u26ACQUEEN-ISHU-MD\u26AC*\u2523\u2501\u273E\n\u25C9\u2503            \u273B\n\u250F\u253B\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u2503*️𝐈𝐒𝐇𝐔 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 \u273B*\n\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u250F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u274D*ᴛɪᴛʟᴇ :* ' +
          _0x24aa0d.title +
          '\n\u274D*ᴅᴜʀᴀᴛɪᴏɴ :* ' +
          _0x24aa0d.timestamp +
          '\n\u274D*ᴠɪᴇᴡꜱ :* ' +
          _0x24aa0d.views +
          '\n\u274D*ᴜᴘʟᴏᴀᴅ ᴏɴ :* ' +
          _0x24aa0d.ago +
          '\n\u2523\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u2523\u2501\u2501\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u2501\u2501\n\u2503        *🇨​​🇷​​🇪​​🇦​​🇹​​🇪​​🇩​ ​🇧​​🇾​ ​🇱​​🇦​​🇰​​🇸​​🇮​​🇩​​🇺​ ​🇳​​🇮​​🇲​​🇸​​🇦​​🇷​​🇦​*\n\u2517\u2501\u2501\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2501\u2501\n\n\uD83D\uDD22 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ \uD83C\uDFAC*\n\n*1.1*     \u2503  *360ᴘ*\n*1.2*     \u2503  *480ᴘ*\n*1.3*     \u2503  *720ᴘ*\n*1.4*     \u2503  *1080ᴘ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ \uD83D\uDCC1*\n\n*2.1*     \u2503  *360ᴘ*\n*2.2*     \u2503  *480ᴘ*\n*2.3*     \u2503  *720ᴘ*\n*2.4*     \u2503  *1080ᴘ*\n\n> QUEEN-ISHU-MD \u273B\n',
        _0x1ebe25 = '\n*\xA9 🇨​​🇷​​🇪​​🇦​​🇹​​🇪​​🇩​ ​🇧​​🇾​ ​🇱​​🇦​​🇰​​🇸​​🇮​​🇩​​🇺​ ​🇳​​🇮​​🇲​​🇸​​🇦​​🇷​​🇦​ \xB7 \xB7 \xB7*\n'
      const _0x2f6aea = await _0x36d303.sendMessage(
          _0x5e2209,
          {
            image: { url: _0x24aa0d.thumbnail },
            caption: _0x46f6dc,
            contextInfo: {
              mentionedJid: ['94760698006@s.whatsapp.net'],
              groupMentions: [],
              forwardingScore: 1,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: '120363192254044294@newsletter',
                newsletterName: 'QUEEN-ISHU \u273B',
                serverMessageId: 999,
              },
              externalAdReply: {
                title: 'QUEEN-ISHU',
                body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
                mediaType: 1,
                sourceUrl: 'https://whatsapp.com/channel/0029Vao7dOmDOQISArwnHT0e',
                thumbnailUrl:
                  'https://i.imgur.com/dUav9x3.jpeg',
                renderLargerThumbnail: false,
                showAdAttribution: true,
              },
            },
          },
          { quoted: _0x5ab2cb }
        ),
        _0x5ea942 = _0x2f6aea.key.id
      _0x36d303.ev.on('messages.upsert', async (_0x31788c) => {
        const _0x199676 = _0x31788c.messages[0]
        if (!_0x199676.message) {
          return
        }
        const _0x19b955 =
            _0x199676.message.conversation ||
            _0x199676.message.extendedTextMessage?.text,
          _0x328534 = _0x199676.key.remoteJid,
          _0x33fac7 = _0x199676.key.participant || _0x199676.key.remoteJid,
          _0x5b56bc =
            _0x199676.message.extendedTextMessage &&
            _0x199676.message.extendedTextMessage.contextInfo.stanzaId ===
              _0x5ea942
        if (_0x5b56bc) {
          await _0x36d303.sendMessage(_0x328534, {
            react: {
              text: '\u2B07️',
              key: _0x199676.key,
            },
          })
          if (_0x19b955 === '1.1') {
            const _0xed2c90 = await ytmp4('' + _0x4b8aee, '360p'),
              _0x18f7d8 = _0xed2c90
            await _0x36d303.sendMessage(_0x328534, { delete: _0x2f6aea.key })
            await _0x36d303.sendMessage(_0x328534, {
              react: {
                text: '\u2B06️',
                key: _0x199676.key,
              },
            })
            await _0x36d303.sendMessage(
              _0x328534,
              {
                video: { url: _0x18f7d8 },
                caption: _0x1ebe25,
              },
              { quoted: _0x199676 }
            )
            await _0x36d303.sendMessage(_0x328534, {
              react: {
                text: '\u2705',
                key: _0x199676.key,
              },
            })
          } else {
            if (_0x19b955 === '1.2') {
              const _0x18726b = await ytmp4('' + _0x4b8aee, '480'),
                _0x18567b = _0x18726b
              await _0x36d303.sendMessage(_0x328534, { delete: _0x2f6aea.key })
              await _0x36d303.sendMessage(_0x328534, {
                react: {
                  text: '\u2B06️',
                  key: _0x199676.key,
                },
              })
              await _0x36d303.sendMessage(
                _0x328534,
                {
                  video: { url: _0x18567b },
                  caption: _0x1ebe25,
                },
                { quoted: _0x199676 }
              )
              await _0x36d303.sendMessage(_0x328534, {
                react: {
                  text: '\u2705',
                  key: _0x199676.key,
                },
              })
            } else {
              if (_0x19b955 === '1.3') {
                const _0x5903f5 = await ytmp4('' + _0x4b8aee, '720'),
                  _0x31facf = _0x5903f5
                await _0x36d303.sendMessage(_0x328534, {
                  delete: _0x2f6aea.key,
                })
                await _0x36d303.sendMessage(_0x328534, {
                  react: {
                    text: '\u2B06️',
                    key: _0x199676.key,
                  },
                })
                await _0x36d303.sendMessage(
                  _0x328534,
                  {
                    video: { url: _0x31facf },
                    caption: _0x1ebe25,
                  },
                  { quoted: _0x199676 }
                )
                await _0x36d303.sendMessage(_0x328534, {
                  react: {
                    text: '\u2705',
                    key: _0x199676.key,
                  },
                })
              } else {
                if (_0x19b955 === '1.4') {
                  const _0x131110 = await ytmp4('' + _0x4b8aee, '1080'),
                    _0x4ad51b = _0x131110
                  await _0x36d303.sendMessage(_0x328534, {
                    delete: _0x2f6aea.key,
                  })
                  await _0x36d303.sendMessage(_0x328534, {
                    react: {
                      text: '\u2B06️',
                      key: _0x199676.key,
                    },
                  })
                  await _0x36d303.sendMessage(
                    _0x328534,
                    {
                      video: { url: _0x4ad51b },
                      caption: _0x1ebe25,
                    },
                    { quoted: _0x199676 }
                  )
                  await _0x36d303.sendMessage(_0x328534, {
                    react: {
                      text: '\u2705',
                      key: _0x199676.key,
                    },
                  })
                } else {
                  if (_0x19b955 === '2.1') {
                    const _0x1dca55 = await ytmp4('' + _0x4b8aee, '360'),
                      _0x36c636 = _0x1dca55
                    await _0x36d303.sendMessage(_0x328534, {
                      delete: _0x2f6aea.key,
                    })
                    await _0x36d303.sendMessage(_0x328534, {
                      react: {
                        text: '\u2B06️',
                        key: _0x199676.key,
                      },
                    })
                    await _0x36d303.sendMessage(
                      _0x328534,
                      {
                        document: { url: _0x36c636 },
                        mimetype: 'video/mp4',
                        fileName: _0x24aa0d.title + '.mp4',
                        caption: _0x1ebe25,
                      },
                      { quoted: _0x199676 }
                    )
                    await _0x36d303.sendMessage(_0x328534, {
                      react: {
                        text: '\u2705',
                        key: _0x199676.key,
                      },
                    })
                  } else {
                    if (_0x19b955 === '2.2') {
                      const _0x22b283 = await ytmp4('' + _0x4b8aee, '480'),
                        _0x1ca90a = _0x22b283
                      await _0x36d303.sendMessage(_0x328534, {
                        delete: _0x2f6aea.key,
                      })
                      await _0x36d303.sendMessage(_0x328534, {
                        react: {
                          text: '\u2B06️',
                          key: _0x199676.key,
                        },
                      })
                      await _0x36d303.sendMessage(
                        _0x328534,
                        {
                          document: { url: _0x1ca90a },
                          mimetype: 'video/mp4',
                          fileName: _0x24aa0d.title + '.mp4',
                          caption: _0x1ebe25,
                        },
                        { quoted: _0x199676 }
                      )
                      await _0x36d303.sendMessage(_0x328534, {
                        react: {
                          text: '\u2705',
                          key: _0x199676.key,
                        },
                      })
                    } else {
                      if (_0x19b955 === '2.3') {
                        const _0x2d338d = await ytmp4('' + _0x4b8aee, '720'),
                          _0x115908 = _0x2d338d
                        await _0x36d303.sendMessage(_0x328534, {
                          delete: _0x2f6aea.key,
                        })
                        await _0x36d303.sendMessage(_0x328534, {
                          react: {
                            text: '\u2B06️',
                            key: _0x199676.key,
                          },
                        })
                        await _0x36d303.sendMessage(
                          _0x328534,
                          {
                            document: { url: _0x115908 },
                            mimetype: 'video/mp4',
                            fileName: _0x24aa0d.title + '.mp4',
                            caption: _0x1ebe25,
                          },
                          { quoted: _0x199676 }
                        )
                        await _0x36d303.sendMessage(_0x328534, {
                          react: {
                            text: '\u2705',
                            key: _0x199676.key,
                          },
                        })
                      } else {
                        if (_0x19b955 === '2.4') {
                          const _0x4f8fdd = await ytmp4('' + _0x4b8aee, '1080'),
                            _0x55034f = _0x4f8fdd
                          await _0x36d303.sendMessage(_0x328534, {
                            delete: _0x2f6aea.key,
                          })
                          await _0x36d303.sendMessage(_0x328534, {
                            react: {
                              text: '\u2B06️',
                              key: _0x199676.key,
                            },
                          })
                          await _0x36d303.sendMessage(
                            _0x328534,
                            {
                              document: { url: _0x55034f },
                              mimetype: 'video/mp4',
                              fileName: _0x24aa0d.title + '.mp4',
                              caption: _0x1ebe25,
                            },
                            { quoted: _0x199676 }
                          )
                          await _0x36d303.sendMessage(_0x328534, {
                            react: {
                              text: '\u2705',
                              key: _0x199676.key,
                            },
                          })
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      })
    } catch (_0x368932) {
      console.log(_0x368932)
      _0x3483a0('' + _0x368932)
    }
  }
)
cmd(
  {
    pattern: 'yts',
    alias: 'ytmp3',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x173453,
    _0x16cbac,
    _0x2be094,
    { from: _0x228a76, q: _0x5ce271, reply: _0x17e5c3 }
  ) => {
    try {
      if (!_0x5ce271) {
        return await _0x17e5c3('*Need a YouTube URL!*')
      }
      const _0x29a7b6 = await fetchJson(
          'https://www.dark-yasiya-api.site/download/ytmp3?url=' + _0x5ce271
        ),
        _0x2d79f9 = _0x29a7b6.result.dl_link
      await _0x173453.sendMessage(
        _0x228a76,
        {
          audio: { url: _0x2d79f9 },
          mimetype: 'audio/mpeg',
        },
        { quoted: _0x16cbac }
      )
    } catch (_0x5f1b73) {
      console.log('First attempt failed:', _0x5f1b73)
      try {
        const _0x581f58 = await dlyta(_0x5ce271)
        await _0x173453.sendMessage(
          _0x228a76,
          {
            audio: { url: _0x581f58.dl_link },
            mimetype: 'audio/mpeg',
          },
          { quoted: _0x16cbac }
        )
      } catch (_0x56dbf5) {
        console.log('Second attempt failed:', _0x56dbf5)
        await _0x17e5c3(
          '*Failed to process the request. Please try again later!*'
        )
      }
    }
  }
)
