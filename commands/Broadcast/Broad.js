/*CMD
  command: Broad
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Broadcast

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

// Check if the user has already been notified
const devTanjed = User.getProperty("afterwards");

if (!devTanjed) {
  // Get current date and time in Asia/Dhaka timezone
  const datetime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Dhaka"
  });

  // Create the notification message
  const message = `*»🆕 User Notification«*
• ━━━━━━━━━━━━━━━━━ •
▫️ *User Name:* ${user.first_name} ${user.last_name}
▫️ *User ID:* ${user.telegramid}
▫️ *Username:* @${user.username}
• ━━━━━━━━━━━━━━━━━ •
🗓️ *Date & Time:* ${datetime}
• ━━━━━━━━━━━━━━━━━ •`;

  // Send the notification message to a specific chat
  Api.sendMessage({
    chat_id: 5555963971,
    text: message,
    parse_mode: "Markdown"
  });

  // Increment a global resource to keep track of the number of new users
  const status = Libs.ResourcesLib.anotherChatRes("status", "global");
  status.add(1);

  // Add the user's ID to a list of users who have been notified
  const eachUser = Bot.getProperty("eachUser", []);
  eachUser.push(user.telegramid);
  Bot.setProperty("eachUser", eachUser, "json");

  // Set a property on the user to indicate that they have been notified
  User.setProperty("afterwards", true, "boolean");

  // Send the user to the main menu
  Bot.runCommand("/menu");
} else {
  // If the user has already been notified, send them to the main menu
  Bot.runCommand("/menu");
}

