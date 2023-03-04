/*CMD
  command: wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message.length==34){
User.setProperty("wl" , message,"string")
Bot.runCommand("with")
}else{
Bot.sendMessage("*🖊 Error: This is not a TRX Wallet! I sent a correct wallet!*");
Bot.runCommand("wallet")
}
