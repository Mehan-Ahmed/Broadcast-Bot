/*CMD
  command: onMessageSending
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Help

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.editMessageText({
  chat_id: request.message.chat.id,
  message_id: request.message.message_id,
  text: "Hi "+user.first_name,
  reply_markup: {
    inline_keyboard: [[{ text: "✨ New Version ✨", callback_data: "onMessageSending" }]]
  }
});

