/*CMD
  command: /Arry
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

var lists = Bot.getProperty("lists", []);

if (lists.length === 0) {
  Bot.sendMessage("There are no saved lists.");
} else {
  var output = "Here are the saved lists:\n\n" + JSON.stringify(lists);
  Bot.sendMessage(output);
}

