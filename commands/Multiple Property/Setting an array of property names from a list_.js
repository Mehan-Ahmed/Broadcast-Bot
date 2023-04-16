/*CMD
  command: Setting an array of property names from a list:
  help: /setProperty
  need_reply: true
  auto_retry_time: 
  folder: Multiple Property
  answer: 〽️ Enter Property Value:

  <<KEYBOARD

  KEYBOARD
  aliases: /setproperty
CMD*/

var lists = Bot.getProperty("lists", []);
var propertyNames = ["lists"];

for (var i = 0; i < lists.length; i++) {
  propertyNames.push(lists[i]);
}

for (var i = 0; i < propertyNames.length; i++) {
  var propertyName = "Help" + propertyNames[i];
  var propertyValue = message;
  Bot.setProperty(propertyName, propertyValue);
}

