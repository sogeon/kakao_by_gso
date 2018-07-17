const Papago = require('../utils/Papago')

const papago = new Papago()

module.exports = class KakaoService {

  getReply({content, dialog, type}) {
    return dialog.reply({content, dialog, type})
  }

  changeLanguage (msg) {
    const splitMsgs = msg.split('->')
    papago.sourceLangCode = splitMsgs[0]
    papago.targetLangCode = splitMsgs[1]

    return {
      message: {
        text: `${msg}로 언어가 변경 되었습니다.`
      }
    }
  }

  getTrLanguages () {
    return {
      message: {
        text: '번역 가능한 언어목록'
      },
      keyboard: {
        type: 'buttons',
        buttons: ['한국어->영어', '한국어->프랑스어']
      }
    }
  }


  translateText(text) {
    return papago.translate(text)
    .then(text => {
      return {
        message: {
          text
        }
      }
    })
  }
}
