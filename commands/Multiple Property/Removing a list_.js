/*CMD
  command: Removing a list:
  help: /removeList
  need_reply: true
  auto_retry_time: 
  folder: Multiple Property
  answer: 👤 Enter User # ID:

  <<KEYBOARD

  KEYBOARD
  aliases: /removelist
CMD*/

var listText = message;
var lists = Bot.getProperty("lists", []);
var removedLists = Bot.getProperty("removedLists", []);

if (lists.includes(listText)) {
  lists = lists.filter(function(list) {
    return list !== listText;
  });
  removedLists.push(listText); // add removed list to removedLists array
  Bot.setProperty("lists", lists, "json");
  Bot.setProperty("removedLists", removedLists, "json"); // update removedLists property
  Bot.sendMessage("*✅ List removed:* `" + listText + "`");
} else {
  Bot.sendMessage("List " + listText + " not found.");
}

