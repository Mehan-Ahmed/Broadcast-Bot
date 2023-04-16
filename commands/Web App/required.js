/*CMD
  command: required
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

// return url for command
// this command have simple template rendering
function getUrl(command){
  return WebApp.getUrl({ command: command })
}

WebApp.render({
   // command "index.html" will be used as page html template
   template: "index.html",
   // we can pass vars to template
   options: {
     links: {
        // it is app.js file - see app.js command
        appJS: getUrl('appJS'),
        // it is CSS file - see app.css command
        appCSS: getUrl('appCSS')
     }
   }
})

