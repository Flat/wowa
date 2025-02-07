const path = require('path')
const fs = require('fs')
const mk = require('mkdirp')

const win = process.platform === 'win32'
const env = process.env
const log = console.log

let cfg = {
  $anyway: 0,
  getPath(cat) {
    let pac = path.join(win ? env.APPDATA : env.HOME, win ? 'wowa' : '.wowa')
    let pag

    if (env.TEST_WOWA) pac = path.join(path.dirname(pac), '.test_wowa')

    let pathFile = path.join(pac, 'wow_path.txt')
    if (fs.existsSync(pathFile)) pag = fs.readFileSync(pathFile, 'utf-8').trim()
    else {
      if (env.TEST_WOWA) pag = path.join(pac, '.test/_retail_')
      else
        pag = path.join(
          win ? 'C:\\Program Files' : '/Applications',
          'World of Warcraft',
          '_retail_'
        )

      mk(pac, err => {
        fs.writeFileSync(pathFile, pag, 'utf-8')
      })
    }

    let mode = path.basename(pag)
    let paths = {
      addon: path.join(pag, 'Interface', 'AddOns'),
      wtf: path.join(pag, 'WTF'),
      wowaads: path.join(pag, 'WTF', 'wowaads.json'),
      pathfile: pathFile,
      tmp: pac,
      mode: mode,
      db: path.join(pac, '.db'),
      update: path.join(pac, '.update'),
      game: pag
    }

    return cat in paths ? paths[cat] : pag
  },

  checkPath() {
    let wow = cfg.getPath()
    let e = fs.existsSync(wow)

    // log('checking', wow)
    if (!e) {
      log(
        '\nWoW folder not found, you can specify it by editing the file below:'
      )
      log('\n  ' + cfg.getPath('pathfile') + '\n')
    }

    return e
  },

  getMode(ver) {
    let tail = path.basename(cfg.getPath())

    return ver
      ? tail.match(/ptr/)
        ? '[PTR]'
        : tail.match(/beta/)
        ? '[BETA]'
        : ''
      : tail.match(/classic/)
      ? '_classic_'
      : '_retail_'
  },

  testMode(mode) {
    let m = cfg.getMode()

    return typeof mode === 'number'
      ? mode & (m === '_retail_' ? 1 : 2)
      : m === mode
  },

  setModePath(mp) {
    let p = path.join(path.dirname(cfg.getPath('game')), mp)

    if (fs.existsSync(p)) fs.writeFileSync(cfg.getPath('pathfile'), p, 'utf-8')
    else
      log(
        '\nMode folder does not exist, you must run the game in that mode for at least one time before using wowa'
      )
  },

  getGameVersion() {
    let mo = cfg.getMode()
    return mo === '_classic_' ? '1.13.2' : '8.2.0'
  },

  isValidVersion(v) {
    let mo = cfg.getMode()

    return (
      (mo === '_classic_' && v.search('1.') === 0) ||
      (mo === '_retail_' && v.search('1.') !== 0)
    )
  },

  anyway(en) {
    if (!en) return cfg.$anyway
    cfg.$anyway = en
  }
}

module.exports = cfg
