/*CMD
  command: user.json
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

function decodeInitData() {
  // TODO: json parsing error
  var initData = options.initData

  var result =
    '{"' +
    decodeURI(initData)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"') +
   //   .replace(/{/g, '')
   //   .replace(/}/g, '') +
    '"}'

  try {
    result = JSON.parse(result)
  } catch (err) {
    throw new Error(
      "Error on json parsing: " + err.message + ". Data: " + result
    )
  }

  if (result.user) {
    result.user = JSON.parse(decodeURIComponent(result.user))
  }

  if (result.chat) {
    result.chat = JSON.parse(decodeURIComponent(result.chat))
  }

  return result
}

function getTgId(){
  var pre = decodeURI(options.initData).split("user=")[1]
  return decodeURIComponent(pre).split(",")[0].split(":")[1]
}

var arr = options.initData.split("&hash=")
var initData = arr[0];
var hash = arr[1]

// TODO: secure verifications is not working
// we can't trust to this request
var secret_key = CryptoJS.HmacSHA256(bot.token, "WebAppData")
var key = CryptoJS.HmacSHA256(initData, secret_key)
// var key = CryptoJS.HmacSHA256(initData, String(secret_key))

key = key.toString(CryptoJS.enc.Hex);
var content;
if(key=="hash"){
  // can trust
  content = "Hello, trusted user"
}else{
  // it is not trusted request
  content = "Hello, untrusted user"
}

WebApp.render({
  content: content
})


