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
  yts = require('yt-search'),
  { fetchJson } = require('../lib/functions'),
  axios = require('axios'),
  cheerio = require('cheerio')
async function ytmp4(_0x32b019, _0x339734) {
  try {
    if (!_0x32b019 || !_0x339734) {
      throw new Error('url and format parameters are required.')
    }
    const _0xd702fb = parseInt(_0x339734.replace('p', ''), 10),
      _0x3cc703 = {
        button: 1,
        start: 1,
        end: 1,
        format: _0xd702fb,
        url: _0x32b019,
      },
      _0x5a1205 = {
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
      _0x4ee39c = await axios.get(
        'https://ab.cococococ.com/ajax/download.php',
        {
          params: _0x3cc703,
          headers: _0x5a1205,
        }
      ),
      _0x2d1163 = _0x4ee39c.data.id,
      _0x137113 = async () => {
        const _0x2d8042 = 'https://p.oceansaver.in/ajax/progress.php',
          _0xab25fa = { id: _0x2d1163 }
        try {
          const _0xeafb6b = await axios.get(_0x2d8042, {
              params: _0xab25fa,
              headers: _0x5a1205,
            }),
            {
              progress: _0x48ee9e,
              download_url: _0xd7e658,
              text: _0x245ada,
            } = _0xeafb6b.data
          return _0x245ada === 'Finished'
            ? _0xd7e658
            : (await new Promise((_0x485c8a) => setTimeout(_0x485c8a, 1000)),
              _0x137113())
        } catch (_0x27cb21) {
          throw new Error('Error in progress check: ' + _0x27cb21.message)
        }
      }
    return await _0x137113()
  } catch (_0x1503ed) {
    return console.error('Error:', _0x1503ed), { error: _0x1503ed.message }
  }
}
module.exports = { ytmp4: ytmp4 }
function extractYouTubeId(_0x46641b) {
  const _0x4136c6 = _0x46641b.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return _0x4136c6 ? _0x4136c6[1] : null
}
function convertYouTubeLink(_0x584404) {
  const _0x58dae8 = extractYouTubeId(_0x584404)
  if (_0x58dae8) {
    return 'https://www.youtube.com/watch?v=' + _0x58dae8
  }
  return _0x584404
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
    _0x5351f6,
    _0x1439a7,
    _0x278458,
    {
      from: _0x14fac3,
      quoted: _0x2b9c51,
      body: _0x5daecf,
      isCmd: _0x34876e,
      command: _0x536863,
      args: _0x59cb59,
      q: _0x380df9,
      isGroup: _0x370f61,
      sender: _0x34a112,
      senderNumber: _0x291f83,
      botNumber2: _0x5af75e,
      botNumber: _0x1870b0,
      pushname: _0x5d0cea,
      isMe: _0x3c0b23,
      isOwner: _0x341bbe,
      groupMetadata: _0x44abd4,
      groupName: _0x5de46d,
      participants: _0x34f227,
      groupAdmins: _0x548f13,
      isBotAdmins: _0x9fa565,
      isAdmins: _0x127641,
      reply: _0x233cc6,
    }
  ) => {
    try {
      if (!_0x380df9) {
        return _0x233cc6('Please give me a URL or title.')
      }
      _0x380df9 = convertYouTubeLink(_0x380df9)
      const _0x54cf3a = await yts(_0x380df9),
        _0x20e1e8 = _0x54cf3a.videos[0],
        _0x5ed25e = _0x20e1e8.url
      let _0xb2d02f =
        '\n*\xA9 ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋɢ ᴛᴇᴄʜ \xB7 \xB7 \xB7\u2074\xB3\xB2*\n '
      const _0x166c67 = await _0x5351f6.sendMessage(
          _0x14fac3,
          {
            image: { url: _0x20e1e8.thumbnail },
            caption:
              '\n*\u25C9QUEEN-ISHU_MD-V4\u25C9* \n\n\u250F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u2503ISHU-ᴠ4 ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅ \u273B\n\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u250F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n\n\uD83D\uDD22 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴜᴅɪᴏ \uD83C\uDFA7*\n\n*1*     \u2503  *ᴀᴜᴅɪᴏ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ \uD83D\uDCC1*\n\n*2*     \u2503  *ᴅᴏᴄᴜᴍᴇɴᴛ*\n\n> QUEEN \u273B\n',
          },
          { quoted: _0x1439a7 }
        ),
        _0x164ac6 = _0x166c67.key.id
      _0x5351f6.ev.on('messages.upsert', async (_0x11c496) => {
        const _0x25ddf5 = _0x11c496.messages[0]
        if (!_0x25ddf5.message) {
          return
        }
        const _0x5f20ab =
            _0x25ddf5.message.conversation ||
            _0x25ddf5.message.extendedTextMessage?.text,
          _0x3277a3 = _0x25ddf5.key.remoteJid,
          _0x1b9fe9 = _0x25ddf5.key.participant || _0x25ddf5.key.remoteJid,
          _0x3cf2a8 =
            _0x25ddf5.message.extendedTextMessage &&
            _0x25ddf5.message.extendedTextMessage.contextInfo.stanzaId ===
              _0x164ac6
        if (_0x3cf2a8) {
          await _0x5351f6.sendMessage(_0x3277a3, {
            react: {
              text: '\u2B07️',
              key: _0x25ddf5.key,
            },
          })
          const _0x1cc9d0 = await fetchJson(
              'https://api.giftedtech.my.id/api/download/ytmp3?apikey=gifted&url=' +
                _0x5ed25e
            ),
            _0x5741ec = _0x1cc9d0.result.download_url
          await _0x5351f6.sendMessage(_0x3277a3, { delete: _0x166c67.key })
          await _0x5351f6.sendMessage(_0x3277a3, {
            react: {
              text: '\u2B06️',
              key: _0x25ddf5.key,
            },
          })
          if (_0x5f20ab === '1') {
            await _0x5351f6.sendMessage(
              _0x3277a3,
              {
                audio: { url: _0x5741ec },
                mimetype: 'audio/mpeg',
                contextInfo: {
                  externalAdReply: {
                    title: _0x20e1e8.title,
                    body: _0x20e1e8.videoId,
                    mediaType: 1,
                    sourceUrl: _0x20e1e8.url,
                    thumbnailUrl: _0x20e1e8.thumbnail,
                    renderLargerThumbnail: true,
                    showAdAttribution: true,
                  },
                },
              },
              { quoted: _0x25ddf5 }
            )
            await _0x5351f6.sendMessage(_0x3277a3, {
              react: {
                text: '\u2705',
                key: _0x25ddf5.key,
              },
            })
          } else {
            _0x5f20ab === '2' &&
              (await _0x5351f6.sendMessage(
                _0x3277a3,
                {
                  document: { url: _0x5741ec },
                  mimetype: 'audio/mp3',
                  fileName: _0x20e1e8.title + '.mp3',
                  caption: _0xb2d02f,
                },
                { quoted: _0x25ddf5 }
              ),
              await _0x5351f6.sendMessage(_0x3277a3, {
                react: {
                  text: '\u2705',
                  key: _0x25ddf5.key,
                },
              }))
          }
        }
      })
    } catch (_0x3c31c1) {
      console.log(_0x3c31c1)
      _0x233cc6('' + _0x3c31c1)
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
    _0x2a6587,
    _0x4b0a32,
    _0x3ae238,
    {
      from: _0x2b34ab,
      quoted: _0x2ba078,
      body: _0x46f813,
      isCmd: _0x3262b0,
      command: _0x17c989,
      args: _0x7df19c,
      q: _0x2f11f7,
      isGroup: _0xd32a93,
      sender: _0x4f21a1,
      senderNumber: _0x3cbd23,
      botNumber2: _0x423dc5,
      botNumber: _0x117579,
      pushname: _0x256e29,
      isMe: _0x10a986,
      isOwner: _0x5415e8,
      groupMetadata: _0x24abd2,
      groupName: _0x31f52b,
      participants: _0x3ff081,
      groupAdmins: _0x5f0186,
      isBotAdmins: _0xe9b71d,
      isAdmins: _0x3186a2,
      reply: _0x419796,
    }
  ) => {
    try {
      if (!_0x2f11f7) {
        return _0x419796('Please give me a URL or title.')
      }
      _0x2f11f7 = convertYouTubeLink(_0x2f11f7)
      const _0x516cf9 = await yts(_0x2f11f7),
        _0x546126 = _0x516cf9.videos[0],
        _0x16c3d4 = _0x546126.url
      let _0x2945ee =
          '\n*\u25C9QUEEN_MD-V4\u25C9* \n\n\u250F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u2503QUEEN-ᴠ4 ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ \u273B\n\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u250F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n\uD83D\uDD22 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ \uD83C\uDFAC*\n\n*1.1*     \u2503  *360ᴘ*\n*1.2*     \u2503  *480ᴘ*\n*1.3*     \u2503  *720ᴘ*\n*1.4*     \u2503  *1080ᴘ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ \uD83D\uDCC1*\n\n*2.1*     \u2503  *360ᴘ*\n*2.2*     \u2503  *480ᴘ*\n*2.3*     \u2503  *720ᴘ*\n*2.4*     \u2503  *1080ᴘ*\n\n> QUEEN-ᴠ4 \u273B\n',
        _0x3c875f = '\n*\xA9 ᴄʀᴇᴀᴛᴇᴅ ʙʏ LAKSIDU \xB7 \xB7 \xB7\u2074\xB3\xB2*\n'
      const _0x51503b = await _0x2a6587.sendMessage(
        _0x2b34ab,
        {
          image: { url: _0x546126.thumbnail },
          caption: _0x2945ee,
        },
        { quoted: _0x4b0a32 }
      )
      const _0x333085 = _0x51503b.key.id
      _0x2a6587.ev.on('messages.upsert', async (_0xe7662f) => {
        const _0x3dce21 = _0xe7662f.messages[0]
        if (!_0x3dce21.message) {
          return
        }
        const _0x1acf8d =
            _0x3dce21.message.conversation ||
            _0x3dce21.message.extendedTextMessage?.text,
          _0x5cd381 = _0x3dce21.key.remoteJid,
          _0x5e1d47 = _0x3dce21.key.participant || _0x3dce21.key.remoteJid,
          _0x5e3294 =
            _0x3dce21.message.extendedTextMessage &&
            _0x3dce21.message.extendedTextMessage.contextInfo.stanzaId ===
              _0x333085
        if (_0x5e3294) {
          await _0x2a6587.sendMessage(_0x5cd381, {
            react: {
              text: '\u2B07️',
              key: _0x3dce21.key,
            },
          })
          if (_0x1acf8d === '1.1') {
            const _0x404514 = await ytmp4('' + _0x16c3d4, '360p'),
              _0x15f192 = _0x404514
            await _0x2a6587.sendMessage(_0x5cd381, { delete: _0x51503b.key })
            await _0x2a6587.sendMessage(_0x5cd381, {
              react: {
                text: '\u2B06️',
                key: _0x3dce21.key,
              },
            })
            await _0x2a6587.sendMessage(
              _0x5cd381,
              {
                video: { url: _0x15f192 },
                caption: _0x3c875f,
              },
              { quoted: _0x3dce21 }
            )
            await _0x2a6587.sendMessage(_0x5cd381, {
              react: {
                text: '\u2705',
                key: _0x3dce21.key,
              },
            })
          } else {
            if (_0x1acf8d === '1.2') {
              const _0x13f213 = await ytmp4('' + _0x16c3d4, '480'),
                _0x5556fe = _0x13f213
              await _0x2a6587.sendMessage(_0x5cd381, { delete: _0x51503b.key })
              await _0x2a6587.sendMessage(_0x5cd381, {
                react: {
                  text: '\u2B06️',
                  key: _0x3dce21.key,
                },
              })
              await _0x2a6587.sendMessage(
                _0x5cd381,
                {
                  video: { url: _0x5556fe },
                  caption: _0x3c875f,
                },
                { quoted: _0x3dce21 }
              )
              await _0x2a6587.sendMessage(_0x5cd381, {
                react: {
                  text: '\u2705',
                  key: _0x3dce21.key,
                },
              })
            } else {
              if (_0x1acf8d === '1.3') {
                const _0x3e40d4 = await ytmp4('' + _0x16c3d4, '720'),
                  _0x43cab0 = _0x3e40d4
                await _0x2a6587.sendMessage(_0x5cd381, {
                  delete: _0x51503b.key,
                })
                await _0x2a6587.sendMessage(_0x5cd381, {
                  react: {
                    text: '\u2B06️',
                    key: _0x3dce21.key,
                  },
                })
                await _0x2a6587.sendMessage(
                  _0x5cd381,
                  {
                    video: { url: _0x43cab0 },
                    caption: _0x3c875f,
                  },
                  { quoted: _0x3dce21 }
                )
                await _0x2a6587.sendMessage(_0x5cd381, {
                  react: {
                    text: '\u2705',
                    key: _0x3dce21.key,
                  },
                })
              } else {
                if (_0x1acf8d === '1.4') {
                  const _0x14529b = await ytmp4('' + _0x16c3d4, '1080'),
                    _0x2b71ec = _0x14529b
                  await _0x2a6587.sendMessage(_0x5cd381, {
                    delete: _0x51503b.key,
                  })
                  await _0x2a6587.sendMessage(_0x5cd381, {
                    react: {
                      text: '\u2B06️',
                      key: _0x3dce21.key,
                    },
                  })
                  await _0x2a6587.sendMessage(
                    _0x5cd381,
                    {
                      video: { url: _0x2b71ec },
                      caption: _0x3c875f,
                    },
                    { quoted: _0x3dce21 }
                  )
                  await _0x2a6587.sendMessage(_0x5cd381, {
                    react: {
                      text: '\u2705',
                      key: _0x3dce21.key,
                    },
                  })
                } else {
                  if (_0x1acf8d === '2.1') {
                    const _0x252f61 = await ytmp4('' + _0x16c3d4, '360'),
                      _0x5559bb = _0x252f61
                    await _0x2a6587.sendMessage(_0x5cd381, {
                      delete: _0x51503b.key,
                    })
                    await _0x2a6587.sendMessage(_0x5cd381, {
                      react: {
                        text: '\u2B06️',
                        key: _0x3dce21.key,
                      },
                    })
                    await _0x2a6587.sendMessage(
                      _0x5cd381,
                      {
                        document: { url: _0x5559bb },
                        mimetype: 'video/mp4',
                        fileName: _0x546126.title + '.mp4',
                        caption: _0x3c875f,
                      },
                      { quoted: _0x3dce21 }
                    )
                    await _0x2a6587.sendMessage(_0x5cd381, {
                      react: {
                        text: '\u2705',
                        key: _0x3dce21.key,
                      },
                    })
                  } else {
                    if (_0x1acf8d === '2.2') {
                      const _0x1bbfe2 = await ytmp4('' + _0x16c3d4, '480'),
                        _0x1a4956 = _0x1bbfe2
                      await _0x2a6587.sendMessage(_0x5cd381, {
                        delete: _0x51503b.key,
                      })
                      await _0x2a6587.sendMessage(_0x5cd381, {
                        react: {
                          text: '\u2B06️',
                          key: _0x3dce21.key,
                        },
                      })
                      await _0x2a6587.sendMessage(
                        _0x5cd381,
                        {
                          document: { url: _0x1a4956 },
                          mimetype: 'video/mp4',
                          fileName: _0x546126.title + '.mp4',
                          caption: _0x3c875f,
                        },
                        { quoted: _0x3dce21 }
                      )
                      await _0x2a6587.sendMessage(_0x5cd381, {
                        react: {
                          text: '\u2705',
                          key: _0x3dce21.key,
                        },
                      })
                    } else {
                      if (_0x1acf8d === '2.3') {
                        const _0x24a2c5 = await ytmp4('' + _0x16c3d4, '720'),
                          _0x517e18 = _0x24a2c5
                        await _0x2a6587.sendMessage(_0x5cd381, {
                          delete: _0x51503b.key,
                        })
                        await _0x2a6587.sendMessage(_0x5cd381, {
                          react: {
                            text: '\u2B06️',
                            key: _0x3dce21.key,
                          },
                        })
                        await _0x2a6587.sendMessage(
                          _0x5cd381,
                          {
                            document: { url: _0x517e18 },
                            mimetype: 'video/mp4',
                            fileName: _0x546126.title + '.mp4',
                            caption: _0x3c875f,
                          },
                          { quoted: _0x3dce21 }
                        )
                        await _0x2a6587.sendMessage(_0x5cd381, {
                          react: {
                            text: '\u2705',
                            key: _0x3dce21.key,
                          },
                        })
                      } else {
                        if (_0x1acf8d === '2.4') {
                          const _0xfcc167 = await ytmp4('' + _0x16c3d4, '1080'),
                            _0x36b876 = _0xfcc167
                          await _0x2a6587.sendMessage(_0x5cd381, {
                            delete: _0x51503b.key,
                          })
                          await _0x2a6587.sendMessage(_0x5cd381, {
                            react: {
                              text: '\u2B06️',
                              key: _0x3dce21.key,
                            },
                          })
                          await _0x2a6587.sendMessage(
                            _0x5cd381,
                            {
                              document: { url: _0x36b876 },
                              mimetype: 'video/mp4',
                              fileName: _0x546126.title + '.mp4',
                              caption: _0x3c875f,
                            },
                            { quoted: _0x3dce21 }
                          )
                          await _0x2a6587.sendMessage(_0x5cd381, {
                            react: {
                              text: '\u2705',
                              key: _0x3dce21.key,
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
    } catch (_0x2c8571) {
      console.log(_0x2c8571)
      _0x419796('' + _0x2c8571)
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
    _0x47e326,
    _0x16846a,
    _0x46f567,
    { from: _0x31abbc, q: _0x507947, reply: _0x17432c }
  ) => {
    try {
      if (!_0x507947) {
        return await _0x17432c('*Need a YouTube URL!*')
      }
      const _0x5df9ac = await dlyta(_0x507947)
      await _0x47e326.sendMessage(
        _0x31abbc,
        {
          audio: { url: _0x5df9ac.dl_link },
          mimetype: 'audio/mpeg',
        },
        { quoted: _0x16846a }
      )
    } catch (_0x42217d) {
      console.log('First attempt failed:', _0x42217d)
      try {
        const _0x9c7197 = await dlyta(_0x507947)
        await _0x47e326.sendMessage(
          _0x31abbc,
          {
            audio: { url: _0x9c7197.dl_link },
            mimetype: 'audio/mpeg',
          },
          { quoted: _0x16846a }
        )
      } catch (_0x43638b) {
        console.log('Second attempt failed:', _0x43638b)
        await _0x17432c(
          '*Failed to process the request. Please try again later!*'
        )
      }
    }
  }
)
