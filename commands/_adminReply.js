/*CMD
  command: /adminReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *📝 Write your answer*
  keyboard: 
  aliases: 
CMD*/

var tgid = options.tgid

var msg = message
var b = [
    [
      {
        title: "📝 Reply",
        command: "/message"
      }
    ]
  ]
  Bot.sendInlineKeyboardToChatWithId(
    tgid,
    b,
    "*📩 New support message\n\n✉️ Message:* " + msg
  )
Bot.sendMessage("*✅ Message sent.*")
