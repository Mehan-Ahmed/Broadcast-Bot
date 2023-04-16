/*CMD
  command: /SetProp2
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

var lists = Bot.getProperty("lists", []);

var output = JSON.stringify(lists);
var propertyNames = ["lists", output]; // add "lists" as a string to the array

for (var i = 0; i < propertyNames.length; i++) {
  var propertyName = "Help" + propertyNames[i];
  var propertyValue = "Success ✅" + i;
  Bot.setProperty(propertyName, propertyValue);
}
Bot.sendMessage(JSON.stringify(lists));

