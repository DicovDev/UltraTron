/*CMD
  command: /depoo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let idi = Libs.ResourcesLib.userRes("idioma");
if(idi.value() == 1){
Bot.sendMessage('*💵 Recuerde enviar mínimo* `1.00000` *USDT a la siguiente direccion:*')
Bot.sendMessage('`TPZ2hipzpdf4U8rYrZcBFJGmWZhLuUJDbc`')
Bot.sendMessage("*(El deposito sera convertido en TRX)*")
Bot.sendKeyboard('⬅️ Regresar','*🖼 Luego de hacer su deposito, envie aqui el hash de la transacción:*')
}else{
if(idi.value() == 0){
Bot.sendMessage('*💵 Remember to send minimum* `1.00000` *USDT to the following address:*')
Bot.sendMessage('`TPZ2hipzpdf4U8rYrZcBFJGmWZhLuUJDbc`')
Bot.sendMessage("*(The deposit will be converted into TRX)*")
Bot.sendKeyboard('⬅️ Return','*🖼 After making your deposit, send here the hash of the transaction:*')
}
}
Bot.runCommand('depoo')
