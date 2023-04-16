/*CMD
  command: loginui.html
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
  
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required="">
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="">
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
    
  </body>


  <!-- // include telegram web app js -->
  <script src="https://telegram.org/js/telegram-web-app.js"></script>
  
  <!-- // include app.js --> 
</html>
