/*CMD
  command: 🧮 Binary To Text
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ✍️ Binary Message ....

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

function binaryToText(binary) {
  let text = '';
  // Split the binary code into an array of binary codes for each character
  const binaryArray = binary.split(' ');
  for (let i = 0; i < binaryArray.length; i++) {
    // Convert the binary code to decimal
    const decimalCode = parseInt(binaryArray[i], 2);
    // Convert the decimal code to its corresponding character
    const character = String.fromCharCode(decimalCode);
    text += character;
  }
  return text;
}

// Example usage
const binary = message;
const text = binaryToText(binary);
Bot.sendMessage(text); // Output: "Example"

