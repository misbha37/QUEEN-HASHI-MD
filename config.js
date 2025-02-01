// ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗    ██╗  ██╗ █████╗ ███████╗██╗  ██╗██╗    ███╗   ███╗██████╗ 
//██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║    ██║  ██║██╔══██╗██╔════╝██║  ██║██║    ████╗ ████║██╔══██╗
//██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║    ███████║███████║███████╗███████║██║    ██╔████╔██║██║  ██║
//██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║    ██╔══██║██╔══██║╚════██║██╔══██║██║    ██║╚██╔╝██║██║  ██║
//╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║    ██║  ██║██║  ██║███████║██║  ██║██║    ██║ ╚═╝ ██║██████╔╝
// ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝    ╚═╝     ╚═╝╚═════╝ 
                                                                                                       
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "add session id",  // ADD Your Session Id 
MONGODB: process.env.MONGODB || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority",
PREFIX: process.env.PREFIX || ".",   // Add Your Custom Prefix 
GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/JurU8ZF.jpeg", 
ANTI_LINK: process.env.ANTI_LINK || "true", //add true or false
ANTI_BAD: process.env.ANTI_BAD || "true", //add true or false
AUTO_TYPING: process.env.FAKE_TYPING || "true",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
};
