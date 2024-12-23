const {
  cmd,
  commands
} = require("../command");
const yts = require('yt-search');
const {
  fetchJson
} = require("../lib/functions");
const {
  ytsearch,
  ytmp3
} = require("api-dylux");
const axios = require('axios');
async function ytmp4(_0x5b7b1c, _0x21e1ec) {
  try {
    if (!_0x5b7b1c || !_0x21e1ec) {
      throw new Error("url and format parameters are required.");
    }
    const _0x424595 = parseInt(_0x21e1ec.replace('p', ''), 0xa);
    const _0x3ee732 = {
      'button': 0x1,
      'start': 0x1,
      'end': 0x1,
      'format': _0x424595,
      'url': _0x5b7b1c
    };
    const _0x52d4ac = {
      'Accept': "*/*",
      'Accept-Encoding': "gzip, deflate, br",
      'Accept-Language': "en-GB,en-US;q=0.9,en;q=0.8",
      'Origin': "https://loader.to",
      'Referer': "https://loader.to",
      'Sec-Ch-Ua': "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
      'Sec-Ch-Ua-Mobile': '?1',
      'Sec-Ch-Ua-Platform': "\"Android\"",
      'Sec-Fetch-Dest': "empty",
      'Sec-Fetch-Mode': "cors",
      'Sec-Fetch-Site': "cross-site",
      'User-Agent': "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
    };
    const _0x5235cc = await axios.get("https://ab.cococococ.com/ajax/download.php", {
      'params': _0x3ee732,
      'headers': _0x52d4ac
    });
    const _0x25eb8f = _0x5235cc.data.id;
    const _0x4e3eaa = async () => {
      const _0x541008 = {
        'id': _0x25eb8f
      };
      try {
        const _0x349903 = await axios.get("https://p.oceansaver.in/ajax/progress.php", {
          'params': _0x541008,
          'headers': _0x52d4ac
        });
        const {
          progress: _0x2b251c,
          download_url: _0x467f21,
          text: _0x21b3be
        } = _0x349903.data;
        return _0x21b3be === 'Finished' ? _0x467f21 : (await new Promise(_0x23a250 => setTimeout(_0x23a250, 0x3e8)), _0x4e3eaa());
      } catch (_0x1cc484) {
        throw new Error("Error in progress check: " + _0x1cc484.message);
      }
    };
    return await _0x4e3eaa();
  } catch (_0x2f9033) {
    console.error("Error:", _0x2f9033);
    return {
      'error': _0x2f9033.message
    };
  }
}
module.exports = {
  'ytmp4': ytmp4
};
function extractYouTubeId(_0x255299) {
  const _0x2f1598 = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const _0x44111d = _0x255299.match(_0x2f1598);
  return _0x44111d ? _0x44111d[0x1] : null;
}
function convertYouTubeLink(_0x36f16d) {
  const _0xa5ddfd = extractYouTubeId(_0x36f16d);
  if (_0xa5ddfd) {
    return "https://www.youtube.com/watch?v=" + _0xa5ddfd;
  }
  return _0x36f16d;
}
cmd({
  'pattern': "song",
  'alias': "play",
  'desc': "To download songs.",
  'react': '🎵',
  'category': "download",
  'filename': __filename
}, async (_0x128592, _0x30115a, _0x234200, {
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
  reply: _0x5bc5c3
}) => {
  try {
    if (!_0x7bb8f) {
      return _0x5bc5c3("Please give me a URL or title.");
    }
    _0x7bb8f = convertYouTubeLink(_0x7bb8f);
    const _0x158514 = await yts(_0x7bb8f);
    const _0x3856c9 = _0x158514.videos[0x0];
    const _0x473e57 = _0x3856c9.url;
    let _0xc99a5 = "\n *Qᴜᴇᴇɴ-ɪꜱʜᴜ* \n                                \n━━━━━━━━━━━━━\n🅠🅤🅔🅔🅝-🅘🅢🅗🅤 🅢🅞🅝🅖 🅓🅞🅦🅝🅛🅞🅐🅓 *\n━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━\n🔥 *ᴛɪᴛʟᴇ :* " + _0x3856c9.title + "\n🔥 *ᴅᴜʀᴀᴛɪᴏɴ :* " + _0x3856c9.timestamp + "\n🔥 *ᴠɪᴇᴡꜱ :* " + _0x3856c9.views + "\n🔥 *ᴜᴘʟᴏᴀᴅ ᴏɴ :* " + _0x3856c9.ago + "\n━━━━━━━━━━━━━━━\n\n│        *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ*\n\n\n🔢 *REPLY BELLOW THE NUMBER ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻 𝔸𝕌𝔻𝕀𝕆 🎧*\n\n*1*     ┃  *💥ᴀᴜᴅɪᴏ💥*\n\n*𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻 𝔻𝕆ℂ𝕌𝕄𝔼ℕ𝕋 📁*\n\n*2*     ┃  *💥ᴅᴏᴄᴜᴍᴇɴᴛ💥*\n\n> Qᴜᴇᴇɴ-ɪꜱʜᴜ-ᴍᴅ \n";
    const _0xa8e43a = await _0x128592.sendMessage(_0x51568d, {
      'image': {
        'url': _0x3856c9.thumbnail
      },
      'caption': _0xc99a5,
      'contextInfo': {
        'mentionedJid': ["94760698006@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "",
          'newsletterName': "Queen Ishu",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "QUEEN ISHU",
          'body': "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ",
          'mediaType': 0x1,
          'sourceUrl': "https://github.com/laksidunimsara1",
          'thumbnailUrl': "https://i.imgur.com/7nlY0Gt.jpeg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x30115a
    });
    const _0x47ab76 = _0xa8e43a.key.id;
    _0x128592.ev.on("messages.upsert", async _0x4ae5b4 => {
      const _0x15a1a3 = _0x4ae5b4.messages[0x0];
      if (!_0x15a1a3.message) {
        return;
      }
      const _0x563946 = _0x15a1a3.message.conversation || _0x15a1a3.message.extendedTextMessage?.['text'];
      const _0x537a46 = _0x15a1a3.key.remoteJid;
      const _0x528623 = _0x15a1a3.message.extendedTextMessage && _0x15a1a3.message.extendedTextMessage.contextInfo.stanzaId === _0x47ab76;
      if (_0x528623) {
        await _0x128592.sendMessage(_0x537a46, {
          'react': {
            'text': '⬇️',
            'key': _0x15a1a3.key
          }
        });
        if (_0x563946 === '1') {
          const _0x29216e = await ytmp3(_0x473e57);
          await _0x128592.sendMessage(_0x537a46, {
            'react': {
              'text': '⬆️',
              'key': _0x15a1a3.key
            }
          });
          await _0x128592.sendMessage(_0x537a46, {
            'audio': {
              'url': _0x29216e.download.url
            },
            'mimetype': "audio/mpeg",
            'contextInfo': {
              'mentionedJid': ["94760698006@s.whatsapp.net"],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': 'Qᴜᴇᴇɴ ɪꜱʜᴜ',
                'newsletterName': "Qᴜᴇᴇɴ-ɪꜱʜᴜ",
                'serverMessageId': 0x3e7
              },
              'externalAdReply': {
                'title': "🅠🅤🅔🅔🅝 🅘🅢🅗🅤",
                'body': "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ",
                'mediaType': 0x1,
                'sourceUrl': _0x3856c9.url,
                'thumbnailUrl': _0x3856c9.thumbnail,
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x15a1a3
          });
          await _0x128592.sendMessage(_0x537a46, {
            'react': {
              'text': '✅',
              'key': _0x15a1a3.key
            }
          });
        } else {
          if (_0x563946 === '2') {
            const _0x227791 = await ytmp3(_0x473e57);
            await _0x128592.sendMessage(_0x537a46, {
              'react': {
                'text': '⬆️',
                'key': _0x15a1a3.key
              }
            });
            await _0x128592.sendMessage(_0x537a46, {
              'document': {
                'url': _0x227791.download.url
              },
              'mimetype': "audio/mp3",
              'fileName': _0x3856c9.title + '.mp3',
              'caption': "\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ*\n ",
              'contextInfo': {
                'mentionedJid': ["94760698006@s.whatsapp.net"],
                'groupMentions': [],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': '',
                  'newsletterName': "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ",
                  'serverMessageId': 0x3e7
                },
                'externalAdReply': {
                  'title': "🅠🅤🅔🅔🅝 🅘🅢🅗🅤",
                  'body': "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ",
                  'mediaType': 0x1,
                  'sourceUrl': _0x3856c9.url,
                  'thumbnailUrl': _0x3856c9.thumbnail,
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x15a1a3
            });
            await _0x128592.sendMessage(_0x537a46, {
              'react': {
                'text': '✅',
                'key': _0x15a1a3.key
              }
            });
            await _0x128592.sendMessage(_0x537a46, {
              'delete': _0xa8e43a.key
            });
          }
        }
      }
    });
  } catch (_0x4d320d) {
    console.log(_0x4d320d);
    _0x5bc5c3('' + _0x4d320d);
  }
});
cmd({
  'pattern': "video",
  'desc': "To download videos.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0x6e39a2, _0x5be36b, _0x569f28, {
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
  reply: _0x2b4400
}) => {
  try {
    if (!_0x10463c) {
      return _0x2b4400("Please give me a URL or title.");
    }
    _0x10463c = convertYouTubeLink(_0x10463c);
    const _0x38529e = await yts(_0x10463c);
    const _0x2ed68e = _0x38529e.videos[0x0];
    const _0xe5c190 = _0x2ed68e.url;
    let _0x69edaa = "\n→ *🅠🅤🅔🅔🅝 🅘🅢🅗🅤 🅥🅘🅓🅔🅞* \n┃                               \n━━━━━━━━━━━━━\n 🅠🅘🅔🅔🅝-🅘🅢🅗🅤 🅥🅘🅓🅔🅞 🅓🅞🅦🅝🅛🅞🅐🅓 *\n━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━\n🔥 *ᴛɪᴛʟᴇ :* " + _0x2ed68e.title + "\n🔥 *ᴅᴜʀᴀᴛɪᴏɴ :* " + _0x2ed68e.timestamp + "\n🔥 *ᴠɪᴇᴡꜱ :* " + _0x2ed68e.views + "\n🔥 *ᴜᴘʟᴏᴀᴅ ᴏɴ :* " + _0x2ed68e.ago + "\n━━━━━━━━━━━━━━━\n\n        *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ\n\n🔢 *REPLY BELOW THE NUMBER TO*\n*DOWNLOAD FROMAT*\n\n*𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻 𝕍𝕀𝔽𝔼𝕆 🎬*\n\n*1.1*     ┃  *✨360ᴘ✨*\n*1.2*     ┃  *✨480ᴘ✨*\n*1.3*     ┃  *✨720ᴘ✨*\n*1.4*     ┃  *✨1080ᴘ✨*\n\n*𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻 𝔻𝕆ℂ𝕌𝕄𝔼ℕ𝕋 📁*\n\n*2.1*     ┃  *✨360ᴘ✨*\n*2.2*     ┃  *✨480ᴘ✨*\n*2.3*     ┃  *✨720ᴘ✨*\n*2.4*     ┃  *✨1080ᴘ✨*\n\n> Qᴜᴇᴇɴ-ɪꜱʜᴜ-ᴍᴅ \n";
    const _0x24c280 = await _0x6e39a2.sendMessage(_0x46581c, {
      'image': {
        'url': _0x2ed68e.thumbnail
      },
      'caption': _0x69edaa,
      'contextInfo': {
        'mentionedJid': ['94779062397@s.whatsapp.net'],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "",
          'newsletterName': "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "🅠🅤🅔🅔🅝 🅘🅢🅗🅤",
          'body': "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ",
          'mediaType': 0x1,
          'sourceUrl': "https://github.com/laksidunimsara1",
          'thumbnailUrl': "https://i.imgur.com/7nlY0Gt.jpeg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x5be36b
    });
    const _0x2244ce = _0x24c280.key.id;
    _0x6e39a2.ev.on("messages.upsert", async _0x29fe24 => {
      const _0x30f83a = _0x29fe24.messages[0x0];
      if (!_0x30f83a.message) {
        return;
      }
      const _0xa9af6c = _0x30f83a.message.conversation || _0x30f83a.message.extendedTextMessage?.["text"];
      const _0x408499 = _0x30f83a.key.remoteJid;
      const _0x5987e7 = _0x30f83a.message.extendedTextMessage && _0x30f83a.message.extendedTextMessage.contextInfo.stanzaId === _0x2244ce;
      if (_0x5987e7) {
        await _0x6e39a2.sendMessage(_0x408499, {
          'react': {
            'text': '⬇️',
            'key': _0x30f83a.key
          }
        });
        if (_0xa9af6c === '1.1') {
          const _0x111f3c = await ytmp4('' + _0xe5c190, "360p");
          await _0x6e39a2.sendMessage(_0x408499, {
            'delete': _0x24c280.key
          });
          await _0x6e39a2.sendMessage(_0x408499, {
            'react': {
              'text': '⬆️',
              'key': _0x30f83a.key
            }
          });
          await _0x6e39a2.sendMessage(_0x408499, {
            'video': {
              'url': _0x111f3c
            },
            'caption': "\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ\n",
            'contextInfo': {
              'mentionedJid': ["94760698006@s.whatsapp.net"],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "",
                'newsletterName': "Qᴜᴇᴇɴ ɪꜱʜᴜ",
                'serverMessageId': 0x3e7
              },
              'externalAdReply': {
                'title': "🅠🅤🅔🅔🅝 🅘🅢🅗🅤",
                'body': "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ",
                'mediaType': 0x1,
                'sourceUrl': _0x2ed68e.url,
                'thumbnailUrl': _0x2ed68e.thumbnail,
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x30f83a
          });
          await _0x6e39a2.sendMessage(_0x408499, {
            'react': {
              'text': '✅',
              'key': _0x30f83a.key
            }
          });
        } else {
          if (_0xa9af6c === "1.2") {
            const _0x7f2077 = await ytmp4('' + _0xe5c190, "480");
            await _0x6e39a2.sendMessage(_0x408499, {
              'delete': _0x24c280.key
            });
            await _0x6e39a2.sendMessage(_0x408499, {
              'react': {
                'text': '⬆️',
                'key': _0x30f83a.key
              }
            });
            await _0x6e39a2.sendMessage(_0x408499, {
              'video': {
                'url': _0x7f2077
              },
              'caption': "\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ*\n",
              'contextInfo': {
                'mentionedJid': ['94779062397@s.whatsapp.net'],
                'groupMentions': [],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "",
                  'newsletterName': "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ",
                  'serverMessageId': 0x3e7
                },
                'externalAdReply': {
                  'title': "🅠🅤🅔🅔🅝 🅘🅢🅗🅤",
                  'body': "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ",
                  'mediaType': 0x1,
                  'sourceUrl': _0x2ed68e.url,
                  'thumbnailUrl': _0x2ed68e.thumbnail,
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x30f83a
            });
            await _0x6e39a2.sendMessage(_0x408499, {
              'react': {
                'text': '✅',
                'key': _0x30f83a.key
              }
            });
          } else {
            if (_0xa9af6c === '1.3') {
              const _0x345182 = await ytmp4('' + _0xe5c190, "720");
              await _0x6e39a2.sendMessage(_0x408499, {
                'delete': _0x24c280.key
              });
              await _0x6e39a2.sendMessage(_0x408499, {
                'react': {
                  'text': '⬆️',
                  'key': _0x30f83a.key
                }
              });
              await _0x6e39a2.sendMessage(_0x408499, {
                'video': {
                  'url': _0x345182
                },
                'caption': "\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ*\n",
                'contextInfo': {
                  'mentionedJid': ["94760698006@s.whatsapp.net"],
                  'groupMentions': [],
                  'forwardingScore': 0x1,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': "",
                    'newsletterName': "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ",
                    'serverMessageId': 0x3e7
                  },
                  'externalAdReply': {
                    'title': "🅠🅤🅔🅔🅝 🅘🅢🅗🅤 🅜🅓",
                    'body': "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ",
                    'mediaType': 0x1,
                    'sourceUrl': _0x2ed68e.url,
                    'thumbnailUrl': _0x2ed68e.thumbnail,
                    'renderLargerThumbnail': false,
                    'showAdAttribution': true
                  }
                }
              }, {
                'quoted': _0x30f83a
              });
              await _0x6e39a2.sendMessage(_0x408499, {
                'react': {
                  'text': '✅',
                  'key': _0x30f83a.key
                }
              });
            } else {
              if (_0xa9af6c === "1.4") {
                const _0x29ec62 = await ytmp4('' + _0xe5c190, '1080');
                await _0x6e39a2.sendMessage(_0x408499, {
                  'delete': _0x24c280.key
                });
                await _0x6e39a2.sendMessage(_0x408499, {
                  'react': {
                    'text': '⬆️',
                    'key': _0x30f83a.key
                  }
                });
                await _0x6e39a2.sendMessage(_0x408499, {
                  'video': {
                    'url': _0x29ec62
                  },
                  'caption': "\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ*\n"
                }, {
                  'quoted': _0x30f83a
                });
                await _0x6e39a2.sendMessage(_0x408499, {
                  'react': {
                    'text': '✅',
                    'key': _0x30f83a.key
                  }
                });
              } else {
                if (_0xa9af6c === "2.1") {
                  const _0x366160 = await ytmp4('' + _0xe5c190, "360");
                  await _0x6e39a2.sendMessage(_0x408499, {
                    'delete': _0x24c280.key
                  });
                  await _0x6e39a2.sendMessage(_0x408499, {
                    'react': {
                      'text': '⬆️',
                      'key': _0x30f83a.key
                    }
                  });
                  await _0x6e39a2.sendMessage(_0x408499, {
                    'document': {
                      'url': _0x366160
                    },
                    'mimetype': "video/mp4",
                    'fileName': _0x2ed68e.title + ".mp4",
                    'caption': "\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ*\n",
                    'contextInfo': {
                      'mentionedJid': ["94760698006@s.whatsapp.net"],
                      'groupMentions': [],
                      'forwardingScore': 0x1,
                      'isForwarded': true,
                      'forwardedNewsletterMessageInfo': {
                        'newsletterJid': "",
                        'newsletterName': "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ",
                        'serverMessageId': 0x3e7
                      },
                      'externalAdReply': {
                        'title': "🅠🅤🅔🅔🅝 🅘🅢🅗🅤",
                        'body': "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ",
                        'mediaType': 0x1,
                        'sourceUrl': _0x2ed68e.url,
                        'thumbnailUrl': _0x2ed68e.thumbnail,
                        'renderLargerThumbnail': false,
                        'showAdAttribution': true
                      }
                    }
                  }, {
                    'quoted': _0x30f83a
                  });
                  await _0x6e39a2.sendMessage(_0x408499, {
                    'react': {
                      'text': '✅',
                      'key': _0x30f83a.key
                    }
                  });
                } else {
                  if (_0xa9af6c === '2.2') {
                    const _0x25a052 = await ytmp4('' + _0xe5c190, "480");
                    await _0x6e39a2.sendMessage(_0x408499, {
                      'delete': _0x24c280.key
                    });
                    await _0x6e39a2.sendMessage(_0x408499, {
                      'react': {
                        'text': '⬆️',
                        'key': _0x30f83a.key
                      }
                    });
                    await _0x6e39a2.sendMessage(_0x408499, {
                      'document': {
                        'url': _0x25a052
                      },
                      'mimetype': "video/mp4",
                      'fileName': _0x2ed68e.title + '.mp4',
                      'caption': "\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ*\n",
                      'contextInfo': {
                        'mentionedJid': ["94760698006@s.whatsapp.net"],
                        'groupMentions': [],
                        'forwardingScore': 0x1,
                        'isForwarded': true,
                        'forwardedNewsletterMessageInfo': {
                          'newsletterJid': '',
                          'newsletterName': "Qɪᴇᴇɴ ɪꜱʜᴜ ᴍᴅ",
                          'serverMessageId': 0x3e7
                        },
                        'externalAdReply': {
                          'title': "🅠🅤🅔🅔🅝 🅘🅢🅗🅤 🅜🅓",
                          'body': "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ",
                          'mediaType': 0x1,
                          'sourceUrl': _0x2ed68e.url,
                          'thumbnailUrl': _0x2ed68e.thumbnail,
                          'renderLargerThumbnail': false,
                          'showAdAttribution': true
                        }
                      }
                    }, {
                      'quoted': _0x30f83a
                    });
                    await _0x6e39a2.sendMessage(_0x408499, {
                      'react': {
                        'text': '✅',
                        'key': _0x30f83a.key
                      }
                    });
                  } else {
                    if (_0xa9af6c === "2.3") {
                      const _0x4c9714 = await ytmp4('' + _0xe5c190, "720");
                      await _0x6e39a2.sendMessage(_0x408499, {
                        'delete': _0x24c280.key
                      });
                      await _0x6e39a2.sendMessage(_0x408499, {
                        'react': {
                          'text': '⬆️',
                          'key': _0x30f83a.key
                        }
                      });
                      await _0x6e39a2.sendMessage(_0x408499, {
                        'document': {
                          'url': _0x4c9714
                        },
                        'mimetype': 'video/mp4',
                        'fileName': _0x2ed68e.title + ".mp4",
                        'caption': "\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ*\n",
                        'contextInfo': {
                          'mentionedJid': ['94760698006@s.whatsapp.net'],
                          'groupMentions': [],
                          'forwardingScore': 0x1,
                          'isForwarded': true,
                          'forwardedNewsletterMessageInfo': {
                            'newsletterJid': '',
                            'newsletterName': "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ",
                            'serverMessageId': 0x3e7
                          },
                          'externalAdReply': {
                            'title': "🅠🅤🅔🅔🅝 🅘🅢🅗🅤 🅜🅓",
                            'body': "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ",
                            'mediaType': 0x1,
                            'sourceUrl': _0x2ed68e.url,
                            'thumbnailUrl': _0x2ed68e.thumbnail,
                            'renderLargerThumbnail': false,
                            'showAdAttribution': true
                          }
                        }
                      }, {
                        'quoted': _0x30f83a
                      });
                      await _0x6e39a2.sendMessage(_0x408499, {
                        'react': {
                          'text': '✅',
                          'key': _0x30f83a.key
                        }
                      });
                    } else {
                      if (_0xa9af6c === "2.4") {
                        const _0x497d0d = await ytmp4('' + _0xe5c190, "1080");
                        await _0x6e39a2.sendMessage(_0x408499, {
                          'delete': _0x24c280.key
                        });
                        await _0x6e39a2.sendMessage(_0x408499, {
                          'react': {
                            'text': '⬆️',
                            'key': _0x30f83a.key
                          }
                        });
                        await _0x6e39a2.sendMessage(_0x408499, {
                          'document': {
                            'url': _0x497d0d
                          },
                          'mimetype': 'video/mp4',
                          'fileName': _0x2ed68e.title + '.mp4',
                          'caption': "\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ*\n",
                          'contextInfo': {
                            'mentionedJid': ['94760698006@s.whatsapp.net'],
                            'groupMentions': [],
                            'forwardingScore': 0x1,
                            'isForwarded': true,
                            'forwardedNewsletterMessageInfo': {
                              'newsletterJid': "",
                              'newsletterName': "Qᴜᴇᴇɴ ɪꜱʜᴜ ᴍᴅ",
                              'serverMessageId': 0x3e7
                            },
                            'externalAdReply': {
                              'title': "🅠🅤🅔🅔🅝 🅘🅢🅗🅤 🅜🅓",
                              'body': "ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ",
                              'mediaType': 0x1,
                              'sourceUrl': _0x2ed68e.url,
                              'thumbnailUrl': _0x2ed68e.thumbnail,
                              'renderLargerThumbnail': false,
                              'showAdAttribution': true
                            }
                          }
                        }, {
                          'quoted': _0x30f83a
                        });
                        await _0x6e39a2.sendMessage(_0x408499, {
                          'react': {
                            'text': '✅',
                            'key': _0x30f83a.key
                          }
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  } catch (_0x19292b) {
    console.log(_0x19292b);
    _0x2b4400('' + _0x19292b);
  }
});
cmd({
  'pattern': "yta",
  'alias': "ytmp3",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x5f10e7, _0x52b82c, _0x3517e1, {
  from: _0x37dbe9,
  q: _0x12c0e3,
  reply: _0xdee2b7
}) => {
  try {
    if (!_0x12c0e3) {
      return await _0xdee2b7("*Need a YouTube URL!*");
    }
    const _0x2418d0 = await fetchJson("https://api.giftedtech.my.id/api/download/ytaud?apikey=gifted&url=" + _0x12c0e3);
    const _0x5932cd = _0x2418d0.result.download_url;
    await _0x5f10e7.sendMessage(_0x37dbe9, {
      'audio': {
        'url': _0x5932cd
      },
      'mimetype': 'audio/mpeg'
    }, {
      'quoted': _0x52b82c
    });
  } catch (_0x5b3976) {
    console.log("First attempt failed:", _0x5b3976);
    try {
      const _0x56d080 = await dlyta(_0x12c0e3);
      await _0x5f10e7.sendMessage(_0x37dbe9, {
        'audio': {
          'url': _0x56d080.dl_link
        },
        'mimetype': "audio/mpeg"
      }, {
        'quoted': _0x52b82c
      });
    } catch (_0x41cd5f) {
      console.log("Second attempt failed:", _0x41cd5f);
      await _0xdee2b7("*Failed to process the request. Please try again later!*");
    }
  }
});
