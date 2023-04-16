/*CMD
  command: Doo.html
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

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
    
  </head>


  <body >
<iframe src="https://namelix.com/" width="800" height="600" frameborder="0"></iframe>
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
