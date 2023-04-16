/*CMD
  command: Arrys
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

var userLists = User.getProperty("userLists");

if (!userLists || userLists.length === 0) {
  Bot.sendMessage("No lists found.");
  return;
}

var output = "User Lists:\n";
var outputArr = [];

for (var i = 0; i < userLists.length; i++) {
  output += "- " + userLists[i] + "\n";
  outputArr.push(userLists[i]);
}

Bot.sendMessage(output);

// Output as array:
Bot.sendMessage("Output as array: " + JSON.stringify(outputArr));

