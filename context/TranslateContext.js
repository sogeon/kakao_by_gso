const Context = require('./Context')


module.exports = class TranslateContext extends Context {

    reply(msg, dialog, type) {

        return this.translateText(msg)


    }


    async translateText(msg){

    }

}