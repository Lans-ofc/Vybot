import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6283132749084', 'Maulana', true]
] 
global.mods = []
global.prems = []
// Info
global.nomorwa = '6283132749084'
global.packname = 'Xyna - MD by'
global.author = '© LansModz'
global.namebot = '​Xyna - MD'
global.wm = '© Xyna By Lanz'
global.stickpack = 'Xyna - MD by'
global.stickauth = '© Lanz'
// Link Sosmed
global.sig = 'https://instagram.com/lhns.ofc?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'
global.sgh = 'https://github.com/Lans-ofc'
global.sgc = 'https://chat.whatsapp.com/DeRF3ZCBaEOAUYIsVzDMD6'
// Donasi
global.psaweria = 'https://saweria.co/Lans03'
global.ptrakterr = 'https://lynk.id/na_offical'
global.povo = '0823-8992-4037'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'xCOpP5f36W'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "xCOpP5f36W",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
