/*CMD
  command: Getting a list:
  help: /getList
  need_reply: false
  auto_retry_time: 
  folder: Multiple Property

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /getlist
CMD*/

var lists = Bot.getProperty("lists", []);

if (lists.length > 0) {
  var message = "🆔 *User ID Lists:*\n\n";
  for (var i = 0; i < lists.length; i++) {
    var listItem = lists[i];
    var prefix = i % 2 == 0 ? "◽" : "◾";
    message += prefix + " " + listItem + "\n";
  }
  Bot.sendMessage(message);
} else {
  Bot.sendMessage("No User lists found.");
}

