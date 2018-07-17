modul.export = class Dialog {
    constructor(context) {
        this.context = context
    }

    reply(msg , dialog, type) {
        return this.context.reply(msg , dialog, type)
    }
}