const { cmd, commands } = require('../command'),
  yts = require('yt-search'),
  { fetchJson } = require('../lib/functions'),
  axios = require('axios'),
  cheerio = require('cheerio')
async function ytmp4(_0x3980bd, _0x4211c2) {
  try {
    if (!_0x3980bd || !_0x4211c2) {
      throw new Error('url and format parameters are required.')
    }
    const _0x16eb8d = parseInt(_0x4211c2.replace('p', ''), 10),
      _0x2577af = 'https://ab.cococococ.com/ajax/download.php',
      _0xc27ef2 = {
        button: 1,
        start: 1,
        end: 1,
        format: _0x16eb8d,
        url: _0x3980bd,
      },
      _0x2cd7d7 = {
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
      _0x12280e = await axios.get(_0x2577af, {
        params: _0xc27ef2,
        headers: _0x2cd7d7,
      }),
      _0x5b8de8 = _0x12280e.data.id,
      _0x516474 = async () => {
        const _0x23d43d = { id: _0x5b8de8 }
        try {
          const _0x336b9c = await axios.get(
              'https://p.oceansaver.in/ajax/progress.php',
              {
                params: _0x23d43d,
                headers: _0x2cd7d7,
              }
            ),
            {
              progress: _0x4d40f8,
              download_url: _0x38b33a,
              text: _0x18cba7,
            } = _0x336b9c.data
          return _0x18cba7 === 'Finished'
            ? _0x38b33a
            : (await new Promise((_0x23ae03) => setTimeout(_0x23ae03, 1000)),
              _0x516474())
        } catch (_0x5bfafc) {
          throw new Error('Error in progress check: ' + _0x5bfafc.message)
        }
      }
    return await _0x516474()
  } catch (_0x2a0e7e) {
    return console.error('Error:', _0x2a0e7e), { error: _0x2a0e7e.message }
  }
}
module.exports = { ytmp4: ytmp4 }
function extractYouTubeId(_0x1b9638) {
  const _0x2087a0 = _0x1b9638.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return _0x2087a0 ? _0x2087a0[1] : null
}
function convertYouTubeLink(_0x3e1474) {
  const _0xefb47c = extractYouTubeId(_0x3e1474)
  if (_0xefb47c) {
    return 'https://www.youtube.com/watch?v=' + _0xefb47c
  }
  return _0x3e1474
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
    _0x43bccf,
    _0xc36936,
    _0x2221ed,
    {
      from: _0x4bb6a0,
      quoted: _0x11c3ad,
      body: _0x81afff,
      isCmd: _0x575e5b,
      command: _0x2fd985,
      args: _0x1cc9c2,
      q: _0x3767c3,
      isGroup: _0x1c9e96,
      sender: _0x4f43f6,
      senderNumber: _0x10ed07,
      botNumber2: _0x297b1f,
      botNumber: _0x4e9065,
      pushname: _0x347247,
      isMe: _0x3356fa,
      isOwner: _0x1d038a,
      groupMetadata: _0x38c4ea,
      groupName: _0x4dc96,
      participants: _0x288046,
      groupAdmins: _0x259687,
      isBotAdmins: _0x55e247,
      isAdmins: _0x1c9ab4,
      reply: _0x4080f2,
    }
  ) => {
    try {
      if (!_0x3767c3) {
        return _0x4080f2('Please give me a URL or title.')
      }
      _0x3767c3 = convertYouTubeLink(_0x3767c3)
      const _0x1a6653 = await yts(_0x3767c3),
        _0x46d3ed = _0x1a6653.videos[0],
        _0x1a0ef5 = _0x46d3ed.url
      let _0x3778c9 =
          '\n*QUEEN-ISHU-MD*\n*\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u272E\u2741\u2022\xB0\u265B\xB0\u2022\u2741\u272E \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557*\n*\u2764️️\uD835\uDC08\uD835\uDC12\uD835\uDC07\uD835\uDC14  \uD835\uDC12\uD835\uDC0E\uD835\uDC0D\uD835\uDC06 \uD835\uDC03\uD835\uDC0E\uD835\uDC16\uD835\uDC0D\uD835\uDC0B\uD835\uDC0E\uD835\uDC00\uD835\uDC03\uD835\uDC04\uD835\uDC11\u2764️*\n*\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u272E\u2741\u2022\xB0\u265B\xB0\u2022\u2741\u272E \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D*\n*\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u272E\u2741\u2022\xB0\u265B\xB0\u2022\u2741\u272E \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557*\n*\u2B55\u27A5Title* : ' +
          _0x46d3ed.title +
          '\n*\u2B55\u27A5Duration* :* ' +
          _0x46d3ed.timestamp +
          '\n*\u2B55\u27A5Views* :* ' +
          _0x46d3ed.views +
          '\n*\u2B55\u27A5Uploaded*  : ' +
          _0x46d3ed.ago +
          '\n*\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u272E\u2741\u2022\xB0\u265B\xB0\u2022\u2741\u272E \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D*\n\n\n\uD83D\uDD22 *REPLY NUMBER*\n\n*\uD835\uDE3C\uD835\uDE50\uD835\uDE3F\uD835\uDE44\uD835\uDE4A \uD835\uDE41\uD835\uDE44\uD835\uDE47\uD835\uDE40 \uD83C\uDFA7*\n\n*1*       *AUDIO*\n\n*\uD835\uDC03\uD835\uDC0E\uD835\uDC16\uD835\uDC0D\uD835\uDC0B\uD835\uDC0E\uD835\uDC00\uD835\uDC03 \uD835\uDDD7\uD835\uDDE2\uD835\uDDD6\uD835\uDDE8\uD835\uDDE0\uD835\uDDE1\uD835\uDDD8\uD835\uDDE7 \uD83D\uDCC1*\n\n*2*       *DOCUMENT*\n\n> *QUEEN-ISHU-MD-BOT*\n',
        _0xf716e8 = '\n*\xA9 CREATED BY LAKSIDU NIMSARA* \xB7 \xB7 \n '
      const _0x313c23 = await _0x43bccf.sendMessage(
          _0x4bb6a0,
          {
            image: { url: _0x46d3ed.thumbnail },
            caption: _0x3778c9,
          },
          { quoted: _0xc36936 }
        ),
        _0x4b638e = _0x313c23.key.id
      _0x43bccf.ev.on('messages.upsert', async (_0x54e280) => {
        const _0x522e57 = _0x54e280.messages[0]
        if (!_0x522e57.message) {
          return
        }
        const _0x1cf2df =
            _0x522e57.message.conversation ||
            _0x522e57.message.extendedTextMessage?.text,
          _0x24b64e = _0x522e57.key.remoteJid,
          _0x3274f2 = _0x522e57.key.participant || _0x522e57.key.remoteJid,
          _0x2fe982 =
            _0x522e57.message.extendedTextMessage &&
            _0x522e57.message.extendedTextMessage.contextInfo.stanzaId ===
              _0x4b638e
        if (_0x2fe982) {
          await _0x43bccf.sendMessage(_0x24b64e, {
            react: {
              text: '\u2B07️',
              key: _0x522e57.key,
            },
          })
          const _0xd1a4c5 = await fetchJson(
              'https://www.dark-yasiya-api.site/download/ytmp3?url=' + _0x1a0ef5
            ),
            _0x41a400 = _0xd1a4c5.result.dl_link
          await _0x43bccf.sendMessage
          await _0x43bccf.sendMessage(_0x24b64e, {
            react: {
              text: '\u2B06️',
              key: _0x522e57.key,
            },
          })
          if (_0x1cf2df === '1') {
            await _0x43bccf.sendMessage(
              _0x24b64e,
              {
                audio: { url: _0x41a400 },
                mimetype: 'audio/mpeg',
                contextInfo: {
                  externalAdReply: {
                    title: _0x46d3ed.title,
                    body: _0x46d3ed.videoId,
                    mediaType: 1,
                    sourceUrl: _0x46d3ed.url,
                    thumbnailUrl: _0x46d3ed.thumbnail,
                    renderLargerThumbnail: true,
                    showAdAttribution: true,
                  },
                },
              },
              { quoted: _0x522e57 }
            )
            await _0x43bccf.sendMessage(_0x24b64e, {
              react: {
                text: '\u2705',
                key: _0x522e57.key,
              },
            })
          } else {
            _0x1cf2df === '2' &&
              (await _0x43bccf.sendMessage(
                _0x24b64e,
                {
                  document: { url: _0x41a400 },
                  mimetype: 'audio/mp3',
                  fileName: _0x46d3ed.title + '.mp3',
                  caption: _0xf716e8,
                },
                { quoted: _0x522e57 }
              ),
              await _0x43bccf.sendMessage(_0x24b64e, {
                react: {
                  text: '\u2705',
                  key: _0x522e57.key,
                },
              }))
          }
        }
      })
    } catch (_0x38ef6b) {
      console.log(_0x38ef6b)
      _0x4080f2('' + _0x38ef6b)
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
    _0x450ace,
    _0x222b3f,
    _0x61c7dc,
    {
      from: _0x25ec4a,
      quoted: _0x1244b7,
      body: _0x38beba,
      isCmd: _0x13a42e,
      command: _0x35fc0b,
      args: _0x15f038,
      q: _0x5211d6,
      isGroup: _0x48fd6e,
      sender: _0x4fd336,
      senderNumber: _0x1b369c,
      botNumber2: _0x1e3d0a,
      botNumber: _0x2cddaf,
      pushname: _0x40e314,
      isMe: _0x2e1004,
      isOwner: _0x31ec6e,
      groupMetadata: _0x2e24ef,
      groupName: _0x52841c,
      participants: _0x12e097,
      groupAdmins: _0x3961a0,
      isBotAdmins: _0xf424ad,
      isAdmins: _0x21b72e,
      reply: _0x27c1ab,
    }
  ) => {
    try {
      if (!_0x5211d6) {
        return _0x27c1ab('Please give me a URL or title.')
      }
      _0x5211d6 = convertYouTubeLink(_0x5211d6)
      const _0x4fb3ea = await yts(_0x5211d6),
        _0x42fb3d = _0x4fb3ea.videos[0],
        _0x29b6f3 = _0x42fb3d.url
      let _0x57470e =
          '\n*QUEEN-ISHU-MD*\n\n*\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u272E\u2741\u2022\xB0\u265B\xB0\u2022\u2741\u272E \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557*\n\u2503*\u2764️️\uD835\uDC08\uD835\uDC12\uD835\uDC07\uD835\uDC14 \uD835\uDC15\uD835\uDC08\uD835\uDC03\uD835\uDC04\uD835\uDC0E \uD835\uDC03\uD835\uDC0E\uD835\uDC16\uD835\uDC0D\uD835\uDC0B\uD835\uDC0E\uD835\uDC00\uD835\uDC03\uD835\uDC04\uD835\uDC11\u2764️ *\n*\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u272E\u2741\u2022\xB0\u265B\xB0\u2022\u2741\u272E \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D*\n*\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u272E\u2741\u2022\xB0\u265B\xB0\u2022\u2741\u272E \u2550\u2550\u2550\u2550\u2550\u2550\u2557*\n\u2B55*\u27A5Title* :* ' +
          _0x42fb3d.title +
          '\n*\u2B55\u27A5Duration* : ' +
          _0x42fb3d.timestamp +
          '\n*\u2B55\u27A5Views:*  ' +
          _0x42fb3d.views +
          '\n*\u2B55\u27A5Uploaded*  : ' +
          _0x42fb3d.ago +
          '\n*\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u272E\u2741\u2022\xB0\u2740\xB0\u2022\u2741\u272E\u2550\u2550\u2550\u2550\u2550\u2550\u2550*\n\n\n\uD83D\uDD22 *REPLY NUMBER*\n\n*\uD835\uDC03\uD835\uDC0E\uD835\uDC16\uD835\uDC0D\uD835\uDC0B\uD835\uDC0E\uD835\uDC00\uD835\uDC03 VIDEO \uD83C\uDFAC*\n\n*1.1*       *360ᴘ*\n\n\n*\uD835\uDDD7\uD835\uDDE2\uD835\uDDD6\uD835\uDDE8\uD835\uDDE0\uD835\uDDE1\uD835\uDDD8\uD835\uDDE7 \uD835\uDC03\uD835\uDC0E\uD835\uDC16\uD835\uDC0D\uD835\uDC0B\uD835\uDC0E\uD835\uDC00\uD835\uDC03 \uD83D\uDCC1*\n\n*2.1*       *360ᴘ*\n\n\n> *QUEEN-ISHU--MD-BOT* \n',
        _0x233807 = '\n*\xA9 CREATED BY LAKSIDU NIMSARA* \xB7 \xB7 \n'
      const _0x3aa194 = await _0x450ace.sendMessage(
        _0x25ec4a,
        {
          image: { url: _0x42fb3d.thumbnail },
          caption: _0x57470e,
        },
        { quoted: _0x222b3f }
      )
      const _0x56ad08 = _0x3aa194.key.id
      _0x450ace.ev.on('messages.upsert', async (_0x538cf9) => {
        const _0x28682c = _0x538cf9.messages[0]
        if (!_0x28682c.message) {
          return
        }
        const _0x7941bd =
            _0x28682c.message.conversation ||
            _0x28682c.message.extendedTextMessage?.text,
          _0x558ccc = _0x28682c.key.remoteJid,
          _0x315d9c = _0x28682c.key.participant || _0x28682c.key.remoteJid,
          _0x16facb =
            _0x28682c.message.extendedTextMessage &&
            _0x28682c.message.extendedTextMessage.contextInfo.stanzaId ===
              _0x56ad08
        if (_0x16facb) {
          await _0x450ace.sendMessage(_0x558ccc, {
            react: {
              text: '\u2B07️',
              key: _0x28682c.key,
            },
          })
          if (_0x7941bd === '1.1') {
            const _0x5248f3 = await ytmp4('' + _0x29b6f3, '360p'),
              _0x3a373b = _0x5248f3
            await _0x450ace.sendMessage
            await _0x450ace.sendMessage(_0x558ccc, {
              react: {
                text: '\u2B06️',
                key: _0x28682c.key,
              },
            })
            await _0x450ace.sendMessage(
              _0x558ccc,
              {
                video: { url: _0x3a373b },
                caption: _0x233807,
              },
              { quoted: _0x28682c }
            )
            await _0x450ace.sendMessage(_0x558ccc, {
              react: {
                text: '\u2705',
                key: _0x28682c.key,
              },
            })
          } else {
            if (_0x7941bd === '1.2') {
              const _0x558ebb = await ytmp4('' + _0x29b6f3, '480'),
                _0xcb9abe = _0x558ebb
              await _0x450ace.sendMessage(_0x558ccc, { delete: _0x3aa194.key })
              await _0x450ace.sendMessage(_0x558ccc, {
                react: {
                  text: '\u2B06️',
                  key: _0x28682c.key,
                },
              })
              await _0x450ace.sendMessage(
                _0x558ccc,
                {
                  video: { url: _0xcb9abe },
                  caption: _0x233807,
                },
                { quoted: _0x28682c }
              )
              await _0x450ace.sendMessage(_0x558ccc, {
                react: {
                  text: '\u2705',
                  key: _0x28682c.key,
                },
              })
            } else {
              if (_0x7941bd === '1.3') {
                const _0x523325 = await ytmp4('' + _0x29b6f3, '720'),
                  _0x5654d6 = _0x523325
                await _0x450ace.sendMessage
                await _0x450ace.sendMessage(_0x558ccc, {
                  react: {
                    text: '\u2B06️',
                    key: _0x28682c.key,
                  },
                })
                await _0x450ace.sendMessage(
                  _0x558ccc,
                  {
                    video: { url: _0x5654d6 },
                    caption: _0x233807,
                  },
                  { quoted: _0x28682c }
                )
                await _0x450ace.sendMessage(_0x558ccc, {
                  react: {
                    text: '\u2705',
                    key: _0x28682c.key,
                  },
                })
              } else {
                if (_0x7941bd === '1.4') {
                  const _0x324d03 = await ytmp4('' + _0x29b6f3, '1080'),
                    _0x56da10 = _0x324d03
                  await _0x450ace.sendMessage
                  await _0x450ace.sendMessage(_0x558ccc, {
                    react: {
                      text: '\u2B06️',
                      key: _0x28682c.key,
                    },
                  })
                  await _0x450ace.sendMessage(
                    _0x558ccc,
                    {
                      video: { url: _0x56da10 },
                      caption: _0x233807,
                    },
                    { quoted: _0x28682c }
                  )
                  await _0x450ace.sendMessage(_0x558ccc, {
                    react: {
                      text: '\u2705',
                      key: _0x28682c.key,
                    },
                  })
                } else {
                  if (_0x7941bd === '2.1') {
                    const _0x291d0a = await ytmp4('' + _0x29b6f3, '360'),
                      _0x182091 = _0x291d0a
                    await _0x450ace.sendMessage(_0x558ccc, {
                      delete: _0x3aa194.key,
                    })
                    await _0x450ace.sendMessage(_0x558ccc, {
                      react: {
                        text: '\u2B06️',
                        key: _0x28682c.key,
                      },
                    })
                    await _0x450ace.sendMessage(
                      _0x558ccc,
                      {
                        document: { url: _0x182091 },
                        mimetype: 'video/mp4',
                        fileName: _0x42fb3d.title + '.mp4',
                        caption: _0x233807,
                      },
                      { quoted: _0x28682c }
                    )
                    await _0x450ace.sendMessage(_0x558ccc, {
                      react: {
                        text: '\u2705',
                        key: _0x28682c.key,
                      },
                    })
                  } else {
                    if (_0x7941bd === '2.2') {
                      const _0xf955da = await ytmp4('' + _0x29b6f3, '480'),
                        _0x409de1 = _0xf955da
                      await _0x450ace.sendMessage
                      await _0x450ace.sendMessage(_0x558ccc, {
                        react: {
                          text: '\u2B06️',
                          key: _0x28682c.key,
                        },
                      })
                      await _0x450ace.sendMessage(
                        _0x558ccc,
                        {
                          document: { url: _0x409de1 },
                          mimetype: 'video/mp4',
                          fileName: _0x42fb3d.title + '.mp4',
                          caption: _0x233807,
                        },
                        { quoted: _0x28682c }
                      )
                      await _0x450ace.sendMessage(_0x558ccc, {
                        react: {
                          text: '\u2705',
                          key: _0x28682c.key,
                        },
                      })
                    } else {
                      if (_0x7941bd === '2.3') {
                        const _0x30ae53 = await ytmp4('' + _0x29b6f3, '720'),
                          _0x3a0e21 = _0x30ae53
                        await _0x450ace.sendMessage
                        await _0x450ace.sendMessage(_0x558ccc, {
                          react: {
                            text: '\u2B06️',
                            key: _0x28682c.key,
                          },
                        })
                        await _0x450ace.sendMessage(
                          _0x558ccc,
                          {
                            document: { url: _0x3a0e21 },
                            mimetype: 'video/mp4',
                            fileName: _0x42fb3d.title + '.mp4',
                            caption: _0x233807,
                          },
                          { quoted: _0x28682c }
                        )
                        await _0x450ace.sendMessage(_0x558ccc, {
                          react: {
                            text: '\u2705',
                            key: _0x28682c.key,
                          },
                        })
                      } else {
                        if (_0x7941bd === '2.4') {
                          const _0x58ff1b = await ytmp4('' + _0x29b6f3, '1080'),
                            _0x387a08 = _0x58ff1b
                          await _0x450ace.sendMessage
                          await _0x450ace.sendMessage(_0x558ccc, {
                            react: {
                              text: '\u2B06️',
                              key: _0x28682c.key,
                            },
                          })
                          await _0x450ace.sendMessage(
                            _0x558ccc,
                            {
                              document: { url: _0x387a08 },
                              mimetype: 'video/mp4',
                              fileName: _0x42fb3d.title + '.mp4',
                              caption: _0x233807,
                            },
                            { quoted: _0x28682c }
                          )
                          await _0x450ace.sendMessage(_0x558ccc, {
                            react: {
                              text: '\u2705',
                              key: _0x28682c.key,
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
    } catch (_0x45c27a) {
      console.log(_0x45c27a)
      _0x27c1ab('' + _0x45c27a)
    }
  }
)
cmd(
  {
    pattern: 'yta',
    alias: 'ytmp3',
    react: '\u2B07️',
    dontAddCommandList: true,
    filename: __filename,
  },
  async (
    _0x108a5b,
    _0x4bb37e,
    _0x22e7aa,
    { from: _0x13d495, q: _0x543cc4, reply: _0x11443e }
  ) => {
    try {
      if (!_0x543cc4) {
        return await _0x11443e('*Need a YouTube URL!*')
      }
      const _0x5f2011 = await fetchJson(
          'https://www.dark-yasiya-api.site/download/ytmp3?url=' + _0x543cc4
        ),
        _0x475684 = _0x5f2011.result.dl_link
      await _0x108a5b.sendMessage(
        _0x13d495,
        {
          audio: { url: _0x475684 },
          mimetype: 'audio/mpeg',
        },
        { quoted: _0x4bb37e }
      )
    } catch (_0x3024e5) {
      console.log('First attempt failed:', _0x3024e5)
      try {
        const _0x2a20f5 = await dlyta(_0x543cc4)
        await _0x108a5b.sendMessage(
          _0x13d495,
          {
            audio: { url: _0x2a20f5.dl_link },
            mimetype: 'audio/mpeg',
          },
          { quoted: _0x4bb37e }
        )
      } catch (_0x1605c5) {
        console.log('Second attempt failed:', _0x1605c5)
        await _0x11443e(
          '*Failed to process the request. Please try again later!*'
        )
      }
    }
  }
)
