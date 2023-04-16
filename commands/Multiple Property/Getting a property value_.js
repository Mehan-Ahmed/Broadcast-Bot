/*CMD
  command: Getting a property value:
  help: /getProperty
  need_reply: true
  auto_retry_time: 
  folder: Multiple Property
  answer: 〽️ Enter Property Name & Get Property Value:

  <<KEYBOARD

  KEYBOARD
  aliases: /getproperty
CMD*/

var propertyName = message;
var propertyValue = Bot.getProperty(propertyName);

if (propertyValue !== undefined) {
  Bot.sendMessage("The value of " + propertyName + " is: " + JSON.stringify(propertyValue));
} else {
  Bot.sendMessage("Property " + propertyName + " not found.");
}

