let fs = require('fs')
let path = require('path')
let mkdirp = require('mkdirp')

import Config from './Config'
import Utils from './utils'
import { generate } from './generate'

function getTemplatePath (language: string) {
  const fileExt = Config.getDocExtension()
  const customTemplate = path.join(Config.getSavePath(), 'template.' + fileExt)
  if (fs.existsSync(customTemplate)) {
    return customTemplate
  } else {
    return __dirname + path.normalize('/templates/' + language + '.' + fileExt)
  }
}

function createDecisions (name: string, savePath: string | any | void): string {
  let language = Config.getLanguage()
  let raw = fs.readFileSync(getTemplatePath(language), 'utf8')
  let newDate = Utils.createDateString()
  let fileName = Utils.generateFileName(name)
  let fileExt = Config.getDocExtension()

  let newIndex = Utils.getNewIndexString()
  let fileData = raw.replace(/{NUMBER}/g, Utils.getLatestIndex() + 1)
    .replace(/{TITLE}/g, name)
    .replace(/{DATE}/g, newDate)

  let filePath = savePath + newIndex + '-' + fileName + '.' + fileExt
  fs.writeFileSync(filePath, fileData)

  return filePath
}

export function create (name: string) {
  let savePath = Config.getSavePath()
  let i18n = Utils.getI18n()
  let fileExt = Config.getDocExtension()
  console.log(i18n.logSavePath + savePath)
  mkdirp.sync(savePath)

  const filePath = createDecisions(name, savePath)
  // Utils.openInEditor(path.join(process.cwd(), filePath))

  let toc = generate('toc', { output: false })
  fs.writeFileSync(savePath + 'README.' + fileExt, toc + '\n')
}
