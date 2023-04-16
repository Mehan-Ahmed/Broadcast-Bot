/*CMD
  command: Run
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Web App

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var url = WebApp.getUrl({ command: "required" })
var loginUi= WebApp.getUrl({ command: "loginUi" })

Api.sendMessage({
  text:
    "<b>📝 <u>Text Replace Tool</u></b>\n\nDeveloper By: @DevTanjed",
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [[
      { text: "ℹ️ Open App", web_app: { url: url } },{ text: "Login UI", web_app: { url: loginUi } }
    ]]
  }
})

