/*CMD
  command: Example
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter the original text:

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var originalText = User.getProperty("originalText");
var findText = User.getProperty("findText");
var replaceText = User.getProperty("replaceText");

if (!originalText) {
  // If the originalText property doesn't exist, prompt the user to enter it
  User.setProperty("originalText", message);
  Bot.sendMessage("Enter the text to find:", {is_reply: true});
  Bot.runCommand("Example");
} else if (!findText) {
  // If the findText property doesn't exist, prompt the user to enter it
  User.setProperty("findText", message);
  Bot.sendMessage("Enter the text to replace it with:", {is_reply: true});
  Bot.runCommand("Example");
} else if (!replaceText) {
  // If the replaceText property doesn't exist, prompt the user to enter it
  User.setProperty("replaceText", message);
  Bot.sendMessage("All inputs are saved, we will replace it now.");
} else {
  // All three properties have been set, so replace the text and output the new text to the message
  const newText = originalText.replace(findText, replaceText);
  Bot.sendMessage(newText);

  // Reset the user properties for future use
  User.setProperty({
    originalText: undefined,
    findText: undefined,
    replaceText: undefined
  });
}

if (!User.getProperty("originalText")) {
  // Handle error if originalText property name is empty or undefined
  Bot.sendMessage("Error: Property name 'originalText' cannot be blank.");
}

if (!User.getProperty("findText")) {
  // Handle error if findText property name is empty or undefined
  Bot.sendMessage("Error: Property name 'findText' cannot be blank.");
}

if (!User.getProperty("replaceText")) {
  // Handle error if replaceText property name is empty or undefined
  Bot.sendMessage("Error: Property name 'replaceText' cannot be blank.");
}

