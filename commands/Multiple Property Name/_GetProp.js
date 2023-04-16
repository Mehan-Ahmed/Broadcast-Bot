/*CMD
  command: /GetProp
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Multiple Property Name
  answer: 〽️ Enter Property Name & Get Property Value:

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var propertyName = message;
var propertyValue = Bot.getProperty(propertyName);

propertyValue = propertyValue.substring(0, propertyValue.length - 1);

if (propertyValue !== undefined){
  Bot.sendMessage("The value of " + propertyName + " is: " + propertyValue);
}

