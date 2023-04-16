/*CMD
  command: GetProp
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var userIDString = Bot.getProperty("Help");
var userIDArray = userIDString.split(",");

// Find if 12344 is in the array
if (userIDArray.includes("12344")) {
  // do something
  Bot.sendMessage("Success");
}

