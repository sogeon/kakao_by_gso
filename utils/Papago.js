const request = require('request-promise')

const TRANSLATE_API = 'https://openapi.naver.com/v1/papago/n2mt'
const CLIENT_ID = ''
const CLIENT_SECRET = ''

const SUPPORTED_LANG_CODE = {
  ['한국어']: 'ko',
  ['영어']: 'en',
  ['프랑스어']: 'fr'
}

module.exports = class Papago {
  constructor() {
    this._sourceLangCode = SUPPORTED_LANG_CODE['한국어']
    this._targetLangCode = SUPPORTED_LANG_CODE['영어']
  }

  get sourceLangCode () {
    return this._sourceLangCode
  }

  set sourceLangCode (key) {
    this._sourceLangCode = this.getSupportedLangCode(key)
  }

  get targetLangCode () {
    return this._targetLangCode
  }

  set targetLangCode (key) {
    this._targetLangCode = this.getSupportedLangCode(key)
  }

  getHeaders() {
    return {
      'X-Naver-Client-Id': CLIENT_ID,
      'X-Naver-Client-Secret': CLIENT_SECRET
    }
  }

  getSupportedLangCode (key) {
      return SUPPORTED_LANG_CODE[key]
  }

  translate(text) {
    const options = {
      method: 'POST',
      uri: TRANSLATE_API,
      headers: this.getHeaders(),
      body: {
        source: this.sourceLangCode,
        target: this.targetLangCode,
        text
      },
      json: true
    }

    return request(options)
    .then(data => data.message.result.translatedText)
    .catch(err => {
      throw err
    })
  }
}