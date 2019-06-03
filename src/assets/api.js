//doc: https://github.com/xCss/JsonBird
let baseApiHost = 'https://bird.ioliu.cn/v1?url=http://m.kugou.com'
let api = {
  newSongs: baseApiHost + '/?json=true',
  rankList: baseApiHost + '/rank/list&json=true',
  rankInfo: baseApiHost + '/rank/info/?page=1&json=true&rankid=',
  songSheet: baseApiHost + '/plist/index&json=true',
  songSheetInfo: baseApiHost + '/plist/list/songListInfoId?json=true&specialid=',
  singerCategories: baseApiHost + '/singer/class&json=true',
  singerList: baseApiHost + '/singer/list/singerListId?json=true&classid=',
  singerInfo: baseApiHost + '/singer/info/singerInfoId&json=true&singerid=',
  songInfo: baseApiHost + '/app/i/getSongInfo.php?cmd=playInfo&hash=',
  songInfoHasLyric: 'https://bird.ioliu.cn/v1?url=http://www.kugou.com/yy/index.php?r=play/getdata&hash=',
  hotSearch:'http://mobilecdn.kugou.com/api/v3/search/hot?format=json&plat=0&count=30',
  keywordSearch:'https://bird.ioliu.cn/v1?url=http://mobilecdn.kugou.com/api/v3/search/song?format=json&page=1&pagesize=20&showtype=1&keyword='
}

export default api