/*CMD
  command: /UserArry
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Multiple Property Name

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var lists = Bot.getProperty("lists");

if (lists && lists.length > 0) {
  var listString = lists.map(item => `"${item}"`).join(", ");
  Bot.sendMessage("👤 *User Arry:*\n\n" + listString);
} else {
  Bot.sendMessage("*No User ID Found.*");
}

