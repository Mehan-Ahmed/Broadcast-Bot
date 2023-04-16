/*CMD
  command: h1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Help

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var usd = parseFloat(res.value() * 0.064744).toFixed(2);
var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently OFF*");
}else{
let deposit = Libs.ResourcesLib.userRes("deposit");
let res = Libs.ResourcesLib.userRes("balance");
let profit = Libs.ResourcesLib.userRes("profit");
let refcom = Libs.ResourcesLib.userRes("refcom");
let withdraw = Libs.ResourcesLib.userRes("withdraw");
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"

Bot.sendKeyboard("❏ History,⛭  Wallet\n⛆ Statistics,⟰ Payments,\n\nHome 𓉞","\nAccount information️\n\nAvailable Balance :\n"+res.value().toFixed(8) + " "+ "TRX "+usd+"  USDT\n\nActive Investments:\n" +deposit.value().toFixed(8) + " " + "TRX\n\nTotal Earned : \n" +profit.value().toFixed(8) + " " + "TRX\n\nReferral Earnings:\n" +refcom.value().toFixed(8) +"  " + " TRX\n\nTotal Withdrawn:\n" +withdraw.value().toFixed(8) + " " + "TRX\n\n")

} 
let lib = Libs.ReferralLib
let reflist = lib.currentUser.refList
let bot = Libs.ReferralLib.currentUser.getRefLink("VVOLTSWAPBOT","124")
