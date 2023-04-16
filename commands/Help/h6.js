/*CMD
  command: h6
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Help
  answer: 📝 Send your document link:

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.sendDocument({
  chat_id: user.telegramid,
  document: "https://t.me/SojibTrader/399",
  caption:  "description"})
