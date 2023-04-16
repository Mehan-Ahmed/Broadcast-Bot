/*CMD
  command: /SetProp
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Multiple Property Name
  answer: ➕ Add Property Names

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var propertyNames = [message];

for (var i = 0; i < propertyNames.length; i++) {
  var propertyName = "Help" + propertyNames[i];
  var propertyValue = "Success ✅" + i;
  Bot.setProperty(propertyName, propertyValue);
}

