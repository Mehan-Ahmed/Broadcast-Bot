/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var Cookie = User.setProperty("Cookie");
if (Cookie == undefined){
  var status = Libs.ResourcesLib.anotherChatRes(
                  "status",
                  "global"
                )
                status.add(1)};
                
var allBotUsers = Bot.getProperty("allUsers",[])
var afterward = User.getProperty("afterward")
if (!afterward) {
  User.setProperty("Cookie", "Saved", "string")
  allBotUsers.push(user.telegramid)
  Bot.setProperty("allUsers", allBotUsers, "json")
}
  var key = "📝 Text To Binary,🧮 Binary To Text "
Bot.sendKeyboard(key,"ʜᴇʏᴀ! "+user.first_name)
