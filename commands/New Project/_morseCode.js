/*CMD
  command: /morseCode
  help: 
  need_reply: true
  auto_retry_time: 
  folder: New Project
  answer: 📝 Enter your name of fast letter:

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

// Define a function to convert a single character to Morse code
function charToMorse(char) {
  // Define the Morse code mappings for each character
  const morseMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  };
  
  // Return the Morse code for the given character, or an empty string if not found in the map
  return morseMap[char.toUpperCase()] || '';
}

// Define a function to convert a message to Morse code
function messageToMorse(message) {
  // Split the message into an array of characters, then map each character to its Morse code
  const morseChars = message.split('').map(charToMorse);
  
  // Join the Morse code characters into a single string, separating each with a space
  return morseChars.join(' ');
}

// Example usage:
const userInput = message;
const morseCode = messageToMorse(userInput);
Bot.sendMessage("*"+morseCode+"*"); // should output "-..-"

