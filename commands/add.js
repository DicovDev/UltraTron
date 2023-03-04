/*CMD
  command: add
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send Amount:*
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let amount = parseFloat(message);
let tgid = User.getProperty("id");
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.add(parseFloat(amount));
Bot.sendMessage("*➕ "+amount+" TRX Add*");
}else{
return
}

//You need to send amount after
