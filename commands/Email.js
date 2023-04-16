/*CMD
  command: Email
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

HTTP.post({
  url: "https://gmailapi.vercel.app",
  success: "trxve",
  body: {
    sender: "goldminerservices@gmail.com",
    password: "hhhnb",
    recipient: "" + wallet + "", //user@gmail.com
    subject: "Withdrawal Successful - " + purchaseDateStr + "",
    message:
      "<div style='max-width: 600px; margin: auto;'><div style='background-image: url(\"https://i.ibb.co/VwzXdRD/background-image.jpg\"); background-position: center center; background-repeat: no-repeat; background-size: cover;'><div style='background-color: #ffffff; border-radius: 5px; padding: 40px;'><h1 style='font-size: 32px; color: #008CBA; text-align: center; margin-bottom: 40px;'>Withdrawal Completed✅️</h1><p style='font-size: 18px; color: #444444; line-height: 1.5; text-align: center;'>Dear Developer Tanjed <br><br>Did you know you can earn more passive rewards than this by just mining Gold on your telegram app and exchanging it for cash????😱<br><br>To start Mining, Click on the Button below👇 to take you directly to your Mining account which its creators are the sponsors of this giveaway<br><br> <a href="https://t.me/GoldfarmMinerBot" style="text-decoration:none; width: 200px; padding: 15px; box-shadow: 6px 6px 5px; font-weight: MEDIUM; background: #3ebfac; color: #000000; cursor: pointer; border-radius: 10px; border: 1px solid #D9D9D9; font-size: 110%; display: block; margin: 0 auto; text-align: center;">START MINING</a></p></div></div></div>'
  }
})

