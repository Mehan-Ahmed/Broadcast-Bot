/*CMD
  command: G
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

var propertyName = "Help2030415419";
var propertyValue = Bot.getProperty(propertyName);

Bot.sendMessage("The value of " + propertyName + " is: " + propertyValue);

