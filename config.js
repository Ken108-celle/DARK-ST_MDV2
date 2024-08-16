
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sten10royal@gmail.com";
global.location = "Port-au-Prince,Haïti.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "50931461936@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3e1d82ab139d29975cad4.jpg";
global.devs = "50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "50931461936";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "trur";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/994a791a5a601fe82d480.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
 "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU1XTjhBUFMvTGQwK3NFOFVEWk5QSld0R010aU9RbWQ1Z0h2clFZcXltST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmJVWFp2N2NtNXhPRGp1L1hUUnp4TEE0WEptVVlrck90ZVJ4ZHVVNDhVYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTWN0TVVsZXd2NEdrUVNROEM5NzJ2SzFxTUxQVU02aDVERXdDc0VoYW53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmZ2s2RGdOY3VxN2xGbUNnR1MwWWRmSGViNEZENXZjWTNIQ2dEMHVJcmtBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtMdWVzbjlEKzlxVisvZTlCRk1NQTJJT3ZRWmprZ09zZHdINUl1MCs0RWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl6VXBVTWx5RWgxdEMxOS9wOE5uYkxRUGtuQzNTZGhkYWZ1WWhNemF4bGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEdwY29waDRVN0l6WUtxOUQxUlNzRFFpeWJmZXB2QXlhUmVMbm1GNGxrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEs3Y3d4Vk1zMURxL1I0djVoYVFyN2JqM29xTWJPdGp5RkxnMlBzR2dBWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxXOUtXVmIrYkhtbTgwZUlxRVYyVDFCQnR0ZDRqWk5OaW9BU1ZsUXlsSzhMdUlBa3BYemZCMlhZVU1sYlQzRWlIYkMyQUxFTU95WEM3MWlUcEwvRERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk5LCJhZHZTZWNyZXRLZXkiOiJwRFVqQUZaOFQ0QmVKMDMrMnFLNlBkNWt0MWpNZEg3bTBiMVIzUFJ1MzRZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSM0N6Vi1IRFJWbUt5QVJYbV8zaUdnIiwicGhvbmVJZCI6IjJhMzA5NzY1LTkzYWEtNDE2NC05NzUyLTRjN2VhMDk0YWVmNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGRGZvVHJCN051Q2J5QUpLNzk3aElhZlpUZkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWxnMjhWNmk2bmhVbUEyOVNxekhLbGR3dmNrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlFQk5STlFQIiwibWUiOnsiaWQiOiIzMzYzNDMwMzUyMjoyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYmV0WmtIRU55RS9iVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYM3BSWGxqeWxFUnFCWVdZekpobllRanduREpFaEo0UWtFWTB4SGR1TnpZPSIsImFjY291bnRTaWduYXR1cmUiOiI0aDJHM1NzYW9hNm9LT1dNYjdHbzM3NHA5a0MzU3Q4WkUvd0tNcUJPRnVaekJpZi9nNkRkZ2xIdEM2NUZwSVhzOWFXYS9XTUdmQWppdkRZSHZWeWNDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYVlBNHRsK2VqMExiSEkyd25DbFBpSGtKYzJCeWJVQ1lxU0s5bVJYd3lvYnJhU0NwMEFmVUlBQUtZa29GR0I0ejRrZzNuc2ZYV052d0J1MDdZMjh3REE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIzMzYzNDMwMzUyMjoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlY5NlVWNVk4cFJFYWdXRm1NeVlaMkVJOEp3eVJJU2VFSkJHTk1SM2JqYzIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM4MTA0MDksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTzhiIn0=
  " //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By 𝙎-𝙏𝞢𝞜*",
  author: process.env.PACK_AUTHER || "DRK-ST-MD ",
  packname: process.env.PACK_NAME || "𝙎-𝙏𝞢𝞜",
  botname: process.env.BOT_NAME || "DRK-ST-MD",
  ownername: process.env.OWNER_NAME || "𝙎-𝙏𝞢𝞜",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
