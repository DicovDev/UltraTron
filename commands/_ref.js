/*CMD
  command: /ref
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 👥 invite, 👥 invitar
CMD*/

var idi = Libs.ResourcesLib.userRes("idioma")
var ref = Libs.ResourcesLib.userRes("refcom")
Libs.ReferralLib.setLinkPrefix("Dicov")
var reflink = Libs.ReferralLib.currentUser.getRefLink(bot.name)
let lv1 = Libs.ResourcesLib.userRes("lv1");

if(idi.value() == 1){
Bot.sendInlineKeyboard([[{title:'🏆 Top ref',command:'/toprefs'}],[{title:'👥 Lista de referidos',command:'/list'}]],"*🌐 Estadisticas de referencia:\n\n🥇 1° Nivel: 6% >* `"+lv1.value()+"` *Usuarios\n\n♾ Ganancias:* `"+ref.value().toFixed(5)+"` *TRX\n\n🌐 Link de referencia: "+reflink+"*") 
}else{
if(idi.value() == 0){
Bot.sendInlineKeyboard([[{title:'🏆 Top ref',command:'/toprefs'}],[{title:'👥 User List',command:'/list'}]],"*🌐 Reference statistics:\n\n🥇 1° Level: 6% >* `"+lv1.value()+"` *Users\n\n♾ Earnings:* `"+ref.value().toFixed(5)+"` *TRX\n\n🌐 Reference link: "+reflink+"*") 
}
}
