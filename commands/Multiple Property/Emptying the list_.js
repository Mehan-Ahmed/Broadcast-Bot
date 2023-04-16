/*CMD
  command: Emptying the list:
  help: /emptyList
  need_reply: false
  auto_retry_time: 
  folder: Multiple Property

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /emptylist
CMD*/

var lists = Bot.getProperty("lists", []);

if (lists.length > 0) {
  Bot.setProperty("removedLists", [], "json");
  Bot.setProperty("lists", [], "json");
  Bot.sendMessage("*✅ Lists emptied*");
} else {
  Bot.sendMessage("No lists found.");
}

