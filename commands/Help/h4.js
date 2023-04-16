/*CMD
  command: h4
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

var people = [
  {image_link: "https://telegra.ph/file/4d0fd82bda837389108b1.jpg", name: "John", age: 30, city: "New York", url: "example.com/john" },
  {image_link: "https://telegra.ph/file/3de0162655a1f00fc0e36.jpg", name: "Jane", age: 25, city: "London", url: "example.com/jane" },
  {image_link: "https://telegra.ph/file/4d0fd82bda837389108b1.jpg", name: "Bob", age: 40, city: "Paris", url: "example.com/bob" }
];

for (var i = 0; i < people.length; i++) {
  var person = people[i];
  console.log("Person " + (i+1) + ":");
  for (var prop in person) {
    console.log(prop + ": " + person[prop]);
    if (prop === "image_link") {
      // Call the API to send the photo
      Api.sendPhoto({
        photo: person[prop], // Use the value of the image_link property as the photo URL
        caption: "This is " + person.name + ". He/she is " + person.age + " years old and lives in " + person.city + ".", // Add a caption with the person's information
        parse_mode: "html", // Set the parse mode to HTML to allow formatting
        reply_markup: { // Add an inline keyboard with a contact button and a command button
          inline_keyboard: [[{ text: "👤 Contact", url: person.url }]]
        }
      });
    }
  }
  Bot.sendMessage("");
}

