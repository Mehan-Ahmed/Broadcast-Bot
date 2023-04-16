/*CMD
  command: Property
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var UserID = [12344,34566,66788,356];
Bot.setProperty("Help", UserID.join(","));

