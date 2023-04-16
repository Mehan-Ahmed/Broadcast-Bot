/*CMD
  command: /GetProp2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Multiple Property Name

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var propertyName = message;
var propertyValue = Bot.getProperty(propertyName);

if (propertyValue !== undefined) {
  propertyValue = propertyValue.substring(0, propertyValue.length - 1);
  Bot.sendMessage("The value of " + propertyName + " is: " + propertyValue);
} else {
  Bot.sendMessage("Property " + propertyName + " not found.");
}

