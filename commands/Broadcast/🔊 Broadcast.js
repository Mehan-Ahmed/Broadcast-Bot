/*CMD
  command: 🔊 Broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Broadcast

  <<ANSWER
*⭐️ Send To Broadcast*

Ⓜ️ Text

🌅 Photo

🎦 Video

📁 File Document

🗳 Forward Poll

❤️ Sticker

🎵 Audio

🗣 Voice

♦️ Animation
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

const broadcast = Libs.ResourcesLib.anotherChatRes("broadcast", "each");
  broadcast.add(1);
var eachUser = Bot.getProperty("eachUser");
var usrname = "@" + user.username;
if (!user.username) {
  var usrname =
    "[" + user.first_name + "](tg://user?id=" + user.telegramid + ")";
}
//STICKER broadcast
if (request.sticker) {
  var messages = [];
  for (var index in eachUser) {
    var info = eachUser[index];
    messages.push(Api.sendSticker({ chat_id: info, sticker: request.sticker.file_id }));
  }
  Promise.all(messages).then(function() {
    Bot.sendMessage("Sticker broadcast complete.", { parse_mode: "HTML" });
  });
  return;
}
//END
var promo = "";
if (request.entities[0]) {
  if (request.entities[0].type == "url") {
    var promo = "Promotional";
  }
}

// New additions
var caption = request.caption ? "✉️ <b>Message :</b> " + request.caption : "";

function sendFile(fileType, methodName, fileId) {
  var messages = [];
  for (var index in eachUser) {
    var info = eachUser[index];
    messages.push(Api[methodName]({
      chat_id: info,
      [fileType]: fileId,
      caption: caption,
      parse_mode: "HTML",
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [
            {
              text:"✉️ Broadcaster",
              url: "tg://user?id=" + user.telegramid,
            },
          ],
        ],
      }),
    }));
  }
  Promise.all(messages).then(function() {
    Bot.sendMessage(fileType + " broadcast complete.", { parse_mode: "HTML" });
  });
}

if (request.photo[0]) {
  sendFile("photo", "sendPhoto", request.photo[0].file_id);
  return;
}
if (request.video) {
  sendFile("video", "sendVideo", request.video.file_id);
  return;
}
if (request.audio) {
  sendFile("audio", "sendAudio", request.audio.file_id);
  return;
}
if (request.document) {
  sendFile("document", "sendDocument", request.document.file_id);
  return;
}
if (request.animation) {
  sendFile("animation", "sendAnimation", request.animation.file_id);
  return;
}
if (request.voice) {
  sendFile("voice", "sendVoice", request.voice.file_id);
  return;
}
if (request.video_note) {
  sendFile("video_note", "sendVideo", request.video_note.file_id);
  return;
}
//POLL broad
if (request.poll) {
  for (var index in eachUser) {
    var info = eachUser[index]
    Api.sendMessage({
      chat_id: info,
      
    })
    Api.forwardMessage({
      chat_id: info,
      from_chat_id: user.telegramid,
      message_id: request.message_id
    })
  }
  return
}

if (message.length > 1000) {
  Bot.sendMessage("Message Too Big.", { parse_mode: "HTML" });
  return;
}

var messageToSend = message ;
var messages = [];
for (var index in eachUser) {
  var info = eachUser[index];
  messages.push(Api.sendMessage({
    chat_id: info,
    text: messageToSend,
    parse_mode: "HTML",
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text:"✉️ Broadcaster",
            url: "tg://user?id=" + user.telegramid,
          },
        ],
      ],
    }),
  }));
}
Promise.all(messages).then(function() {
  Bot.sendMessage("Message broadcast complete.", { parse_mode: "HTML" });
});
  
