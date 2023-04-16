/*CMD
  command: 📝 Text To Binary
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ✍️ Text Message ....

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

function textToBinary(text) {
  let binary = '';
  for (let i = 0; i < text.length; i++) {
    // Convert each character to its ASCII code
    const asciiCode = text.charCodeAt(i);
    // Convert the ASCII code to binary and pad with zeroes
    const binaryCode = asciiCode.toString(2).padStart(8, '0');
    binary += binaryCode + ' ';
  }
  return binary.trim();
}

// Example usage
const text = message;
const binary = textToBinary(text);
Bot.sendMessage(binary); // Output: "01000101 01111000 01100001 01101101 01110000 01101100 01100101"

