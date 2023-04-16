/*CMD
  command: /addInfo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: New Project
  answer: Add link

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var imageLink = message;
var description = message;
var url = message;

var badInfos = Bot.getProperty("badInfos", { info: {} });

if (badInfos.info[message]) {
  Bot.sendInlineKeyboard(
    [
      { title: "↩ Try Again", command: "/setInfo" }
    ],
    "❌ *This User is already in our system.*"
  );
  return;
}

var infos = Bot.getProperty("infos", []);

infos.push({
  imageLink: imageLink,
  description: description,
  url: url
});

Bot.setProperty("infos", infos, "json");

Bot.sendMessage("*✅ Info added:* `" + message + "`");

badInfos.info[message] = true;
Bot.setProperty("badInfos", badInfos, "json");

