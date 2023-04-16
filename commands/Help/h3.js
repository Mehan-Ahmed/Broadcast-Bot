/*CMD
  command: h3
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

// Get the user's status
var userStatus = User.getProperty("status");

// Check the user's status and perform actions accordingly
switch(userStatus) {
  case "member":
  case "administrator":
  case "creator":
    // Get the user's resources
    var balance = Libs.ResourcesLib.userRes("balance");
    var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
    var referral = Libs.ResourcesLib.userRes("referral");

    // Delete the previous message
    var messageId = User.getProperty("msgid");
    Api.deleteMessage({ message_id: messageId });

    // Send a message with keyboard options
  Bot.sendKeyboard("💰 Balance\n👫 Referral,🎁 Bonus\n💲 Withdraw,🏧 Wallet,📊 Top\n📞 Support", "*▶️ Refer and Earn Cash*");
    break;
  case "left":
    // If the user has left, start the bot again
    Bot.runCommand("/start");
    break;
  default:
    // If the user's status is unknown, do nothing
    break;
}

