/*CMD
  command: AddU
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Multiple Property Name
  answer: 👤 Enter User # ID:

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

function addList(message) {
  var userLists = User.getProperty("userLists") || [];

  if (userLists.includes(message)) {
    Bot.sendMessage("`" + message + "` already exists in your lists.");
    return;
  }

  userLists.push(message);
  User.setProperty("userLists", userLists, "json");
  Bot.sendMessage("`" + message + "` has been added to your lists.");
}

