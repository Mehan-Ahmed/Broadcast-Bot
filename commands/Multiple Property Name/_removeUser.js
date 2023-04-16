/*CMD
  command: /removeUser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Multiple Property Name
  answer: 👤 Enter User # ID:

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var listToRemove = message; // replace with the name of the list to remove
var lists = Bot.getProperty("lists", []);

if (lists.includes(listToRemove)) {
  lists = lists.filter(item => item !== listToRemove);
  Bot.setProperty("lists", lists, "json");
  Bot.sendMessage("*User removed:* `" + listToRemove + "`");
} else {
  Bot.sendMessage("*User not found:* `" + listToRemove + "`");
}

