/*CMD
  command: /addUser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Multiple Property Name
  answer: 👤 Enter User # ID:

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var listText = message;
var badLists = Bot.getProperty("badLists", { list: {} });

if (badLists.list[listText]) {
  Bot.sendInlineKeyboard(
    [
      { title: "↩ Try Again", command: "/setList" }
    ],
    "❌ *This User is already in our system.*"
  );
  return;
}

var lists = Bot.getProperty("lists", []);

lists.push(listText);
Bot.setProperty("lists", lists, "json");

Bot.sendMessage("*✅ List added:* `" + listText + "`");

badLists.list[listText] = true;
Bot.setProperty("badLists", badLists, "json");
Bot.runCommand("/SetProp2");

