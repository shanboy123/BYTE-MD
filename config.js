
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "94759549725";
global.sudo = process.env.SUDO || "94759549725";
global.owner = process.env.OWNER_NUMBER || "94759549725";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID = 
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktZemRKSC9mNTU1NkZjVTJHZkQvdEx4WVBXQUc1YlIwYVl6UE9iWGQxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkJqZnFaSVV2ZUtsRmdNTDdac1owa3RoTVkzcHFwWlhzYnNGUE04bi95MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPR3cxbW0zTUF1Z0YyTWxUSFNpQzNOTytJOVNyYWRRS0VtVDZNOW9uOFY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFanVYczFlYTlTTldCZm1EK2ZKV2IyYzUrb0dXUEFLV0R1eEpEM1pTaERzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllPaW5GQVhyTG52UXBqMEhiM1FoTHREdnB4QnBjWDZZQ25nZzZjOXZJMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlllclBmTW50bFRRUXg5V2V0MlV1a2pxV2NGRXVqME5YRmRoRzUrK3VhRms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0x3Y1RZcFVuM09CRWltVjBtZUo4amRndzZVS3dFcFI5dUFmL2xXYTJGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTZDSGV3L1JwT0hLM0s1OGtiUjJTd2l1dy82elRhMXBZM1RjSm00LzJRdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRjYjBRMEVsaDA3M3ZqS2N0V1VKQWxWU0pCYTBPc3ZUa0Q3d2ozeEYxNHNnYmlHZnBxRlNZWmowOUE1dTJvUy9zRzV6elVPQjIxYmNjeTlrVFpleGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiJxMksvMXljL3RRNlExQW1xRWF5VHZ0VnZkSm8zZDF3YzV6MXF6NTMyUVpBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSdG43ejJUS1JGMnh4OVdsRGNvbW9RIiwicGhvbmVJZCI6IjUwMmUyNDIyLTVmYmMtNGM0Yi1hZGRjLWQzNjY5ODg2YzE4YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4UE9wQTFYUG5tSU1SYmN4N21jbTNYR011ZkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlJkVy9iODhFNmFZeEZHNlBBTFhIbCtlTGxnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllERDJQVkZSIiwibWUiOnsiaWQiOiI5NDc1OTU0OTcyNTo1MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNci5TaGFuIE1vZHoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tYc3F2SUdFTEN4aGJVR0dERWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjZJQzJ2V2ZVQUgyWjdWRGZjaS9FcE1mNEZWendtT1Exd2JROFVoMmlXeTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkR3MWx3Q05oblZySjNvbTZLWXkrVHNCem5ROEFZT3RudWlTSVUvengwd2c0UHh6cHlna0JQWTRsZ1d0RXF3RXZXTDdOMHh6eS90UmtLeVFKR2JYMUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpQ0pYTGdLNThvbU5ZdnpJZzBHMzk3SE90dVpnUGQzUXFVK01saDRzQjljcU5zN0RzMnhpeEY1d2pJaHNYZkVpWGRDdW1FY0hRRnpzK0dUeUZHYVdoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzU5NTQ5NzI1OjUwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVpQXRyMW4xQUI5bWUxUTMzSXZ4S1RIK0JWYzhKamtOY0cwUEZJZG9sc3UifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE4NTAwNDQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSXY3In0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
