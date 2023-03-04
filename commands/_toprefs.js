/*CMD
  command: /toprefs
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var idi = Libs.ResourcesLib.userRes("idioma")

if(idi.value() == 1){
let list = Libs.ReferralLib.getTopList();

list.order_by = "integer_value";
list.order_ascending = false
list.page = 1
list.per_page = 15

var items = list.get();
//Bot.inspect(items);

var msg = '🏆 Top en referencias 🏆\n ';
var prop;
for(var ind in items){
  prop = items[ind]
  msg = msg + "\n" +
    String( parseInt(ind) + 1 ) + " ." + 
    Libs.commonLib.getLinkFor(prop.user) + " Invitados: " +
    String(prop.value)
}
Bot.sendMessage(msg)
}else{
if(idi.value() == 0){
let list = Libs.ReferralLib.getTopList();

list.order_by = "integer_value";
list.order_ascending = false
list.page = 1
list.per_page = 15

var items = list.get();
//Bot.inspect(items);

var msg = '🏆 Top in references 🏆\n ';
var prop;
for(var ind in items){
  prop = items[ind]
  msg = msg + "\n" +
    String( parseInt(ind) + 1 ) + " ." + 
    Libs.commonLib.getLinkFor(prop.user) + " Invites: " +
    String(prop.value)
}
Bot.sendMessage(msg)
}
}
