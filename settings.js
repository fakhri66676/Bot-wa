/*
   * Created By AdrianDev
   * My Contact https://wa.me/6289513081052
   * Version Rxzy-MD 1.3 ( Free Edition )
   
   * sory kalau banyak error karena lu apikeynya gak ada atau limit abis
   * kalau mau beli Premium Edition Chat Gw Aja Harga Bisi-Bisi Fitur Banyak
*/

const fs = require('fs')
const chalk = require('chalk')

/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.lol = '-' // https://api.lolhuman.xyz
global.xzn = '-' // https://xnz.wtf
/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = '6285946653318' // Owner Utama
global.owner = ['62859272420181'] // Owner Lainnya
global.namaowner = 'itsukaBotz' // Nama Owner
global.premium = ["6285946653318"] // Premium User
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = 'itsukaBotz' // NickBot
global.typemenu = 'v2' // 'v1' => 'v6'
global.typereply = 'v1'
global.autoread = false // ReadChat
global.autobio = false // AutoBio
global.autoblok212 = true // AutoBlock Nomer +212
global.onlyindo = false  // AutoBlock Selain Nomer Indo
global.onlygrup = false // onlygroup
global.onlypc = false // onlypece
global.packname = 'By' // Watermark Sticker
global.author = 'itsukaBotz' // Watermark Sticker
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
    limit: '*Limit Anda Habis*',
    done: 'Done ✅',
    prem: 'Feature Only For User _*PREMIUM*_',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Private Chat*_',
    wait: 'Wait a Moment, for Process',    
    error: '_*Sorry Features Error*_',
}
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync('./media/quoted.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = 'https://chat.whatsapp.com/ErI3GVWipee2gZrbPQBfnU'
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})