/*CMD
  command: /Pay
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: *Envie el monto del deposito*
  keyboard: 
  aliases: 
CMD*/

if(params){
var arr = params.split(' ')
var id = arr[0]
var hash = arr[1]
//Edit inline keyboard and remove button 
}
Bot.run({command:'Pay', options:{id: id, hash: hash
}})
