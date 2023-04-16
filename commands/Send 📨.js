/*CMD
  command: Send 📨
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
  success: "onsuccess",
  body: {
    sender: ".com",
    password: "lol",
    recipient: message,
    subject: "Account Verification " + OTP + "",
    message:
      "<div style='max-width: 600px; margin: auto; border-radius: 10px; overflow: hidden; font-family: Arial, sans-serif;'><div style='background-image: url(\"https://i.imgur.com/8J1Rx0o.png\"); background-position: center center; background-repeat: no-repeat; background-size: cover; height: 100px;'></div><div style='background-color: #F5F5F5; padding: 30px; border-radius: 0 0 10px 10px;'><h1 style='font-size: 30px; color: #2D2D2D; text-align: center; margin-bottom: 30px;'><span style='color: #6C63FF;'>Verify Your Account</span></h1><p style='font-size: 16px; color: #444444; line-height: 1.5;'>Dear " +
      firstname +
      ",<br><br>Welcome to KashPal Wallet. Your verification code is <b style='color: #6C63FF;'>" +
      OTP +
      "</b>. Copy this code and send to the bot to verify your account.<br><br>Please click on the button below to verify your account.</p><div style='display:flex;justify-content:center;align-items:center;margin-top: 30px;'><a href='https://t.me/share/url?url='"+OTP+"><button style='background-color: #6C63FF;color:white;padding: 14px 30px;border-radius: 5px;border:none;cursor:pointer; font-size: 16px; margin-right: 20px;'>Verify Account</button></a><a href='https://www.example2.com'><button style='background-color: #FFD76E;color: #2D2D2D;padding: 14px 30px;border-radius: 5px;border:none;cursor:pointer;font-size: 16px;'>Learn More</button></a></div><div style='background-color: #FFFFFF; padding: 20px; border-radius: 5px; margin-top: 30px; text-align: center;'><p style='font-size: 14px; color: #666666; line-height: 1.5;'>If you did not create this account or have any questions, please contact us at support@kashpal.com.</p></div></div></div>"
  }
})

