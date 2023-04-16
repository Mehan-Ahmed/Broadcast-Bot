/*CMD
  command: MT
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Multiple Property Name
  answer: 👤 Enter User # ID:

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var listText = "191918";
var lists = Bot.getProperty("lists", []);

lists.push(listText);
Bot.setProperty("lists", lists, "json");

Bot.sendMessage("*✅ List added:* `" + listText + "`");

