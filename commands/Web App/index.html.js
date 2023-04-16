/*CMD
  command: index.html
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

<!--// It is HTML template not BJS -->
<!--//    ... and it is html/js comment -->

<!--
    // you can pass BJS vars with tag: <% %>
    //   E.g: 
    //      <% bot.name %>
    //   or:
    //      <% 2+2 %>
-->

<html>
  <head>
    <!-- // include app.css -->
    <link rel="stylesheet"
       href="<% options.links.appCSS %> ">

     <!-- // include VueJS -->
     <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
     <script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.3"></script>
     <style>Fullscreen()</style>
    <meta charset="UTF-8">
    <title>Replace Text</title>
        <link
      rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
  
  <div class="form_container" id="myForm">
    <div class="container">
      <h1>Replace Text</h1>
      <form>
        <div class="form-group">
          <label for="input-data">Input data:</label>
          <textarea id="input-data" placeholder="Enter your input data..."></textarea>
        </div>
        <div class="form-group">
          <label for="find-text">Find text:</label>
          <input type="text" id="find-text" placeholder="Enter the text to find...">
        </div>
        <div class="form-group">
          <label for="replace-with">Replace with:</label>
          <input type="text" id="replace-with" placeholder="Enter the text to replace with...">
        </div>
        <button type="button" onclick="replaceText()">Replace</button>
      </form>
      <div id="output" class="output"></div>
      <button type="button" id="copy-button" class="copy-button" onclick="copyToClipboard()">Copy to Clipboard</button>
    </div></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="script.js"></script>
    
  </body>


  <!-- // include telegram web app js -->
  <script src="https://telegram.org/js/telegram-web-app.js"></script>
  
  <!-- // include app.js -->
  <script
      type="text/javascript"
      src="<% options.links.appJS %>"
   >
  </script>
  

  
</html>
