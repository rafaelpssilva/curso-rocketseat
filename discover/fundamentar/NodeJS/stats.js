const os = require('os')
const log = require('./togger')

setInterval(() => {
    const { freemem, totalmem } = os

    const total = parseInt(totalmem() / 1024 / 1024)
    const men = parseInt(freemem() / 1024 / 1024)
    const porcents = parseInt((men / total) * 100)

    const stats = {
        free: `${men} MB`,
        total: `${total} MB`,
        usage: `${porcents}%`
    }

    console.clear()
    console.log('===== PC STATES =====')
    console.table(stats)

    log(`${JSON.stringify(stats)}\n`)

}, 1000);
