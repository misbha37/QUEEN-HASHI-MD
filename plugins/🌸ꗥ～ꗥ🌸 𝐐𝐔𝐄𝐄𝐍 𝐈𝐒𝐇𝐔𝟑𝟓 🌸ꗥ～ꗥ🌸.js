/*
███████╗  ██╗   ██╗ ███████╗ ███████╗ ███╗   ██╗       ███   █████████    ███     ███    ███     ███
██╔═══██╗ ██║   ██║ ██╔════╝ ██╔════╝ ████╗  ██║       ███   ███          ███     ███    ███     ███
██║   ██║ ██║   ██║ █████╗   █████╗   ██╔██╗ ██║       ███   █████████    ███████████    ███     ███
██║▄▄ ██║ ██║   ██║ ██╔══╝   ██╔══╝   ██║╚██╗██        ███         ███    ███     ███    ███████████
╚██████╔╝ ╚██████╔╝ ███████╗ ███████╗ ██║ ╚████║       ███   █████████    ███     ███      ███████
created by laksidu

*/

const { cmd, commands } = require('../command'),
  yts = require('yt-search'),
  { fetchJson } = require('../lib/functions'),
  { ytsearch, ytmp3 } = require('@dark-yasiya/yt-dl.js'),
  axios = require('axios'),
  cheerio = require('cheerio')
async function ytmp4(_0x5b7b1c, _0x21e1ec) {
  try {
    if (!_0x5b7b1c || !_0x21e1ec) {
      throw new Error('url and format parameters are required.')
    }
    const _0x424595 = parseInt(_0x21e1ec.replace('p', ''), 10),
      _0x23b47e = 'https://ab.cococococ.com/ajax/download.php',
      _0x3ee732 = {
        button: 1,
        start: 1,
        end: 1,
        format: _0x424595,
        url: _0x5b7b1c,
      },
      _0x52d4ac = {
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
      _0x5235cc = await axios.get(_0x23b47e, {
        params: _0x3ee732,
        headers: _0x52d4ac,
      }),
      _0x25eb8f = _0x5235cc.data.id,
      _0x4e3eaa = async () => {
        const _0x27ee96 = 'https://p.oceansaver.in/ajax/progress.php',
          _0x541008 = { id: _0x25eb8f }
        try {
          const _0x349903 = await axios.get(_0x27ee96, {
              params: _0x541008,
              headers: _0x52d4ac,
            }),
            {
              progress: _0x2b251c,
              download_url: _0x467f21,
              text: _0x21b3be,
            } = _0x349903.data
          return _0x21b3be === 'Finished'
            ? _0x467f21
            : (await new Promise((_0x23a250) => setTimeout(_0x23a250, 1000)),
              _0x4e3eaa())
        } catch (_0x1cc484) {
          throw new Error('Error in progress check: ' + _0x1cc484.message)
        }
      }
    return await _0x4e3eaa()
  } catch (_0x2f9033) {
    return console.error('Error:', _0x2f9033), { error: _0x2f9033.message }
  }
}
module.exports = { ytmp4: ytmp4 }
function extractYouTubeId(_0x255299) {
  const _0x44111d = _0x255299.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return _0x44111d ? _0x44111d[1] : null
}
function convertYouTubeLink(_0x36f16d) {
  const _0xa5ddfd = extractYouTubeId(_0x36f16d)
  if (_0xa5ddfd) {
    return 'https://www.youtube.com/watch?v=' + _0xa5ddfd
  }
  return _0x36f16d
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
    _0x128592,
    _0x30115a,
    _0x234200,
    {
      from: _0x51568d,
      quoted: _0x267c41,
      body: _0x5dd456,
      isCmd: _0x10d3b5,
      command: _0x4aa2a0,
      args: _0x2d3833,
      q: _0x7bb8f,
      isGroup: _0x54c189,
      sender: _0x53845,
      senderNumber: _0x3f6738,
      botNumber2: _0x5d8b3b,
      botNumber: _0xb1b8c4,
      pushname: _0x23611c,
      isMe: _0x2da918,
      isOwner: _0x53592b,
      groupMetadata: _0x4d575d,
      groupName: _0xcdfa92,
      participants: _0x41c9cd,
      groupAdmins: _0x5d459b,
      isBotAdmins: _0x252d8a,
      isAdmins: _0x48d113,
      reply: _0x5bc5c3,
    }
  ) => {
    try {
      if (!_0x7bb8f) {
        return _0x5bc5c3('(◕‿◕)ᴘʟᴇᴀꜱᴇ ɢɪᴠᴇ ᴀ ᴜʀʟ ᴏꜱ ɴᴀᴍᴇ(◕‿◕).')
      }
      _0x7bb8f = convertYouTubeLink(_0x7bb8f)
      const _0x158514 = await yts(_0x7bb8f),
        _0x3856c9 = _0x158514.videos[0],
        _0x473e57 = _0x3856c9.url
      let _0xc99a5 =
          '\n\u25C9\u250F\u2501\u252B *\u26ACQUEEN\u26AC* \u2523\u2501\u273E\n\u25C9\u2503             \u273B  \n\u250F\u253B\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u2503*𝓘𝓢𝓗𝓤 𝓢𝓞𝓝𝓖 𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓\u273B*\n\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u250F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u274D *🅠🅤🅔🅔🅝 🅘🅢🅗🅤* ' +
          _0x3856c9.title +
          '\n\u274D *ᴅᴜʀᴀᴛɪᴏɴ :* ' +
          _0x3856c9.timestamp +
          '\n\u274D *ᴠɪᴇᴡꜱ :* ' +
          _0x3856c9.views +
          '\n\u274D *ᴜᴘʟᴏᴀᴅ ᴏɴ :* ' +
          _0x3856c9.ago +
          '\n\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u256D\u2500\u2500\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u2500\u2500\n\u2502        **\n\u2570\u2500\u2500\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2500\u2500\n\n\uD83D\uDD22 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴜᴅɪᴏ \uD83C\uDFA7*\n\n*1*     \u2503  *ᴀᴜᴅɪᴏ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ \uD83D\uDCC1*\n\n*2*     \u2503  *ᴅᴏᴄᴜᴍᴇɴᴛ*\n\n> 🅠🅤🅔🅔🅝 🅘🅢🅗🅤 \u273B\n',
        _0x20c7f4 = '\n*\xA9𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐 \xB7 \xB7 \xB7*\n '
      const _0xa8e43a = await _0x128592.sendMessage(
          _0x51568d,
          {
            image: { url: _0x3856c9.thumbnail },
            caption: _0xc99a5,
            contextInfo: {
              mentionedJid: ['94760698006@s.whatsapp.net'],
              groupMentions: [],
              forwardingScore: 1,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterName: '𝓠𝓤𝓔𝓔𝓝 𝓘𝓢𝓗𝓤 \u273B',
                serverMessageId: 999,
              },
              externalAdReply: {
                title: '𝓠𝓤𝓔𝓔𝓝 𝓘𝓢𝓗𝓤',
                body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
                mediaType: 1,
                sourceUrl: 'https://queen-ishu-md.tiiny.site/',
                thumbnailUrl:
                  'https://i.imgur.com/B32zmq6.jpeg',
                renderLargerThumbnail: false,
                showAdAttribution: true,
              },
            },
          },
          { quoted: _0x30115a }
        ),
        _0x47ab76 = _0xa8e43a.key.id
      _0x128592.ev.on('messages.upsert', async (_0x4ae5b4) => {
        const _0x15a1a3 = _0x4ae5b4.messages[0]
        if (!_0x15a1a3.message) {
          return
        }
        const _0x563946 =
            _0x15a1a3.message.conversation ||
            _0x15a1a3.message.extendedTextMessage?.text,
          _0x537a46 = _0x15a1a3.key.remoteJid,
          _0x3692fd = _0x15a1a3.key.participant || _0x15a1a3.key.remoteJid,
          _0x528623 =
            _0x15a1a3.message.extendedTextMessage &&
            _0x15a1a3.message.extendedTextMessage.contextInfo.stanzaId ===
              _0x47ab76
        if (_0x528623) {
          await _0x128592.sendMessage(_0x537a46, {
            react: {
              text: '\u2B07️',
              key: _0x15a1a3.key,
            },
          })
          if (_0x563946 === '1') {
            const _0x29216e = await ytmp3(_0x473e57)
            await _0x128592.sendMessage(_0x537a46, {
              react: {
                text: '\u2B06️',
                key: _0x15a1a3.key,
              },
            })
            await _0x128592.sendMessage(
              _0x537a46,
              {
                audio: { url: _0x29216e.download.url },
                mimetype: 'audio/mpeg',
                contextInfo: {
                  mentionedJid: ['94760698006@s.whatsapp.net'],
                  groupMentions: [],
                  forwardingScore: 1,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterName: '𝓠𝓤𝓔𝓔𝓝 𝓘𝓢𝓗𝓤 \u273B',
                    serverMessageId: 999,
                  },
                  externalAdReply: {
                    title: '𝓠𝓤𝓔𝓔𝓝 𝓘𝓢𝓗𝓤',
                    body: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                    mediaType: 1,
                    sourceUrl: _0x3856c9.url,
                    thumbnailUrl: _0x3856c9.thumbnail,
                    renderLargerThumbnail: false,
                    showAdAttribution: true,
                  },
                },
              },
              { quoted: _0x15a1a3 }
            )
            await _0x128592.sendMessage(_0x537a46, {
              react: {
                text: '\u2705',
                key: _0x15a1a3.key,
              },
            })
          } else {
            if (_0x563946 === '2') {
              const _0x227791 = await ytmp3(_0x473e57)
              await _0x128592.sendMessage(_0x537a46, {
                react: {
                  text: '\u2B06️',
                  key: _0x15a1a3.key,
                },
              })
              await _0x128592.sendMessage(
                _0x537a46,
                {
                  document: { url: _0x227791.download.url },
                  mimetype: 'audio/mp3',
                  fileName: _0x3856c9.title + '.mp3',
                  caption: _0x20c7f4,
                  contextInfo: {
                    mentionedJid: ['94760698006@s.whatsapp.net'],
                    groupMentions: [],
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                      newsletterName: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐 \u273B',
                      serverMessageId: 999,
                    },
                    externalAdReply: {
                      title: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                      body: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                      mediaType: 1,
                      sourceUrl: _0x3856c9.url,
                      thumbnailUrl: _0x3856c9.thumbnail,
                      renderLargerThumbnail: false,
                      showAdAttribution: true,
                    },
                  },
                },
                { quoted: _0x15a1a3 }
              )
              await _0x128592.sendMessage(_0x537a46, {
                react: {
                  text: '\u2705',
                  key: _0x15a1a3.key,
                },
              })
              await _0x128592.sendMessage(_0x537a46, { : _0xa8e43a.key })
            }
          }
        }
      })
    } catch (_0x4d320d) {
      console.log(_0x4d320d)
      _0x5bc5c3('' + _0x4d320d)
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
    _0x6e39a2,
    _0x5be36b,
    _0x569f28,
    {
      from: _0x46581c,
      quoted: _0x2df0ea,
      body: _0x8fd34c,
      isCmd: _0x3f3f44,
      command: _0x3a2b09,
      args: _0x2517b2,
      q: _0x10463c,
      isGroup: _0x515579,
      sender: _0x25abef,
      senderNumber: _0x5cabc1,
      botNumber2: _0x5ab9eb,
      botNumber: _0x3a257d,
      pushname: _0x27fc6f,
      isMe: _0x53ea75,
      isOwner: _0x58a6f1,
      groupMetadata: _0x52e157,
      groupName: _0x18ddff,
      participants: _0x13bfe6,
      groupAdmins: _0x2286b9,
      isBotAdmins: _0x82aa09,
      isAdmins: _0x4ebe15,
      reply: _0x2b4400,
    }
  ) => {
    try {
      if (!_0x10463c) {
        return _0x2b4400('Please give me a URL or title.')
      }
      _0x10463c = convertYouTubeLink(_0x10463c)
      const _0x38529e = await yts(_0x10463c),
        _0x2ed68e = _0x38529e.videos[0],
        _0xe5c190 = _0x2ed68e.url
      let _0x69edaa =
        '\n\u25C9\u250F\u2501\u252B *\u26AC𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐\u26AC* \u2523\u2501\u273E\n\u25C9\u2503             \u273B  \n\u250F\u253B\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u2503 *𝓘𝓢𝓗𝓤 𝓥𝓘𝓓𝓔𝓞 𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓 \u273B*\n\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u250F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u274D *ᴛɪᴛʟᴇ :* ' +
        _0x2ed68e.title +
        '\n\u274D *ᴅᴜʀᴀᴛɪᴏɴ :* ' +
        _0x2ed68e.timestamp +
        '\n\u274D *ᴠɪᴇᴡꜱ :* ' +
        _0x2ed68e.views +
        '\n\u274D *ᴜᴘʟᴏᴀᴅ ᴏɴ :* ' +
        _0x2ed68e.ago +
        '\n\u2523\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u2523\u2501\u2501\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u252C\u2501\u2501\n\u2503        𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐\n\u2517\u2501\u2501\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2534\u2501\u2501\n\n\uD83D\uDD22 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ \uD83C\uDFAC*\n\n*1.1*     \u2503  *360ᴘ*\n*1.2*     \u2503  *480ᴘ*\n*1.3*     \u2503  *720ᴘ*\n*1.4*     \u2503  *1080ᴘ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ \uD83D\uDCC1*\n\n*2.1*     \u2503  *360ᴘ*\n*2.2*     \u2503  *480ᴘ*\n*2.3*     \u2503  *720ᴘ*\n*2.4*     \u2503  *1080ᴘ*\n\n> QUEEN ISHU \u273B\n'
      const _0x24c280 = await _0x6e39a2.sendMessage(
          _0x46581c,
          {
            image: { url: _0x2ed68e.thumbnail },
            caption: _0x69edaa,
            contextInfo: {
              mentionedJid: ['94760698006@s.whatsapp.net'],
              groupMentions: [],
              forwardingScore: 1,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterName: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐 \u273B',
                serverMessageId: 999,
              },
              externalAdReply: {
                title: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                body: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                mediaType: 1,
                sourceUrl: 'https://queen-ishu-md.tiiny.site/',
                thumbnailUrl:
                  'https://i.imgur.com/B32zmq6.jpeg',
                renderLargerThumbnail: false,
                showAdAttribution: true,
              },
            },
          },
          { quoted: _0x5be36b }
        ),
        _0x2244ce = _0x24c280.key.id
      _0x6e39a2.ev.on('messages.upsert', async (_0x29fe24) => {
        const _0x30f83a = _0x29fe24.messages[0]
        if (!_0x30f83a.message) {
          return
        }
        const _0xa9af6c =
            _0x30f83a.message.conversation ||
            _0x30f83a.message.extendedTextMessage?.text,
          _0x408499 = _0x30f83a.key.remoteJid,
          _0xfdd176 = _0x30f83a.key.participant || _0x30f83a.key.remoteJid,
          _0x5987e7 =
            _0x30f83a.message.extendedTextMessage &&
            _0x30f83a.message.extendedTextMessage.contextInfo.stanzaId ===
              _0x2244ce
        if (_0x5987e7) {
          await _0x6e39a2.sendMessage(_0x408499, {
            react: {
              text: '\u2B07️',
              key: _0x30f83a.key,
            },
          })
          if (_0xa9af6c === '1.1') {
            const _0x111f3c = await ytmp4('' + _0xe5c190, '360p'),
              _0x29a538 = _0x111f3c
            await _0x6e39a2.sendMessage
            await _0x6e39a2.sendMessage(_0x408499, {
              react: {
                text: '\u2B06️',
                key: _0x30f83a.key,
              },
            })
            await _0x6e39a2.sendMessage(
              _0x408499,
              {
                video: { url: _0x29a538 },
                caption: '\n*\xA9 𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐 \xB7 \xB7 \xB7*\n',
                contextInfo: {
                  mentionedJid: ['94760698006@s.whatsapp.net'],
                  groupMentions: [],
                  forwardingScore: 1,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                    newsletterName: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐 \u273B',
                    serverMessageId: 999,
                  },
                  externalAdReply: {
                    title: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                    body: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                    mediaType: 1,
                    sourceUrl: _0x2ed68e.url,
                    thumbnailUrl: _0x2ed68e.thumbnail,
                    renderLargerThumbnail: false,
                    showAdAttribution: true,
                  },
                },
              },
              { quoted: _0x30f83a }
            )
            await _0x6e39a2.sendMessage(_0x408499, {
              react: {
                text: '\u2705',
                key: _0x30f83a.key,
              },
            })
          } else {
            if (_0xa9af6c === '1.2') {
              const _0x7f2077 = await ytmp4('' + _0xe5c190, '480'),
                _0x14fe5d = _0x7f2077
              await _0x6e39a2.sendMessage
              await _0x6e39a2.sendMessage(_0x408499, {
                react: {
                  text: '\u2B06️',
                  key: _0x30f83a.key,
                },
              })
              await _0x6e39a2.sendMessage(
                _0x408499,
                {
                  video: { url: _0x14fe5d },
                  caption:
                    '\n*\xA9 𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐 \xB7 \xB7 \xB7*\n',
                  contextInfo: {
                    mentionedJid: ['94760698006@s.whatsapp.net'],
                    groupMentions: [],
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                      newsletterName: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐 \u273B',
                      serverMessageId: 999,
                    },
                    externalAdReply: {
                      title: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                      body: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                      mediaType: 1,
                      sourceUrl: _0x2ed68e.url,
                      thumbnailUrl: _0x2ed68e.thumbnail,
                      renderLargerThumbnail: false,
                      showAdAttribution: true,
                    },
                  },
                },
                { quoted: _0x30f83a }
              )
              await _0x6e39a2.sendMessage(_0x408499, {
                react: {
                  text: '\u2705',
                  key: _0x30f83a.key,
                },
              })
            } else {
              if (_0xa9af6c === '1.3') {
                const _0x345182 = await ytmp4('' + _0xe5c190, '720'),
                  _0x40bce3 = _0x345182
                await _0x6e39a2.sendMessage
                await _0x6e39a2.sendMessage(_0x408499, {
                  react: {
                    text: '\u2B06️',
                    key: _0x30f83a.key,
                  },
                })
                await _0x6e39a2.sendMessage(
                  _0x408499,
                  {
                    video: { url: _0x40bce3 },
                    caption:
                      '\n*\xA9 𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐 \xB7 \xB7 \xB7*\n',
                    contextInfo: {
                      mentionedJid: ['94760698006@s.whatsapp.net'],
                      groupMentions: [],
                      forwardingScore: 1,
                      isForwarded: true,
                      forwardedNewsletterMessageInfo: {

                        newsletterName: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐 \u273B',
                        serverMessageId: 999,
                      },
                      externalAdReply: {
                        title: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                        body: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                        mediaType: 1,
                        sourceUrl: _0x2ed68e.url,
                        thumbnailUrl: _0x2ed68e.thumbnail,
                        renderLargerThumbnail: false,
                        showAdAttribution: true,
                      },
                    },
                  },
                  { quoted: _0x30f83a }
                )
                await _0x6e39a2.sendMessage(_0x408499, {
                  react: {
                    text: '\u2705',
                    key: _0x30f83a.key,
                  },
                })
              } else {
                if (_0xa9af6c === '1.4') {
                  const _0x29ec62 = await ytmp4('' + _0xe5c190, '1080'),
                    _0x196461 = _0x29ec62
                  await _0x6e39a2.sendMessage
                  await _0x6e39a2.sendMessage(_0x408499, {
                    react: {
                      text: '\u2B06️',
                      key: _0x30f83a.key,
                    },
                  })
                  await _0x6e39a2.sendMessage(
                    _0x408499,
                    {
                      video: { url: _0x196461 },
                      caption:
                        '\n*\xA9 𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐 \xB7 \xB7 \xB7*\n',
                    },
                    { quoted: _0x30f83a }
                  )
                  await _0x6e39a2.sendMessage(_0x408499, {
                    react: {
                      text: '\u2705',
                      key: _0x30f83a.key,
                    },
                  })
                } else {
                  if (_0xa9af6c === '2.1') {
                    const _0x366160 = await ytmp4('' + _0xe5c190, '360'),
                      _0x4f5b7b = _0x366160
                    await _0x6e39a2.sendMessage
                    await _0x6e39a2.sendMessage(_0x408499, {
                      react: {
                        text: '\u2B06️',
                        key: _0x30f83a.key,
                      },
                    })
                    await _0x6e39a2.sendMessage(
                      _0x408499,
                      {
                        document: { url: _0x4f5b7b },
                        mimetype: 'video/mp4',
                        fileName: _0x2ed68e.title + '.mp4',
                        caption:
                          '\n*\xA9 𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐 \xB7 \xB7 \xB7*\n',
                        contextInfo: {
                          mentionedJid: ['94760698006@s.whatsapp.net'],
                          groupMentions: [],
                          forwardingScore: 1,
                          isForwarded: true,
                          forwardedNewsletterMessageInfo: {
                            newsletterName: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐 \u273B',
                            serverMessageId: 999,
                          },
                          externalAdReply: {
                            title: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                            body: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                            mediaType: 1,
                            sourceUrl: _0x2ed68e.url,
                            thumbnailUrl: _0x2ed68e.thumbnail,
                            renderLargerThumbnail: false,
                            showAdAttribution: true,
                          },
                        },
                      },
                      { quoted: _0x30f83a }
                    )
                    await _0x6e39a2.sendMessage(_0x408499, {
                      react: {
                        text: '\u2705',
                        key: _0x30f83a.key,
                      },
                    })
                  } else {
                    if (_0xa9af6c === '2.2') {
                      const _0x25a052 = await ytmp4('' + _0xe5c190, '480'),
                        _0x3cad42 = _0x25a052
                      await _0x6e39a2.sendMessage
                      await _0x6e39a2.sendMessage(_0x408499, {
                        react: {
                          text: '\u2B06️',
                          key: _0x30f83a.key,
                        },
                      })
                      await _0x6e39a2.sendMessage(
                        _0x408499,
                        {
                          document: { url: _0x3cad42 },
                          mimetype: 'video/mp4',
                          fileName: _0x2ed68e.title + '.mp4',
                          caption:
                            '\n*\xA9 𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐 \xB7 \xB7 \xB7*\n',
                          contextInfo: {
                            mentionedJid: ['94760698006@s.whatsapp.net'],
                            groupMentions: [],
                            forwardingScore: 1,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                              newsletterName: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐 \u273B',
                              serverMessageId: 999,
                            },
                            externalAdReply: {
                              title: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                              body: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                              mediaType: 1,
                              sourceUrl: _0x2ed68e.url,
                              thumbnailUrl: _0x2ed68e.thumbnail,
                              renderLargerThumbnail: false,
                              showAdAttribution: true,
                            },
                          },
                        },
                        { quoted: _0x30f83a }
                      )
                      await _0x6e39a2.sendMessage(_0x408499, {
                        react: {
                          text: '\u2705',
                          key: _0x30f83a.key,
                        },
                      })
                    } else {
                      if (_0xa9af6c === '2.3') {
                        const _0x4c9714 = await ytmp4('' + _0xe5c190, '720'),
                          _0x456bce = _0x4c9714
                        await _0x6e39a2.sendMessage
                        await _0x6e39a2.sendMessage(_0x408499, {
                          react: {
                            text: '\u2B06️',
                            key: _0x30f83a.key,
                          },
                        })
                        await _0x6e39a2.sendMessage(
                          _0x408499,
                          {
                            document: { url: _0x456bce },
                            mimetype: 'video/mp4',
                            fileName: _0x2ed68e.title + '.mp4',
                            caption:
                              '\n*\xA9 ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ \xB7 \xB7 \xB7*\n',
                            contextInfo: {
                              mentionedJid: ['94760698006@s.whatsapp.net'],
                              groupMentions: [],
                              forwardingScore: 1,
                              isForwarded: true,
                              forwardedNewsletterMessageInfo: {
                                newsletterName: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐 \u273B',
                                serverMessageId: 999,
                              },
                              externalAdReply: {
                                title: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                                body: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                                mediaType: 1,
                                sourceUrl: _0x2ed68e.url,
                                thumbnailUrl: _0x2ed68e.thumbnail,
                                renderLargerThumbnail: false,
                                showAdAttribution: true,
                              },
                            },
                          },
                          { quoted: _0x30f83a }
                        )
                        await _0x6e39a2.sendMessage(_0x408499, {
                          react: {
                            text: '\u2705',
                            key: _0x30f83a.key,
                          },
                        })
                      } else {
                        if (_0xa9af6c === '2.4') {
                          const _0x497d0d = await ytmp4('' + _0xe5c190, '1080'),
                            _0x3abf11 = _0x497d0d
                          await _0x6e39a2.sendMessage
                          await _0x6e39a2.sendMessage(_0x408499, {
                            react: {
                              text: '\u2B06️',
                              key: _0x30f83a.key,
                            },
                          })
                          await _0x6e39a2.sendMessage(
                            _0x408499,
                            {
                              document: { url: _0x3abf11 },
                              mimetype: 'video/mp4',
                              fileName: _0x2ed68e.title + '.mp4',
                              caption:
                                '\n*\xA9 𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐 \xB7 \xB7 \xB7*\n',
                              contextInfo: {
                                mentionedJid: ['94760698006@s.whatsapp.net'],
                                groupMentions: [],
                                forwardingScore: 1,
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                  newsletterJid:
                                  newsletterName: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐 \u273B',
                                  serverMessageId: 999,
                                },
                                externalAdReply: {
                                  title: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                                  body: '𝓛𝓐𝓚𝓢𝓘𝓓𝓤 𝓝𝓘𝓜𝓢𝓐𝓡𝓐',
                                  mediaType: 1,
                                  sourceUrl: _0x2ed68e.url,
                                  thumbnailUrl: _0x2ed68e.thumbnail,
                                  renderLargerThumbnail: false,
                                  showAdAttribution: true,
                                },
                              },
                            },
                            { quoted: _0x30f83a }
                          )
                          await _0x6e39a2.sendMessage(_0x408499, {
                            react: {
                              text: '\u2705',
                              key: _0x30f83a.key,
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
    } catch (_0x19292b) {
      console.log(_0x19292b)
      _0x2b4400('' + _0x19292b)
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
    _0x5f10e7,
    _0x52b82c,
    _0x3517e1,
    { from: _0x37dbe9, q: _0x12c0e3, reply: _0xdee2b7 }
  ) => {
    try {
      if (!_0x12c0e3) {
        return await _0xdee2b7('*Need a YouTube URL!*')
      }
      const _0x2418d0 = await fetchJson(
          'https://api.giftedtech.my.id/api/download/ytaud?apikey=gifted&url=' +
            _0x12c0e3
        ),
        _0x5932cd = _0x2418d0.result.download_url
      await _0x5f10e7.sendMessage(
        _0x37dbe9,
        {
          audio: { url: _0x5932cd },
          mimetype: 'audio/mpeg',
        },
        { quoted: _0x52b82c }
      )
    } catch (_0x5b3976) {
      console.log('First attempt failed:', _0x5b3976)
      try {
        const _0x56d080 = await dlyta(_0x12c0e3)
        await _0x5f10e7.sendMessage(
          _0x37dbe9,
          {
            audio: { url: _0x56d080.dl_link },
            mimetype: 'audio/mpeg',
          },
          { quoted: _0x52b82c }
        )
      } catch (_0x41cd5f) {
        console.log('Second attempt failed:', _0x41cd5f)
        await _0xdee2b7(
          '*Failed to process the request. Please try again later!*'
        )
      }
    }
  }
)
