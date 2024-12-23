const config = require('../config'),
  l = console.log,
  { cmd, commands } = require('../lib/command'),
  { ytmp3, ytmp4 } = require('../lib/ytdl'),
  dl = require('@bochilteam/scraper'),
  ytdl = require('@distube/ytdl-core'),
  yts = require('yt-search'),
  fg = require('api-dylux'),
  api = require('caliph-api'),
  fs = require('fs-extra')
var videotime = 60000,
  request = require('request'),
  cheerio = require('cheerio')
let soundcloud = async (_0x460d39) => {
    return new Promise((_0x5a6bcb, _0xd17d0a) => {
      const _0x5b234d = {
        method: 'POST',
        url: 'https://www.klickaud.co/download.php',
        headers: {},
        formData: {},
      }
      _0x5b234d.headers['content-type'] = 'application/x-www-form-urlencoded'
      _0x5b234d.formData.value = _0x460d39
      _0x5b234d.formData[
        '2311a6d881b099dc3820600739d52e64a1e6dcfe55097b5c7c649088c4e50c37'
      ] = '710c08f2ba36bd969d1cbc68f59797421fcf90ca7cd398f78d67dfd8c3e554e3'
      const _0x26af9e = _0x5b234d
      request(_0x26af9e, async function (_0x5d96c6, _0x231964, _0x76602c) {
        if (_0x5d96c6) {
          throw new Error(_0x5d96c6)
        }
        const _0x1ce8a9 = cheerio.load(_0x76602c)
        _0x5a6bcb({
          judul: _0x1ce8a9(
            '#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)'
          ).text(),
          download_count: _0x1ce8a9(
            '#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(3)'
          ).text(),
          thumb: _0x1ce8a9(
            '#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img'
          ).attr('src'),
          link: _0x1ce8a9('#dlMP3')
            .attr('onclick')
            .split("downloadFile('")[1]
            .split("',")[0],
        })
      })
    })
  },
  axios = require('axios')
async function ssearch(_0x33563f) {
  let _0x43422f = 'https://m.soundcloud.com',
    _0x3eb8f6 = await axios.get(
      _0x43422f + '/search?q=' + encodeURIComponent(_0x33563f),
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
        },
      }
    ),
    _0x1532f2 = cheerio.load(_0x3eb8f6.data),
    _0x581bc1 = []
  return (
    _0x1532f2('div > ul > li > div').each(function (_0x2479ce, _0x4ba5b5) {
      let _0x4dcc72 = _0x1532f2(_0x4ba5b5).find('a').attr('aria-label'),
        _0x314a9d = _0x43422f + _0x1532f2(_0x4ba5b5).find('a').attr('href'),
        _0x47e6d0 = _0x1532f2(_0x4ba5b5)
          .find('a > div > div > div > picture > img')
          .attr('src'),
        _0xfe898a = _0x1532f2(_0x4ba5b5)
          .find('a > div > div > div')
          .eq(1)
          .text(),
        _0x3b4baf = _0x1532f2(_0x4ba5b5)
          .find('a > div > div > div > div > div')
          .eq(0)
          .text(),
        _0x277387 = _0x1532f2(_0x4ba5b5)
          .find('a > div > div > div > div > div')
          .eq(1)
          .text(),
        _0x336fb8 = _0x1532f2(_0x4ba5b5)
          .find('a > div > div > div > div > div')
          .eq(2)
          .text()
      const _0x2939cf = {
        title: _0x4dcc72,
        url: _0x314a9d,
        thumb: _0x47e6d0,
        artist: _0xfe898a,
        views: _0x3b4baf,
        release: _0x336fb8,
        timestamp: _0x277387,
      }
      _0x581bc1.push(_0x2939cf)
    }),
    {
      status: _0x3eb8f6.status,
      creator: 'Caliph',
      result: _0x581bc1,
    }
  )
}
function ytreg(_0x11baca) {
  return /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(
    _0x11baca
  )
}
function extractYouTubeId(_0x32629a) {
  const _0x5b494c = _0x32629a.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return _0x5b494c ? _0x5b494c[1] : null
}
function convertYouTubeLink(_0x2c491c) {
  const _0x2907c5 = extractYouTubeId(_0x2c491c)
  if (_0x2907c5) {
    return 'https://www.youtube.com/watch?v=' + _0x2907c5
  }
  return _0x2c491c
}
const formatViews = (_0x4c30c9) =>
  _0x4c30c9 >= 1000000000
    ? (_0x4c30c9 / 1000000000).toFixed(1) + 'B'
    : _0x4c30c9 >= 1000000
    ? (_0x4c30c9 / 1000000).toFixed(1) + 'M'
    : _0x4c30c9 >= 1000
    ? (_0x4c30c9 / 1000).toFixed(1) + 'K'
    : _0x4c30c9.toString()
async function scrapeData(_0x3d8b6d) {
  const _0x380f2a = 'https://cdn59.savetube.su/info',
    _0x464c10 = {
      authority: 'cdn59.savetube.su',
      Accept: 'application/json, text/plain, */*',
      Origin: 'https://yt.savetube.me',
      Referer: 'https://yt.savetube.me/',
    }
  _0x464c10['Accept-Encoding'] = 'gzip, deflate, br'
  _0x464c10['Accept-Language'] = 'en-GB,en-US;q=0.9,en;q=0.8'
  _0x464c10['Content-Type'] = 'application/json'
  _0x464c10['Sec-Ch-Ua'] = '"Not-A.Brand";v="99", "Chromium";v="124"'
  _0x464c10['Sec-Ch-Ua-Mobile'] = '?1'
  _0x464c10['Sec-Ch-Ua-Platform'] = '"Android"'
  _0x464c10['Sec-Fetch-Dest'] = 'empty'
  _0x464c10['Sec-Fetch-Mode'] = 'cors'
  _0x464c10['Sec-Fetch-Site'] = 'cross-site'
  _0x464c10['User-Agent'] =
    'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36'
  const _0x41a3e1 = _0x464c10,
    _0x54c012 = { url: _0x3d8b6d }
  const _0x2f3011 = _0x54c012
  try {
    const _0x532c06 = { headers: _0x41a3e1 }
    const _0x1cd74b = await axios.post(_0x380f2a, _0x2f3011, _0x532c06),
      _0xdc18e0 = _0x1cd74b.data?.data?.key
    return _0xdc18e0
  } catch (_0x4990e5) {
    return console.log('Error fetching data:', _0x4990e5.message), null
  }
}
async function scrapeSite(_0x422f79, _0xb681f, _0x59f356) {
  const _0x30c750 = 'https://cdn61.savetube.su/download',
    _0x1812af = {
      Accept: '*/*',
      Origin: 'https://yt.savetube.me',
      Referer: 'https://yt.savetube.me/',
    }
  _0x1812af['Accept-Encoding'] = 'gzip, deflate, br'
  _0x1812af['Accept-Language'] = 'en-GB,en-US;q=0.9,en;q=0.8'
  _0x1812af['Content-Type'] = 'application/json'
  _0x1812af['Sec-Ch-Ua'] = '"Not.A.Brand";v="99", "Chromium";v="124"'
  _0x1812af['Sec-Ch-Ua-Mobile'] = '?1'
  _0x1812af['Sec-Ch-Ua-Platform'] = '"Android"'
  _0x1812af['Sec-Fetch-Dest'] = 'empty'
  _0x1812af['Sec-Fetch-Mode'] = 'cors'
  _0x1812af['Sec-Fetch-Site'] = 'cross-site'
  _0x1812af['User-Agent'] =
    'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36'
  const _0x221636 = _0x1812af,
    _0x4edc04 = await scrapeData(_0x422f79)
  if (!_0x4edc04) {
    throw new Error('Unable to fetch key.')
  }
  const _0x104001 = {
    downloadType: _0xb681f,
    quality: _0x59f356,
    key: _0x4edc04,
  }
  const _0x299787 = _0x104001
  try {
    const _0x5173e1 = { headers: _0x221636 }
    const _0x26a3b3 = await axios.post(_0x30c750, _0x299787, _0x5173e1)
    return _0x26a3b3.data?.data?.downloadUrl
  } catch (_0x4082fb) {
    console.log('Error fetching data:', _0x4082fb.message)
    throw _0x4082fb
  }
}
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    getsize,
    jsonformat,
  } = require('../lib/functions'),
  dl2 = require('inrl-dl')
var descv = ''
if (config.LANG === 'SI') {
  descv = 'Youtube වෙතින් videos බාගත කරයි.'
} else {
  descv = 'Download videos from Youtube.'
}
var descs = ''
if (config.LANG === 'SI') {
  descs = 'Youtube වෙතින් songs බාගත කරයි.'
} else {
  descs = 'Download songs from Youtube.'
}
var descyt = ''
if (config.LANG === 'SI') {
  descyt = 'Youtube වෙතින් video සහ songs බාගත කරයි.'
} else {
  descyt = 'Download videos and songs from Youtube.'
}
var descsh = ''
if (config.LANG === 'SI') {
  descsh = 'Youtube search බාගත කරයි.'
} else {
  descsh = 'Search and get details from youtube.'
}
var N_FOUND = ''
if (config.LANG === 'SI') {
  N_FOUND = '*මට කිසිවක් සොයාගත නොහැකි විය :(*'
} else {
  N_FOUND = "*I couldn't find anything :(*"
}
var urlneed = ''
if (config.LANG === 'SI') {
  urlneed = '*කරුණාකර Youtube url එකක් ලබා දෙන්න*'
} else {
  urlneed = '*Please give me youtube url..*'
}
var urlneed1 = ''
if (config.LANG === 'SI') {
  urlneed1 = 'එය soundcloud වෙතින් songs බාගත කරයි.'
} else {
  urlneed1 = 'It downloads songs from soundcloud.'
}
var imgmsg = ''
if (config.LANG === 'SI') {
  imgmsg = '```කරුණාකර වචන කිහිපයක් ලියන්න!```'
} else {
  imgmsg = '```Please write a few words!```'
}
var sizetoo = ''
if (config.LANG === 'SI') {
  sizetoo =
    '_This file size is too big_\n \u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B  *මෙම file එක upload කිරීමට මෙම bot host වෙන platform එකේ bandwith එක ප්‍රමානවත් නැත !*'
} else {
  sizetoo =
    '_This file size is too big_\n\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B *The bandwidth of the platform where this bot is hosted is not enough to upload this file!*'
}
const _0x4dd0b0 = {}
_0x4dd0b0.pattern = 'song2'
_0x4dd0b0.desc = 'Download songs'
_0x4dd0b0.category = 'download'
_0x4dd0b0.filename = __filename
cmd(
  _0x4dd0b0,
  async (
    _0x258f79,
    _0x4e2e29,
    _0x3f0258,
    { from: _0x2aaef5, q: _0x1f4586, reply: _0x28a4ba }
  ) => {
    try {
      if (!_0x1f4586) {
        await _0x258f79.sendPresenceUpdate('recording', _0x2aaef5)
        const _0x99cd5b = {
          url: 'https://github.com/themiyadilann/DilaMD-Media/raw/main/voice/song.mp3',
        }
        const _0x4f7b22 = {
          audio: _0x99cd5b,
          mimetype: 'audio/mpeg',
          ptt: true,
        }
        const _0x270b2e = { quoted: _0x4e2e29 }
        await _0x258f79.sendMessage(_0x2aaef5, _0x4f7b22, _0x270b2e)
        return
      }
      const _0x191c6e = await yts(_0x1f4586),
        _0x220bed = _0x191c6e.videos[0],
        _0x1f53d0 = _0x220bed.url
      let _0x2c71b9 =
        '> VAJIRA MD YTDL\n\n\uD83C\uDFB6 *\uD835\uDDE7\uD835\uDDF6\uD835\uDE01\uD835\uDDF9\uD835\uDDF2*: _' +
        _0x220bed.title +
        '_\n\uD83D\uDC64 *\uD835\uDDD6\uD835\uDDF5\uD835\uDDEE\uD835\uDDFB\uD835\uDDFB\uD835\uDDF2\uD835\uDDF9*: _' +
        _0x220bed.author.name +
        '_\n\uD83D\uDCDD *\uD835\uDDD7\uD835\uDDF2\uD835\uDE00\uD835\uDDF0\uD835\uDDFF\uD835\uDDF6\uD835\uDDFD\uD835\uDE01\uD835\uDDF6\uD835\uDDFC\uD835\uDDFB*: _' +
        _0x220bed.description +
        '_\n\u23F3 *\uD835\uDDE7\uD835\uDDF6\uD835\uDDFA\uD835\uDDF2*: _' +
        _0x220bed.timestamp +
        '_\n\u23F1️ *\uD835\uDDD4\uD835\uDDF4\uD835\uDDFC*: _' +
        _0x220bed.ago +
        '_\n\uD83D\uDC41️‍\uD83D\uDDE8️ *\uD835\uDDE9\uD835\uDDF6\uD835\uDDF2\uD835\uDE04\uD835\uDE00*: _' +
        formatViews(_0x220bed.views) +
        '_\n\uD83D\uDD17 *\uD835\uDDDF\uD835\uDDF6\uD835\uDDFB\uD835\uDDF8*: ' +
        _0x1f53d0
      await _0x258f79.sendPresenceUpdate('typing', _0x2aaef5)
      const _0x3ff9e4 = { url: _0x220bed.thumbnail }
      const _0x1863ed = {
        image: _0x3ff9e4,
        caption: _0x2c71b9,
      }
      const _0x2d2d0e = { quoted: _0x4e2e29 }
      await _0x258f79.sendMessage(_0x2aaef5, _0x1863ed, _0x2d2d0e)
      let _0x28c9c6 = await fg.yta(_0x1f53d0),
        _0x4a9dfb = _0x28c9c6.dl_url
      await _0x258f79.sendPresenceUpdate('recording', _0x2aaef5)
      const _0xe133c6 = { url: _0x4a9dfb }
      const _0x5c8b5f = {
        audio: _0xe133c6,
        mimetype: 'audio/mpeg',
      }
      const _0x170d81 = { quoted: _0x4e2e29 }
      await _0x258f79.sendMessage(_0x2aaef5, _0x5c8b5f, _0x170d81)
      const _0x72f8eb = { url: _0x4a9dfb }
      const _0x1af5ef = {
        document: _0x72f8eb,
        mimetype: 'audio/mpeg',
        fileName: _0x220bed.title + '.mp3',
        caption: '\uD83D\uDCBB *VAJIRA MD YTDL*',
      }
      const _0x5af7bf = { quoted: _0x4e2e29 }
      await _0x258f79.sendMessage(_0x2aaef5, _0x1af5ef, _0x5af7bf)
    } catch (_0x4c533b) {
      console.log(_0x4c533b), _0x28a4ba('Error: ' + _0x4c533b.message)
    }
  }
)
const _0x4afff7 = {}
_0x4afff7.pattern = 'video2'
_0x4afff7.desc = 'Download videos'
_0x4afff7.category = 'download'
_0x4afff7.filename = __filename
cmd(
  _0x4afff7,
  async (
    _0x3349e5,
    _0x42a0da,
    _0x4ba856,
    { from: _0x29588e, q: _0x44741f, reply: _0x4c6e04 }
  ) => {
    try {
      if (!_0x44741f) {
        await _0x3349e5.sendPresenceUpdate('recording', _0x29588e)
        const _0x58f3b0 = {
          url: 'https://github.com/themiyadilann/DilaMD-Media/raw/main/voice/video.mp3',
        }
        const _0x119c1d = {
          audio: _0x58f3b0,
          mimetype: 'audio/mpeg',
          ptt: true,
        }
        const _0x14201e = { quoted: _0x42a0da }
        await _0x3349e5.sendMessage(_0x29588e, _0x119c1d, _0x14201e)
        return
      }
      const _0x20733b = await yts(_0x44741f),
        _0x436a0e = _0x20733b.videos[0],
        _0x550fbd = _0x436a0e.url
      let _0x356e26 =
        'VAJIRA MD YTDL\n\n\uD83C\uDFB6 *\uD835\uDDE7\uD835\uDDF6\uD835\uDE01\uD835\uDDF9\uD835\uDDF2*: _' +
        _0x436a0e.title +
        '_\n\uD83D\uDC64 *\uD835\uDDD6\uD835\uDDF5\uD835\uDDEE\uD835\uDDFB\uD835\uDDFB\uD835\uDDF2\uD835\uDDF9*: _' +
        _0x436a0e.author.name +
        '_\n\uD83D\uDCDD *\uD835\uDDD7\uD835\uDDF2\uD835\uDE00\uD835\uDDF0\uD835\uDDFF\uD835\uDDF6\uD835\uDDFD\uD835\uDE01\uD835\uDDF6\uD835\uDDFC\uD835\uDDFB*: _' +
        _0x436a0e.description +
        '_\n\u23F3 *\uD835\uDDE7\uD835\uDDF6\uD835\uDDFA\uD835\uDDF2*: _' +
        _0x436a0e.timestamp +
        '_\n\u23F1️ *\uD835\uDDD4\uD835\uDDF4\uD835\uDDFC*: _' +
        _0x436a0e.ago +
        '_\n\uD83D\uDC41️‍\uD83D\uDDE8️ *\uD835\uDDE9\uD835\uDDF6\uD835\uDDF2\uD835\uDE04\uD835\uDE00*: _' +
        formatViews(_0x436a0e.views) +
        '_\n\uD83D\uDD17 *\uD835\uDDDF\uD835\uDDF6\uD835\uDDFB\uD835\uDDF8*: ' +
        _0x550fbd
      await _0x3349e5.sendPresenceUpdate('typing', _0x29588e)
      const _0x38fd07 = { url: _0x436a0e.thumbnail }
      const _0x45eab5 = {
        image: _0x38fd07,
        caption: _0x356e26,
      }
      const _0x3744bb = { quoted: _0x42a0da }
      await _0x3349e5.sendMessage(_0x29588e, _0x45eab5, _0x3744bb)
      let _0x4071ad = await fg.ytv(_0x550fbd),
        _0x141d69 = _0x4071ad.dl_url
      const _0x101d0d = { url: _0x141d69 }
      const _0x39090c = {
        video: _0x101d0d,
        mimetype: 'video/mp4',
      }
      const _0x2cc0da = { quoted: _0x42a0da }
      await _0x3349e5.sendMessage(_0x29588e, _0x39090c, _0x2cc0da)
      const _0x458cd3 = { url: _0x141d69 }
      const _0x340d4b = {
        document: _0x458cd3,
        mimetype: 'video/mp4',
        fileName: _0x436a0e.title + '.mp4',
        caption: '\uD83D\uDCBB *VAJIRA MD YTDL*',
      }
      const _0x37a251 = { quoted: _0x42a0da }
      await _0x3349e5.sendMessage(_0x29588e, _0x340d4b, _0x37a251)
    } catch (_0x182524) {
      console.log(_0x182524)
      _0x4c6e04('Error: ' + _0x182524.message)
    }
  }
)
const _0x3fa60b = {}
_0x3fa60b.pattern = 'play'
_0x3fa60b.react = '\uD83D\uDCF1'
_0x3fa60b.desc = urlneed1
_0x3fa60b.category = 'download'
_0x3fa60b.use = '.soundcloud lelena'
_0x3fa60b.filename = __filename
cmd(
  _0x3fa60b,
  async (
    _0x2a989d,
    _0x3f24ce,
    _0xf7f6f0,
    {
      from: _0x44c507,
      prefix: _0x417aeb,
      l: _0x17e3e7,
      quoted: _0x2dbac7,
      body: _0x3fe940,
      isCmd: _0x3db4c7,
      command: _0x2b5feb,
      args: _0x56393d,
      q: _0x368cb2,
      isGroup: _0x183015,
      sender: _0x39a1d3,
      senderNumber: _0x492499,
      botNumber2: _0x3728ba,
      botNumber: _0x573e3d,
      pushname: _0x3bf715,
      isMe: _0x5e394a,
      isOwner: _0x53ede4,
      groupMetadata: _0x47bd43,
      groupName: _0x406cf6,
      participants: _0x31af74,
      groupAdmins: _0x15587c,
      isBotAdmins: _0x1643be,
      isAdmins: _0xe47b9,
      reply: _0x5b8091,
    }
  ) => {
    try {
      const _0x1dbe0a = { text: imgmsg }
      const _0x197e3b = { quoted: _0x3f24ce }
      if (!_0x368cb2) {
        return await _0x2a989d.sendMessage(_0x44c507, _0x1dbe0a, _0x197e3b)
      }
      const _0x1ecfd9 = await ssearch(_0x368cb2),
        _0x389abe = _0x1ecfd9.result,
        _0x51e401 = { text: N_FOUND }
      const _0xb6597 = { quoted: _0x3f24ce }
      if (_0x389abe.length < 1) {
        return await _0x2a989d.sendMessage(_0x44c507, _0x51e401, _0xb6597)
      }
      var _0x2f6702 = []
      for (var _0x165527 = 0; _0x165527 < _0x389abe.length; _0x165527++) {
        if (
          _0x389abe[_0x165527].thumb &&
          !_0x389abe[_0x165527].views.includes('Follow')
        ) {
          _0x2f6702.push({
            title: _0x165527 + 0,
            description:
              _0x389abe[_0x165527].title +
              ' | ' +
              _0x389abe[_0x165527].artist +
              ' | ' +
              _0x389abe[_0x165527].views +
              ' | ' +
              _0x389abe[_0x165527].release +
              ' | ' +
              _0x389abe[_0x165527].timestamp,
            rowId: _0x417aeb + 'selectaud3 ' + _0x389abe[_0x165527].url,
          })
        }
      }
      const _0x3599ca = {
        title: '_[Result from m.soundcloud.com]_',
        rows: _0x2f6702,
      }
      const _0x493e53 = [_0x3599ca],
        _0x500635 = {
          text:
            '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *SOUNDCLOUD DOWNLOADER*\n\n*\uD83D\uDCF1 Entered Name:* ' +
            _0x368cb2,
          footer: config.FOOTER,
          title: 'Result from m.soundcloud.com \uD83D\uDCF2',
          buttonText: '*\uD83D\uDD22 Reply below number*',
          sections: _0x493e53,
        }
      const _0x36fdef = _0x500635,
        _0x4256b7 = { quoted: _0x3f24ce }
      await _0x2a989d.replyList(_0x44c507, _0x36fdef, _0x4256b7)
    } catch (_0xabc490) {
      _0x5b8091('*ERROR !!*'), _0x17e3e7(_0xabc490)
    }
  }
)
const _0x37844c = {}
_0x37844c.alias = ['selectaud3']
_0x37844c.filename = __filename
cmd(
  _0x37844c,
  async (
    _0x3ab087,
    _0x1ec635,
    _0x37ca9d,
    {
      from: _0xf80cfe,
      l: _0x733ada,
      quoted: _0x1276b0,
      prefix: _0x2e2a94,
      body: _0x404292,
      isCmd: _0x54a195,
      command: _0xc9ec55,
      args: _0x4f13be,
      q: _0x220594,
      isGroup: _0x312764,
      sender: _0x45c827,
      senderNumber: _0x9f6f0f,
      botNumber2: _0x421f6c,
      botNumber: _0x5537f7,
      pushname: _0x5e5cc1,
      isMe: _0x44a733,
      isOwner: _0x336aa2,
      groupMetadata: _0x2a37f5,
      groupName: _0xc51768,
      participants: _0x3fc6dd,
      groupAdmins: _0x495b0b,
      isBotAdmins: _0xa38813,
      isAdmins: _0x2a5c48,
      reply: _0x59a123,
    }
  ) => {
    try {
      let _0x2bd272 =
        '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *SELECT VIDEO QUALITY*'
      const _0x5930a4 = [
          {
            title: '',
            rows: [
              {
                title: '1',
                rowId: _0x2e2a94 + 'soundaud ' + _0x220594,
                description: 'Normal type song \uD83C\uDFB6',
              },
              {
                title: '2',
                rowId: _0x2e2a94 + 'sounddoc ' + _0x220594,
                description: 'Document type song \uD83D\uDCC1',
              },
            ],
          },
        ],
        _0x1af01e = {
          text: _0x2bd272,
          footer: config.FOOTER,
          title: '',
          buttonText: '*\uD83D\uDD22 Reply below number*',
          sections: _0x5930a4,
        }
      const _0x5b0d1c = _0x1af01e,
        _0x223b58 = {}
      return (
        (_0x223b58.quoted = _0x1ec635),
        await _0x3ab087.replyList(_0xf80cfe, _0x5b0d1c, _0x223b58)
      )
    } catch (_0x223a16) {
      _0x59a123('*ERROR !!*'), _0x733ada(_0x223a16)
    }
  }
)
const _0x8a2a08 = {}
_0x8a2a08.pattern = 'sounddoc'
_0x8a2a08.dontAddCommandList = true
_0x8a2a08.filename = __filename
cmd(
  _0x8a2a08,
  async (
    _0x62a0ef,
    _0x4a0a16,
    _0x3eaad7,
    {
      from: _0x24c4ee,
      l: _0x2e53ad,
      quoted: _0x2b77ec,
      body: _0x87909b,
      isCmd: _0x371ea8,
      command: _0x3b1235,
      args: _0x3c8b7a,
      q: _0x177e83,
      isGroup: _0x52f829,
      sender: _0x2fff1b,
      senderNumber: _0x14066e,
      botNumber2: _0x4a4053,
      botNumber: _0x4a6084,
      pushname: _0x42bf8b,
      isMe: _0xa13f74,
      isOwner: _0x179232,
      groupMetadata: _0x48dc94,
      groupName: _0x106c71,
      participants: _0x6dd62,
      groupAdmins: _0x16dfc3,
      isBotAdmins: _0x2ba772,
      isAdmins: _0xaa79f9,
      reply: _0x3384e8,
    }
  ) => {
    try {
      const _0x32248d = {
        text: '\uD83D\uDCE5',
        key: _0x4a0a16.key,
      }
      const _0x21568b = { react: _0x32248d }
      await _0x62a0ef.sendMessage(_0x24c4ee, _0x21568b)
      const _0x10f8fa = { text: '*Need link...*' }
      const _0x5c693e = { quoted: _0x4a0a16 }
      if (!_0x177e83) {
        return await _0x62a0ef.sendMessage(_0x24c4ee, _0x10f8fa, _0x5c693e)
      }
      const _0x108d5c = await soundcloud(_0x177e83)
      let _0x4f03d4 =
        '*\uD83D\uDCDA Name :* ' +
        _0x108d5c.judul +
        '\n*\uD83D\uDCFA Down Count :* ' +
        _0x108d5c.download_count
      const _0x3af61d = { url: _0x108d5c.thumb }
      const _0x2d83d1 = {
        image: _0x3af61d,
        caption: _0x4f03d4,
      }
      const _0x198853 = { quoted: _0x4a0a16 }
      await _0x62a0ef.sendMessage(_0x24c4ee, _0x2d83d1, _0x198853)
      const _0xd0e872 = { url: _0x108d5c.link }
      const _0xbecf9a = { quoted: _0x4a0a16 }
      let _0x51cd2f = await _0x62a0ef.sendMessage(
        _0x24c4ee,
        {
          document: _0xd0e872,
          mimetype: 'audio/mpeg',
          fileName: _0x108d5c.judul + '.' + 'mp3',
        },
        _0xbecf9a
      )
      const _0x562495 = {
        text: '\uD83D\uDCC1',
        key: _0x51cd2f.key,
      }
      const _0x3b99aa = { react: _0x562495 }
      await _0x62a0ef.sendMessage(_0x24c4ee, _0x3b99aa)
      const _0x2edbb1 = {
        text: '\u2714',
        key: _0x4a0a16.key,
      }
      const _0x4b21c4 = { react: _0x2edbb1 }
      await _0x62a0ef.sendMessage(_0x24c4ee, _0x4b21c4)
    } catch (_0x5bb9a2) {
      _0x3384e8('*ERROR !!*')
      _0x2e53ad(_0x5bb9a2)
    }
  }
)
const _0x11229e = {}
_0x11229e.pattern = 'soundaud'
_0x11229e.dontAddCommandList = true
_0x11229e.filename = __filename
cmd(
  _0x11229e,
  async (
    _0x2b115f,
    _0x2caf1e,
    _0x5741ea,
    {
      from: _0x428a0f,
      l: _0xb38f77,
      quoted: _0x348b29,
      body: _0xd500e2,
      isCmd: _0x580474,
      command: _0x38fb04,
      args: _0x283655,
      q: _0x4713c1,
      isGroup: _0x2fb53f,
      sender: _0x5b3f6b,
      senderNumber: _0x1f2301,
      botNumber2: _0x27c01c,
      botNumber: _0x22aece,
      pushname: _0x6cf279,
      isMe: _0x502819,
      isOwner: _0x2c9cbf,
      groupMetadata: _0x2b6536,
      groupName: _0x4c47ee,
      participants: _0x2a4274,
      groupAdmins: _0x482055,
      isBotAdmins: _0x251fb1,
      isAdmins: _0x21c8f7,
      reply: _0x5b2dbc,
    }
  ) => {
    try {
      const _0xc8cd83 = {
        text: '\uD83D\uDCE5',
        key: _0x2caf1e.key,
      }
      const _0xbca805 = { react: _0xc8cd83 }
      await _0x2b115f.sendMessage(_0x428a0f, _0xbca805)
      const _0x125496 = { text: '*Need link...*' }
      const _0x1b4840 = { quoted: _0x2caf1e }
      if (!_0x4713c1) {
        return await _0x2b115f.sendMessage(_0x428a0f, _0x125496, _0x1b4840)
      }
      const _0x2a4ed4 = await soundcloud(_0x4713c1)
      let _0x264c45 =
        '*\uD83D\uDCDA Name :* ' +
        _0x2a4ed4.judul +
        '\n*\uD83D\uDCFA Down Count :* ' +
        _0x2a4ed4.download_count
      const _0x571eb4 = { url: _0x2a4ed4.thumb }
      const _0x3d8f66 = {
        image: _0x571eb4,
        caption: _0x264c45,
      }
      const _0x220481 = { quoted: _0x2caf1e }
      await _0x2b115f.sendMessage(_0x428a0f, _0x3d8f66, _0x220481)
      const _0x490031 = { url: _0x2a4ed4.link }
      const _0x3e7461 = { quoted: _0x2caf1e }
      let _0x398102 = await _0x2b115f.sendMessage(
        _0x428a0f,
        {
          audio: _0x490031,
          mimetype: 'audio/mpeg',
          fileName: _0x2a4ed4.judul + '.' + 'mp3',
        },
        _0x3e7461
      )
      const _0x465197 = {
        text: '\uD83D\uDCC1',
        key: _0x398102.key,
      }
      const _0x3bd909 = { react: _0x465197 }
      await _0x2b115f.sendMessage(_0x428a0f, _0x3bd909)
      const _0x2ffb40 = {
        text: '\u2714',
        key: _0x2caf1e.key,
      }
      const _0x58a09a = { react: _0x2ffb40 }
      await _0x2b115f.sendMessage(_0x428a0f, _0x58a09a)
    } catch (_0x4ee0bc) {
      _0x5b2dbc('*ERROR !!*'), _0xb38f77(_0x4ee0bc)
    }
  }
)
const _0x4c581c = {}
_0x4c581c.pattern = 'yts'
_0x4c581c.alias = ['ytsearch']
_0x4c581c.use = '.yts lelena'
_0x4c581c.react = '\uD83D\uDD0E'
_0x4c581c.desc = descsh
_0x4c581c.category = 'search'
_0x4c581c.filename = __filename
cmd(
  _0x4c581c,
  async (
    _0x25d39e,
    _0x203c66,
    _0x1b5542,
    {
      from: _0x3c3d93,
      l: _0x965691,
      quoted: _0x2c07dc,
      body: _0x36bf91,
      isCmd: _0x3fe94f,
      command: _0x56b140,
      args: _0xf76905,
      q: _0x1a940b,
      isGroup: _0x179441,
      sender: _0x4e27c5,
      senderNumber: _0xde64ec,
      botNumber2: _0x2ebcc1,
      botNumber: _0x3f50b6,
      pushname: _0x265766,
      isMe: _0x2fcc25,
      isOwner: _0x3ea6e1,
      groupMetadata: _0x34e6b2,
      groupName: _0x56c2af,
      participants: _0x10adf5,
      groupAdmins: _0x4d2d5e,
      isBotAdmins: _0x2fb0ae,
      isAdmins: _0x3f250a,
      reply: _0x2bc29d,
    }
  ) => {
    try {
      if (!_0x1a940b) {
        return await _0x2bc29d(imgmsg)
      }
      if (isUrl(_0x1a940b) && !ytreg(_0x1a940b)) {
        return await _0x2bc29d(imgmsg)
      }
      try {
        let _0x31d1ef = require('yt-search')
        var _0x1c99b3 = await _0x31d1ef(_0x1a940b)
      } catch (_0x2c4d80) {
        _0x965691(_0x2c4d80)
        const _0x471f85 = { text: '*Error !!*' }
        const _0x50bff2 = {}
        return (
          (_0x50bff2.quoted = _0x203c66),
          await _0x25d39e.sendMessage(_0x3c3d93, _0x471f85, _0x50bff2)
        )
      }
      var _0x243bb9 = ''
      _0x1c99b3.all.map((_0x4f0bc2) => {
        _0x243bb9 +=
          ' *\uD83D\uDDB2️' +
          _0x4f0bc2.title +
          '*\n\uD83D\uDD17 ' +
          _0x4f0bc2.url +
          '\n\n'
      })
      const _0x3afd48 = { text: _0x243bb9 }
      const _0x3d5678 = { quoted: _0x203c66 }
      await _0x25d39e.sendMessage(_0x3c3d93, _0x3afd48, _0x3d5678)
    } catch (_0x139a0f) {
      _0x965691(_0x139a0f)
      _0x2bc29d('*Error !!*')
    }
  }
)
const _0x24e5df = {}
_0x24e5df.pattern = 'yt'
_0x24e5df.use = '.yt [song name or link]'
_0x24e5df.react = '\uD83C\uDFAC'
_0x24e5df.desc = descyt
_0x24e5df.category = 'download'
_0x24e5df.filename = __filename
cmd(
  _0x24e5df,
  async (
    _0x2f5980,
    _0x443228,
    _0x58fd5f,
    {
      from: _0xa405b,
      prefix: _0x20632d,
      l: _0x3f90c3,
      quoted: _0x3e55ec,
      body: _0x4a438d,
      isCmd: _0x4f7219,
      command: _0x1bdbf5,
      args: _0x258ec4,
      q: _0x1b088e,
      isGroup: _0x2694da,
      sender: _0x3d9692,
      senderNumber: _0xf8f91b,
      botNumber2: _0x583093,
      botNumber: _0x435d5b,
      pushname: _0x46b2ba,
      isMe: _0xfa5a2d,
      isOwner: _0x39da35,
      groupMetadata: _0x1c8d6b,
      groupName: _0x3bb890,
      participants: _0xdd2d4d,
      groupAdmins: _0x300c47,
      isBotAdmins: _0x3bfd4d,
      isAdmins: _0x17ca9d,
      reply: _0x2ede7e,
    }
  ) => {
    try {
      if (!_0x1b088e) {
        return await _0x2ede7e(imgmsg)
      }
      if (isUrl(_0x1b088e) && !ytreg(_0x1b088e)) {
        return await _0x2ede7e(imgmsg)
      }
      _0x1b088e = convertYouTubeLink(_0x1b088e)
      const _0x302fff = await yts(_0x1b088e),
        _0x17ff05 = _0x302fff.videos[0],
        _0x17df5b = _0x17ff05.url
      if (isUrl(_0x1b088e) && _0x1b088e.includes('/shorts')) {
        let _0x4568b4 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *SELECT SONG TYPE*'
        const _0x16e29a = [
            {
              title: '',
              rows: [
                {
                  title: '1',
                  rowId:
                    _0x20632d + ('ytmp3 ' + _0x1b088e + '|' + _0x17ff05.title),
                  description: 'Normal type song \uD83C\uDFB6',
                },
                {
                  title: '2',
                  rowId:
                    _0x20632d + ('ytdocs ' + _0x1b088e + '|' + _0x17ff05.title),
                  description: 'Document type song \uD83D\uDCC2',
                },
              ],
            },
          ],
          _0x2aa77b = {
            text: _0x4568b4,
            footer:
              '*ᴠᴀᴊɪʀᴀ ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ:ᴠ-ɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*',
            buttonText:
              '```\uD83D\uDD22 Reply below number you need song type,```',
            sections: _0x16e29a,
          }
        const _0x3e693f = _0x2aa77b,
          _0x256137 = {}
        return (
          (_0x256137.quoted = _0x443228),
          await _0x2f5980.replyList(_0xa405b, _0x3e693f, _0x256137)
        )
      }
      if (ytreg(_0x1b088e)) {
        let _0x3157d4 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ \uD83D\uDC68‍\uD83D\uDCBB]\n\n*SELECT SONG TYPE*'
        const _0x1e782f = [
            {
              title: '',
              rows: [
                {
                  title: '1',
                  rowId:
                    _0x20632d + ('ytmp3 ' + _0x1b088e + '|' + _0x17ff05.title),
                  description: 'Normal type song \uD83C\uDFB6',
                },
                {
                  title: '2',
                  rowId:
                    _0x20632d + ('ytdocs ' + _0x1b088e + '|' + _0x17ff05.title),
                  description: 'Document type song \uD83D\uDCC2',
                },
              ],
            },
          ],
          _0x584376 = {
            text: _0x3157d4,
            footer:
              '*ᴠᴀᴊɪʀᴀ-ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ:ᴠ-ɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*',
            buttonText:
              '```\uD83D\uDD22 Reply below number you need song type,```',
            sections: _0x1e782f,
          }
        const _0x1e9b53 = _0x584376,
          _0x452337 = {}
        return (
          (_0x452337.quoted = _0x443228),
          await _0x2f5980.replyList(_0xa405b, _0x1e9b53, _0x452337)
        )
      }
      const _0x43868f =
          '\uD83D\uDCFD️ *ᴠᴀᴊɪʀᴀ-ᴍᴅ ᴠɪᴅᴇᴏ-ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*\uD83D\uDCFD️\n\n\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n*ℹ️ Title:* ' +
          _0x17ff05.title +
          '\n*\uD83D\uDC41️‍\uD83D\uDDE8️ Views:* ' +
          _0x17ff05.views +
          '\n*\uD83D\uDD58 Duration:* ' +
          _0x17ff05.timestamp +
          '\n*\uD83D\uDCCC Ago :* ' +
          _0x17ff05.ago +
          '\n*\uD83D\uDD17 Url:* ' +
          _0x17ff05.url +
          ' \n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500',
        _0x33e36f = [
          {
            title: '',
            rows: [
              {
                title: '1',
                rowId:
                  _0x20632d +
                  ('ytmp3 ' + _0x17ff05.url + '|' + _0x17ff05.title),
                description: 'Normal type song \uD83C\uDFB6',
              },
              {
                title: '2',
                rowId:
                  _0x20632d +
                  ('ytdocs ' + _0x17ff05.url + '|' + _0x17ff05.title),
                description: 'Document type song \uD83D\uDCC2',
              },
            ],
          },
        ],
        _0x17098e = { url: _0x17ff05.thumbnail }
      const _0x50742e = {
        image: _0x17098e,
        caption: _0x43868f,
        footer: config.FOOTER,
        title: '',
        buttonText: '*\uD83D\uDD22 Reply below number*',
        sections: _0x33e36f,
      }
      const _0x25769e = _0x50742e,
        _0x2a176c = {}
      return (
        (_0x2a176c.quoted = _0x443228),
        await _0x2f5980.replyList(_0xa405b, _0x25769e, _0x2a176c)
      )
    } catch (_0x5597fa) {
      _0x2ede7e('*ERROR !!*')
      _0x3f90c3(_0x5597fa)
    }
  }
)
const _0x1c157e = {}
_0x1c157e.pattern = 'video'
_0x1c157e.alias = ['ytvideo']
_0x1c157e.use = '.video lelena'
_0x1c157e.react = '\uD83D\uDCFD️'
_0x1c157e.desc = descv
_0x1c157e.category = 'download'
_0x1c157e.filename = __filename
cmd(
  _0x1c157e,
  async (
    _0x5dd06a,
    _0x8eacff,
    _0x5d7dd3,
    {
      from: _0x347d71,
      prefix: _0x45275c,
      l: _0x3cc0f0,
      quoted: _0x4d9665,
      body: _0x1c7163,
      isCmd: _0x26c54c,
      command: _0x1d4da9,
      args: _0x128830,
      q: _0x23d6b9,
      isGroup: _0xf98385,
      sender: _0xefdcbc,
      senderNumber: _0x54ebef,
      botNumber2: _0x111857,
      botNumber: _0x124cb4,
      pushname: _0x38712c,
      isMe: _0x248ec3,
      isOwner: _0x5dd51e,
      groupMetadata: _0x549da7,
      groupName: _0x88ac53,
      participants: _0x8cd92d,
      groupAdmins: _0x27e810,
      isBotAdmins: _0x900077,
      isAdmins: _0x90d956,
      reply: _0x2cff7e,
    }
  ) => {
    try {
      if (!_0x23d6b9) {
        return await _0x2cff7e(imgmsg)
      }
      if (isUrl(_0x23d6b9) && !ytreg(_0x23d6b9)) {
        return await _0x2cff7e(imgmsg)
      }
      if (isUrl(_0x23d6b9) && _0x23d6b9.includes('/shorts')) {
        let _0x2ef124 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *SELECT VIDEO TYPE*'
        const _0x45f609 = [
            {
              title: '*[1] NORMAL QUALITY \uD83C\uDFB6*',
              rows: [
                {
                  title: '    1.1',
                  rowId:
                    _0x45275c + ('240p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```240p```',
                },
                {
                  title: '    1.2',
                  rowId:
                    _0x45275c + ('360p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```320p```',
                },
                {
                  title: '    1.3',
                  rowId:
                    _0x45275c + ('480p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```480p```',
                },
                {
                  title: '    1.4',
                  rowId:
                    _0x45275c + ('720p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```720p```',
                },
                {
                  title: '    1.5',
                  rowId:
                    _0x45275c + ('1080p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```1080p```',
                },
              ],
            },
            {
              title: '*[2] DOCUMENT QUALITY \uD83D\uDCC2*',
              rows: [
                {
                  title: '    2.1',
                  rowId:
                    _0x45275c + ('24p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```240p```',
                },
                {
                  title: '    2.2',
                  rowId:
                    _0x45275c + ('36p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```320p```',
                },
                {
                  title: '    2.3',
                  rowId:
                    _0x45275c + ('48p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```480p```',
                },
                {
                  title: '    2.4',
                  rowId:
                    _0x45275c + ('72p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```720p```',
                },
                {
                  title: '    2.5',
                  rowId:
                    _0x45275c + ('108p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```1080p```',
                },
              ],
            },
          ],
          _0x4211f1 = { url: config.LOGO }
        const _0x44623a = {
          caption: _0x2ef124,
          image: _0x4211f1,
          footer: config.FOOTER,
          title: '',
          buttonText: '*\uD83D\uDD22 Reply below number*',
          sections: _0x45f609,
        }
        const _0x2b21f3 = _0x44623a,
          _0x4bbc87 = {}
        return (
          (_0x4bbc87.quoted = _0x8eacff),
          await _0x5dd06a.replyList(_0x347d71, _0x2b21f3, _0x4bbc87)
        )
      }
      if (ytreg(_0x23d6b9)) {
        let _0x2ac841 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ \uD83D\uDC68‍\uD83D\uDCBB]\n*SELECT VIDEO TYPE*'
        const _0x187a93 = [
            {
              title: '*[1] NORMAL QUALITY \uD83C\uDFB6*',
              rows: [
                {
                  title: '    1.1',
                  rowId:
                    _0x45275c + ('240p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```240p```',
                },
                {
                  title: '    1.2',
                  rowId:
                    _0x45275c + ('360p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```320p```',
                },
                {
                  title: '    1.3',
                  rowId:
                    _0x45275c + ('480p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```480p```',
                },
                {
                  title: '    1.4',
                  rowId:
                    _0x45275c + ('720p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```720p```',
                },
                {
                  title: '    1.5',
                  rowId:
                    _0x45275c + ('1080p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```1080p```',
                },
              ],
            },
            {
              title: '*[2] DOCUMENT QUALITY \uD83D\uDCC2*',
              rows: [
                {
                  title: '    2.1',
                  rowId:
                    _0x45275c + ('24p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```240p```',
                },
                {
                  title: '    2.2',
                  rowId:
                    _0x45275c + ('36p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```320p```',
                },
                {
                  title: '    2.3',
                  rowId:
                    _0x45275c + ('48p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```480p```',
                },
                {
                  title: '    2.4',
                  rowId:
                    _0x45275c + ('72p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```720p```',
                },
                {
                  title: '    2.5',
                  rowId:
                    _0x45275c + ('108p ' + _0x23d6b9 + '|' + _0x2cfcfc.title),
                  description: '```1080p```',
                },
              ],
            },
          ],
          _0x54ab65 = {
            text: _0x2ac841,
            footer: config.FOOTER,
            buttonText: '\uD83D\uDD22 Reply below number,',
            sections: _0x187a93,
          }
        const _0x49664c = _0x54ab65,
          _0x3e5e57 = {}
        return (
          (_0x3e5e57.quoted = _0x8eacff),
          await _0x5dd06a.replyList(_0x347d71, _0x49664c, _0x3e5e57)
        )
      }
      let _0x1a0eca = require('yt-search'),
        _0x2da23f = await _0x1a0eca(_0x23d6b9),
        _0x2cfcfc = _0x2da23f.videos[0]
      const _0x26ea17 =
          '\uD83D\uDCFD️ *ᴠᴀᴊɪʀᴀ-ᴍᴅ ᴠɪᴅᴇᴏ-ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*\uD83D\uDCFD️\n\n\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n*ℹ️ Title:* ' +
          _0x2cfcfc.title +
          '\n*\uD83D\uDC41️‍\uD83D\uDDE8️ Views:* ' +
          _0x2cfcfc.views +
          '\n*\uD83D\uDD58 Duration:* ' +
          _0x2cfcfc.timestamp +
          '\n*\uD83D\uDD17 Url:* ' +
          _0x2cfcfc.url +
          ' \n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500',
        _0x4416f4 = [
          {
            title: '*[1] NORMAL QUALITY \uD83C\uDFB6*',
            rows: [
              {
                title: '    1.1',
                rowId:
                  _0x45275c + ('240p ' + _0x2cfcfc.url + '|' + _0x2cfcfc.title),
                description: '```240p```',
              },
              {
                title: '    1.2',
                rowId:
                  _0x45275c + ('360p ' + _0x2cfcfc.url + '|' + _0x2cfcfc.title),
                description: '```320p```',
              },
              {
                title: '    1.3',
                rowId:
                  _0x45275c + ('480p ' + _0x2cfcfc.url + '|' + _0x2cfcfc.title),
                description: '```480p```',
              },
              {
                title: '    1.4',
                rowId:
                  _0x45275c + ('720p ' + _0x2cfcfc.url + '|' + _0x2cfcfc.title),
                description: '```720p```',
              },
              {
                title: '    1.5',
                rowId:
                  _0x45275c +
                  ('1080p ' + _0x2cfcfc.url + '|' + _0x2cfcfc.title),
                description: '```1080p```',
              },
            ],
          },
          {
            title: '*[2] DOCUMENT QUALITY \uD83D\uDCC2*',
            rows: [
              {
                title: '    2.1',
                rowId:
                  _0x45275c + ('24p ' + _0x2cfcfc.url + '|' + _0x2cfcfc.title),
                description: '```240p```',
              },
              {
                title: '    2.2',
                rowId:
                  _0x45275c + ('36p ' + _0x2cfcfc.url + '|' + _0x2cfcfc.title),
                description: '```320p```',
              },
              {
                title: '    2.3',
                rowId:
                  _0x45275c + ('48p ' + _0x2cfcfc.url + '|' + _0x2cfcfc.title),
                description: '```480p```',
              },
              {
                title: '    2.4',
                rowId:
                  _0x45275c + ('72p ' + _0x2cfcfc.url + '|' + _0x2cfcfc.title),
                description: '```720p```',
              },
              {
                title: '    2.5',
                rowId:
                  _0x45275c + ('108p ' + _0x2cfcfc.url + '|' + _0x2cfcfc.title),
                description: '```1080p```',
              },
            ],
          },
        ],
        _0x52b927 = { url: _0x2cfcfc.thumbnail }
      const _0x20fa2d = {
        image: _0x52b927,
        caption: _0x26ea17,
        footer: config.FOOTER,
        title: '',
        buttonText: '*\uD83D\uDD22 Reply below number*',
        sections: _0x4416f4,
      }
      const _0x36720d = _0x20fa2d,
        _0x418058 = {}
      return (
        (_0x418058.quoted = _0x8eacff),
        await _0x5dd06a.replyList(_0x347d71, _0x36720d, _0x418058)
      )
    } catch (_0x16ecbb) {
      _0x2cff7e('*ERROR !!*')
      _0x3cc0f0(_0x16ecbb)
    }
  }
)
const _0x16157b = {}
_0x16157b.pattern = 'song'
_0x16157b.alias = ['ytsong']
_0x16157b.use = '.song lelena'
_0x16157b.react = '\uD83C\uDFA7'
_0x16157b.desc = descs
_0x16157b.category = 'download'
_0x16157b.filename = __filename
cmd(
  _0x16157b,
  async (
    _0x33f782,
    _0x25b13,
    _0x48d0e8,
    {
      from: _0x2434ee,
      prefix: _0x41be83,
      l: _0x1ad718,
      quoted: _0x5c1fda,
      body: _0x441ed2,
      isCmd: _0x5163eb,
      command: _0x5dcd5f,
      args: _0x2c9d2e,
      q: _0x5a40d0,
      isGroup: _0x12f2ca,
      sender: _0x42bbb4,
      senderNumber: _0x595378,
      botNumber2: _0x520ff6,
      botNumber: _0x3bad07,
      pushname: _0x26b013,
      isMe: _0xb3a083,
      isOwner: _0x3b2490,
      groupMetadata: _0x287a61,
      groupName: _0x3f957e,
      participants: _0x4a714d,
      groupAdmins: _0x5cb9d7,
      isBotAdmins: _0x4cbb6d,
      isAdmins: _0x222bce,
      reply: _0x20c641,
    }
  ) => {
    try {
      if (!_0x5a40d0) {
        return await _0x20c641(imgmsg)
      }
      if (isUrl(_0x5a40d0) && !ytreg(_0x5a40d0)) {
        return await _0x20c641(imgmsg)
      }
      _0x5a40d0 = convertYouTubeLink(_0x5a40d0)
      const _0x3d1f0a = await yts(_0x5a40d0),
        _0x29faf3 = _0x3d1f0a.videos[0],
        _0x426aae = _0x29faf3.url
      if (isUrl(_0x5a40d0) && _0x5a40d0.includes('/shorts')) {
        let _0x2fdaae =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *SELECT SONG TYPE*'
        const _0x5ecddb = [
            {
              title: '',
              rows: [
                {
                  title: '1',
                  rowId:
                    _0x41be83 + ('ytmp3 ' + _0x5a40d0 + '|' + _0x29faf3.title),
                  description: 'Normal type song \uD83C\uDFB6',
                },
                {
                  title: '2',
                  rowId:
                    _0x41be83 + ('ytdocs ' + _0x5a40d0 + '|' + _0x29faf3.title),
                  description: 'Document type song \uD83D\uDCC2',
                },
              ],
            },
          ],
          _0x2f2a7f = {
            text: _0x2fdaae,
            footer:
              '*ᴠᴀᴊɪʀᴀ ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ:ᴠ-ɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*',
            buttonText:
              '```\uD83D\uDD22 Reply below number you need song type,```',
            sections: _0x5ecddb,
          }
        const _0x58c29d = _0x2f2a7f,
          _0x25ce95 = {}
        return (
          (_0x25ce95.quoted = _0x25b13),
          await _0x33f782.replyList(_0x2434ee, _0x58c29d, _0x25ce95)
        )
      }
      if (ytreg(_0x5a40d0)) {
        let _0x362ec0 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ \uD83D\uDC68‍\uD83D\uDCBB]\n\n*SELECT SONG TYPE*'
        const _0x1e9496 = [
            {
              title: '',
              rows: [
                {
                  title: '1',
                  rowId:
                    _0x41be83 + ('ytmp3 ' + _0x5a40d0 + '|' + _0x29faf3.title),
                  description: 'Normal type song \uD83C\uDFB6',
                },
                {
                  title: '2',
                  rowId:
                    _0x41be83 + ('ytdocs ' + _0x5a40d0 + '|' + _0x29faf3.title),
                  description: 'Document type song \uD83D\uDCC2',
                },
              ],
            },
          ],
          _0x6caccf = {
            text: _0x362ec0,
            footer:
              '*ᴠᴀᴊɪʀᴀ-ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ:ᴠ-ɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*',
            buttonText:
              '```\uD83D\uDD22 Reply below number you need song type,```',
            sections: _0x1e9496,
          }
        const _0x493a4e = _0x6caccf,
          _0x867318 = {}
        return (
          (_0x867318.quoted = _0x25b13),
          await _0x33f782.replyList(_0x2434ee, _0x493a4e, _0x867318)
        )
      }
      const _0x454ada =
          '\uD83D\uDCFD️ *ᴠᴀᴊɪʀᴀ-ᴍᴅ ᴠɪᴅᴇᴏ-ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*\uD83D\uDCFD️\n\n\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n*ℹ️ Title:* ' +
          _0x29faf3.title +
          '\n*\uD83D\uDC41️‍\uD83D\uDDE8️ Views:* ' +
          _0x29faf3.views +
          '\n*\uD83D\uDD58 Duration:* ' +
          _0x29faf3.timestamp +
          '\n*\uD83D\uDCCC Ago :* ' +
          _0x29faf3.ago +
          '\n*\uD83D\uDD17 Url:* ' +
          _0x29faf3.url +
          ' \n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500',
        _0x24aa2b = [
          {
            title: '',
            rows: [
              {
                title: '1',
                rowId:
                  _0x41be83 +
                  ('ytmp3 ' + _0x29faf3.url + '|' + _0x29faf3.title),
                description: 'Normal type song \uD83C\uDFB6',
              },
              {
                title: '2',
                rowId:
                  _0x41be83 +
                  ('ytdocs ' + _0x29faf3.url + '|' + _0x29faf3.title),
                description: 'Document type song \uD83D\uDCC2',
              },
            ],
          },
        ],
        _0xb4884a = { url: _0x29faf3.thumbnail }
      const _0x53e6ea = {
        image: _0xb4884a,
        caption: _0x454ada,
        footer: config.FOOTER,
        title: '',
        buttonText: '*\uD83D\uDD22 Reply below number*',
        sections: _0x24aa2b,
      }
      const _0x520aa3 = _0x53e6ea,
        _0x2a6db8 = {}
      return (
        (_0x2a6db8.quoted = _0x25b13),
        await _0x33f782.replyList(_0x2434ee, _0x520aa3, _0x2a6db8)
      )
    } catch (_0x46e787) {
      _0x20c641('*ERROR !!*')
      _0x1ad718(_0x46e787)
    }
  }
)
const _0x2770ed = {}
_0x2770ed.alias = ['selectaud']
_0x2770ed.filename = __filename
cmd(
  _0x2770ed,
  async (
    _0x17d36c,
    _0x5e96bd,
    _0x545cb5,
    {
      from: _0x388f6d,
      l: _0xd7d986,
      quoted: _0x45263d,
      prefix: _0x11569e,
      body: _0x1304ad,
      isCmd: _0x2f6c11,
      command: _0x273e1e,
      args: _0x24c163,
      q: _0x463d96,
      isGroup: _0x292087,
      sender: _0x2da55b,
      senderNumber: _0x501613,
      botNumber2: _0x33b45e,
      botNumber: _0x42cf30,
      pushname: _0xaf070a,
      isMe: _0x31665c,
      isOwner: _0x489762,
      groupMetadata: _0x3ac778,
      groupName: _0x43a5af,
      participants: _0x238a07,
      groupAdmins: _0x357d7c,
      isBotAdmins: _0x4ac87f,
      isAdmins: _0x5c45cb,
      reply: _0x5afc19,
    }
  ) => {
    try {
      let _0x2a42b9 =
        '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *SELECT VIDEO QUALITY*'
      const _0x502dad = [
          {
            title: '',
            rows: [
              {
                title: '1',
                rowId: _0x11569e + 'ytmp3 ' + _0x463d96,
                description: 'Normal type song \uD83C\uDFB6',
              },
              {
                title: '2',
                rowId: _0x11569e + 'ytdocs ' + _0x463d96,
                description: 'Document type video \uD83D\uDCC1',
              },
            ],
          },
        ],
        _0x2bfa0d = {
          text: _0x2a42b9,
          footer: config.FOOTER,
          title: '',
          buttonText: '*\uD83D\uDD22 Reply below number*',
          sections: _0x502dad,
        }
      const _0x39885c = _0x2bfa0d,
        _0x3286e1 = {}
      return (
        (_0x3286e1.quoted = _0x5e96bd),
        await _0x17d36c.replyList(_0x388f6d, _0x39885c, _0x3286e1)
      )
    } catch (_0x4d4d61) {
      _0x5afc19('*ERROR !!*')
      _0xd7d986(_0x4d4d61)
    }
  }
)
const _0x5da220 = {}
_0x5da220.alias = ['selectvid']
_0x5da220.filename = __filename
cmd(
  _0x5da220,
  async (
    _0x20a2b1,
    _0xa74024,
    _0x27d537,
    {
      from: _0x1fbe97,
      l: _0x2205ae,
      quoted: _0x336ece,
      prefix: _0x208622,
      body: _0x2f8cfa,
      isCmd: _0x2981c5,
      command: _0x5b94ee,
      args: _0x63a6a5,
      q: _0x13d735,
      isGroup: _0x5e0a5,
      sender: _0x10165f,
      senderNumber: _0x3e18c0,
      botNumber2: _0x53fc66,
      botNumber: _0x3ac1f0,
      pushname: _0x30cf54,
      isMe: _0x31592f,
      isOwner: _0xd89d2c,
      groupMetadata: _0x5e9b76,
      groupName: _0x146494,
      participants: _0x13eb7d,
      groupAdmins: _0x146c32,
      isBotAdmins: _0x17fcc8,
      isAdmins: _0x454e3d,
      reply: _0x552d4d,
    }
  ) => {
    try {
      let _0x34f6cb =
        '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *SELECT VIDEO QUALITY*'
      const _0x4d92c5 = [
          {
            title: '*[1] NORMAL QUALITY \uD83C\uDFB6*',
            rows: [
              {
                title: '    1.1',
                rowId: _0x208622 + ('240p ' + _0x13d735),
                description: '```240p```',
              },
              {
                title: '    1.2',
                rowId: _0x208622 + ('360p ' + _0x13d735),
                description: '```320p```',
              },
              {
                title: '    1.3',
                rowId: _0x208622 + ('480p ' + _0x13d735),
                description: '```480p```',
              },
              {
                title: '    1.4',
                rowId: _0x208622 + ('720p ' + _0x13d735),
                description: '```720p```',
              },
              {
                title: '    1.5',
                rowId: _0x208622 + ('1080p ' + _0x13d735),
                description: '```1080p```',
              },
            ],
          },
          {
            title: '*[2] DOCUMENT QUALITY \uD83D\uDCC2*',
            rows: [
              {
                title: '    2.1',
                rowId: _0x208622 + ('24p ' + _0x13d735),
                description: '```240p```',
              },
              {
                title: '    2.2',
                rowId: _0x208622 + ('36p ' + _0x13d735),
                description: '```320p```',
              },
              {
                title: '    2.3',
                rowId: _0x208622 + ('48p ' + _0x13d735),
                description: '```480p```',
              },
              {
                title: '    2.4',
                rowId: _0x208622 + ('72p ' + _0x13d735),
                description: '```720p```',
              },
              {
                title: '    2.5',
                rowId: _0x208622 + ('108p ' + _0x13d735),
                description: '```1080p```',
              },
            ],
          },
        ],
        _0x2b95a2 = {
          text: _0x34f6cb,
          footer: config.FOOTER,
          title: '',
          buttonText: '*\uD83D\uDD22 Reply below number*',
          sections: _0x4d92c5,
        }
      const _0x5e7a53 = _0x2b95a2,
        _0x5a7f21 = {}
      return (
        (_0x5a7f21.quoted = _0xa74024),
        await _0x20a2b1.replyList(_0x1fbe97, _0x5e7a53, _0x5a7f21)
      )
    } catch (_0x499a4c) {
      _0x552d4d('*ERROR !!*')
      _0x2205ae(_0x499a4c)
    }
  }
)
const _0x11d2cb = {}
_0x11d2cb.pattern = 'ytmp4'
_0x11d2cb.use = '.ytmp3 <yt url>'
_0x11d2cb.react = '\uD83C\uDFA7'
_0x11d2cb.desc = 'Download yt song.'
_0x11d2cb.category = 'download'
_0x11d2cb.filename = __filename
cmd(
  _0x11d2cb,
  async (
    _0x412125,
    _0x22285a,
    _0x435149,
    {
      from: _0x1a8411,
      l: _0x4bf3b5,
      quoted: _0x2584ed,
      body: _0x38df68,
      isCmd: _0x2aa497,
      command: _0x2b762f,
      args: _0x12c6d6,
      q: _0x30366e,
      isGroup: _0x1c8501,
      sender: _0x4baeb0,
      senderNumber: _0x2999a9,
      botNumber2: _0x145c73,
      botNumber: _0x3cc74f,
      pushname: _0x5a4805,
      isMe: _0x45d06c,
      isOwner: _0x5a1e17,
      groupMetadata: _0x5139e0,
      groupName: _0x462d99,
      participants: _0x429e00,
      groupAdmins: _0x93c4da,
      isBotAdmins: _0x5cae0b,
      isAdmins: _0xdaf046,
      reply: _0x38186b,
    }
  ) => {
    try {
      if (!ytreg(_0x30366e)) {
        return await _0x38186b(urlneed)
      }
      const _0x2bdfd0 = _0x30366e.split(' & ')[0],
        _0x16c3a1 = _0x30366e.split(' & ')[1]
      if (!_0x2bdfd0) {
        return _0x38186b(msr.url)
      }
      if (!_0x2bdfd0.includes('https://youtube.com/watch?v=')) {
        return await _0x38186b()
      }
      let _0x5e7612 = await ytmp4('' + _0x2bdfd0, '' + _0x16c3a1),
        _0x3e8ec3 = _0x5e7612
      const _0xe4c2bc = {
        text: '\u2B06',
        key: _0x22285a.key,
      }
      const _0x1279b1 = { react: _0xe4c2bc }
      await _0x412125.sendMessage(_0x1a8411, _0x1279b1)
      const _0x57f0af = { url: _0x3e8ec3 }
      const _0x28a774 = {
        video: _0x57f0af,
        mimetype: 'video/mp4',
      }
      const _0x64757f = { quoted: _0x22285a }
      await _0x412125.sendMessage(_0x1a8411, _0x28a774, _0x64757f)
      const _0x8b9131 = {
        text: '\u2714',
        key: _0x22285a.key,
      }
      const _0x38d4cf = { react: _0x8b9131 }
      await _0x412125.sendMessage(_0x1a8411, _0x38d4cf)
    } catch (_0x2d04d3) {
      console.log(_0x2d04d3)
      _0x38186b('' + _0x2d04d3)
    }
  }
)
const _0x6f0c2e = {}
_0x6f0c2e.pattern = 'ytmp3'
_0x6f0c2e.react = '\uD83D\uDCE5'
_0x6f0c2e.dontAddCommandList = true
_0x6f0c2e.filename = __filename
cmd(
  _0x6f0c2e,
  async (
    _0x5f9359,
    _0x58b735,
    _0x30a5b2,
    { from: _0xe004c7, q: _0xae2c70, isDev: _0x417ae6, reply: _0x251ea8 }
  ) => {
    if (!_0xae2c70) {
      return await _0x251ea8('*Please provide a direct URL!*')
    }
    try {
      let _0x56ed73 = await scrapeSite(_0xae2c70, 'audio', '128')
      const _0xf9ae63 = _0xae2c70.split('|')[0],
        _0x7915de = _0xae2c70.split('|')[1] || 'vajira md',
        _0x2e2c10 = {
          audio: await getBuffer(_0x56ed73),
          caption: '' + _0x7915de,
          mimetype: 'audio/mpeg',
          fileName: _0x7915de + '.mp3',
        }
      await _0x5f9359.sendMessage(_0xe004c7, _0x2e2c10)
      const _0x1855d2 = {
        text: '\u2705',
        key: _0x58b735.key,
      }
      const _0xe82f56 = { react: _0x1855d2 }
      await _0x5f9359.sendMessage(_0xe004c7, _0xe82f56)
    } catch (_0x1929d7) {
      console.error('Error fetching or sending', _0x1929d7)
      const _0x186c15 = { quoted: _0x58b735 }
      await _0x5f9359.sendMessage(
        _0xe004c7,
        '*Error fetching or sending *',
        _0x186c15
      )
    }
  }
)
const _0x2cdd05 = {}
_0x2cdd05.pattern = 'ytdocs'
_0x2cdd05.react = '\uD83D\uDCE5'
_0x2cdd05.dontAddCommandList = true
_0x2cdd05.filename = __filename
cmd(
  _0x2cdd05,
  async (
    _0x1ef4ce,
    _0x280840,
    _0x2b3d84,
    { from: _0x3faf26, q: _0x110a49, isDev: _0x397fb5, reply: _0xd45f91 }
  ) => {
    if (!_0x110a49) {
      return await _0xd45f91('*Please provide a direct URL!*')
    }
    try {
      let _0x4a5d76 = await scrapeSite(_0x110a49, 'audio', '128')
      const _0x56c787 = _0x110a49.split('|')[0],
        _0x5539ef = _0x110a49.split('|')[1] || 'vajira md',
        _0x4ca026 = {
          document: await getBuffer(_0x4a5d76),
          caption: _0x5539ef + '\n' + config.FOOTER,
          mimetype: 'audio/mpeg',
          fileName: _0x5539ef + '.mp3',
        }
      await _0x1ef4ce.sendMessage(_0x3faf26, _0x4ca026)
      const _0x2cd09b = {
        text: '\u2705',
        key: _0x280840.key,
      }
      const _0x1e1be7 = { react: _0x2cd09b }
      await _0x1ef4ce.sendMessage(_0x3faf26, _0x1e1be7)
    } catch (_0x212f50) {
      console.error('Error fetching or sending', _0x212f50)
      const _0x2b3813 = { quoted: _0x280840 }
      await _0x1ef4ce.sendMessage(
        _0x3faf26,
        '*Error fetching or sending *',
        _0x2b3813
      )
    }
  }
)
const _0x461494 = {}
_0x461494.pattern = 'ytdocv'
_0x461494.use = '.ytdoc <yt url>'
_0x461494.react = '\uD83C\uDFA7'
_0x461494.desc = 'Download yt song.'
_0x461494.category = 'download'
_0x461494.filename = __filename
cmd(
  _0x461494,
  async (
    _0x186b30,
    _0xb49eab,
    _0x3d3d2e,
    {
      from: _0x3df5b1,
      l: _0x59ece0,
      quoted: _0x4b05d2,
      body: _0x53d0e9,
      isCmd: _0x1b0f38,
      command: _0x393673,
      args: _0x383942,
      q: _0x199b41,
      isGroup: _0xce5039,
      sender: _0x5f083a,
      senderNumber: _0x36ade8,
      botNumber2: _0x1f53e7,
      botNumber: _0x591858,
      pushname: _0x2752ce,
      isMe: _0x1e100e,
      isOwner: _0x2b7da9,
      groupMetadata: _0x2bebd5,
      groupName: _0x9a6b06,
      participants: _0x254224,
      groupAdmins: _0x41e159,
      isBotAdmins: _0x551942,
      isAdmins: _0x4b8593,
      reply: _0x2ba937,
    }
  ) => {
    try {
      if (!ytreg(_0x199b41)) {
        return await _0x2ba937(urlneed)
      }
      const _0x5e9eef = _0x199b41.split(' & ')[0],
        _0xf40e0a = _0x199b41.split(' & ')[1]
      if (!_0x5e9eef.includes('https://youtube.com/watch?v=')) {
        return await _0x2ba937()
      }
      let _0x4a9413 = await ytmp4('' + _0x5e9eef.trim(), '' + _0xf40e0a.trim()),
        _0x286716 = _0x4a9413
      const _0x3f5463 = await yts(_0x199b41),
        _0x5034fd = _0x3f5463.videos[0],
        _0x1d0d41 = {
          text: '\u2B06',
          key: _0xb49eab.key,
        }
      const _0xb33790 = { react: _0x1d0d41 }
      await _0x186b30.sendMessage(_0x3df5b1, _0xb33790)
      const _0x3b9fce = { url: _0x286716 }
      const _0x20ac56 = { quoted: _0xb49eab }
      await _0x186b30.sendMessage(
        _0x3df5b1,
        {
          document: _0x3b9fce,
          mimetype: 'video/mp4',
          fileName: _0x5034fd.title + '.mp4',
          caption: '' + config.FOOTER,
        },
        _0x20ac56
      )
      const _0x21584a = {
        text: '\u2714',
        key: _0xb49eab.key,
      }
      const _0x1cce9f = { react: _0x21584a }
      await _0x186b30.sendMessage(_0x3df5b1, _0x1cce9f)
    } catch (_0x3d6e81) {
      const _0x301a67 = {
        text: '\u274C',
        key: _0xb49eab.key,
      }
      const _0x528c0f = { react: _0x301a67 }
      await _0x186b30.sendMessage(_0x3df5b1, _0x528c0f)
      console.log(_0x3d6e81)
      _0x2ba937('Error !!\n\n*' + _0x3d6e81 + '*')
    }
  }
)
const _0x21301a = {}
_0x21301a.pattern = '240p'
_0x21301a.react = '\uD83C\uDFA5'
_0x21301a.dontAddCommandList = true
_0x21301a.filename = __filename
cmd(
  _0x21301a,
  async (
    _0x2e310e,
    _0x5950bd,
    _0x386ca8,
    { from: _0x2ed833, q: _0x3dfec5, reply: _0x1f9009 }
  ) => {
    try {
      if (!ytreg(_0x3dfec5)) {
        return await _0x1f9009(urlneed)
      }
      let _0x517594 = await scrapeSite(_0x3dfec5, 'video', '240')
      const _0x206a46 = _0x3dfec5.split('|')[0],
        _0x30d368 = _0x3dfec5.split('|')[1] || 'vajira md',
        _0x76e70b = {
          video: await getBuffer(_0x517594),
          caption: _0x30d368 + '\n' + config.FOOTER,
          mimetype: 'video/mp4',
          fileName: _0x30d368 + '.mp4',
        }
      await _0x2e310e.sendMessage(_0x2ed833, _0x76e70b)
      const _0x4d8622 = {
        text: '\u2705',
        key: _0x386ca8.key,
      }
      const _0x327f61 = { react: _0x4d8622 }
      await _0x2e310e.sendMessage(_0x2ed833, _0x327f61)
    } catch (_0x3ebb9c) {
      console.error('Error fetching or sending', _0x3ebb9c)
      const _0x443dab = { quoted: _0x386ca8 }
      await _0x2e310e.sendMessage(
        _0x2ed833,
        '*Error fetching or sending *',
        _0x443dab
      )
    }
  }
)
const _0x1c40da = {}
_0x1c40da.pattern = '360p'
_0x1c40da.react = '\uD83D\uDCFD️'
_0x1c40da.dontAddCommandList = true
_0x1c40da.filename = __filename
cmd(
  _0x1c40da,
  async (
    _0x1d9943,
    _0x9dcbb,
    _0x775230,
    { from: _0x5c9be0, q: _0x10494d, reply: _0x250129 }
  ) => {
    try {
      if (!ytreg(_0x10494d)) {
        return await _0x250129(urlneed)
      }
      let _0x4da99a = await scrapeSite(_0x10494d, 'video', '360')
      const _0x37652f = _0x10494d.split('|')[0],
        _0x1c6ee8 = _0x10494d.split('|')[1] || 'vajira md',
        _0x46e748 = {
          video: await getBuffer(_0x4da99a),
          caption: _0x1c6ee8 + '\n' + config.FOOTER,
          mimetype: 'video/mp4',
          fileName: _0x1c6ee8 + '.mp4',
        }
      await _0x1d9943.sendMessage(_0x5c9be0, _0x46e748)
      const _0x2da912 = {
        text: '\u2705',
        key: _0x775230.key,
      }
      const _0x1b671f = { react: _0x2da912 }
      await _0x1d9943.sendMessage(_0x5c9be0, _0x1b671f)
    } catch (_0x307f43) {
      console.error('Error fetching or sending', _0x307f43)
      const _0x5382e9 = { quoted: _0x775230 }
      await _0x1d9943.sendMessage(
        _0x5c9be0,
        '*Error fetching or sending *',
        _0x5382e9
      )
    }
  }
)
const _0x549a3d = {}
_0x549a3d.pattern = '480p'
_0x549a3d.react = '\uD83D\uDCFD️'
_0x549a3d.dontAddCommandList = true
_0x549a3d.filename = __filename
cmd(
  _0x549a3d,
  async (
    _0x57e590,
    _0x4b9d90,
    _0x23fd4b,
    { from: _0x5cc227, q: _0x10345b, reply: _0x332fb7 }
  ) => {
    try {
      if (!ytreg(_0x10345b)) {
        return await _0x332fb7(urlneed)
      }
      let _0x1894f5 = await scrapeSite(_0x10345b, 'video', '480')
      const _0x22c794 = _0x10345b.split('|')[0],
        _0x317a06 = _0x10345b.split('|')[1] || 'vajira md',
        _0x4b8496 = {
          video: await getBuffer(_0x1894f5),
          caption: _0x317a06 + '\n' + config.FOOTER,
          mimetype: 'video/mp4',
          fileName: _0x317a06 + '.mp4',
        }
      await _0x57e590.sendMessage(_0x5cc227, _0x4b8496)
      const _0x591b1d = {
        text: '\u2705',
        key: _0x23fd4b.key,
      }
      const _0x1959af = { react: _0x591b1d }
      await _0x57e590.sendMessage(_0x5cc227, _0x1959af)
    } catch (_0x437932) {
      console.error('Error fetching or sending', _0x437932)
      const _0x3b0980 = { quoted: _0x23fd4b }
      await _0x57e590.sendMessage(
        _0x5cc227,
        '*Error fetching or sending *',
        _0x3b0980
      )
    }
  }
)
const _0x14d520 = {}
_0x14d520.pattern = '720p'
_0x14d520.react = '\uD83D\uDCFD️'
_0x14d520.dontAddCommandList = true
_0x14d520.filename = __filename
cmd(
  _0x14d520,
  async (
    _0x1b3bad,
    _0x4cc1f8,
    _0x41c756,
    { from: _0x38546d, q: _0x62eee1, reply: _0x466932 }
  ) => {
    try {
      if (!ytreg(_0x62eee1)) {
        return await _0x466932(urlneed)
      }
      let _0x4c0e69 = await scrapeSite(_0x62eee1, 'video', '720')
      const _0x14574a = _0x62eee1.split('|')[0],
        _0x4869a9 = _0x62eee1.split('|')[1] || 'vajira md',
        _0x1fdd38 = {
          video: await getBuffer(_0x4c0e69),
          caption: _0x4869a9 + '\n' + config.FOOTER,
          mimetype: 'video/mp4',
          fileName: _0x4869a9 + '.mp4',
        }
      await _0x1b3bad.sendMessage(_0x38546d, _0x1fdd38)
      const _0x44b045 = {
        text: '\u2705',
        key: _0x41c756.key,
      }
      const _0x4de6b1 = { react: _0x44b045 }
      await _0x1b3bad.sendMessage(_0x38546d, _0x4de6b1)
    } catch (_0x352084) {
      console.error('Error fetching or sending', _0x352084)
      const _0x3100fa = { quoted: _0x41c756 }
      await _0x1b3bad.sendMessage(
        _0x38546d,
        '*Error fetching or sending *',
        _0x3100fa
      )
    }
  }
)
const _0x2fa200 = {}
_0x2fa200.pattern = '1080p'
_0x2fa200.react = '\uD83D\uDCFD️'
_0x2fa200.dontAddCommandList = true
_0x2fa200.filename = __filename
cmd(
  _0x2fa200,
  async (
    _0x20ef47,
    _0x306143,
    _0x2424ea,
    { from: _0x2f2abb, q: _0x2da35f, reply: _0x168832 }
  ) => {
    try {
      if (!ytreg(_0x2da35f)) {
        return await _0x168832(urlneed)
      }
      let _0xbf3141 = await scrapeSite(_0x2da35f, 'video', '1080')
      const _0x244afa = _0x2da35f.split('|')[0],
        _0x551ae5 = _0x2da35f.split('|')[1] || 'vajira md',
        _0xb37986 = {
          video: await getBuffer(_0xbf3141),
          caption: _0x551ae5 + '\n' + config.FOOTER,
          mimetype: 'video/mp4',
          fileName: _0x551ae5 + '.mp4',
        }
      await _0x20ef47.sendMessage(_0x2f2abb, _0xb37986)
      const _0x45722e = {
        text: '\u2705',
        key: _0x2424ea.key,
      }
      const _0x57497b = { react: _0x45722e }
      await _0x20ef47.sendMessage(_0x2f2abb, _0x57497b)
    } catch (_0x3cd58e) {
      console.error('Error fetching or sending', _0x3cd58e)
      const _0x1d2534 = { quoted: _0x2424ea }
      await _0x20ef47.sendMessage(
        _0x2f2abb,
        '*Error fetching or sending *',
        _0x1d2534
      )
    }
  }
)
const _0x51dcef = {}
_0x51dcef.pattern = '24p'
_0x51dcef.react = '\uD83D\uDCFD️'
_0x51dcef.dontAddCommandList = true
_0x51dcef.filename = __filename
cmd(
  _0x51dcef,
  async (
    _0x4b180f,
    _0x518354,
    _0x2e895d,
    { from: _0x43eebc, q: _0x161e44, reply: _0x197f5d }
  ) => {
    try {
      if (!ytreg(_0x161e44)) {
        return await _0x197f5d(urlneed)
      }
      let _0x1ce151 = await scrapeSite(_0x161e44, 'video', '240')
      const _0x4d780b = _0x161e44.split('|')[0],
        _0x2abba5 = _0x161e44.split('|')[1] || 'vajira md',
        _0x1875bf = {
          document: await getBuffer(_0x1ce151),
          caption: _0x2abba5 + '\n' + config.FOOTER,
          mimetype: 'video/mp4',
          fileName: _0x2abba5 + '.mp4',
        }
      await _0x4b180f.sendMessage(_0x43eebc, _0x1875bf)
      const _0x52c43a = {
        text: '\u2705',
        key: _0x2e895d.key,
      }
      const _0x318a40 = { react: _0x52c43a }
      await _0x4b180f.sendMessage(_0x43eebc, _0x318a40)
    } catch (_0x52e486) {
      console.error('Error fetching or sending', _0x52e486)
      const _0x559bd7 = { quoted: _0x2e895d }
      await _0x4b180f.sendMessage(
        _0x43eebc,
        '*Error fetching or sending *',
        _0x559bd7
      )
    }
  }
)
const _0x369b22 = {}
_0x369b22.pattern = '36p'
_0x369b22.react = '\uD83D\uDCFD️'
_0x369b22.dontAddCommandList = true
_0x369b22.filename = __filename
cmd(
  _0x369b22,
  async (
    _0x242372,
    _0x3e8f71,
    _0x4226ef,
    { from: _0x28c63b, q: _0x3393dc, reply: _0x393605 }
  ) => {
    try {
      if (!ytreg(_0x3393dc)) {
        return await _0x393605(urlneed)
      }
      let _0x39740f = await scrapeSite(_0x3393dc, 'video', '360')
      const _0x582a47 = _0x3393dc.split('|')[0],
        _0x1c3852 = _0x3393dc.split('|')[1] || 'vajira md',
        _0x10acb0 = {
          document: await getBuffer(_0x39740f),
          caption: _0x1c3852 + '\n' + config.FOOTER,
          mimetype: 'video/mp4',
          fileName: _0x1c3852 + '.mp4',
        }
      await _0x242372.sendMessage(_0x28c63b, _0x10acb0)
      const _0x365209 = {
        text: '\u2705',
        key: _0x4226ef.key,
      }
      const _0x3878fe = { react: _0x365209 }
      await _0x242372.sendMessage(_0x28c63b, _0x3878fe)
    } catch (_0x353ed8) {
      console.error('Error fetching or sending', _0x353ed8)
      const _0x423c2b = { quoted: _0x4226ef }
      await _0x242372.sendMessage(
        _0x28c63b,
        '*Error fetching or sending *',
        _0x423c2b
      )
    }
  }
)
const _0x56135e = {}
_0x56135e.pattern = '48p'
_0x56135e.react = '\uD83D\uDCFD️'
_0x56135e.dontAddCommandList = true
_0x56135e.filename = __filename
cmd(
  _0x56135e,
  async (
    _0x3d13cd,
    _0x5b00ae,
    _0x1bd91b,
    { from: _0x4f630e, q: _0x5efeb6, reply: _0x5d519a }
  ) => {
    try {
      if (!ytreg(_0x5efeb6)) {
        return await _0x5d519a(urlneed)
      }
      let _0x395a64 = await scrapeSite(_0x5efeb6, 'video', '480')
      const _0x48f2ed = _0x5efeb6.split('|')[0],
        _0x774b71 = _0x5efeb6.split('|')[1] || 'vajira md',
        _0x355a65 = {
          document: await getBuffer(_0x395a64),
          caption: _0x774b71 + '\n' + config.FOOTER,
          mimetype: 'video/mp4',
          fileName: _0x774b71 + '.mp4',
        }
      await _0x3d13cd.sendMessage(_0x4f630e, _0x355a65)
      const _0x3318fe = {
        text: '\u2705',
        key: _0x1bd91b.key,
      }
      const _0x1ece9b = { react: _0x3318fe }
      await _0x3d13cd.sendMessage(_0x4f630e, _0x1ece9b)
    } catch (_0x4ee565) {
      console.error('Error fetching or sending', _0x4ee565)
      const _0x42996a = { quoted: _0x1bd91b }
      await _0x3d13cd.sendMessage(
        _0x4f630e,
        '*Error fetching or sending *',
        _0x42996a
      )
    }
  }
)
const _0x14351e = {}
_0x14351e.pattern = '72p'
_0x14351e.react = '\uD83D\uDCFD️'
_0x14351e.dontAddCommandList = true
_0x14351e.filename = __filename
cmd(
  _0x14351e,
  async (
    _0x18fc3e,
    _0x42ec0c,
    _0x420a07,
    { from: _0x151da5, q: _0x1a4f59, reply: _0x2fb403 }
  ) => {
    try {
      if (!ytreg(_0x1a4f59)) {
        return await _0x2fb403(urlneed)
      }
      let _0x10b915 = await scrapeSite(_0x1a4f59, 'video', '720')
      const _0x424748 = _0x1a4f59.split('|')[0],
        _0x4d96f3 = _0x1a4f59.split('|')[1] || 'vajira md',
        _0x3b14b3 = {
          document: await getBuffer(_0x10b915),
          caption: _0x4d96f3 + '\n' + config.FOOTER,
          mimetype: 'video/mp4',
          fileName: _0x4d96f3 + '.mp4',
        }
      await _0x18fc3e.sendMessage(_0x151da5, _0x3b14b3)
      const _0x3a3b30 = {
        text: '\u2705',
        key: _0x420a07.key,
      }
      const _0x5416d3 = { react: _0x3a3b30 }
      await _0x18fc3e.sendMessage(_0x151da5, _0x5416d3)
    } catch (_0x4ba4dd) {
      console.error('Error fetching or sending', _0x4ba4dd)
      const _0x41618f = { quoted: _0x420a07 }
      await _0x18fc3e.sendMessage(
        _0x151da5,
        '*Error fetching or sending *',
        _0x41618f
      )
    }
  }
)
const _0x6b435f = {}
_0x6b435f.pattern = '108p'
_0x6b435f.react = '\uD83D\uDCFD️'
_0x6b435f.dontAddCommandList = true
_0x6b435f.filename = __filename
cmd(
  _0x6b435f,
  async (
    _0x57ee6d,
    _0xf190b5,
    _0x47e9b0,
    { from: _0x53d173, q: _0x22349f, reply: _0x2a41b9 }
  ) => {
    try {
      if (!ytreg(_0x22349f)) {
        return await _0x2a41b9(urlneed)
      }
      let _0x1246c5 = await scrapeSite(_0x22349f, 'video', '1080')
      const _0x84bb2c = _0x22349f.split('|')[0],
        _0x3f6c63 = _0x22349f.split('|')[1] || 'vajira md',
        _0x206c05 = {
          document: await getBuffer(_0x1246c5),
          caption: _0x3f6c63 + '\n' + config.FOOTER,
          mimetype: 'video/mp4',
          fileName: _0x3f6c63 + '.mp4',
        }
      await _0x57ee6d.sendMessage(_0x53d173, _0x206c05)
      const _0x3ec037 = {
        text: '\u2705',
        key: _0x47e9b0.key,
      }
      const _0x2ddf07 = { react: _0x3ec037 }
      await _0x57ee6d.sendMessage(_0x53d173, _0x2ddf07)
    } catch (_0x4bd769) {
      console.error('Error fetching or sending', _0x4bd769)
      const _0x34d430 = { quoted: _0x47e9b0 }
      await _0x57ee6d.sendMessage(
        _0x53d173,
        '*Error fetching or sending *',
        _0x34d430
      )
    }
  }
)
