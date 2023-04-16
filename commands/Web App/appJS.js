/*CMD
  command: appJS
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

// secure user url
var userUrl = WebApp.getUrl({ command: "user.json" })

WebApp.render({
  template: "script.js",
  options: { userUrl: userUrl }
})
