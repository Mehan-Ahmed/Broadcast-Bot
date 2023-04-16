/*CMD
  command: Showing the removed list:
  help: /removedList
  need_reply: false
  auto_retry_time: 
  folder: Multiple Property

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /removedlist
CMD*/

var removedLists = Bot.getProperty("removedLists", []);

if (removedLists.length > 0) {
  var message = "🆔  Removed User ID Lists:\n\n";
  for (var i = 0; i < removedLists.length; i++) {
    message += (i % 2 == 0 ? "◽ " : "◾ ") + removedLists[i] + "\n";
  }
  Bot.sendMessage(message);
} else {
  Bot.sendMessage("No removed lists found.");
}

