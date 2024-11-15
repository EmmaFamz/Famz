//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348161421533";
global.sudo = process.env.SUDO || "2348161421533";
global.owner = process.env.OWNER_NUMBER || "2348161421533";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VuT2NUdXVuQnpmOUVZUkZzOHIzYlM3ZElOTXNvU05COWpmQXNJODVIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEN0YWxYdFB3NHU5WU9IMW9NVDU5L3JZK3RLMTRVUG42aXVCcFlNejVpTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRjFTTVBxZ2VSbE5sbWFMUG1QaGZSKzZSMkJuSGxQL0FrRHVsa3FCbjFRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5ckc1Zkd6b3U1ampsdThGQ1c5YThYeGphcDlNTHk1OWIwYW9RMnlPdkVzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRBUUl0RDlKM2J3QkVjclhha0NwbWIzaXVyVTdLeE93cWozUGNidHkzbkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNLRWpOK3ZxSXNLb1pINXk4Z3l3d2FmWGl0eFR3cGE4L00vL2JzZkFibmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVB2SERQMHRWck0rRjVlTmEzZGVJL2hWZ28ydGliSHBSOUVCdkgrVG9tMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianZVTWZSbFNFaStVSFVVWkpjcWRsRXVxSHl6Slp1TG04ZEhNTFVHVlJWdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVhUVV3dW9ITGhQT3M5Rm5zWkxKT2dwRk9BWWhXZXFXcjVjS0U0QjRoQkhNVlNVclZkMW5VeVRGbnV0ajhINWhtODhoQ3ZTZGFBN3oyU2xHRFp5WEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgxLCJhZHZTZWNyZXRLZXkiOiIzSmtTUVBXRkJ0SkJoZ2xYMUdtbDIzVnlNbW1ISCtaRDlrQkdwdmhJRVRvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5UHNJdFlENVNWbW9LYnVHaGFSQ05RIiwicGhvbmVJZCI6ImNiOGQ5MDEyLTdmMjYtNGYzYi1hYTA5LTRiOTI1MjMzMTg2YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaTnRiMXZFUkZLWVphMFQrNzgvUlNxc0tjaGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFhTK0dPMTB0aDZKR2FqdzlvVmhTNkR4TUpnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldRRzZOTVZRIiwibWUiOnsiaWQiOiIyMzQ4MTYxNDIxNTMzOjE0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPTHNpU01RNHUzZHVRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJSUU0yT0tweEdUL3l0SFlBbm54aXRDZjFjSkRHMENDZkRIeVhIekhRMlRZPSIsImFjY291bnRTaWduYXR1cmUiOiJ1VnRma2RLSEczTmdqSEFkRm5WdnZXTHB0UW1RZVJ0bkJSTG1JWStiYWdEcWFxeGMySGJRdysyQ0hQLzA2dFJQblRKMFpTWlRBdUtnMFVOUmJCTFJCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidEpKOXAwenlyVjMvZmtCdGpCYzRiVW4raXdWTWdRc1JrcGxRaE1QY3J4b1F3V1BhelpEeGIwckRRMitKOTJNOGVVcGhMWHBRMVhIN1l3WlAvbW8xQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTYxNDIxNTMzOjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVVRE5qaXFjUmsvOHJSMkFKNThZclFuOVhDUXh0QWdud3g4bHg4eDBOazIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE2ODgxNzV9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "FAMZ",
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
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
