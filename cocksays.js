var fs = require('fs');
var TelegramBot = require('node-telegram-bot-api');
var Jimp = require("jimp");

var token;
var cock = 'cock.jpg';
var cocksay = 'cocksay.jpg';
var font = 'font.fnt';

var token = fs.readFileSync('token', 'utf8');

var bot = new TelegramBot(token, {
    polling: true
});

bot.onText(/\/say (.+)/, function (msg, match) {
    var photo = cock;
    var message = match[1];
    Jimp.read(photo, function(err, photo){
        if (err) throw err;
        Jimp.loadFont('font.fnt', function(err, font){
            if (err) throw err;
            photo.print(font, 80, 50, message, 200);       
            photo.write(cocksay, function(){
                bot.sendPhoto(msg.chat.id, cocksay);
            });
    });
    })
});