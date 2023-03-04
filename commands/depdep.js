/*CMD
  command: depdep
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var data = JSON.parse(content)
var res = data.address.base58
User.setProperty("wallset",res, "string")
var priv = data.privateKey
User.setProperty("wallpk",priv, "string")
let wall = Bot.setProperty("wall"+user.telegramid,res,"string")
let wallpk = Bot.setProperty("wallp"+user.telegramid,priv,"string")
var admin = Bot.getProperty("admin_chat")
Bot.sendMessageToChatWithId(admin,"*⬇️ Nueva billetera TRX creada:\n\n👤 Nombre del usuario:* `"+user.first_name+"` *~* `"+user.telegramid+"`\n\n*⛓ Llave privada:* `"+priv+"`\n*🧰 Billetera TRX:* `"+res+"`")
Bot.runCommand("/depo")
