const {
  cmd,
  commands
} = require("../command");
const fg = require("api-dylux");
const yts = require('yt-search');
cmd({
  'pattern': "song",
  'desc': "Download Your Songs.",
  'category': "download",
  'filename': __filename
}, async (_0x4ed46a, _0x513182, _0x53077a, {
  from: _0x1d8932,
  quoted: _0x1b0ab1,
  body: _0x3f6470,
  isCmd: _0x11d399,
  command: _0xe19e83,
  args: _0x6bb439,
  q: _0xe784cf,
  isGroup: _0x3165bc,
  sender: _0x415b77,
  senderNumber: _0x48008b,
  botNumber2: _0x209435,
  botNumber: _0x8d4d61,
  pushname: _0x27025d,
  isMe: _0xece081,
  isOwner: _0x5704b6,
  groupMetadata: _0x446196,
  groupName: _0x1caa17,
  participants: _0x197a84,
  groupAdmins: _0x45c13a,
  isBotAdmins: _0x4f6b47,
  isAdmins: _0xc6aa08,
  reply: _0x23892c
}) => {
  try {
    if (!_0xe784cf) {
      return _0x23892c("*❌ Give Me title or Url*");
    }
    const _0xe6e753 = await yts(_0xe784cf);
    const _0x404968 = _0xe6e753.videos[0x0];
    const _0x1816d0 = _0x404968.url;
    let _0x1932ca = "🎧 🅠🅤🅔🅔🅝 🅘🅢🅗🅤 🅢🅞🅝🅖≧◉◡◉≦\n\n*💝 TITLE :* " + _0x404968.title + "\n\n*💝 TIME :* " + _0x404968.timestamp + "\n\n*💝 DURATION :* " + _0x404968.description + "\n\n*💝 AGO :* " + _0x404968.ago + "\n\n*💝 VIEWS :* " + _0x404968.views + "\n\n*💝 URL :* " + _0x404968.url + "\n\n📥 | Choose Download Format\n\n1. 🎧 Audio File \n\n2. 📙 Document File\n\n> *ᴄʀᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ";
    let _0x3175e3 = await fg.yta(_0x1816d0);
    let _0x1b0736 = _0x3175e3.dl_url;
    const _0x5293dd = await _0x4ed46a.sendMessage(_0x1d8932, {
      'image': {
        'url': _0x404968.thumbnail
      },
      'caption': _0x1932ca
    }, {
      'quoted': _0x513182
    });
    _0x4ed46a.ev.on("messages.upsert", async _0x251d48 => {
      const _0x2dc106 = _0x251d48.messages[0x0];
      if (!_0x2dc106.message || !_0x2dc106.message.extendedTextMessage) {
        return;
      }
      if (_0x2dc106.message.extendedTextMessage.contextInfo && _0x2dc106.message.extendedTextMessage.contextInfo.stanzaId === _0x5293dd.key.id) {
        const _0x398089 = _0x2dc106.message.extendedTextMessage.text.trim();
        try {
          switch (_0x398089) {
            case '1':
              await _0x4ed46a.sendMessage(_0x1d8932, {
                'audio': {
                  'url': _0x1b0736
                },
                'mimetype': "audio/mpeg"
              }, {
                'quoted': _0x513182
              });
              break;
            case '2':
              await _0x4ed46a.sendMessage(_0x1d8932, {
                'document': {
                  'url': _0x1b0736
                },
                'mimetype': "audio/mpeg",
                'fileName': _0x404968.title + ".mp3",
                'caption': "> *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ"
              }, {
                'quoted': _0x513182
              });
              break;
            default:
              _0x23892c("Invalid option. Please select a valid option 🔴");
          }
        } catch (_0x1738d0) {
          console.log(_0x1738d0);
          _0x23892c("${err}");
        }
      }
    });
  } catch (_0x4f2f27) {
    console.log(_0x4f2f27);
    await _0x4ed46a.sendMessage(_0x1d8932, {
      'react': {
        'text': '❌',
        'key': _0x513182.key
      }
    });
    _0x23892c('' + _0x4f2f27);
  }
});
cmd({
  'pattern': "video",
  'desc': "Download Youtube Videos.",
  'category': "download",
  'filename': __filename
}, async (_0x2e46b2, _0x321b59, _0x2480c3, {
  from: _0x3abd35,
  quoted: _0x1329c6,
  body: _0xfdb577,
  isCmd: _0x49dd04,
  command: _0x5bd7d3,
  args: _0x1d2b0f,
  q: _0x424fd9,
  isGroup: _0x428c9b,
  sender: _0x12c519,
  senderNumber: _0x304912,
  botNumber2: _0x310b25,
  botNumber: _0x4736a4,
  pushname: _0x2698b3,
  isMe: _0x4f6056,
  isOwner: _0x115177,
  groupMetadata: _0x47bf82,
  groupName: _0x479295,
  participants: _0x47df83,
  groupAdmins: _0x2d592d,
  isBotAdmins: _0x17f9db,
  isAdmins: _0x50118c,
  reply: _0x28cf9d
}) => {
  try {
    if (!_0x424fd9) {
      return _0x28cf9d("*❌ Give Me title or Url*");
    }
    const _0x20de37 = await yts(_0x424fd9);
    const _0x1e9340 = _0x20de37.videos[0x0];
    const _0xacc2cb = _0x1e9340.url;
    let _0x26dedb = "🎧 🅠🅤🅔🅔🅝 🅘🅢🅗🅤 🅥🅘🅓🅡🅞≧◉◡◉≦\n\n*💝 TITLE :* " + _0x1e9340.title + "\n\n*💝 TIME :* " + _0x1e9340.timestamp + "\n\n*💝 DURATION :* " + _0x1e9340.description + "\n\n*💝 AGO :* " + _0x1e9340.ago + "\n\n*💝 VIEWS :* " + _0x1e9340.views + "\n\n*💝 URL :* " + _0x1e9340.url + "\n\n📥 | Choose Download Format\n\n1. 🎧 Video File \n\n2. 📙 Document File\n\n> ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ;
    let _0x30043d = await fg.ytv(_0xacc2cb);
    let _0x552a08 = _0x30043d.dl_url;
    const _0x26c67c = await _0x2e46b2.sendMessage(_0x3abd35, {
      'image': {
        'url': _0x1e9340.thumbnail
      },
      'caption': _0x26dedb
    }, {
      'quoted': _0x321b59
    });
    _0x2e46b2.ev.on("messages.upsert", async _0x9d6b12 => {
      const _0x3e4915 = _0x9d6b12.messages[0x0];
      if (!_0x3e4915.message || !_0x3e4915.message.extendedTextMessage) {
        return;
      }
      if (_0x3e4915.message.extendedTextMessage.contextInfo && _0x3e4915.message.extendedTextMessage.contextInfo.stanzaId === _0x26c67c.key.id) {
        const _0xc16388 = _0x3e4915.message.extendedTextMessage.text.trim();
        try {
          switch (_0xc16388) {
            case '1':
              await _0x2e46b2.sendMessage(_0x3abd35, {
                'video': {
                  'url': _0x552a08
                },
                'mimetype': "video/mp4"
              }, {
                'quoted': _0x321b59
              });
              break;
            case '2':
              await _0x2e46b2.sendMessage(_0x3abd35, {
                'document': {
                  'url': _0x552a08
                },
                'mimetype': 'video/mp4',
                'fileName': _0x1e9340.title + ".mp4",
                'caption': "> ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱɪᴅᴜ ɴɪᴍꜱᴀʀᴀ"
              }, {
                'quoted': _0x321b59
              });
              break;
            default:
              _0x28cf9d("Invalid option. Please select a valid option 🔴");
          }
        } catch (_0x2c99e7) {
          console.log(_0x2c99e7);
          _0x28cf9d('' + _0x2c99e7);
        }
      }
    });
  } catch (_0x4ccd88) {
    console.log(_0x4ccd88);
    _0x28cf9d('' + _0x4ccd88);
  }
});
