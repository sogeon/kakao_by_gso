const router = require('express').Router()
const KakaoService = require('../services/kakao.service')

const kakaoService = new KakaoService()

router.get('/keyboard', (req, res) => {
  res.send({
    type: 'buttons',
    buttons: ['번역언어 변경']
  })
})

router.post('/message', async (req, res) => {
  const { content, type } = req.body

  //동기식 표현 await 호출 되는 곳의 then 메소드를 자동 호출함.
  const reply = await kakaoService.getReply({content, dialog, type})
  res.send(reply)
/*
  if (content === '번역언어 변경') {
    return res.send(kakaoService.getTrLanguages())
  }

  if (content.includes('->')) {
    return res.send(kakaoService.changeLanguage(content))
  }


  kakaoService.translateText(content)
  .then(data => {
    res.send(data)
  })
  */
})

module.exports = router
