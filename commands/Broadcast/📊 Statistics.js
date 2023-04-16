/*CMD
  command: 📊 Statistics
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Broadcast

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
    .value()
    
      var broadcast = Libs.ResourcesLib.anotherChatRes("broadcast", "each")
    .value()
    
Bot.sendMessage("👤 *Total Users:* "+status+"\n\n🔊 Total Broadcast: "+broadcast+"\n\n✅* Bot Coding By:* [DevTanjed](https://t.me/DevTanjed)");
