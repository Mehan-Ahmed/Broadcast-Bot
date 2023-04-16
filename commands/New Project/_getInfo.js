/*CMD
  command: /getInfo
  help: 
  need_reply: false
  auto_retry_time: 
  folder: New Project

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var index = options.index;

var lists = Bot.getProperty("lists", []);

if (index < 0 || index >= lists.length) {
  Bot.sendMessage("Invalid index!");
  return;
}

var list = lists[index];

Bot.sendPhoto(list.imageLink, {
  caption: "*List Name:* " + list.listText + "\n\n*Description:* " + list.description + "\n\n*URL:* " + list.url,
  parse_mode: "Markdown"
});

